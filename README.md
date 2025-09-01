# Unofficial TypeScript SDK for Canvas LMS

[![npm version](https://img.shields.io/npm/v/canvas-lms-sdk.svg)](https://www.npmjs.com/package/canvas-lms-sdk)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Documentation](https://img.shields.io/badge/docs-GitHub%20Pages-green)](https://avarant.github.io/canvas-lms-sdk/)

A fully-typed TypeScript SDK for the Canvas LMS API, compatible with Node.js and Cloudflare Workers.

## Features

- 🚀 **Full TypeScript Support** - Complete type definitions for all API endpoints and models
- 🔧 **Auto-generated** - Built from official Canvas LMS API documentation
- 🌐 **Universal Compatibility** - Works in Node.js, browsers, and Cloudflare Workers
- 📚 **Comprehensive Coverage** - Supports all major Canvas LMS API endpoints
- ⚡ **Fetch-based** - Uses modern Fetch API for maximum compatibility

## Installation

```bash
npm install canvas-lms-sdk
# or
yarn add canvas-lms-sdk
# or
pnpm add canvas-lms-sdk
```

## Quick Start

### Basic Setup

```typescript
import { Configuration, CoursesApi } from 'canvas-lms-sdk';

// Configure the SDK
const config = new Configuration({
    basePath: 'https://your-canvas-instance.instructure.com',
    headers: {
        'Authorization': `Bearer ${YOUR_API_TOKEN}`
    }
});

// Create an API instance
const coursesApi = new CoursesApi(config);

// Make API calls
const courses = await coursesApi.listCoursesForUser({
    userId: 'self',
    enrollmentState: 'active'
});
```

## Usage Examples

### List Active Courses

```typescript
import { Configuration, CoursesApi } from 'canvas-lms-sdk';

async function listActiveCourses() {
    const config = new Configuration({
        basePath: process.env.CANVAS_HOST,
        headers: {
            'Authorization': `Bearer ${process.env.CANVAS_TOKEN}`
        }
    });

    const coursesApi = new CoursesApi(config);
    
    try {
        const courses = await coursesApi.listCoursesForUser({
            userId: 'self',
            enrollmentState: 'active'
        });
        
        console.log('Active Courses:');
        courses.forEach(course => {
            console.log(`- ${course.name} (ID: ${course.id})`);
        });
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
}
```

### Get Assignment Due Dates

```typescript
import { Configuration, AssignmentsApi } from 'canvas-lms-sdk';

async function getUpcomingAssignments(courseId: number) {
    const config = new Configuration({
        basePath: process.env.CANVAS_HOST,
        headers: {
            'Authorization': `Bearer ${process.env.CANVAS_TOKEN}`
        }
    });

    const assignmentsApi = new AssignmentsApi(config);
    
    const assignments = await assignmentsApi.listAssignmentsForCourse({
        courseId,
        orderBy: 'due_at',
        buckets: ['upcoming']
    });
    
    return assignments.filter(a => a.dueAt && new Date(a.dueAt) > new Date());
}
```

### Get Canvas Page Content

```typescript
import { Configuration, PagesApi } from 'canvas-lms-sdk';

async function getCanvasPage(courseId: number, pageUrl: string) {
    const config = new Configuration({
        basePath: process.env.CANVAS_HOST,
        headers: {
            'Authorization': `Bearer ${process.env.CANVAS_TOKEN}`
        }
    });

    const pagesApi = new PagesApi(config);
    
    const page = await pagesApi.apiV1CoursesCourseIdPagesUrlOrIdGet({
        courseId,
        urlOrId: pageUrl
    });
    
    console.log(`Page Title: ${page.title}`);
    console.log(`Content: ${page.body}`);
    return page;
}
```

### Submit an Assignment

```typescript
import { Configuration, SubmissionsApi } from 'canvas-lms-sdk';

async function submitAssignment(courseId: number, assignmentId: number, body: string) {
    const config = new Configuration({
        basePath: process.env.CANVAS_HOST,
        headers: {
            'Authorization': `Bearer ${process.env.CANVAS_TOKEN}`
        }
    });

    const submissionsApi = new SubmissionsApi(config);
    
    const submission = await submissionsApi.submitAssignment({
        courseId,
        assignmentId,
        submissionType: 'online_text_entry',
        submissionBody: body
    });
    
    return submission;
}
```

## Cloudflare Workers Example

```typescript
import { Configuration, CoursesApi, AssignmentsApi } from 'canvas-lms-sdk';

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        const url = new URL(request.url);
        
        const config = new Configuration({
            basePath: env.CANVAS_HOST,
            headers: {
                'Authorization': `Bearer ${env.CANVAS_TOKEN}`
            }
        });

        if (url.pathname === '/api/courses') {
            const coursesApi = new CoursesApi(config);
            const courses = await coursesApi.listCoursesForUser({
                userId: 'self',
                enrollmentState: 'active'
            });
            return Response.json(courses);
        }
        
        if (url.pathname.startsWith('/api/assignments/')) {
            const courseId = parseInt(url.pathname.split('/')[3]);
            const assignmentsApi = new AssignmentsApi(config);
            const assignments = await assignmentsApi.listAssignmentsForCourse({
                courseId,
                orderBy: 'due_at'
            });
            return Response.json(assignments);
        }
        
        return new Response('Not Found', { status: 404 });
    }
}
```

## Available APIs

The SDK provides the following API classes:

- **CoursesApi** - Course management and information
- **AssignmentsApi** - Assignment operations
- **SubmissionsApi** - Assignment submissions
- **UsersApi** - User management
- **EnrollmentsApi** - Course enrollments
- **GradesApi** - Gradebook operations
- **PagesApi** - Wiki pages
- **ModulesApi** - Course modules
- **FilesApi** - File uploads and management
- **QuizzesApi** - Quiz operations
- **DiscussionTopicsApi** - Discussion forums
- **AnnouncementsApi** - Course announcements
- **CalendarEventsApi** - Calendar and scheduling
- **ConversationsApi** - Messaging system
- **GroupsApi** - Group management
- **SectionsApi** - Course sections
- **RubricsApi** - Rubric management
- **OutcomesApi** - Learning outcomes

And many more! See the [full API documentation](https://avarant.github.io/canvas-lms-sdk/) for complete details.

## Environment Setup

Create a `.env` file in your project root:

```env
CANVAS_HOST=https://your-canvas-instance.instructure.com
CANVAS_TOKEN=your_api_token_here
```

### Getting an API Token

1. Log into your Canvas instance
2. Go to Account → Settings
3. Click "+ New Access Token"
4. Enter a purpose and expiration (optional)
5. Copy the generated token

## TypeScript Configuration

The SDK is built with TypeScript and includes full type definitions. For best results, use these TypeScript settings:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## Error Handling

The SDK throws errors for failed API calls. Always wrap API calls in try-catch blocks:

```typescript
try {
    const courses = await coursesApi.listCoursesForUser({
        userId: 'self'
    });
} catch (error) {
    if (error.response) {
        // API returned an error response
        console.error('Status:', error.response.status);
        const errorBody = await error.response.text();
        console.error('Error:', errorBody);
    } else {
        // Network or other error
        console.error('Error:', error.message);
    }
}
```

## Pagination

Many Canvas APIs return paginated results. The SDK handles this automatically:

```typescript
// The SDK automatically follows pagination links
const allAssignments = await assignmentsApi.listAssignmentsForCourse({
    courseId: 123,
    perPage: 100  // Adjust page size (max 100)
});
```

## Development

For information on contributing to the SDK or regenerating from updated Canvas API documentation, see [Development Documentation](docs/DEVELOPMENT.md).

## API Documentation

Complete API documentation is available at: [https://avarant.github.io/canvas-lms-sdk/](https://avarant.github.io/canvas-lms-sdk/)

This includes:
- Detailed endpoint descriptions
- Request/response models
- Parameter specifications
- Example requests

## Examples

The `examples/` directory contains runnable examples:

```bash
cd examples
npm install

# List active courses
npx ts-node list_active_courses.ts

# Get assignment due dates
npx ts-node fetch_assignment_due_dates.ts 123  # Replace with course ID

# Get a Canvas page
npx ts-node get_canvas_page.ts 123 "page-url"  # Course ID and page URL
```

## Support

- **Issues**: [GitHub Issues](https://github.com/avarant/canvas-lms-sdk/issues)
- **Canvas API Docs**: [Canvas LMS REST API Documentation](https://canvas.instructure.com/doc/api/)
- **SDK Documentation**: [API Reference](https://avarant.github.io/canvas-lms-sdk/)

## License

MIT - See [LICENSE](LICENSE) file for details.

## Acknowledgments

This SDK is auto-generated from the official Canvas LMS API documentation. Canvas LMS is a product of Instructure, Inc.
