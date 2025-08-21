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
const { CoursesApi, Configuration } = require(sdkPath);

async function checkGrades() {
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
    console.log('Fetching grades for all enrolled courses...\n');

    // Configure the API client
    const configuration = new Configuration({
        basePath: basePath,
        headers: {
            'Authorization': `Bearer ${canvasToken}`
        }
    });

    const coursesApi = new CoursesApi(configuration);

    try {
        // Get all active courses with grades included
        const courses = await coursesApi.apiV1CoursesGet({
            enrollmentState: 'active',
            include: ['total_scores', 'current_grading_period_scores', 'grading_periods']
        });

        if (!courses || courses.length === 0) {
            console.log('No active courses found.');
            return;
        }

        console.log(`Found ${courses.length} active course(s)\n`);
        console.log('═'.repeat(80));
        console.log('\n📊 CURRENT GRADES\n');
        console.log('═'.repeat(80));

        let totalWeightedGrade = 0;
        let totalCourses = 0;
        const gradeData: any[] = [];

        for (const course of courses) {
            const enrollment = course.enrollments?.[0];
            
            if (enrollment && enrollment.type === 'student') {
                const courseInfo: any = {
                    name: course.name,
                    code: course.course_code,
                    id: course.id
                };

                // Get grade information from enrollment
                if (enrollment.computed_current_score !== undefined) {
                    courseInfo.current_score = enrollment.computed_current_score;
                    courseInfo.current_grade = enrollment.computed_current_grade;
                }
                
                if (enrollment.computed_final_score !== undefined) {
                    courseInfo.final_score = enrollment.computed_final_score;
                    courseInfo.final_grade = enrollment.computed_final_grade;
                }

                // Check for grading periods
                if (enrollment.current_grading_period_id) {
                    courseInfo.grading_period = {
                        id: enrollment.current_grading_period_id,
                        score: enrollment.current_grading_period_computed_current_score,
                        grade: enrollment.current_grading_period_computed_current_grade
                    };
                }

                // Add to weighted average if we have a score
                if (courseInfo.current_score) {
                    totalWeightedGrade += courseInfo.current_score;
                    totalCourses++;
                }

                gradeData.push(courseInfo);
            }
        }

        // Sort by course name
        gradeData.sort((a, b) => a.name.localeCompare(b.name));

        // Display each course's grades
        gradeData.forEach((course, index) => {
            console.log(`\n${index + 1}. ${course.name}`);
            console.log(`   Course Code: ${course.code}`);
            console.log(`   Course ID: ${course.id}`);
            
            if (course.current_score !== undefined && course.current_score !== null) {
                const gradeEmoji = getGradeEmoji(course.current_score);
                console.log(`   ${gradeEmoji} Current Grade: ${course.current_score.toFixed(2)}% ${course.current_grade ? `(${course.current_grade})` : ''}`);
            } else {
                console.log(`   Current Grade: No grade available`);
            }
            
            if (course.final_score !== undefined && course.final_score !== null && course.final_score !== course.current_score) {
                console.log(`   Final Grade: ${course.final_score.toFixed(2)}% ${course.final_grade ? `(${course.final_grade})` : ''}`);
            }
            
            if (course.grading_period) {
                console.log(`   Current Period: ${course.grading_period.score?.toFixed(2)}% ${course.grading_period.grade ? `(${course.grading_period.grade})` : ''}`);
            }
            
            // Performance indicator
            if (course.current_score !== undefined && course.current_score !== null) {
                const performance = getPerformanceIndicator(course.current_score);
                console.log(`   Performance: ${performance}`);
            }
            
            console.log('─'.repeat(80));
        });

        // Overall statistics
        console.log('\n═'.repeat(80));
        console.log('\n📈 OVERALL STATISTICS\n');
        console.log('─'.repeat(80));
        
        if (totalCourses > 0) {
            const averageGrade = totalWeightedGrade / totalCourses;
            const gradeEmoji = getGradeEmoji(averageGrade);
            console.log(`${gradeEmoji} Average Grade: ${averageGrade.toFixed(2)}%`);
            console.log(`Total Courses with Grades: ${totalCourses}`);
            
            // Grade distribution
            const gradeDistribution = {
                'A (90-100%)': gradeData.filter(c => c.current_score >= 90).length,
                'B (80-89%)': gradeData.filter(c => c.current_score >= 80 && c.current_score < 90).length,
                'C (70-79%)': gradeData.filter(c => c.current_score >= 70 && c.current_score < 80).length,
                'D (60-69%)': gradeData.filter(c => c.current_score >= 60 && c.current_score < 70).length,
                'F (Below 60%)': gradeData.filter(c => c.current_score < 60).length,
                'No Grade': gradeData.filter(c => c.current_score === undefined).length
            };
            
            console.log('\nGrade Distribution:');
            Object.entries(gradeDistribution).forEach(([range, count]) => {
                if (count > 0) {
                    console.log(`  ${range}: ${count} course(s)`);
                }
            });
            
            // Identify courses needing attention
            const needsAttention = gradeData.filter(c => c.current_score && c.current_score < 70);
            if (needsAttention.length > 0) {
                console.log('\n⚠️  COURSES NEEDING ATTENTION:');
                needsAttention.forEach(course => {
                    console.log(`  - ${course.name}: ${course.current_score.toFixed(2)}%`);
                });
            }
            
            // Identify top performing courses
            const topPerforming = gradeData.filter(c => c.current_score && c.current_score >= 95);
            if (topPerforming.length > 0) {
                console.log('\n🌟 TOP PERFORMING COURSES:');
                topPerforming.forEach(course => {
                    console.log(`  - ${course.name}: ${course.current_score.toFixed(2)}%`);
                });
            }
        } else {
            console.log('No graded courses found.');
        }

    } catch (error: any) {
        console.error('Error fetching grades:', error.message || error);
        process.exit(1);
    }
}

function getGradeEmoji(score: number): string {
    if (score >= 95) return '🌟';
    if (score >= 90) return '✅';
    if (score >= 80) return '👍';
    if (score >= 70) return '📝';
    if (score >= 60) return '⚠️';
    return '❌';
}

function getPerformanceIndicator(score: number): string {
    if (score >= 95) return 'Excellent - Keep up the great work!';
    if (score >= 90) return 'Very Good - Performing well';
    if (score >= 80) return 'Good - Solid performance';
    if (score >= 70) return 'Satisfactory - Room for improvement';
    if (score >= 60) return 'Needs Improvement - Consider seeking help';
    return 'At Risk - Immediate attention needed';
}

// Run the script
checkGrades().then(() => {
    console.log('\nScript completed successfully.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});