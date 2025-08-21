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
const { CoursesApi, GroupsApi, DefaultApi, Configuration } = require(sdkPath);

async function getGroupMembers() {
    // Get credentials from environment variables
    const canvasHost = process.env.CANVAS_HOST || process.env.CANVAS_API_URL;
    const canvasToken = process.env.CANVAS_TOKEN || process.env.CANVAS_API_KEY;

    if (!canvasHost || !canvasToken) {
        console.error('Error: CANVAS_HOST and CANVAS_TOKEN environment variables must be set.');
        process.exit(1);
    }

    // Get optional specific group ID from command line
    const specificGroupId = process.argv[2];

    // Prepare base URL
    let basePath = canvasHost.replace(/\/$/, '').replace(/\/api\/v1$/, '');
    console.log('Connecting to Canvas at:', basePath);
    
    if (specificGroupId) {
        console.log(`Fetching members for group ID: ${specificGroupId}\n`);
    } else {
        console.log('Fetching all group memberships across courses...\n');
    }

    // Configure the API client
    const configuration = new Configuration({
        basePath: basePath,
        headers: {
            'Authorization': `Bearer ${canvasToken}`
        }
    });

    const coursesApi = new CoursesApi(configuration);
    const groupsApi = new GroupsApi(configuration);
    const defaultApi = new DefaultApi(configuration);

    try {
        const allGroups: any[] = [];

        if (specificGroupId) {
            // Get specific group information
            try {
                const group = await groupsApi.apiV1GroupsGroupIdGet({
                    groupId: parseInt(specificGroupId),
                    include: ['users']
                });
                
                if (group) {
                    // Get group members
                    const members = await groupsApi.apiV1GroupsGroupIdUsersGet({
                        groupId: parseInt(specificGroupId)
                    });
                    
                    group.members = members;
                    allGroups.push(group);
                }
            } catch (error) {
                console.error(`Unable to fetch group ${specificGroupId}. Make sure you have access to this group.`);
                process.exit(1);
            }
        } else {
            // Get all active courses
            const courses = await coursesApi.apiV1CoursesGet({
                enrollmentState: 'active'
            });

            if (!courses || courses.length === 0) {
                console.log('No active courses found.');
                return;
            }

            console.log(`Found ${courses.length} active course(s)\n`);
            
            // Get groups for each course
            for (const course of courses) {
                try {
                    // Get groups in this course
                    const courseGroups = await groupsApi.apiV1CoursesCourseIdGroupsGet({
                        courseId: course.id
                    });
                    
                    if (courseGroups && courseGroups.length > 0) {
                        for (const group of courseGroups) {
                            // Add course information
                            group.course_name = course.name;
                            group.course_code = course.course_code;
                            group.course_id = course.id;
                            
                            // Get members for each group
                            try {
                                const members = await groupsApi.apiV1GroupsGroupIdUsersGet({
                                    groupId: group.id
                                });
                                group.members = members || [];
                                allGroups.push(group);
                            } catch (error) {
                                // Skip if we can't get members
                                group.members = [];
                                group.error = 'Unable to fetch members';
                                allGroups.push(group);
                            }
                        }
                    }
                } catch (error) {
                    console.log(`  Skipping course "${course.name}" - Unable to fetch groups`);
                }
            }

            // Also get user's direct group memberships
            try {
                const userGroups = await groupsApi.apiV1UsersSelfGroupsGet({
                    contextType: 'Account'
                });
                
                if (userGroups && userGroups.length > 0) {
                    for (const group of userGroups) {
                        // Check if we already have this group
                        if (!allGroups.find(g => g.id === group.id)) {
                            try {
                                const members = await groupsApi.apiV1GroupsGroupIdUsersGet({
                                    groupId: group.id
                                });
                                group.members = members || [];
                                group.context_type = 'Account';
                                allGroups.push(group);
                            } catch (error) {
                                group.members = [];
                                group.error = 'Unable to fetch members';
                                allGroups.push(group);
                            }
                        }
                    }
                }
            } catch (error) {
                // Skip account groups if we can't fetch them
            }
        }

        if (allGroups.length === 0) {
            console.log('No groups found.');
            return;
        }

        // Sort groups by course and name
        allGroups.sort((a, b) => {
            if (a.course_name && b.course_name) {
                const courseCompare = a.course_name.localeCompare(b.course_name);
                if (courseCompare !== 0) return courseCompare;
            }
            return (a.name || '').localeCompare(b.name || '');
        });

        console.log('═'.repeat(80));
        console.log(`\n👥 GROUP MEMBERSHIPS (${allGroups.length} group(s))\n`);
        console.log('═'.repeat(80));

        // Display groups
        allGroups.forEach((group, index) => {
            console.log(`\n${index + 1}. ${group.name || 'Unnamed Group'}`);
            console.log(`   Group ID: ${group.id}`);
            
            if (group.course_name) {
                console.log(`   Course: ${group.course_name} (${group.course_code})`);
            } else if (group.context_type) {
                console.log(`   Context: ${group.context_type}`);
            }
            
            if (group.group_category_id) {
                console.log(`   Category ID: ${group.group_category_id}`);
            }
            
            if (group.description) {
                const preview = group.description.length > 100 
                    ? group.description.substring(0, 100) + '...' 
                    : group.description;
                console.log(`   Description: ${preview}`);
            }
            
            console.log(`   Members: ${group.members_count || group.members?.length || 0}`);
            
            if (group.members && group.members.length > 0) {
                console.log('\n   📋 Group Members:');
                group.members.forEach((member: any, memberIndex: number) => {
                    const name = member.name || member.display_name || member.short_name || 'Unknown';
                    const email = member.email || member.login_id || '';
                    
                    console.log(`      ${memberIndex + 1}. ${name}`);
                    if (email) {
                        console.log(`         Email: ${email}`);
                    }
                    if (member.id) {
                        console.log(`         User ID: ${member.id}`);
                    }
                    if (member.pronouns) {
                        console.log(`         Pronouns: ${member.pronouns}`);
                    }
                });
            } else if (group.error) {
                console.log(`   ⚠️  ${group.error}`);
            } else {
                console.log('   No members found or unable to retrieve member list');
            }
            
            console.log('─'.repeat(80));
        });

        // Summary statistics
        console.log('\n═'.repeat(80));
        console.log('\n📊 SUMMARY\n');
        
        const totalMembers = allGroups.reduce((sum, g) => sum + (g.members?.length || 0), 0);
        const groupsWithMembers = allGroups.filter(g => g.members && g.members.length > 0);
        
        console.log(`Total Groups: ${allGroups.length}`);
        console.log(`Groups with accessible members: ${groupsWithMembers.length}`);
        console.log(`Total unique group members visible: ${totalMembers}`);
        
        // Course breakdown
        const courseBreakdown = new Map();
        allGroups.forEach(g => {
            if (g.course_name) {
                const key = `${g.course_name} (${g.course_code})`;
                courseBreakdown.set(key, (courseBreakdown.get(key) || 0) + 1);
            }
        });
        
        if (courseBreakdown.size > 0) {
            console.log('\nGroups by Course:');
            courseBreakdown.forEach((count, courseName) => {
                console.log(`  ${courseName}: ${count} group(s)`);
            });
        }

        // Find your most active groups (with most members)
        const activeGroups = allGroups
            .filter(g => g.members && g.members.length > 0)
            .sort((a, b) => b.members.length - a.members.length)
            .slice(0, 3);
        
        if (activeGroups.length > 0) {
            console.log('\n🌟 Most Active Groups:');
            activeGroups.forEach(g => {
                console.log(`  ${g.name}: ${g.members.length} members`);
            });
        }

    } catch (error: any) {
        console.error('Error fetching group members:', error.message || error);
        process.exit(1);
    }
}

// Run the script
getGroupMembers().then(() => {
    console.log('\nScript completed successfully.');
}).catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
});