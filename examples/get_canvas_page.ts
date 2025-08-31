/**
 * Example: Get a specific Canvas page using the Canvas LMS SDK
 * 
 * This example demonstrates how to retrieve a specific Canvas page by its URL.
 * For example, to get a page like:
 * https://gatech.instructure.com/courses/458030/pages/arc-agi-project-overview
 * 
 * You would use:
 * - courseId: 458030
 * - urlOrId: 'arc-agi-project-overview'
 */

import * as dotenv from 'dotenv';
import { Configuration, PagesApi } from '../generated_typescript_sdk/src';

// Load environment variables from .env file
dotenv.config();

const CANVAS_HOST = process.env.CANVAS_HOST;
const CANVAS_TOKEN = process.env.CANVAS_TOKEN;

if (!CANVAS_HOST || !CANVAS_TOKEN) {
  console.error('Please set CANVAS_HOST and CANVAS_TOKEN environment variables in .env file');
  process.exit(1);
}

async function getCanvasPage(courseId: number, pageUrl: string) {
  // Configure the API client
  const configuration = new Configuration({
    basePath: CANVAS_HOST,
    headers: {
      'Authorization': `Bearer ${CANVAS_TOKEN}`
    }
  });

  // Create an instance of the Pages API
  const pagesApi = new PagesApi(configuration);

  try {
    // Retrieve the specific page
    const page = await pagesApi.apiV1CoursesCourseIdPagesUrlOrIdGet({
      courseId: courseId,
      urlOrId: pageUrl
    });

    console.log('\n📄 Page Details:');
    console.log('================');
    console.log(`Title: ${page.title}`);
    console.log(`URL: ${page.url}`);
    console.log(`Page ID: ${page.page_id}`);
    console.log(`Published: ${page.published}`);
    console.log(`Created: ${page.created_at}`);
    console.log(`Updated: ${page.updated_at}`);
    console.log(`Front Page: ${page.front_page}`);
    
    if (page.body) {
      console.log('\n📝 Page Content (HTML):');
      console.log('========================');
      // Show first 500 characters of content
      const preview = page.body.substring(0, 500);
      console.log(preview + (page.body.length > 500 ? '...' : ''));
      console.log(`\nTotal content length: ${page.body.length} characters`);
    }

    return page;
  } catch (error) {
    console.error('Error fetching page:', error);
    throw error;
  }
}

async function listAllPagesInCourse(courseId: number) {
  // Configure the API client
  const configuration = new Configuration({
    basePath: CANVAS_HOST,
    headers: {
      'Authorization': `Bearer ${CANVAS_TOKEN}`
    }
  });

  // Create an instance of the Pages API
  const pagesApi = new PagesApi(configuration);

  try {
    // List all pages in the course
    const pages = await pagesApi.apiV1CoursesCourseIdPagesGet({
      courseId: courseId,
      sort: 'title' as any,
      order: 'asc' as any
    });

    console.log(`\n📚 Found ${pages.length} pages in course ${courseId}:`);
    console.log('==========================================');
    
    pages.forEach((page, index) => {
      console.log(`${index + 1}. ${page.title}`);
      console.log(`   URL: ${page.url}`);
      console.log(`   Published: ${page.published}`);
      console.log(`   Updated: ${page.updated_at}`);
      console.log('');
    });

    return pages;
  } catch (error) {
    console.error('Error listing pages:', error);
    throw error;
  }
}

// Main execution
async function main() {
  // Get command line arguments
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    console.log('Usage:');
    console.log('  List all pages:     npx ts-node get_canvas_page.ts <course_id>');
    console.log('  Get specific page:  npx ts-node get_canvas_page.ts <course_id> <page_url>');
    console.log('');
    console.log('Examples:');
    console.log('  npx ts-node get_canvas_page.ts 458030');
    console.log('  npx ts-node get_canvas_page.ts 458030 arc-agi-project-overview');
    process.exit(1);
  }

  const courseId = parseInt(args[0]);
  const pageUrl = args[1];

  if (isNaN(courseId)) {
    console.error('Course ID must be a number');
    process.exit(1);
  }

  try {
    if (pageUrl) {
      // Get specific page
      console.log(`\nFetching page "${pageUrl}" from course ${courseId}...`);
      await getCanvasPage(courseId, pageUrl);
    } else {
      // List all pages
      console.log(`\nListing all pages in course ${courseId}...`);
      await listAllPagesInCourse(courseId);
    }
  } catch (error) {
    console.error('\nFailed to complete operation:', error);
    process.exit(1);
  }
}

// Run the main function
main();