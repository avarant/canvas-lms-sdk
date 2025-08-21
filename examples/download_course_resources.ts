import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import * as https from 'https';
import * as http from 'http';

// Load environment variables from parent .env
const isCompiled = __dirname.endsWith('dist');
const envPath = isCompiled ? path.join(__dirname, '../../.env') : path.join(__dirname, '../.env');
dotenv.config({ path: envPath });

// Dynamic import to handle different paths when running from TypeScript vs compiled JavaScript
const sdkPath = isCompiled 
    ? '../../generated_typescript_sdk/dist'
    : '../generated_typescript_sdk/dist';
const { CoursesApi, FilesApi, AssignmentsApi, PagesApi, Configuration } = require(sdkPath);

async function downloadCourseResources() {
    // Get credentials from environment variables
    const canvasHost = process.env.CANVAS_HOST || process.env.CANVAS_API_URL;
    const canvasToken = process.env.CANVAS_TOKEN || process.env.CANVAS_API_KEY;

    if (!canvasHost || !canvasToken) {
        console.error('Error: CANVAS_HOST and CANVAS_TOKEN environment variables must be set.');
        process.exit(1);
    }

    // Get course ID from command line
    const courseId = process.argv[2];
    
    if (!courseId) {
        console.error('Error: Please provide a course ID');
        console.error('Usage: npx ts-node download_course_resources.ts <course_id>');
        console.error('Example: npx ts-node download_course_resources.ts 458030');
        process.exit(1);
    }

    // Optional: download files (yes/no)
    const shouldDownload = process.argv[3] === 'download';

    // Prepare base URL
    let basePath = canvasHost.replace(/\/$/, '').replace(/\/api\/v1$/, '');
    console.log('Connecting to Canvas at:', basePath);
    console.log(`Fetching resources for course ID: ${courseId}`);
    
    if (shouldDownload) {
        console.log('Download mode: Files will be downloaded to ./course_resources/\n');
    } else {
        console.log('List mode: Files will be listed but not downloaded');
        console.log('To download files, add "download" parameter: npx ts-node download_course_resources.ts <course_id> download\n');
    }

    // Configure the API client
    const configuration = new Configuration({
        basePath: basePath,
        headers: {
            'Authorization': `Bearer ${canvasToken}`
        }
    });

    const coursesApi = new CoursesApi(configuration);
    const filesApi = new FilesApi(configuration);
    const assignmentsApi = new AssignmentsApi(configuration);
    const pagesApi = new PagesApi(configuration);

    try {
        // Get course details
        const courses = await coursesApi.apiV1CoursesGet({
            enrollmentState: 'active',
            include: ['syllabus_body', 'public_description']
        });
        
        const course = courses.find((c: any) => c.id === parseInt(courseId));

        if (!course) {
            console.error('Course not found or access denied.');
            process.exit(1);
        }

        console.log(`Course: ${course.name} (${course.course_code || courseId})\n`);
        console.log('═'.repeat(80));
        console.log('\n📚 COURSE RESOURCES\n');
        console.log('═'.repeat(80));

        const resources: any = {
            course_name: course.name,
            course_code: course.course_code,
            assignments: [],
            pages: [],
            files: [],
            syllabus_attachments: []
        };

        // 1. Get Assignment Attachments
        console.log('\n📝 CHECKING ASSIGNMENTS...\n');
        try {
            const assignments = await assignmentsApi.listAssignmentsForCourse({
                courseId: parseInt(courseId)
            });

            for (const assignment of assignments) {
                const assignmentInfo: any = {
                    name: assignment.name,
                    id: assignment.id,
                    due_date: assignment.due_at || assignment.dueAt,
                    description_files: []
                };

                // Extract file links from assignment description
                if (assignment.description) {
                    const fileLinks = extractFileLinks(assignment.description, canvasHost);
                    if (fileLinks.length > 0) {
                        assignmentInfo.description_files = fileLinks;
                        resources.assignments.push(assignmentInfo);
                        
                        console.log(`📎 ${assignment.name}`);
                        fileLinks.forEach((link: any) => {
                            console.log(`   - ${link.name || 'File'}: ${link.url}`);
                        });
                    }
                }
            }
            
            if (resources.assignments.length === 0) {
                console.log('   No downloadable attachments found in assignments.');
            }
        } catch (error) {
            console.log('   Unable to fetch assignments.');
        }

        // 2. Check Course Files API (if available)
        console.log('\n📁 CHECKING COURSE FILES...\n');
        try {
            // Try to get files quota to see if we have access
            const filesQuota = await filesApi.apiV1CoursesCourseIdFilesQuotaGet({
                courseId: parseInt(courseId)
            });
            
            if (filesQuota) {
                const quotaUsedMB = (filesQuota.quota_used || 0) / (1024 * 1024);
                const quotaMB = (filesQuota.quota || 0) / (1024 * 1024);
                console.log(`   Storage: ${quotaUsedMB.toFixed(2)} MB used of ${quotaMB.toFixed(2)} MB`);
                
                // Note: Full file listing requires direct API call
                console.log('   Note: Direct file listing requires additional API endpoints not in SDK.');
                console.log('   Check course "Files" section in Canvas web interface.');
            }
        } catch (error) {
            console.log('   File storage information not available.');
        }

        // 3. Check Pages for embedded resources
        console.log('\n📄 CHECKING COURSE PAGES...\n');
        try {
            // Try to get front page
            const frontPage = await pagesApi.apiV1CoursesCourseIdFrontPageGet({
                courseId: parseInt(courseId)
            });
            
            if (frontPage && frontPage.body) {
                const pageFiles = extractFileLinks(frontPage.body, canvasHost);
                if (pageFiles.length > 0) {
                    resources.pages.push({
                        name: frontPage.title || 'Front Page',
                        files: pageFiles
                    });
                    
                    console.log(`📌 ${frontPage.title || 'Front Page'}`);
                    pageFiles.forEach((link: any) => {
                        console.log(`   - ${link.name || 'File'}: ${link.url}`);
                    });
                }
            }
        } catch (error) {
            console.log('   No accessible course pages found.');
        }

        // 4. Extract files from syllabus
        console.log('\n📋 CHECKING SYLLABUS...\n');
        if (course.syllabus_body || course.syllabusBody) {
            const syllabusBody = course.syllabus_body || course.syllabusBody;
            const syllabusFiles = extractFileLinks(syllabusBody, canvasHost);
            
            if (syllabusFiles.length > 0) {
                resources.syllabus_attachments = syllabusFiles;
                console.log('Found files in syllabus:');
                syllabusFiles.forEach((link: any) => {
                    console.log(`   - ${link.name || 'File'}: ${link.url}`);
                });
            } else {
                console.log('   No downloadable files found in syllabus.');
            }
        } else {
            console.log('   No syllabus available.');
        }

        // Summary
        console.log('\n═'.repeat(80));
        console.log('\n📊 SUMMARY\n');
        
        const totalFiles = 
            resources.assignments.reduce((sum: number, a: any) => sum + a.description_files.length, 0) +
            resources.pages.reduce((sum: number, p: any) => sum + p.files.length, 0) +
            resources.syllabus_attachments.length;
        
        console.log(`Total downloadable resources found: ${totalFiles}`);
        console.log(`  From assignments: ${resources.assignments.reduce((sum: number, a: any) => sum + a.description_files.length, 0)}`);
        console.log(`  From pages: ${resources.pages.reduce((sum: number, p: any) => sum + p.files.length, 0)}`);
        console.log(`  From syllabus: ${resources.syllabus_attachments.length}`);

        // Download files if requested
        if (shouldDownload && totalFiles > 0) {
            console.log('\n📥 DOWNLOADING FILES...\n');
            
            // Create directory structure
            const baseDir = `./course_resources/${course.course_code || courseId}`;
            if (!fs.existsSync(baseDir)) {
                fs.mkdirSync(baseDir, { recursive: true });
            }
            
            let downloadCount = 0;
            
            // Download assignment files
            for (const assignment of resources.assignments) {
                const assignmentDir = `${baseDir}/assignments/${sanitizeFilename(assignment.name)}`;
                if (!fs.existsSync(assignmentDir)) {
                    fs.mkdirSync(assignmentDir, { recursive: true });
                }
                
                for (const file of assignment.description_files) {
                    if (await downloadFile(file.url, assignmentDir, file.name, canvasToken)) {
                        downloadCount++;
                    }
                }
            }
            
            // Download syllabus files
            if (resources.syllabus_attachments.length > 0) {
                const syllabusDir = `${baseDir}/syllabus`;
                if (!fs.existsSync(syllabusDir)) {
                    fs.mkdirSync(syllabusDir, { recursive: true });
                }
                
                for (const file of resources.syllabus_attachments) {
                    if (await downloadFile(file.url, syllabusDir, file.name, canvasToken)) {
                        downloadCount++;
                    }
                }
            }
            
            console.log(`\n✅ Downloaded ${downloadCount} of ${totalFiles} files to ${baseDir}`);
        } else if (totalFiles > 0) {
            console.log('\n💡 TIP: To download these files, run:');
            console.log(`   npx ts-node download_course_resources.ts ${courseId} download`);
        }

        // Export resource list
        const resourceListFile = `course_resources_${courseId}_${new Date().toISOString().split('T')[0]}.json`;
        fs.writeFileSync(resourceListFile, JSON.stringify(resources, null, 2));
        console.log(`\n📋 Resource list saved to ${resourceListFile}`);

    } catch (error: any) {
        console.error('Error fetching course resources:', error.message || error);
        process.exit(1);
    }
}

