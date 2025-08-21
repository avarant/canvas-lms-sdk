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
const { CoursesApi, AssignmentsApi, Configuration } = require(sdkPath);

async function getUpcomingAssignments() {
    // Get credentials from environment variables
    const canvasHost = process.env.CANVAS_HOST || process.env.CANVAS_API_URL;
    const canvasToken = process.env.CANVAS_TOKEN || process.env.CANVAS_API_KEY;

    if (!canvasHost || !canvasToken) {
        console.error('Error: CANVAS_HOST and CANVAS_TOKEN environment variables must be set.');
        process.exit(1);
    }

    // Prepare base URL
    let basePath = canvasHost.replace(/\/$/, '').replace(/\/api\/v1$/, '');
    console.log('Connecting to Canvas at:', basePath);
    console.log('Fetching upcoming assignments across all courses...\n');

    // Configure the API client
    const configuration = new Configuration({
        basePath: basePath,
        headers: {
            'Authorization': `Bearer ${canvasToken}`
        }
    });

    const coursesApi = new CoursesApi(configuration);
    const assignmentsApi = new AssignmentsApi(configuration);

    try {
        // First, get all active courses
        const courses = await coursesApi.apiV1CoursesGet({
            enrollmentState: 'active'
        });

        if (!courses || courses.length === 0) {
            console.log('No active courses found.');
            return;
        }

        console.log(`Found ${courses.length} active course(s)\n`);
        
        // Collect all assignments from all courses
        const allAssignments: any[] = [];
        const now = new Date();
        
        for (const course of courses) {
            try {
                const assignments = await assignmentsApi.listAssignmentsForCourse({
                    courseId: course.id,
                    bucket: 'upcoming' // Filter for upcoming assignments only
                });
                
                // Add course information to each assignment
                assignments.forEach((assignment: any) => {
                    assignment.course_name = course.name;
                    assignment.course_code = course.course_code;
                    assignment.course_id = course.id;
                    
                    // Handle both snake_case and camelCase from API
                    const dueDateValue = assignment.due_at || assignment.dueAt;
                    
                    // Only include if it has a due date and is in the future
                    if (dueDateValue) {
                        const dueDate = new Date(dueDateValue);
                        if (dueDate > now) {
                            assignment.due_date = dueDate; // Store for later use
                            allAssignments.push(assignment);
                        }
                    }
                });
            } catch (error) {
                // Skip courses where we can't fetch assignments (might not have permission)
                console.log(`  Skipping course "${course.name}" (ID: ${course.id}) - Unable to fetch assignments`);
            }
        }

        if (allAssignments.length === 0) {
            console.log('No upcoming assignments found across any courses.');
            return;
        }

        // Sort by due date (earliest first)
        allAssignments.sort((a, b) => {
            const dateA = a.due_date.getTime();
            const dateB = b.due_date.getTime();
            return dateA - dateB;
        });

        console.log('═'.repeat(80));
        console.log(`\n📅 UPCOMING ASSIGNMENTS (${allAssignments.length} total)\n`);
        console.log('═'.repeat(80));

        // Group by time periods
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const thisWeek = new Date(today);
        thisWeek.setDate(thisWeek.getDate() + 7);
        
        const nextWeek = new Date(today);
        nextWeek.setDate(nextWeek.getDate() + 14);

        const assignmentsToday = allAssignments.filter(a => a.due_date <= today);
        const assignmentsTomorrow = allAssignments.filter(a => {
            const due = a.due_date;
            return due > today && due <= tomorrow;
        });
        const assignmentsThisWeek = allAssignments.filter(a => {
            const due = a.due_date;
            return due > tomorrow && due <= thisWeek;
        });
        const assignmentsNextWeek = allAssignments.filter(a => {
            const due = a.due_date;
            return due > thisWeek && due <= nextWeek;
        });
        const assignmentsLater = allAssignments.filter(a => a.due_date > nextWeek);

        // Display assignments by time period
        if (assignmentsToday.length > 0) {
            console.log('\n🔴 DUE TODAY\n');
            console.log('─'.repeat(80));
            assignmentsToday.forEach(a => displayAssignment(a));
        }

        if (assignmentsTomorrow.length > 0) {
            console.log('\n🟠 DUE TOMORROW\n');
            console.log('─'.repeat(80));
            assignmentsTomorrow.forEach(a => displayAssignment(a));
        }

        if (assignmentsThisWeek.length > 0) {
            console.log('\n🟡 DUE THIS WEEK\n');
            console.log('─'.repeat(80));
            assignmentsThisWeek.forEach(a => displayAssignment(a));
        }

        if (assignmentsNextWeek.length > 0) {
            console.log('\n🟢 DUE NEXT WEEK\n');
            console.log('─'.repeat(80));
            assignmentsNextWeek.forEach(a => displayAssignment(a));
        }

        if (assignmentsLater.length > 0) {
            console.log('\n🔵 DUE LATER\n');
            console.log('─'.repeat(80));
            assignmentsLater.forEach(a => displayAssignment(a));
        }

        // Summary
        console.log('\n═'.repeat(80));
        console.log('\n📊 SUMMARY BY COURSE\n');
        
        const courseStats = new Map();
        allAssignments.forEach(a => {
            const key = `${a.course_name} (${a.course_code})`;
            courseStats.set(key, (courseStats.get(key) || 0) + 1);
        });
        
        courseStats.forEach((count, courseName) => {
            console.log(`  ${courseName}: ${count} assignment(s)`);
        });

        if (allAssignments.length > 0) {
            const nextAssignment = allAssignments[0];
            const dueDate = nextAssignment.due_date || new Date(nextAssignment.due_at || nextAssignment.dueAt);
            const hoursUntil = Math.ceil((dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60));
            
            console.log(`\n⚠️  NEXT DUE: "${nextAssignment.name}" (${nextAssignment.course_code})`);
            console.log(`   Due in ${hoursUntil} hours: ${formatDate(dueDate)}`);
        }

    } catch (error: any) {
        console.error('Error fetching assignments:', error.message || error);
        process.exit(1);
    }
}

function displayAssignment(assignment: any) {
    const dueDate = assignment.due_date || new Date(assignment.due_at || assignment.dueAt);
    const now = new Date();
    const hoursUntil = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60));
    const daysUntil = Math.ceil(hoursUntil / 24);
    
    console.log(`📝 ${assignment.name}`);
    console.log(`   Course: ${assignment.course_name} (${assignment.course_code})`);
    console.log(`   Due: ${formatDate(dueDate)}`);
    
    if (hoursUntil < 24) {
        console.log(`   ⏰ Time remaining: ${hoursUntil} hours`);
    } else {
        console.log(`   ⏰ Time remaining: ${daysUntil} days`);
    }
    
    if (assignment.points_possible) {
        console.log(`   Points: ${assignment.points_possible}`);
    }
    
    if (assignment.submission_types && assignment.submission_types.length > 0) {
        console.log(`   Type: ${assignment.submission_types.join(', ')}`);
    }
    
    if (assignment.html_url) {
        console.log(`   Link: ${assignment.html_url}`);
    }
    
    console.log('─'.repeat(80));
}

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleString('en-US', options);
}

// Run the script
getUpcomingAssignments().then(() => {
    console.log('\nScript completed successfully.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});