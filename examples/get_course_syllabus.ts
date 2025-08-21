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
const { CoursesApi, Configuration } = require(sdkPath);

async function getCourseSyllabus() {
    // Get credentials from environment variables
    const canvasHost = process.env.CANVAS_HOST || process.env.CANVAS_API_URL;
    const canvasToken = process.env.CANVAS_TOKEN || process.env.CANVAS_API_KEY;

    if (!canvasHost || !canvasToken) {
        console.error('Error: CANVAS_HOST and CANVAS_TOKEN environment variables must be set.');
        process.exit(1);
    }

    // Get export format from command line (default to console)
    const exportFormat = process.argv[2] || 'console';
    const validFormats = ['console', 'markdown', 'text'];
    
    if (!validFormats.includes(exportFormat)) {
        console.error(`Invalid format. Use one of: ${validFormats.join(', ')}`);
        console.error('Example: npx ts-node get_course_syllabus.ts markdown');
        process.exit(1);
    }

    // Prepare base URL
    let basePath = canvasHost.replace(/\/$/, '').replace(/\/api\/v1$/, '');
    console.log('Connecting to Canvas at:', basePath);
    console.log(`Fetching course syllabi (format: ${exportFormat})...\n`);

    // Configure the API client
    const configuration = new Configuration({
        basePath: basePath,
        headers: {
            'Authorization': `Bearer ${canvasToken}`
        }
    });

    const coursesApi = new CoursesApi(configuration);

    try {
        // Get all active courses with syllabus included
        const courses = await coursesApi.apiV1CoursesGet({
            enrollmentState: 'active',
            include: ['syllabus_body', 'term', 'teachers']
        });

        if (!courses || courses.length === 0) {
            console.log('No active courses found.');
            return;
        }

        console.log(`Found ${courses.length} active course(s)\n`);
        
        const syllabi: any[] = [];
        
        for (const course of courses) {
            const syllabus: any = {
                id: course.id,
                name: course.name,
                code: course.course_code,
                term: course.term?.name || 'No term',
                teachers: [],
                syllabus_body: course.syllabus_body || course.syllabusBody || null,
                has_syllabus: false
            };
            
            // Get teacher names if available
            if (course.teachers && Array.isArray(course.teachers)) {
                syllabus.teachers = course.teachers.map((t: any) => t.display_name || t.name || 'Unknown');
            }
            
            // Check if syllabus exists
            if (syllabus.syllabus_body && syllabus.syllabus_body.trim() !== '') {
                syllabus.has_syllabus = true;
                // Convert HTML to plain text (basic conversion)
                syllabus.plain_text = htmlToText(syllabus.syllabus_body);
                // Extract important dates
                syllabus.important_dates = extractDates(syllabus.plain_text);
            }
            
            syllabi.push(syllabus);
        }
        
        // Export based on format
        switch (exportFormat) {
            case 'console':
                displaySyllabiConsole(syllabi);
                break;
            case 'markdown':
                exportToMarkdown(syllabi);
                break;
            case 'text':
                exportToText(syllabi);
                break;
        }

    } catch (error: any) {
        console.error('Error fetching syllabi:', error.message || error);
        process.exit(1);
    }
}

