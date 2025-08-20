# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains SDKs for the Canvas LMS API in multiple languages. The repository includes:
- Scripts to scrape and convert Canvas LMS API documentation
- Generated OpenAPI/Swagger specifications
- Auto-generated Python SDK using openapi-generator
- Auto-generated TypeScript SDK for Cloudflare Workers and Node.js
- Example usage scripts for both SDKs

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

5. **Generate TypeScript SDK (for Cloudflare Workers):**
```bash
openapi-generator generate -g typescript-fetch \
  -i docs/canvas-lms-api/swagger/openapi_merged.yaml \
  -o ./generated_typescript_sdk \
  --additional-properties=npmName=canvas-lms-sdk,supportsES6=true,npmVersion=1.0.0,withInterfaces=true,platform=browser
```

### Testing

#### Python SDK Testing
```bash
cd generated_python_sdk

# Using pytest directly
pytest

# Using tox for multiple environments
tox

# With coverage
pytest --cov=canvas_lms_sdk
```

#### TypeScript SDK Building
```bash
cd generated_typescript_sdk

# Install dependencies
npm install

# Build the SDK
npm run build

# Note: There may be TypeScript warnings about duplicate exports, but these don't affect functionality
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

# Run Python example
python examples/list_assignments_for_course.py

# Run JavaScript/TypeScript example
npm install dotenv  # If not already installed
node examples/list_active_courses.js
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

- **`generated_typescript_sdk/`**: Auto-generated TypeScript SDK
  - `src/apis/`: API endpoint classes
  - `src/models/`: TypeScript interfaces and models
  - `src/runtime.ts`: Core runtime utilities
  - `dist/`: Compiled JavaScript and TypeScript declarations

- **`examples/`**: Example usage scripts
  - `list_assignments_for_course.py`: Python example for listing assignments
  - `list_active_courses.js`: JavaScript example for listing active courses

### Key Workflows

1. **Documentation Pipeline**: HTML scraping → AI conversion to OpenAPI → Merge specs → Generate SDKs
2. **SDK Generation**: Uses openapi-generator-cli to create client libraries from OpenAPI specs
   - Python SDK: Uses `python` generator for standard Python client
   - TypeScript SDK: Uses `typescript-fetch` generator for Cloudflare Workers compatibility
3. **Script Execution**: Scripts use UV with inline dependencies for isolated execution

### Important Notes

- Scripts in `scripts/` use UV shebang (`#!/usr/bin/env -S uv run --script`) for automatic dependency management
- Python SDK requires Python >= 3.9
- TypeScript SDK uses Fetch API (perfect for Cloudflare Workers, no Node.js dependencies)
- OpenAPI specs may need manual fixes before SDK generation due to inconsistencies in scraped documentation
- When fixing specification issues, look for:
  - Incorrect parameter placements (e.g., `style` under `schema`)
  - Missing `items` definitions for arrays
  - Path parameters not defined in `parameters` section
  - Inline schemas that should be refactored to `components/schemas`
  - TypeScript may show export warnings for duplicate interface names (non-blocking)

### TypeScript SDK Usage in Cloudflare Workers

```typescript
import { CoursesApi, Configuration } from 'canvas-lms-sdk';

export default {
  async fetch(request: Request, env: Env) {
    const config = new Configuration({
      basePath: env.CANVAS_HOST,
      headers: {
        'Authorization': `Bearer ${env.CANVAS_TOKEN}`
      }
    });

    const api = new CoursesApi(config);
    const courses = await api.apiV1CoursesGet({
      enrollmentState: 'active'
    });
    
    return Response.json(courses);
  }
}
```