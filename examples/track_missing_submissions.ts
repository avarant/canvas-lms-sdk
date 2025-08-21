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
const { CoursesApi, AssignmentsApi, DefaultApi, Configuration } = require(sdkPath);

async function trackMissingSubmissions() {
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
    console.log('Checking for missing/unsubmitted assignments...\n');

    // Configure the API client
    const configuration = new Configuration({
        basePath: basePath,
        headers: {
            'Authorization': `Bearer ${canvasToken}`
        }
    });

    const coursesApi = new CoursesApi(configuration);
    const assignmentsApi = new AssignmentsApi(configuration);
    const defaultApi = new DefaultApi(configuration);

    try {
        // Get all active courses
        const courses = await coursesApi.apiV1CoursesGet({
            enrollmentState: 'active'
        });

        if (!courses || courses.length === 0) {
            console.log('No active courses found.');
            return;
        }

        console.log(`Found ${courses.length} active course(s)\n`);
        
        // Collect missing assignments from all courses
        const missingAssignments: any[] = [];
        const overdueAssignments: any[] = [];
        const upcomingUnsubmitted: any[] = [];
        const now = new Date();
        
        for (const course of courses) {
            try {
                // Get assignments with submission information
                const assignments = await assignmentsApi.listAssignmentsForCourse({
                    courseId: course.id,
                    include: ['submission']
                });
                
                for (const assignment of assignments) {
                    // Skip if assignment is locked or not published
                    if (assignment.locked_for_user || !assignment.published) {
                        continue;
                    }
                    
                    // Check if assignment has been submitted
                    const submission = assignment.submission;
                    const isSubmitted = submission && 
                        (submission.workflow_state === 'submitted' || 
                         submission.workflow_state === 'graded' ||
                         submission.submitted_at);
                    
                    if (!isSubmitted) {
                        // Add course information
                        assignment.course_name = course.name;
                        assignment.course_code = course.course_code;
                        assignment.course_id = course.id;
                        
                        // Handle both snake_case and camelCase from API
                        const dueDateValue = assignment.due_at || assignment.dueAt;
                        
                        if (dueDateValue) {
                            const dueDate = new Date(dueDateValue);
                            assignment.due_date_obj = dueDate;
                            
                            if (dueDate < now) {
                                // Overdue
                                overdueAssignments.push(assignment);
                            } else {
                                // Upcoming but not submitted
                                upcomingUnsubmitted.push(assignment);
                            }
                        } else {
                            // No due date but not submitted
                            missingAssignments.push(assignment);
                        }
                    }
                }
            } catch (error) {
                console.log(`  Skipping course "${course.name}" - Unable to fetch assignments`);
            }
        }

        // Sort assignments
        overdueAssignments.sort((a, b) => b.due_date_obj.getTime() - a.due_date_obj.getTime());
        upcomingUnsubmitted.sort((a, b) => a.due_date_obj.getTime() - b.due_date_obj.getTime());

        const totalMissing = overdueAssignments.length + upcomingUnsubmitted.length + missingAssignments.length;

        if (totalMissing === 0) {
            console.log('🎉 Great job! All assignments are submitted.');
            return;
        }

        console.log('═'.repeat(80));
        console.log(`\n📋 MISSING SUBMISSIONS REPORT (${totalMissing} total)\n`);
        console.log('═'.repeat(80));

        // Display overdue assignments
        if (overdueAssignments.length > 0) {
            console.log('\n🔴 OVERDUE ASSIGNMENTS (' + overdueAssignments.length + ')\n');
            console.log('─'.repeat(80));
            overdueAssignments.forEach(a => displayMissingAssignment(a, 'overdue'));
        }

        // Display upcoming unsubmitted
        if (upcomingUnsubmitted.length > 0) {
            console.log('\n🟡 UPCOMING UNSUBMITTED (' + upcomingUnsubmitted.length + ')\n');
            console.log('─'.repeat(80));
            upcomingUnsubmitted.forEach(a => displayMissingAssignment(a, 'upcoming'));
        }

        // Display assignments with no due date
        if (missingAssignments.length > 0) {
            console.log('\n⚪ NO DUE DATE - UNSUBMITTED (' + missingAssignments.length + ')\n');
            console.log('─'.repeat(80));
            missingAssignments.forEach(a => displayMissingAssignment(a, 'no_due'));
        }

        // Summary and statistics
        console.log('\n═'.repeat(80));
        console.log('\n📊 SUMMARY\n');
        console.log('─'.repeat(80));
        
        // Course breakdown
        const courseBreakdown = new Map();
        [...overdueAssignments, ...upcomingUnsubmitted, ...missingAssignments].forEach(a => {
            const key = `${a.course_name} (${a.course_code})`;
            const stats = courseBreakdown.get(key) || { overdue: 0, upcoming: 0, no_due: 0 };
            
            if (overdueAssignments.includes(a)) stats.overdue++;
            else if (upcomingUnsubmitted.includes(a)) stats.upcoming++;
            else stats.no_due++;
            
            courseBreakdown.set(key, stats);
        });
        
        console.log('By Course:');
        courseBreakdown.forEach((stats, courseName) => {
            const parts = [];
            if (stats.overdue > 0) parts.push(`${stats.overdue} overdue`);
            if (stats.upcoming > 0) parts.push(`${stats.upcoming} upcoming`);
            if (stats.no_due > 0) parts.push(`${stats.no_due} no due date`);
            console.log(`  ${courseName}: ${parts.join(', ')}`);
        });

        // Priority actions
        console.log('\n⚠️  PRIORITY ACTIONS:');
        if (overdueAssignments.length > 0) {
            console.log(`  1. Submit ${overdueAssignments.length} overdue assignment(s) immediately`);
            
            // Show most overdue
            const mostOverdue = overdueAssignments[overdueAssignments.length - 1];
            const daysOverdue = Math.floor((now.getTime() - mostOverdue.due_date_obj.getTime()) / (1000 * 60 * 60 * 24));
            console.log(`     Most overdue: "${mostOverdue.name}" (${daysOverdue} days late)`);
        }
        
        if (upcomingUnsubmitted.length > 0) {
            const nextDue = upcomingUnsubmitted[0];
            const hoursUntil = Math.ceil((nextDue.due_date_obj.getTime() - now.getTime()) / (1000 * 60 * 60));
            console.log(`  2. Next deadline: "${nextDue.name}" in ${hoursUntil} hours`);
        }

        // Calculate potential points lost
        let totalPointsPossible = 0;
        let overduePoints = 0;
        
        [...overdueAssignments, ...upcomingUnsubmitted, ...missingAssignments].forEach(a => {
            if (a.points_possible) {
                totalPointsPossible += a.points_possible;
                if (overdueAssignments.includes(a)) {
                    overduePoints += a.points_possible;
                }
            }
        });
        
        if (totalPointsPossible > 0) {
            console.log(`\n💯 POINTS AT RISK:`);
            console.log(`  Total points unsubmitted: ${totalPointsPossible}`);
            if (overduePoints > 0) {
                console.log(`  Points already overdue: ${overduePoints}`);
            }
        }

    } catch (error: any) {
        console.error('Error tracking submissions:', error.message || error);
        process.exit(1);
    }
}

