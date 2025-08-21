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
const { CoursesApi, DefaultApi, Configuration } = require(sdkPath);

async function getCourseAnnouncements() {
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
    console.log('Fetching announcements from all active courses...\n');

    // Configure the API client
    const configuration = new Configuration({
        basePath: basePath,
        headers: {
            'Authorization': `Bearer ${canvasToken}`
        }
    });

    const coursesApi = new CoursesApi(configuration);
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
        
        // Collect announcements from all courses
        const allAnnouncements: any[] = [];
        
        for (const course of courses) {
            try {
                // Try to get discussion topics which include announcements
                const response = await defaultApi.apiV1CoursesCourseIdDiscussionTopicsGet({
                    courseId: course.id,
                    onlyAnnouncements: true,
                    orderBy: 'recent_activity',
                    perPage: 10 // Get last 10 announcements per course
                });
                
                if (response && response.length > 0) {
                    response.forEach((announcement: any) => {
                        announcement.course_name = course.name;
                        announcement.course_code = course.course_code;
                        announcement.course_id = course.id;
                        allAnnouncements.push(announcement);
                    });
                }
            } catch (error) {
                // Skip courses where we can't fetch announcements
                console.log(`  Skipping course "${course.name}" - Unable to fetch announcements`);
            }
        }

        if (allAnnouncements.length === 0) {
            console.log('No announcements found in any courses.');
            return;
        }

        // Sort by posted date (most recent first)
        allAnnouncements.sort((a, b) => {
            const dateA = new Date(a.posted_at || a.created_at).getTime();
            const dateB = new Date(b.posted_at || b.created_at).getTime();
            return dateB - dateA;
        });

        console.log('═'.repeat(80));
        console.log(`\n📢 RECENT ANNOUNCEMENTS (${allAnnouncements.length} total)\n`);
        console.log('═'.repeat(80));

        // Group announcements by time
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const thisWeek = new Date(today);
        thisWeek.setDate(thisWeek.getDate() - 7);
        const lastMonth = new Date(today);
        lastMonth.setMonth(lastMonth.getMonth() - 1);

        const todayAnnouncements = allAnnouncements.filter(a => {
            const date = new Date(a.posted_at || a.created_at);
            return date >= today;
        });

        const yesterdayAnnouncements = allAnnouncements.filter(a => {
            const date = new Date(a.posted_at || a.created_at);
            return date >= yesterday && date < today;
        });

        const thisWeekAnnouncements = allAnnouncements.filter(a => {
            const date = new Date(a.posted_at || a.created_at);
            return date >= thisWeek && date < yesterday;
        });

        const olderAnnouncements = allAnnouncements.filter(a => {
            const date = new Date(a.posted_at || a.created_at);
            return date < thisWeek && date >= lastMonth;
        });

        // Display announcements by time period
        if (todayAnnouncements.length > 0) {
            console.log('\n🔴 TODAY\n');
            console.log('─'.repeat(80));
            todayAnnouncements.forEach(a => displayAnnouncement(a));
        }

        if (yesterdayAnnouncements.length > 0) {
            console.log('\n🟠 YESTERDAY\n');
            console.log('─'.repeat(80));
            yesterdayAnnouncements.forEach(a => displayAnnouncement(a));
        }

        if (thisWeekAnnouncements.length > 0) {
            console.log('\n🟡 THIS WEEK\n');
            console.log('─'.repeat(80));
            thisWeekAnnouncements.forEach(a => displayAnnouncement(a));
        }

        if (olderAnnouncements.length > 0) {
            console.log('\n⚪ OLDER (LAST MONTH)\n');
            console.log('─'.repeat(80));
            olderAnnouncements.forEach(a => displayAnnouncement(a));
        }

        // Summary by course
        console.log('\n═'.repeat(80));
        console.log('\n📊 SUMMARY BY COURSE\n');
        
        const courseStats = new Map();
        allAnnouncements.forEach(a => {
            const key = `${a.course_name} (${a.course_code})`;
            courseStats.set(key, (courseStats.get(key) || 0) + 1);
        });
        
        courseStats.forEach((count, courseName) => {
            console.log(`  ${courseName}: ${count} announcement(s)`);
        });

        // Most recent announcement
        if (allAnnouncements.length > 0) {
            const latest = allAnnouncements[0];
            const postedDate = new Date(latest.posted_at || latest.created_at);
            console.log(`\n⚡ MOST RECENT: "${latest.title}" from ${latest.course_code}`);
            console.log(`   Posted: ${formatDate(postedDate)}`);
        }

    } catch (error: any) {
        console.error('Error fetching announcements:', error.message || error);
        process.exit(1);
    }
}

function displayAnnouncement(announcement: any) {
    const postedDate = new Date(announcement.posted_at || announcement.created_at);
    const now = new Date();
    const hoursAgo = Math.floor((now.getTime() - postedDate.getTime()) / (1000 * 60 * 60));
    const daysAgo = Math.floor(hoursAgo / 24);
    
    console.log(`📌 ${announcement.title}`);
    console.log(`   Course: ${announcement.course_name} (${announcement.course_code})`);
    console.log(`   Posted: ${formatDate(postedDate)}`);
    
    if (hoursAgo < 24) {
        console.log(`   ⏰ ${hoursAgo} hours ago`);
    } else {
        console.log(`   ⏰ ${daysAgo} days ago`);
    }
    
    if (announcement.author) {
        console.log(`   Author: ${announcement.author.display_name || 'Unknown'}`);
    }
    
    // Display first 200 characters of message
    if (announcement.message) {
        const cleanMessage = announcement.message
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/\s+/g, ' ') // Normalize whitespace
            .trim();
        
        const preview = cleanMessage.length > 200 
            ? cleanMessage.substring(0, 200) + '...' 
            : cleanMessage;
        
        if (preview) {
            console.log(`   Preview: ${preview}`);
        }
    }
    
    if (announcement.html_url) {
        console.log(`   Link: ${announcement.html_url}`);
    }
    
    // Check if announcement is unread
    if (announcement.read_state === 'unread') {
        console.log(`   📍 Status: UNREAD`);
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
getCourseAnnouncements().then(() => {
    console.log('\nScript completed successfully.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});