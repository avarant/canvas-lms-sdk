# scripts/generate-swagger-docs.py
#!/usr/bin/env -S uv run --script

# /// script
# dependencies = [
#   "openai-agents>=0.0.2",
#   "rich>=13.7.0", # For console output
#   "pyaml",
# ]
# ///

import os
import sys
import argparse
import asyncio
from pathlib import Path
from typing import Optional
from rich.console import Console
from rich.panel import Panel
import yaml
from rich.progress import Progress, BarColumn, TextColumn, TimeElapsedColumn

# Assuming openai-agents handles the client import internally based on basic_agent.py
from agents import Agent, Runner 
from openai import OpenAIError # For specific error handling

# Rate limiting and retry settings
MAX_RETRIES = 3
INITIAL_BACKOFF = 10  # seconds
RATE_LIMIT_DELAY = 2  # seconds

# Initialize console
console = Console()

# Function to create the agent
def create_basic_agent(model: str, instructions: Optional[str] = None) -> Agent:
    """
    Creates a basic OpenAI agent instance using the specified model.

    Args:
        model (str): The OpenAI model name to use (e.g., 'gpt-4o-2024-08-06', 'o3-mini-2025-01-31').
        instructions (Optional[str]): Custom instructions for the agent.
                                       If None, default instructions are used.

    Returns:
        Agent: An instance of the Agent class.
    """
    default_instructions = """
    You are an expert API documentation assistant. Your task is to convert raw HTML API documentation for a single endpoint into a YAML document representing that endpoint according to the OpenAPI 3.x specification structure.
    Focus on extracting the essential information relevant to the API endpoint described in the HTML:
    - The HTTP method (get, post, put, delete, etc.) and the endpoint path.
    - A summary/description of what the endpoint does.
    - Request parameters (path, query, header, cookie, body) detailing their name, description, type (string, integer, boolean, array, object), and whether they are required.
    - Example request body (if applicable and available).
    - Descriptions of possible responses, especially success (e.g., 200 OK, 201 Created) and error responses (e.g., 400 Bad Request, 404 Not Found, 500 Internal Server Error). Include descriptions and example response bodies if available.
    - Required permissions, scopes, or authentication details (if mentioned).

    Structure the output as a valid OpenAPI 3.x YAML document. For example:

    /path/to/endpoint:
      get:
        summary: Description of the endpoint.
        parameters:
          - name: param1
            in: query
            description: "..."
            required: true
            schema:
              type: string
        requestBody: # If applicable
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  ...
        responses:
          '200':
            description: Successful response
            content:
              application/json:
                schema:
                  ...
          '404':
            description: Resource not found
        # Add tags, security, etc. if reliably extractable

    Format the output strictly as valid YAML. If the input HTML is empty or contains no discernible API documentation, respond with an empty YAML document: {}.
    """
    # Create and return a basic agent
    return Agent(
        name="ApiDocToYamlAssistant", # Updated name to YAML assistant
        instructions=instructions or default_instructions,
        model=model, # Use the provided model name
    )