function displaySyllabiConsole(syllabi: any[]) {
    console.log('═'.repeat(80));
    console.log('\n📚 COURSE SYLLABI\n');
    console.log('═'.repeat(80));
    
    let coursesWithSyllabus = 0;
    let coursesWithoutSyllabus = 0;
    
    syllabi.forEach((syllabus, index) => {
        console.log(`\n${index + 1}. ${syllabus.name}`);
        console.log(`   Course Code: ${syllabus.code}`);
        console.log(`   Course ID: ${syllabus.id}`);
        console.log(`   Term: ${syllabus.term}`);
        
        if (syllabus.teachers.length > 0) {
            console.log(`   Instructor(s): ${syllabus.teachers.join(', ')}`);
        }
        
        if (syllabus.has_syllabus) {
            coursesWithSyllabus++;
            console.log(`   📄 Syllabus: Available`);
            
            // Show first 500 characters of syllabus
            const preview = syllabus.plain_text.substring(0, 500).replace(/\n+/g, '\n   ');
            console.log(`\n   Preview:\n   ${preview}${syllabus.plain_text.length > 500 ? '...' : ''}`);
            
            // Show important dates if found
            if (syllabus.important_dates.length > 0) {
                console.log(`\n   📅 Important Dates Found:`);
                syllabus.important_dates.slice(0, 5).forEach((date: string) => {
                    console.log(`      • ${date}`);
                });
                if (syllabus.important_dates.length > 5) {
                    console.log(`      ... and ${syllabus.important_dates.length - 5} more`);
                }
            }
        } else {
            coursesWithoutSyllabus++;
            console.log(`   📄 Syllabus: Not available`);
        }
        
        console.log('─'.repeat(80));
    });
    
    // Summary
    console.log('\n═'.repeat(80));
    console.log('\n📊 SUMMARY\n');
    console.log(`Total Courses: ${syllabi.length}`);
    console.log(`Courses with Syllabus: ${coursesWithSyllabus}`);
    console.log(`Courses without Syllabus: ${coursesWithoutSyllabus}`);
    
    if (coursesWithSyllabus > 0) {
        console.log('\n💡 TIP: Export to markdown or text format for easier reading:');
        console.log('   npx ts-node get_course_syllabus.ts markdown');
        console.log('   npx ts-node get_course_syllabus.ts text');
    }
}

