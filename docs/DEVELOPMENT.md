# Development Documentation

This document covers the development workflow for maintaining and updating the Canvas LMS SDK, including documentation scraping, OpenAPI specification generation, and SDK building.

## Table of Contents
- [Overview](#overview)
- [Documentation Scraping](#documentation-scraping)
- [OpenAPI Specification Generation](#openapi-specification-generation)
- [SDK Generation Process](#sdk-generation-process)
- [Troubleshooting](#troubleshooting)

## Overview

The Canvas LMS SDK is generated from OpenAPI specifications that are created by:
1. Scraping the official Canvas LMS API documentation
2. Converting HTML docs to OpenAPI YAML using AI
3. Merging individual specs into a single file
4. Generating TypeScript SDK from the merged specification

## Documentation Scraping

### Requirements

The scraping scripts require `uv`, a fast Python package installer and resolver:

```bash
brew install uv
# Or refer to: https://github.com/astral-sh/uv
```

### Scripts

The `scripts/` directory contains utility scripts for managing and generating documentation. Each script uses a `uv run --script` shebang, which automatically creates a virtual environment and installs dependencies.

Make the scripts executable:
```bash
chmod +x scripts/*.py
```

#### 1. Scrape Canvas LMS API Documentation

Downloads the raw HTML documentation from the official Canvas LMS API docs website:

```bash
./scripts/scrape-canvas-lms-api-docs.py --help
./scripts/scrape-canvas-lms-api-docs.py  # Run with default settings
```

This creates HTML files in `docs/canvas-lms-api/raw/`.

#### 2. Generate OpenAPI Specifications

Converts raw HTML documentation into OpenAPI (Swagger) YAML specifications using AI:

```bash
./scripts/generate-swagger-docs.py --help
./scripts/generate-swagger-docs.py  # Run with default settings
```

This creates individual YAML files in `docs/canvas-lms-api/swagger/`.

#### 3. Generate Markdown Documentation (Optional)

Converts raw HTML documentation into Markdown files:

```bash
./scripts/generate-markdown-docs.py --help
./scripts/generate-markdown-docs.py  # Run with default settings
```

## OpenAPI Specification Generation

### Merging Specifications

After generating individual specification files, they need to be merged:

```bash
cd docs/canvas-lms-api/swagger
npx openapi-merge-cli  # Uses openapi-merge.json configuration
cd ../../..
```

This creates `docs/canvas-lms-api/swagger/openapi_merged.yaml`.

### Common Specification Issues

The AI-generated YAML files may contain inconsistencies that need manual fixing:

- **Incorrect attribute placement**: `style` under `schema` instead of directly under the parameter
- **Missing array definitions**: `type: array` schemas without `items` definition
- **Unexpected attributes**: `description` under media type objects
- **Path parameter issues**: Parameters in path string but not in `parameters` section
- **Inline schemas**: May need refactoring to `components/schemas`

If the SDK generator fails, examine the error output and fix issues in the individual `doc_api_*.yaml` files, then re-merge.

## SDK Generation Process

### Prerequisites

- Node.js and npm
- `openapi-merge-cli`: `npm install -g openapi-merge-cli`
- `openapi-generator-cli`: `npm install -g @openapitools/openapi-generator-cli`

### Generate TypeScript SDK

```bash
# From project root
openapi-generator generate -g typescript-fetch \
  -i docs/canvas-lms-api/swagger/openapi_merged.yaml \
  -o ./generated_typescript_sdk \
  --additional-properties=npmName=canvas-lms-sdk,supportsES6=true,npmVersion=1.0.0,withInterfaces=true,platform=browser
```

Options:
- `-g typescript-fetch`: TypeScript Fetch generator (Cloudflare Workers compatible)
- `-i`: Input specification path
- `-o`: Output directory
- `--additional-properties`: Generator-specific options

### Build the SDK

```bash
cd generated_typescript_sdk
npm install
npm run build
```

Note: Duplicate export warnings during build are expected and don't affect functionality.

## Troubleshooting

### Viewing API Documentation

To view the generated API documentation in Swagger UI:

```bash
# Install http-server if needed
npm install -g http-server

# Start server from project root
http-server -c-1

# Open browser to http://127.0.0.1:8080/docs/canvas-lms-api/swagger/
```

### Common Issues

1. **Generator fails with specification errors**
   - Check error output for specific issues
   - Fix in individual YAML files
   - Re-merge and regenerate

2. **TypeScript compilation warnings**
   - Duplicate exports are expected
   - Usually non-blocking

3. **Missing API endpoints**
   - Check if HTML was scraped correctly
   - Verify AI conversion completed
   - Ensure file is included in merge configuration

### Updating the SDK

When Canvas LMS adds new API endpoints:

1. Re-run the scraping script
2. Generate new OpenAPI specs for new files
3. Update `openapi-merge.json` if needed
4. Merge specifications
5. Regenerate SDK
6. Test new endpoints
7. Update version in `package.json`

## File Structure

```
canvas-lms-sdk/
├── scripts/                     # Python scraping and conversion scripts
│   ├── scrape-canvas-lms-api-docs.py
│   ├── generate-swagger-docs.py
│   └── generate-markdown-docs.py
├── docs/
│   ├── canvas-lms-api/
│   │   ├── raw/                # Scraped HTML files
│   │   ├── swagger/            # Generated OpenAPI specs
│   │   │   ├── doc_api_*.yaml # Individual API specs
│   │   │   ├── openapi-merge.json
│   │   │   └── openapi_merged.yaml
│   │   └── markdown/           # Optional markdown docs
│   └── DEVELOPMENT.md          # This file
├── generated_typescript_sdk/   # Generated SDK
└── examples/                   # Usage examples
```

## Contributing

When contributing to the SDK:

1. Follow the existing code style
2. Update documentation as needed
3. Test changes with real Canvas instance
4. Ensure all examples still work
5. Update CHANGELOG if applicable

For questions or issues, please open a GitHub issue.