# Function to process a single HTML file
async def process_html_file(input_file_path: Path, output_dir_path: Path, agent: Agent):
    """
    Reads HTML content from an input file, gets the agent's JSON conversion,
    and writes it to an output file with a .yaml extension.

    Args:
        input_file_path (Path): Path to the input HTML file.
        output_dir_path (Path): Path to the directory where the JSON file should be saved.
        agent (Agent): The agent instance to use for processing.
    """
    # Create the output file path with a .yaml extension
    output_file_path = output_dir_path / input_file_path.with_suffix('.yaml').name
    # Skip if output already exists
    if output_file_path.exists():
        console.print(f"[yellow]Skipping existing file:[/] {output_file_path.name}")
        await asyncio.sleep(RATE_LIMIT_DELAY)
        return
    console.print(f"[cyan]Processing:[/cyan] {input_file_path.name} -> {output_file_path.name}")

    try:
        # Read the HTML content from the input file
        html_content = input_file_path.read_text(encoding='utf-8')

        if not html_content.strip():
            console.print(f"[yellow]Warning:[/] Skipping empty file: {input_file_path.name}")
            await asyncio.sleep(RATE_LIMIT_DELAY)
            return # Skip processing for empty files

        # Run the agent with retry logic for API errors
        retries = 0
        backoff = INITIAL_BACKOFF
        while True:
            try:
                result = await Runner.run(agent, html_content)
                break
            except OpenAIError as e:
                # Handle context length exceeded with client-provided wait time if possible
                if getattr(e, 'code', None) == 'context_length_exceeded':
                    headers = getattr(e, 'headers', {}) or {}
                    retry_after_header = headers.get('retry-after') or headers.get('Retry-After')
                    try:
                        wait_seconds = int(retry_after_header) if retry_after_header else 60
                    except (ValueError, TypeError):
                        wait_seconds = 60
                    console.print(f"[yellow]Warning:[/] Context length exceeded for {input_file_path.name}. Waiting {wait_seconds}s before retry.")
                    await asyncio.sleep(wait_seconds)
                    continue
                retries += 1
                # Determine wait time: use 'Retry-After' header if provided, else use exponential backoff
                headers = getattr(e, 'headers', {}) or {}
                retry_after_header = headers.get('retry-after') or headers.get('Retry-After')
                if retry_after_header:
                    try:
                        retry_after = int(retry_after_header)
                    except (ValueError, TypeError):
                        retry_after = backoff
                else:
                    retry_after = backoff
                if retries > MAX_RETRIES:
                    console.print(f"[bold red]Error:[/] OpenAI API error for {input_file_path.name} after {MAX_RETRIES} attempts: {e}")
                    await asyncio.sleep(retry_after)
                    return
                console.print(f"[yellow]Warning:[/] OpenAI API error for {input_file_path.name}: {e}. Retrying in {retry_after}s ({retries}/{MAX_RETRIES})")
                await asyncio.sleep(retry_after)
                # Increase backoff if no explicit Retry-After header
                if not retry_after_header:
                    backoff *= 2

        yaml_response = result.final_output

        # Validate and write the YAML response
        try:
            yaml.safe_load(yaml_response)
            output_file_path.write_text(yaml_response, encoding='utf-8')
            console.print(f"[green]Success:[/green]   {input_file_path.name} -> {output_file_path.name}")
        except yaml.YAMLError as e:
            console.print(f"[yellow]Warning:[/yellow] YAML parse error for {input_file_path.name}: {e}. Saving raw response.")
            output_file_path.write_text(yaml_response, encoding='utf-8')

    except FileNotFoundError:
        console.print(f"[bold red]Error:[/bold red] Input file not found: {input_file_path}")
    except UnicodeDecodeError:
        console.print(f"[bold red]Error:[/bold red] Could not decode file (not UTF-8?): {input_file_path}")
        # Optionally write error info
        # output_file_path.write_text(f"Error: Could not decode file {input_file_path.name}", encoding='utf-8')
    except OpenAIError as e:
        console.print(f"[bold red]Error:[/] Unhandled OpenAI error for {input_file_path.name}: {e}")
    except Exception as e:
        console.print(f"[bold red]Error:[/bold red] Failed to process {input_file_path.name}: {e}")
        # Optionally write error info
        # output_file_path.write_text(f"Error processing HTML in {input_file_path.name}: {e}", encoding='utf-8')

    # Rate limit between processing files
    await asyncio.sleep(RATE_LIMIT_DELAY)

