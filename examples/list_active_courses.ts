import { CoursesApi, Configuration } from '../generated_typescript_sdk/dist';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from examples/.env
dotenv.config({ path: path.join(__dirname, '.env') });

async function listActiveCourses() {
    // Get credentials from environment variables
    const canvasHost = process.env.CANVAS_HOST || process.env.CANVAS_API_URL;
    const canvasToken = process.env.CANVAS_TOKEN || process.env.CANVAS_API_KEY;

    if (!canvasHost || !canvasToken) {
        console.error('Error: CANVAS_HOST and CANVAS_TOKEN environment variables must be set.');
        console.error('Found in .env:');
        console.error('  CANVAS_HOST:', canvasHost ? 'Set' : 'Not set');
        console.error('  CANVAS_TOKEN:', canvasToken ? '***' : 'Not set');
        process.exit(1);
    }

    // The SDK already adds /api/v1 to paths, so we need the base URL only
    let basePath = canvasHost.replace(/\/$/, ''); // Remove trailing slash
    // If the URL includes /api/v1, remove it since the SDK adds it
    basePath = basePath.replace(/\/api\/v1$/, '');
    console.log('Connecting to Canvas at:', basePath);

    // Configure the API client
    const configuration = new Configuration({
        basePath: basePath,
        headers: {
            'Authorization': `Bearer ${canvasToken}`
        }
    });

    // Create an instance of the Courses API
    const coursesApi = new CoursesApi(configuration);

    try {
        console.log('Fetching active courses...\n');
        
        // List courses for the current user
        // enrollmentState can be a string value
        const courses = await coursesApi.apiV1CoursesGet({
            enrollmentState: 'active'
        });

        if (!courses || courses.length === 0) {
            console.log('No active courses found.');
            return;
        }

        console.log(`Found ${courses.length} active course(s):\n`);
        console.log('─'.repeat(60));
        
        courses.forEach((course: any, index: number) => {
            console.log(`${index + 1}. ${course.name || 'Unnamed Course'}`);
            console.log(`   Course ID: ${course.id}`);
            console.log(`   Course Code: ${course.course_code || 'N/A'}`);
            console.log(`   Enrollment Type: ${course.enrollments?.[0]?.type || 'N/A'}`);
            
            if (course.term) {
                console.log(`   Term: ${course.term.name || 'N/A'}`);
            }
            
            if (course.workflow_state) {
                console.log(`   Status: ${course.workflow_state}`);
            }
            
            console.log('─'.repeat(60));
        });

    } catch (error: any) {
        console.error('Error fetching courses:');
        
        if (error.response) {
            // API returned an error response
            console.error(`  Status: ${error.response.status}`);
            console.error(`  Message: ${error.response.statusText}`);
            
            if (error.response.body) {
                console.error(`  Details:`, error.response.body);
            }
        } else if (error.request) {
            // Request was made but no response received
            console.error('  No response received from Canvas API');
            console.error('  Please check your network connection and Canvas URL');
        } else {
            // Something else went wrong
            console.error(`  ${error.message || error}`);
        }
        
        process.exit(1);
    }
}

// Run the script
listActiveCourses().then(() => {
    console.log('\nScript completed successfully.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});