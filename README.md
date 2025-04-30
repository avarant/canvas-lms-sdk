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

After generating the Swagger YAML files using `./scripts/generate-swagger-docs.py`, you can view them interactively using Swagger UI locally.

### Prerequisites

*   [Node.js and npm](https://nodejs.org/)

### Steps

1.  **Install `http-server`:**
    If you don't have `http-server` installed globally, run:
    ```bash
    npm install -g http-server
    ```

2.  **Navigate to the Swagger directory:**
    ```bash
    cd docs/canvas-lms-api/swagger
    ```

3.  **Start the server:**
    ```bash
    # The -c-1 flag disables caching
    http-server -c-1
    ```

4.  **Open your browser:**
    Navigate to the URL provided by `http-server` (usually `http://127.0.0.1:8080`).

    You should see the Swagger UI interface with a dropdown menu at the top right allowing you to select and view the different generated API specifications.
