import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

// Load environment variables from parent .env
const isCompiled = __dirname.endsWith('dist');
const envPath = isCompiled ? path.join(__dirname, '../../.env') : path.join(__dirname, '../.env');
dotenv.config({ path: envPath });

// Dynamic import to handle different paths when running from TypeScript vs compiled JavaScript
const sdkPath = isCompiled 
    ? '../../generated_typescript_sdk/dist'
    : '../generated_typescript_sdk/dist';
const { CoursesApi, AssignmentsApi, DefaultApi, Configuration } = require(sdkPath);

async function exportCalendarEvents() {
    // Get credentials from environment variables
    const canvasHost = process.env.CANVAS_HOST || process.env.CANVAS_API_URL;
    const canvasToken = process.env.CANVAS_TOKEN || process.env.CANVAS_API_KEY;

    if (!canvasHost || !canvasToken) {
        console.error('Error: CANVAS_HOST and CANVAS_TOKEN environment variables must be set.');
        process.exit(1);
    }

    // Get export format from command line (default to console output)
    const exportFormat = process.argv[2] || 'console';
    const validFormats = ['console', 'ics', 'csv', 'json'];
    
    if (!validFormats.includes(exportFormat)) {
        console.error(`Invalid format. Use one of: ${validFormats.join(', ')}`);
        process.exit(1);
    }

    // Prepare base URL
    let basePath = canvasHost.replace(/\/$/, '').replace(/\/api\/v1$/, '');
    console.log('Connecting to Canvas at:', basePath);
    console.log(`Exporting calendar events (format: ${exportFormat})...\n`);

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
        
        // Collect all events
        const allEvents: any[] = [];
        
        for (const course of courses) {
            try {
                // Get assignments (these are the main calendar events for students)
                const assignments = await assignmentsApi.listAssignmentsForCourse({
                    courseId: course.id
                });
                
                for (const assignment of assignments) {
                    if (assignment.due_at) {
                        allEvents.push({
                            type: 'assignment',
                            title: assignment.name,
                            course_name: course.name,
                            course_code: course.course_code,
                            course_id: course.id,
                            due_date: new Date(assignment.due_at),
                            points: assignment.points_possible,
                            submission_types: assignment.submission_types,
                            description: assignment.description || '',
                            url: assignment.html_url,
                            id: `assignment_${assignment.id}`
                        });
                    }
                }
                
                // Try to get calendar events (like exams, lectures, etc.)
                try {
                    const calendarEvents = await defaultApi.apiV1CalendarEventsGet({
                        contextCodes: [`course_${course.id}`],
                        startDate: new Date().toISOString().split('T')[0],
                        endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // Next 90 days
                    });
                    
                    if (calendarEvents && calendarEvents.length > 0) {
                        for (const event of calendarEvents) {
                            allEvents.push({
                                type: 'event',
                                title: event.title,
                                course_name: course.name,
                                course_code: course.course_code,
                                course_id: course.id,
                                due_date: new Date(event.start_at || event.end_at),
                                description: event.description || '',
                                location: event.location_name || '',
                                url: event.html_url,
                                id: `event_${event.id}`
                            });
                        }
                    }
                } catch (error) {
                    // Calendar events might not be available
                }
                
            } catch (error) {
                console.log(`  Skipping course "${course.name}" - Unable to fetch events`);
            }
        }

        if (allEvents.length === 0) {
            console.log('No calendar events found.');
            return;
        }

        // Sort events by date
        allEvents.sort((a, b) => a.due_date.getTime() - b.due_date.getTime());

        // Export based on format
        switch (exportFormat) {
            case 'console':
                exportToConsole(allEvents);
                break;
            case 'ics':
                exportToICS(allEvents);
                break;
            case 'csv':
                exportToCSV(allEvents);
                break;
            case 'json':
                exportToJSON(allEvents);
                break;
        }

    } catch (error: any) {
        console.error('Error exporting calendar events:', error.message || error);
        process.exit(1);
    }
}

