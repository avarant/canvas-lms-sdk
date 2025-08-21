import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from parent .env
const isCompiled = __dirname.endsWith('dist');
const envPath = isCompiled ? path.join(__dirname, '../../.env') : path.join(__dirname, '../.env');
dotenv.config({ path: envPath });

// Dynamic import to handle different paths when running from TypeScript vs compiled JavaScript
const sdkPath = isCompiled 
    ? '../../generated_typescript_sdk/dist'
    : '../generated_typescript_sdk/dist';
const { AssignmentsApi, Configuration } = require(sdkPath);

async function debugAssignments(courseId?: string) {
    // Get credentials from environment variables
    const canvasHost = process.env.CANVAS_HOST || process.env.CANVAS_API_URL;
    const canvasToken = process.env.CANVAS_TOKEN || process.env.CANVAS_API_KEY;

    if (!canvasHost || !canvasToken) {
        console.error('Error: CANVAS_HOST and CANVAS_TOKEN environment variables must be set.');
        process.exit(1);
    }

    // Get course ID from command line argument or environment variable
    const targetCourseId = courseId || process.argv[2] || process.env.CANVAS_COURSE_ID || '458030';
    
    // The SDK already adds /api/v1 to paths, so we need the base URL only
    let basePath = canvasHost.replace(/\/$/, '').replace(/\/api\/v1$/, '');
    
    console.log('Connecting to Canvas at:', basePath);
    console.log('Debugging assignments for course ID:', targetCourseId);
    console.log('');

    // Configure the API client
    const configuration = new Configuration({
        basePath: basePath,
        headers: {
            'Authorization': `Bearer ${canvasToken}`
        }
    });

    // Create an instance of the Assignments API
    const assignmentsApi = new AssignmentsApi(configuration);

    try {
        // Try different parameter combinations
        console.log('Testing different API parameter combinations...\n');
        
        // Test 1: Basic request
        console.log('Test 1: Basic request');
        const assignments1 = await assignmentsApi.listAssignmentsForCourse({
            courseId: parseInt(targetCourseId)
        });
        console.log(`Found ${assignments1.length} assignments`);
        if (assignments1.length > 0) {
            console.log('First assignment raw data:', JSON.stringify(assignments1[0], null, 2));
        }
        
        console.log('\n' + '='.repeat(80) + '\n');
        
        // Test 2: With all_dates included
        console.log('Test 2: With all_dates parameter');
        const assignments2 = await assignmentsApi.listAssignmentsForCourse({
            courseId: parseInt(targetCourseId),
            include: ['all_dates']
        });
        if (assignments2.length > 0) {
            const first = assignments2[0];
            console.log('Assignment:', first.name);
            console.log('due_at:', first.due_at);
            console.log('all_dates:', JSON.stringify(first.all_dates, null, 2));
        }
        
        console.log('\n' + '='.repeat(80) + '\n');
        
        // Test 3: With overrides
        console.log('Test 3: With overrides parameter');
        const assignments3 = await assignmentsApi.listAssignmentsForCourse({
            courseId: parseInt(targetCourseId),
            include: ['overrides'],
            overrideAssignmentDates: true
        });
        if (assignments3.length > 0) {
            const first = assignments3[0];
            console.log('Assignment:', first.name);
            console.log('due_at:', first.due_at);
            console.log('overrides:', JSON.stringify(first.overrides, null, 2));
        }
        
        console.log('\n' + '='.repeat(80) + '\n');
        
        // Test 4: Get single assignment details
        if (assignments1.length > 0) {
            console.log('Test 4: Getting detailed info for first assignment');
            const singleAssignment = await assignmentsApi.getAssignment({
                courseId: parseInt(targetCourseId),
                id: assignments1[0].id,
                include: ['all_dates', 'overrides'],
                allDates: true
            });
            console.log('Detailed assignment data:', JSON.stringify(singleAssignment, null, 2));
        }

    } catch (error: any) {
        console.error('Error fetching assignments:');
        
        if (error.response) {
            console.error(`  Status: ${error.response.status}`);
            console.error(`  Message: ${error.response.statusText}`);
            if (error.response.body) {
                console.error(`  Details:`, error.response.body);
            }
        } else {
            console.error(`  ${error.message || error}`);
        }
        
        process.exit(1);
    }
}

// Run the script
debugAssignments().then(() => {
    console.log('\nDebug completed.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});