# Function to process all files in a directory in parallel
async def process_directory(input_dir_path: Path, output_dir_path: Path, model_name: str):
    """
    Processes all files in the input directory in parallel using the agent with the specified model.

    Args:
        input_dir_path (Path): Path to the directory containing question files.
        output_dir_path (Path): Path to the directory where response files will be saved.
        model_name (str): The OpenAI model name to use for the agent.
    """
    # Validate input directory
    if not input_dir_path.is_dir():
        console.print(Panel(f"[bold red]Error: Input path '{input_dir_path}' is not a valid directory.[/bold red]"))
        sys.exit(1)

    # Create output directory if it doesn't exist
    try:
        output_dir_path.mkdir(parents=True, exist_ok=True)
    except OSError as e:
        console.print(Panel(f"[bold red]Error: Could not create output directory '{output_dir_path}': {e}[/bold red]"))
        sys.exit(1)

    # Create the agent instance using the specified model
    agent = create_basic_agent(model=model_name) # Pass the model name

    tasks = []
    console.print(f"Scanning input directory: {input_dir_path}")
    
    file_count = 0
    # Iterate through files in the input directory
    for item in input_dir_path.iterdir():
        # Make sure it's a file and not a directory or other item
        if item.is_file():
            file_count += 1
            # Create a task for each file
            task = asyncio.create_task(
                process_html_file(item, output_dir_path, agent)
            )
            tasks.append(task)
            
    if not tasks:
        console.print(f"[yellow]Warning:[/yellow] No files found in input directory: {input_dir_path}")
        return

    console.print(f"Found {file_count} file(s). Starting parallel processing...")
    
    # Process tasks with a Rich progress bar
    results = []
    with Progress(
        "[progress.description]{task.description}",
        BarColumn(),
        TextColumn("[progress.percentage]{task.percentage:>3.0f}%"),
        TextColumn("{task.completed}/{task.total}"),
        TimeElapsedColumn(),
        console=console,
    ) as progress:
        task = progress.add_task("Processing files", total=len(tasks))
        for future in asyncio.as_completed(tasks):
            try:
                res = await future
            except Exception as e:
                res = e
            results.append(res)
            progress.update(task, advance=1)

    # Check results for exceptions if detailed error reporting is needed at the end
    error_count = 0
    for i, result in enumerate(results):
        if isinstance(result, Exception):
            error_count += 1
            # Error already printed in process_html_file, but could log more details here if needed
            # task = tasks[i] # Get corresponding task if needed, though less straightforward
            # console.print(f"Task for ??? failed: {result}") # Need a way to link back to filename if needed here

    success_count = len(results) - error_count
    console.print(f"Processing finished. Success: {success_count}, Errors/Skipped: {error_count}")
    console.print(f"[bold green]YAML outputs saved to:[/bold green] {output_dir_path.resolve()}")


# Main execution function
def main():
    """
    Parses command-line arguments and starts the parallel processing of HTML files
    to convert them to OpenAPI JSON endpoint definitions.
    """
    parser = argparse.ArgumentParser(
        description="Convert HTML API documentation files to OpenAPI YAML endpoint definitions in parallel using an OpenAI agent."
    )
    parser.add_argument(
        "--input-dir", 
        "-i", 
        type=str, 
        default="docs/canvas-lms-api/raw/", # Default input directory
        help="Directory containing the source HTML files."
    )
    parser.add_argument(
        "--output-dir", 
        "-o", 
        type=str, 
        default="docs/canvas-lms-api/swagger/", # Default output directory
        help="Directory to save the converted OpenAPI YAML files."
    )
    parser.add_argument(
        "--model",
        "-m",
        type=str,
        default="o4-mini-2025-04-16", # Default to o4-mini-2025-04-16
        help="OpenAI model to use (default: o4-mini-2025-04-16)."
    )
    # Example of adding custom instructions argument:
    # parser.add_argument("--instructions", type=str, default=None, help="Custom instructions file or text for the agent.")

    args = parser.parse_args()

    # Ensure API key is available
    if not os.environ.get("OPENAI_API_KEY"):
        console.print(Panel("[bold red]Error: OPENAI_API_KEY environment variable not set[/bold red]"))
        sys.exit(1)

    input_path = Path(args.input_dir).resolve() # Use resolve for absolute path
    output_path = Path(args.output_dir).resolve() # Use resolve for absolute path
    model_name = args.model # Get the model name from args

    try:
        # Run the main async processing function, passing the model name
        asyncio.run(process_directory(input_path, output_path, model_name))
    except Exception as e:
        # Catch any unexpected errors during async execution setup/teardown
        console.print(Panel(f"[bold red]An unexpected error occurred: {str(e)}[/bold red]"))
        sys.exit(1)

# Entry point for the script
if __name__ == "__main__":
    main()