function extractFileLinks(html: string, canvasHost: string): any[] {
    const files: any[] = [];
    
    // Pattern for Canvas file links
    const patterns = [
        /<a[^>]+href="([^"]*\/courses\/\d+\/files\/\d+[^"]*)"[^>]*>([^<]*)<\/a>/gi,
        /<a[^>]+href="([^"]*\/files\/\d+\/download[^"]*)"[^>]*>([^<]*)<\/a>/gi,
        /href="([^"]*\.(?:pdf|docx?|xlsx?|pptx?|zip|txt|csv|png|jpg|jpeg|gif)[^"]*)"[^>]*>([^<]*)</gi
    ];
    
    patterns.forEach(pattern => {
        let match;
        while ((match = pattern.exec(html)) !== null) {
            const url = match[1];
            const name = match[2] || 'Unnamed File';
            
            // Clean up the name
            const cleanName = name.replace(/<[^>]*>/g, '').trim();
            
            // Make sure URL is absolute
            let fullUrl = url;
            if (url.startsWith('/')) {
                fullUrl = canvasHost.replace(/\/api\/v1$/, '') + url;
            }
            
            // Check if not already in list
            if (!files.some(f => f.url === fullUrl)) {
                files.push({
                    url: fullUrl,
                    name: cleanName
                });
            }
        }
    });
    
    return files;
}

