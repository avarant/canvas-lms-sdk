# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2024-12-31

### Added
- Initial release of the Canvas LMS TypeScript SDK
- Full TypeScript support with complete type definitions
- Support for all major Canvas LMS API endpoints:
  - CoursesApi - Course management
  - AssignmentsApi - Assignment operations
  - SubmissionsApi - Assignment submissions
  - UsersApi - User management
  - EnrollmentsApi - Course enrollments
  - PagesApi - Wiki pages (including new methods for retrieving individual pages)
  - ModulesApi - Course modules
  - FilesApi - File uploads and management
  - QuizzesApi - Quiz operations
  - DiscussionTopicsApi - Discussion forums
  - And many more...
- Compatibility with Node.js and Cloudflare Workers
- Fetch-based API for maximum compatibility
- Auto-generated from official Canvas LMS API documentation
- Comprehensive examples for common use cases
- Full API documentation

### Features
- `listCoursesForUser()` - List active courses
- `listAssignmentsForCourse()` - Get assignments with due dates
- `apiV1CoursesCourseIdPagesUrlOrIdGet()` - Retrieve individual Canvas pages
- `apiV1CoursesCourseIdPagesGet()` - List all pages in a course
- Error handling with detailed error messages
- Automatic pagination support
- TypeScript configuration templates

### Documentation
- Comprehensive README with quick start guide
- Multiple usage examples including Cloudflare Workers
- Development documentation for SDK maintenance
- API reference documentation

### Development
- Python scripts for scraping Canvas API documentation
- OpenAPI specification generation from HTML docs
- Automated SDK generation from OpenAPI specs
- Version management scripts

[0.1.0]: https://github.com/avarant/canvas-lms-sdk/releases/tag/v0.1.0