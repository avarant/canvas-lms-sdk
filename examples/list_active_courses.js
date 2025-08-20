const { CoursesApi, Configuration } = require('../generated_typescript_sdk/dist');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

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

    const basePath = canvasHost.replace(/\/$/, ''); // Remove trailing slash
    console.log('Connecting to Canvas at:', basePath);

    // Configure the API client
    const configuration = new Configuration({
        basePath: basePath, // The SDK should handle the /api/v1 part
        headers: {
            'Authorization': `Bearer ${canvasToken}`
        }
    });

    // Create an instance of the Courses API
    const coursesApi = new CoursesApi(configuration);

    try {
        console.log('Fetching active courses...\n');
        
        // List courses for the current user
        // Use the correct enum value for enrollment state
        const ApiV1CoursesGetEnrollmentStateEnum = {
            Active: "active",
            InvitedOrPending: "invited_or_pending",
            Completed: "completed"
        };
        
        const courses = await coursesApi.apiV1CoursesGet({
            enrollmentState: ApiV1CoursesGetEnrollmentStateEnum.Active
        });

        if (!courses || courses.length === 0) {
            console.log('No active courses found.');
            return;
        }

        console.log(`Found ${courses.length} active course(s):\n`);
        console.log('─'.repeat(60));
        
        courses.forEach((course, index) => {
            console.log(`${index + 1}. ${course.name || 'Unnamed Course'}`);
            console.log(`   Course ID: ${course.id}`);
            console.log(`   Course Code: ${course.course_code || 'N/A'}`);
            
            if (course.enrollments && course.enrollments[0]) {
                console.log(`   Enrollment Type: ${course.enrollments[0].type || 'N/A'}`);
            }
            
            if (course.term) {
                console.log(`   Term: ${course.term.name || 'N/A'}`);
            }
            
            if (course.workflow_state) {
                console.log(`   Status: ${course.workflow_state}`);
            }
            
            console.log('─'.repeat(60));
        });

    } catch (error) {
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