function exportToMarkdown(syllabi: any[]) {
    let markdown = '# Course Syllabi\n\n';
    markdown += `_Generated on ${new Date().toLocaleDateString()}_\n\n`;
    markdown += '---\n\n';
    
    syllabi.forEach((syllabus) => {
        markdown += `## ${syllabus.name}\n\n`;
        markdown += `**Course Code:** ${syllabus.code}  \n`;
        markdown += `**Term:** ${syllabus.term}  \n`;
        
        if (syllabus.teachers.length > 0) {
            markdown += `**Instructor(s):** ${syllabus.teachers.join(', ')}  \n`;
        }
        
        markdown += '\n';
        
        if (syllabus.has_syllabus) {
            // Convert HTML to markdown-friendly format
            let content = syllabus.syllabus_body;
            // Basic HTML to Markdown conversion
            content = content.replace(/<h1[^>]*>/gi, '\n# ');
            content = content.replace(/<h2[^>]*>/gi, '\n## ');
            content = content.replace(/<h3[^>]*>/gi, '\n### ');
            content = content.replace(/<h4[^>]*>/gi, '\n#### ');
            content = content.replace(/<\/h[1-4]>/gi, '\n');
            content = content.replace(/<strong[^>]*>/gi, '**');
            content = content.replace(/<\/strong>/gi, '**');
            content = content.replace(/<b[^>]*>/gi, '**');
            content = content.replace(/<\/b>/gi, '**');
            content = content.replace(/<em[^>]*>/gi, '_');
            content = content.replace(/<\/em>/gi, '_');
            content = content.replace(/<i[^>]*>/gi, '_');
            content = content.replace(/<\/i>/gi, '_');
            content = content.replace(/<ul[^>]*>/gi, '\n');
            content = content.replace(/<\/ul>/gi, '\n');
            content = content.replace(/<ol[^>]*>/gi, '\n');
            content = content.replace(/<\/ol>/gi, '\n');
            content = content.replace(/<li[^>]*>/gi, '\n- ');
            content = content.replace(/<\/li>/gi, '');
            content = content.replace(/<p[^>]*>/gi, '\n');
            content = content.replace(/<\/p>/gi, '\n');
            content = content.replace(/<br[^>]*>/gi, '\n');
            content = content.replace(/<[^>]*>/g, ''); // Remove remaining HTML tags
            content = content.replace(/&nbsp;/g, ' ');
            content = content.replace(/&amp;/g, '&');
            content = content.replace(/&lt;/g, '<');
            content = content.replace(/&gt;/g, '>');
            content = content.replace(/&quot;/g, '"');
            content = content.replace(/&#39;/g, "'");
            content = content.replace(/\n{3,}/g, '\n\n'); // Normalize line breaks
            
            markdown += content;
        } else {
            markdown += '_No syllabus available for this course._\n';
        }
        
        markdown += '\n\n---\n\n';
    });
    
    const filename = `course_syllabi_${new Date().toISOString().split('T')[0]}.md`;
    fs.writeFileSync(filename, markdown);
    console.log(`✅ Syllabi exported to ${filename}`);
    console.log(`   Total courses: ${syllabi.length}`);
    console.log(`   Courses with syllabus: ${syllabi.filter(s => s.has_syllabus).length}`);
}

function exportToText(syllabi: any[]) {
    let text = 'COURSE SYLLABI\n';
    text += '='.repeat(80) + '\n';
    text += `Generated on ${new Date().toLocaleDateString()}\n\n`;
    
    syllabi.forEach((syllabus, index) => {
        text += '='.repeat(80) + '\n';
        text += `${index + 1}. ${syllabus.name}\n`;
        text += '-'.repeat(80) + '\n';
        text += `Course Code: ${syllabus.code}\n`;
        text += `Term: ${syllabus.term}\n`;
        
        if (syllabus.teachers.length > 0) {
            text += `Instructor(s): ${syllabus.teachers.join(', ')}\n`;
        }
        
        text += '\n';
        
        if (syllabus.has_syllabus) {
            text += syllabus.plain_text;
        } else {
            text += 'No syllabus available for this course.\n';
        }
        
        text += '\n\n';
    });
    
    const filename = `course_syllabi_${new Date().toISOString().split('T')[0]}.txt`;
    fs.writeFileSync(filename, text);
    console.log(`✅ Syllabi exported to ${filename}`);
    console.log(`   Total courses: ${syllabi.length}`);
    console.log(`   Courses with syllabus: ${syllabi.filter(s => s.has_syllabus).length}`);
}

function htmlToText(html: string): string {
    // Basic HTML to text conversion
    let text = html;
    
    // Replace common HTML entities
    text = text.replace(/&nbsp;/g, ' ');
    text = text.replace(/&amp;/g, '&');
    text = text.replace(/&lt;/g, '<');
    text = text.replace(/&gt;/g, '>');
    text = text.replace(/&quot;/g, '"');
    text = text.replace(/&#39;/g, "'");
    text = text.replace(/&mdash;/g, '—');
    text = text.replace(/&ndash;/g, '–');
    
    // Add line breaks for block elements
    text = text.replace(/<\/p>/gi, '\n');
    text = text.replace(/<\/div>/gi, '\n');
    text = text.replace(/<br\s*\/?>/gi, '\n');
    text = text.replace(/<\/h[1-6]>/gi, '\n\n');
    text = text.replace(/<\/li>/gi, '\n');
    
    // Remove HTML tags
    text = text.replace(/<[^>]*>/g, '');
    
    // Clean up extra whitespace
    text = text.replace(/\n{3,}/g, '\n\n');
    text = text.trim();
    
    return text;
}

function extractDates(text: string): string[] {
    const dates: string[] = [];
    
    // Common date patterns
    const patterns = [
        /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}/gi,
        /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\.?\s+\d{1,2},?\s+\d{4}/gi,
        /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g,
        /\b\d{1,2}-\d{1,2}-\d{2,4}\b/g,
        /\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),?\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}/gi,
        /\b(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\.?\s+\d{1,2}/gi,
    ];
    
    patterns.forEach(pattern => {
        const matches = text.match(pattern);
        if (matches) {
            matches.forEach(match => {
                // Get surrounding context (up to 50 characters before and after)
                const index = text.indexOf(match);
                const start = Math.max(0, index - 50);
                const end = Math.min(text.length, index + match.length + 50);
                const context = text.substring(start, end).replace(/\n/g, ' ').trim();
                
                // Only add if not already in the list
                if (!dates.some(d => d.includes(match))) {
                    dates.push(context);
                }
            });
        }
    });
    
    return dates;
}

// Run the script
getCourseSyllabus().then(() => {
    console.log('\nScript completed successfully.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});