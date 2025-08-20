# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Python SDK for the Canvas LMS API. The repository contains:
- Scripts to scrape and convert Canvas LMS API documentation
- Generated OpenAPI/Swagger specifications
- Auto-generated Python SDK code using openapi-generator
- Example usage scripts

## Key Commands

### Development Setup

```bash
# Install Python dependencies for examples
pip install python-dotenv

# Install UV for running scripts (required for scripts directory)
brew install uv
```

### Documentation Generation Workflow

1. **Scrape Canvas API documentation:**
```bash
./scripts/scrape-canvas-lms-api-docs.py --help
./scripts/scrape-canvas-lms-api-docs.py
```

2. **Generate OpenAPI/Swagger specifications:**
```bash
./scripts/generate-swagger-docs.py --help
./scripts/generate-swagger-docs.py
```

3. **Merge specifications for SDK generation:**
```bash
cd docs/canvas-lms-api/swagger
npx openapi-merge-cli
cd ../../..
```

4. **Generate Python SDK:**
```bash
openapi-generator generate -g python \
  -i docs/canvas-lms-api/swagger/openapi_merged.yaml \
  -o ./generated_python_sdk \
  --additional-properties=packageName=canvas_lms_sdk
```

### Testing

Run tests for the generated SDK:
```bash
cd generated_python_sdk

# Using pytest directly
pytest

# Using tox for multiple environments
tox

# With coverage
pytest --cov=canvas_lms_sdk
```

### Linting and Type Checking

```bash
cd generated_python_sdk

# Run flake8 linter
flake8 canvas_lms_sdk

# Run mypy type checker
mypy canvas_lms_sdk
```

### Running Examples

```bash
# Set up environment variables first
echo 'CANVAS_HOST="https://your-canvas-instance.instructure.com"' > .env
echo 'CANVAS_TOKEN="your_api_token_here"' >> .env
echo 'CANVAS_API_URL="https://your-canvas-instance.instructure.com"' >> .env
echo 'CANVAS_API_KEY="your_api_token_here"' >> .env
echo 'CANVAS_USER_ID="self"' >> .env

# Run example script
python examples/list_assignments_for_course.py
```

### Local Documentation Server

```bash
# Install http-server if needed
npm install -g http-server

# Start server to view Swagger UI
http-server -c-1

# Navigate to http://127.0.0.1:8080/docs/canvas-lms-api/swagger/
```

## Architecture

### Directory Structure

- **`scripts/`**: Utility scripts for documentation processing
  - `scrape-canvas-lms-api-docs.py`: Scrapes HTML docs from Canvas LMS API website
  - `generate-swagger-docs.py`: Converts HTML to OpenAPI YAML specs using AI

- **`docs/`**: Documentation files
  - `canvas-lms-api/raw/`: Raw HTML documentation files
  - `canvas-lms-api/swagger/`: Generated OpenAPI specifications
  - `openapi_merged.yaml`: Combined specification file

- **`generated_python_sdk/`**: Auto-generated Python SDK
  - `canvas_lms_sdk/api/`: API endpoint classes
  - `canvas_lms_sdk/models/`: Data model classes
  - `test/`: Unit tests for all components

- **`examples/`**: Example usage scripts

### Key Workflows

1. **Documentation Pipeline**: HTML scraping → AI conversion to OpenAPI → Merge specs → Generate SDK
2. **SDK Generation**: Uses openapi-generator-cli to create Python client from OpenAPI specs
3. **Script Execution**: Scripts use UV with inline dependencies for isolated execution

### Important Notes

- Scripts in `scripts/` use UV shebang (`#!/usr/bin/env -S uv run --script`) for automatic dependency management
- The generated SDK requires Python >= 3.9
- OpenAPI specs may need manual fixes before SDK generation due to inconsistencies in scraped documentation
- When fixing specification issues, look for:
  - Incorrect parameter placements (e.g., `style` under `schema`)
  - Missing `items` definitions for arrays
  - Path parameters not defined in `parameters` section
  - Inline schemas that should be refactored to `components/schemas`