function displayMissingAssignment(assignment: any, type: string) {
    const now = new Date();
    
    console.log(`📝 ${assignment.name}`);
    console.log(`   Course: ${assignment.course_name} (${assignment.course_code})`);
    
    const dueDateValue = assignment.due_at || assignment.dueAt;
    if (dueDateValue) {
        const dueDate = new Date(dueDateValue);
        console.log(`   Due: ${formatDate(dueDate)}`);
        
        if (type === 'overdue') {
            const daysLate = Math.floor((now.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24));
            const hoursLate = Math.floor((now.getTime() - dueDate.getTime()) / (1000 * 60 * 60));
            
            if (daysLate > 0) {
                console.log(`   ⏰ STATUS: ${daysLate} day(s) OVERDUE`);
            } else {
                console.log(`   ⏰ STATUS: ${hoursLate} hour(s) OVERDUE`);
            }
        } else if (type === 'upcoming') {
            const hoursUntil = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60));
            const daysUntil = Math.ceil(hoursUntil / 24);
            
            if (hoursUntil < 24) {
                console.log(`   ⏰ DUE IN: ${hoursUntil} hours`);
            } else {
                console.log(`   ⏰ DUE IN: ${daysUntil} days`);
            }
        }
    } else {
        console.log(`   Due: No due date set`);
    }
    
    if (assignment.points_possible) {
        console.log(`   Points: ${assignment.points_possible}`);
    }
    
    if (assignment.submission_types && assignment.submission_types.length > 0) {
        console.log(`   Type: ${assignment.submission_types.join(', ')}`);
    }
    
    // Show submission status
    if (assignment.submission) {
        const sub = assignment.submission;
        if (sub.missing) {
            console.log(`   📍 Status: MISSING`);
        } else if (sub.late) {
            console.log(`   📍 Status: LATE`);
        } else if (sub.workflow_state === 'unsubmitted') {
            console.log(`   📍 Status: NOT SUBMITTED`);
        }
    } else {
        console.log(`   📍 Status: NOT STARTED`);
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
trackMissingSubmissions().then(() => {
    console.log('\nScript completed successfully.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});