function exportToConsole(events: any[]) {
    console.log('═'.repeat(80));
    console.log(`\n📅 CALENDAR EVENTS (${events.length} total)\n`);
    console.log('═'.repeat(80));

    // Group by month
    const eventsByMonth = new Map();
    
    events.forEach(event => {
        const monthKey = event.due_date.toLocaleString('en-US', { year: 'numeric', month: 'long' });
        if (!eventsByMonth.has(monthKey)) {
            eventsByMonth.set(monthKey, []);
        }
        eventsByMonth.get(monthKey).push(event);
    });

    // Display events by month
    eventsByMonth.forEach((monthEvents, month) => {
        console.log(`\n📆 ${month.toUpperCase()}\n`);
        console.log('─'.repeat(80));
        
        monthEvents.forEach((event: any) => {
            const icon = event.type === 'assignment' ? '📝' : '📌';
            console.log(`${icon} ${formatDate(event.due_date, 'short')} - ${event.title}`);
            console.log(`   Course: ${event.course_name} (${event.course_code})`);
            
            if (event.type === 'assignment' && event.points) {
                console.log(`   Points: ${event.points}`);
            }
            
            if (event.location) {
                console.log(`   Location: ${event.location}`);
            }
            
            console.log('─'.repeat(80));
        });
    });

    // Summary
    console.log('\n═'.repeat(80));
    console.log('\n📊 SUMMARY\n');
    
    const assignments = events.filter(e => e.type === 'assignment');
    const calendarEvents = events.filter(e => e.type === 'event');
    
    console.log(`Total Events: ${events.length}`);
    console.log(`  Assignments: ${assignments.length}`);
    console.log(`  Calendar Events: ${calendarEvents.length}`);
    
    // Next upcoming
    const now = new Date();
    const upcoming = events.filter(e => e.due_date > now);
    if (upcoming.length > 0) {
        const next = upcoming[0];
        const daysUntil = Math.ceil((next.due_date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        console.log(`\n⚡ Next Event: "${next.title}"`);
        console.log(`   Date: ${formatDate(next.due_date, 'full')}`);
        console.log(`   In ${daysUntil} day(s)`);
    }
}

function exportToICS(events: any[]) {
    let icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Canvas LMS SDK//Calendar Export//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH'
    ];

    events.forEach(event => {
        const uid = `${event.id}@canvas.local`;
        const dtstart = formatICSDate(event.due_date);
        const dtend = formatICSDate(new Date(event.due_date.getTime() + 60 * 60 * 1000)); // 1 hour duration
        
        icsContent.push('BEGIN:VEVENT');
        icsContent.push(`UID:${uid}`);
        icsContent.push(`DTSTAMP:${formatICSDate(new Date())}`);
        icsContent.push(`DTSTART:${dtstart}`);
        icsContent.push(`DTEND:${dtend}`);
        icsContent.push(`SUMMARY:${escapeICS(event.title)}`);
        icsContent.push(`DESCRIPTION:Course: ${event.course_name}\\n${escapeICS(stripHtml(event.description))}`);
        
        if (event.location) {
            icsContent.push(`LOCATION:${escapeICS(event.location)}`);
        }
        
        if (event.url) {
            icsContent.push(`URL:${event.url}`);
        }
        
        icsContent.push('END:VEVENT');
    });

    icsContent.push('END:VCALENDAR');
    
    const filename = `canvas_events_${new Date().toISOString().split('T')[0]}.ics`;
    fs.writeFileSync(filename, icsContent.join('\r\n'));
    console.log(`✅ Calendar exported to ${filename}`);
    console.log(`   Total events: ${events.length}`);
    console.log(`   You can import this file into any calendar application.`);
}

function exportToCSV(events: any[]) {
    const headers = ['Date', 'Time', 'Title', 'Type', 'Course', 'Course Code', 'Points', 'URL'];
    const rows = [headers];

    events.forEach(event => {
        rows.push([
            event.due_date.toLocaleDateString(),
            event.due_date.toLocaleTimeString(),
            `"${event.title.replace(/"/g, '""')}"`,
            event.type,
            `"${event.course_name.replace(/"/g, '""')}"`,
            event.course_code,
            event.points || '',
            event.url || ''
        ]);
    });

    const csvContent = rows.map(row => row.join(',')).join('\n');
    const filename = `canvas_events_${new Date().toISOString().split('T')[0]}.csv`;
    fs.writeFileSync(filename, csvContent);
    console.log(`✅ Events exported to ${filename}`);
    console.log(`   Total events: ${events.length}`);
    console.log(`   You can open this file in Excel or Google Sheets.`);
}

function exportToJSON(events: any[]) {
    const exportData = {
        exported_at: new Date().toISOString(),
        total_events: events.length,
        events: events.map(e => ({
            ...e,
            due_date: e.due_date.toISOString()
        }))
    };

    const filename = `canvas_events_${new Date().toISOString().split('T')[0]}.json`;
    fs.writeFileSync(filename, JSON.stringify(exportData, null, 2));
    console.log(`✅ Events exported to ${filename}`);
    console.log(`   Total events: ${events.length}`);
    console.log(`   This JSON file can be processed by other applications.`);
}

function formatDate(date: Date, format: 'short' | 'full'): string {
    if (format === 'short') {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    } else {
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

function formatICSDate(date: Date): string {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

function escapeICS(text: string): string {
    return text.replace(/\\/g, '\\\\')
               .replace(/;/g, '\\;')
               .replace(/,/g, '\\,')
               .replace(/\n/g, '\\n');
}

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').substring(0, 500);
}

// Run the script
exportCalendarEvents().then(() => {
    console.log('\nScript completed successfully.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});