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

async function fetchAssignmentDueDates(courseId?: string) {
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

    // Get course ID from command line argument or environment variable
    const targetCourseId = courseId || process.argv[2] || process.env.CANVAS_COURSE_ID;
    
    if (!targetCourseId) {
        console.error('Error: Course ID must be provided');
        console.error('Usage: node fetch_assignment_due_dates.js <course_id>');
        console.error('Or set CANVAS_COURSE_ID in your .env file');
        process.exit(1);
    }

    // The SDK already adds /api/v1 to paths, so we need the base URL only
    let basePath = canvasHost.replace(/\/$/, ''); // Remove trailing slash
    basePath = basePath.replace(/\/api\/v1$/, ''); // Remove /api/v1 if present
    
    console.log('Connecting to Canvas at:', basePath);
    console.log('Fetching assignments for course ID:', targetCourseId);
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
        // Fetch all assignments for the course
        const assignments = await assignmentsApi.listAssignmentsForCourse({
            courseId: parseInt(targetCourseId),
            orderBy: 'due_at' // Order by due date
        });

        if (!assignments || assignments.length === 0) {
            console.log('No assignments found for this course.');
            return;
        }

        console.log(`Found ${assignments.length} assignment(s):\n`);
        console.log('═'.repeat(80));

        // Separate assignments by status
        const upcoming: any[] = [];
        const past: any[] = [];
        const noDueDate: any[] = [];
        const now = new Date();

        assignments.forEach((assignment: any) => {
            // Handle both snake_case and camelCase from API
            const dueDateValue = assignment.due_at || assignment.dueAt;
            if (!dueDateValue) {
                noDueDate.push(assignment);
            } else {
                const dueDate = new Date(dueDateValue);
                if (dueDate > now) {
                    upcoming.push(assignment);
                } else {
                    past.push(assignment);
                }
            }
        });

        // Display upcoming assignments
        if (upcoming.length > 0) {
            console.log('\n📅 UPCOMING ASSIGNMENTS\n');
            console.log('─'.repeat(80));
            upcoming.forEach((assignment: any, index: number) => {
                displayAssignment(assignment, index + 1);
            });
        }

        // Display past assignments
        if (past.length > 0) {
            console.log('\n✓ PAST ASSIGNMENTS\n');
            console.log('─'.repeat(80));
            past.forEach((assignment: any, index: number) => {
                displayAssignment(assignment, index + 1);
            });
        }

        // Display assignments with no due date
        if (noDueDate.length > 0) {
            console.log('\n🔄 NO DUE DATE\n');
            console.log('─'.repeat(80));
            noDueDate.forEach((assignment: any, index: number) => {
                displayAssignmentNoDue(assignment, index + 1);
            });
        }

        // Summary statistics
        console.log('\n═'.repeat(80));
        console.log('\n📊 SUMMARY\n');
        console.log(`  Total assignments: ${assignments.length}`);
        console.log(`  Upcoming: ${upcoming.length}`);
        console.log(`  Past due: ${past.length}`);
        console.log(`  No due date: ${noDueDate.length}`);
        
        if (upcoming.length > 0) {
            const nextDue = upcoming[0];
            const dueDateValue = nextDue.due_at || nextDue.dueAt;
            const dueDate = new Date(dueDateValue);
            const daysUntil = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            console.log(`\n  ⚠️  Next assignment due: "${nextDue.name}"`);
            console.log(`     Due in ${daysUntil} day(s): ${formatDate(dueDate)}`);
        }

    } catch (error: any) {
        console.error('Error fetching assignments:');
        
        if (error.response) {
            console.error(`  Status: ${error.response.status}`);
            console.error(`  Message: ${error.response.statusText}`);
            
            if (error.response.status === 404) {
                console.error(`  Course ID ${targetCourseId} not found or you don't have access to it.`);
            } else if (error.response.status === 401) {
                console.error(`  Authentication failed. Please check your API token.`);
            }
            
            if (error.response.body) {
                console.error(`  Details:`, error.response.body);
            }
        } else if (error.request) {
            console.error('  No response received from Canvas API');
            console.error('  Please check your network connection and Canvas URL');
        } else {
            console.error(`  ${error.message || error}`);
        }
        
        process.exit(1);
    }
}

function displayAssignment(assignment: any, index: number) {
    const dueDateValue = assignment.due_at || assignment.dueAt;
    const dueDate = new Date(dueDateValue);
    const now = new Date();
    const daysUntil = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    console.log(`${index}. ${assignment.name}`);
    console.log(`   Assignment ID: ${assignment.id}`);
    console.log(`   Due Date: ${formatDate(dueDate)}`);
    
    if (daysUntil > 0) {
        console.log(`   Time Until Due: ${daysUntil} day(s)`);
    } else if (daysUntil === 0) {
        console.log(`   Time Until Due: Due today!`);
    } else {
        console.log(`   Time Since Due: ${Math.abs(daysUntil)} day(s) ago`);
    }
    
    if (assignment.points_possible) {
        console.log(`   Points: ${assignment.points_possible}`);
    }
    
    if (assignment.submission_types && assignment.submission_types.length > 0) {
        console.log(`   Submission Type: ${assignment.submission_types.join(', ')}`);
    }
    
    if (assignment.has_submitted_submissions) {
        console.log(`   Status: Submitted ✓`);
    } else if (assignment.locked_for_user) {
        console.log(`   Status: Locked 🔒`);
    } else {
        console.log(`   Status: Not submitted`);
    }
    
    if (assignment.html_url) {
        console.log(`   URL: ${assignment.html_url}`);
    }
    
    console.log('─'.repeat(80));
}

function displayAssignmentNoDue(assignment: any, index: number) {
    console.log(`${index}. ${assignment.name}`);
    console.log(`   Assignment ID: ${assignment.id}`);
    console.log(`   Due Date: Not set`);
    
    if (assignment.points_possible) {
        console.log(`   Points: ${assignment.points_possible}`);
    }
    
    if (assignment.submission_types && assignment.submission_types.length > 0) {
        console.log(`   Submission Type: ${assignment.submission_types.join(', ')}`);
    }
    
    if (assignment.has_submitted_submissions) {
        console.log(`   Status: Submitted ✓`);
    } else if (assignment.locked_for_user) {
        console.log(`   Status: Locked 🔒`);
    } else {
        console.log(`   Status: Available`);
    }
    
    if (assignment.html_url) {
        console.log(`   URL: ${assignment.html_url}`);
    }
    
    console.log('─'.repeat(80));
}

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    };
    return date.toLocaleString('en-US', options);
}

// Run the script
fetchAssignmentDueDates().then(() => {
    console.log('\nScript completed successfully.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});