# canvas-lms-sdk
a python sdk for the Canvas LMS API

## Scripts

The `scripts/` directory contains utility scripts for managing and generating documentation.

### Requirements

These scripts are designed to be run using `uv`, a fast Python package installer and resolver. Ensure you have `uv` installed:

```bash
brew install uv
# Or refer to the official uv installation guide:
# https://github.com/astral-sh/uv
```

### Running the Scripts

The scripts use a `uv run --script` shebang, which means `uv` will automatically create a virtual environment and install the dependencies specified within the script's `/// script` block before executing it.

Make sure the scripts are executable:

```bash
chmod +x scripts/*.py
```

Then you can run them directly:

*   **`scrape-canvas-lms-api-docs.py`**: Scrapes the raw HTML documentation from the official Canvas LMS API docs website.
    ```bash
    ./scripts/scrape-canvas-lms-api-docs.py --help
    ./scripts/scrape-canvas-lms-api-docs.py # Run with default settings
    ```

*   **`generate-swagger-docs.py`**: Uses an AI model to convert the raw HTML documentation into OpenAPI (Swagger) YAML specifications.
    ```bash
    ./scripts/generate-swagger-docs.py --help
    ./scripts/generate-swagger-docs.py # Run with default settings
    ```

*   **`generate-markdown-docs.py`**: Uses an AI model to convert the raw HTML documentation into Markdown files.
    ```bash
    ./scripts/generate-markdown-docs.py --help
    ./scripts/generate-markdown-docs.py # Run with default settings
    ```

Refer to the `--help` flag for each script to see available command-line options.

## Viewing API Documentation (Swagger UI)

After generating the individual Swagger YAML files using `./scripts/generate-swagger-docs.py`, they need to be merged into a single file for viewing.

### Prerequisites

*   [Node.js and npm](https://nodejs.org/)

### Steps

1.  **Merge the Specification Files:**
    Navigate to the Swagger directory and use the `openapi-merge-cli` tool (or another suitable tool) to combine the individual `doc_api_*.yaml` files into `openapi_merged.yaml`. You may need to install the tool first (e.g., `npm install -g openapi-merge-cli`) and create a configuration file (`openapi-merge.json`) listing the input files.
    ```bash
    cd docs/canvas-lms-api/swagger
    # (Create openapi-merge.json if it doesn't exist)
    # Example merge command:
    npx openapi-merge-cli 
    cd ../../.. # Go back to project root
    ```
    *Note: Ensure the `openapi_merged.yaml` file has a valid `openapi: 3.x.y` version string at the beginning.* 

2.  **Install `http-server`:**
    If you don't have `http-server` installed globally, run:
    ```bash
    npm install -g http-server
    ```

3.  **Start the server from the project root:**
    ```bash
    # The -c-1 flag disables caching
    http-server -c-1
    ```

4.  **Open your browser:**
    Navigate to the URL for the local `index.html` file within the swagger directory (usually `http://127.0.0.1:8080/docs/canvas-lms-api/swagger/`).

    This `index.html` is configured to load the `openapi_merged.yaml` file, displaying the complete combined API specification in the Swagger UI interface.