function sanitizeFilename(filename: string): string {
    return filename.replace(/[^a-z0-9_\-\s]/gi, '_').substring(0, 100);
}

async function downloadFile(url: string, directory: string, filename: string, token: string): Promise<boolean> {
    return new Promise((resolve) => {
        try {
            const sanitizedFilename = sanitizeFilename(filename);
            const filepath = path.join(directory, sanitizedFilename);
            
            // Skip if file already exists
            if (fs.existsSync(filepath)) {
                console.log(`   ⏭️  Skipping ${sanitizedFilename} (already exists)`);
                resolve(false);
                return;
            }
            
            console.log(`   ⬇️  Downloading ${sanitizedFilename}...`);
            
            const file = fs.createWriteStream(filepath);
            const protocol = url.startsWith('https') ? https : http;
            
            const options = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'User-Agent': 'Canvas-SDK-Downloader'
                }
            };
            
            protocol.get(url, options, (response) => {
                // Handle redirects
                if (response.statusCode === 301 || response.statusCode === 302) {
                    const redirectUrl = response.headers.location;
                    if (redirectUrl) {
                        file.close();
                        fs.unlinkSync(filepath);
                        downloadFile(redirectUrl, directory, filename, token).then(resolve);
                        return;
                    }
                }
                
                if (response.statusCode !== 200) {
                    console.log(`   ❌ Failed to download ${sanitizedFilename} (HTTP ${response.statusCode})`);
                    file.close();
                    fs.unlinkSync(filepath);
                    resolve(false);
                    return;
                }
                
                response.pipe(file);
                
                file.on('finish', () => {
                    file.close();
                    console.log(`   ✅ Downloaded ${sanitizedFilename}`);
                    resolve(true);
                });
            }).on('error', (err) => {
                console.log(`   ❌ Error downloading ${sanitizedFilename}: ${err.message}`);
                file.close();
                if (fs.existsSync(filepath)) {
                    fs.unlinkSync(filepath);
                }
                resolve(false);
            });
            
        } catch (error) {
            console.log(`   ❌ Error downloading ${filename}`);
            resolve(false);
        }
    });
}

// Run the script
downloadCourseResources().then(() => {
    console.log('\nScript completed successfully.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});