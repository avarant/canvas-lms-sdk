# Canvas LMS SDK Examples for Students

This directory contains practical TypeScript/JavaScript examples demonstrating common student queries using the Canvas LMS SDK.

## Prerequisites

1. Set up environment variables in the parent directory's `.env` file:
```bash
CANVAS_HOST="https://your-canvas-instance.instructure.com"
CANVAS_TOKEN="your_api_token_here"
```

2. Install dependencies:
```bash
cd examples
npm install
```

## Available Examples

### 📚 Course Management

#### `list_active_courses.ts`
Lists all your active course enrollments with details.
```bash
npx ts-node list_active_courses.ts
```

#### `check_grades.ts`
View current grades and performance across all enrolled courses.
```bash
npx ts-node check_grades.ts
```

### 📝 Assignments

#### `get_upcoming_assignments.ts`
Shows all upcoming assignments across all courses, organized by due date.
```bash
npx ts-node get_upcoming_assignments.ts
```

#### `fetch_assignment_due_dates.ts`
Fetches all assignments for a specific course with due dates.
```bash
npx ts-node fetch_assignment_due_dates.ts <course_id>
# Or set CANVAS_COURSE_ID in .env
```

#### `track_missing_submissions.ts`
Identifies all missing, overdue, and unsubmitted assignments across all courses.
```bash
npx ts-node track_missing_submissions.ts
```

### 📢 Communication

#### `get_course_announcements.ts`
Fetches recent announcements from all active courses.
```bash
npx ts-node get_course_announcements.ts
```

#### `get_group_members.ts`
Lists all your group memberships and group members for collaborative projects.
```bash
npx ts-node get_group_members.ts
# Or get specific group: npx ts-node get_group_members.ts <group_id>
```

### 📅 Calendar & Planning

#### `export_calendar_events.ts`
Exports all assignment due dates and course events in various formats.
```bash
# Display in console (default)
npx ts-node export_calendar_events.ts

# Export to ICS file (for calendar apps)
npx ts-node export_calendar_events.ts ics

# Export to CSV (for Excel/Sheets)
npx ts-node export_calendar_events.ts csv

# Export to JSON (for processing)
npx ts-node export_calendar_events.ts json
```

## Running Examples

### TypeScript (Direct Execution)
```bash
npx ts-node <script_name>.ts
```

### JavaScript (Compile First)
```bash
# Compile all TypeScript files
npx tsc

# Run compiled JavaScript
node dist/<script_name>.js
```

## Common Use Cases for Students

1. **Daily Planning**: Run `get_upcoming_assignments.ts` each morning to see what's due
2. **Weekly Review**: Use `check_grades.ts` to monitor academic performance
3. **Stay Informed**: Run `get_course_announcements.ts` to catch important updates
4. **Submission Check**: Use `track_missing_submissions.ts` before deadlines
5. **Calendar Sync**: Export events with `export_calendar_events.ts ics` to sync with your calendar app
6. **Group Projects**: Find team members with `get_group_members.ts`

## Customization Tips

Each script can be customized:
- Modify date ranges for assignment filtering
- Change sort orders (by date, course, points)
- Adjust output formatting
- Add email notifications (requires additional setup)
- Filter by specific course attributes

## Troubleshooting

### Authentication Issues
- Ensure your API token has the necessary permissions
- Check that CANVAS_HOST doesn't include `/api/v1` (the SDK adds this)

### No Data Returned
- Verify you're enrolled in active courses
- Some features may be disabled by your institution
- Check course visibility settings

### TypeScript Errors
- Run `npm install` in the examples directory
- Ensure the SDK is built: `cd ../generated_typescript_sdk && npm run build`

## API Rate Limits

Canvas enforces rate limits. If running multiple scripts:
- Add delays between script executions
- Consider caching results locally
- Use the Canvas API pagination properly

## Contributing

To add new examples:
1. Follow the existing pattern for environment setup
2. Include error handling
3. Provide clear console output
4. Document usage in this README

## Security Notes

- Never commit your `.env` file with credentials
- Keep your API token secure
- Use read-only tokens when possible
- Rotate tokens periodically

## Additional Resources

- [Canvas API Documentation](https://canvas.instructure.com/doc/api/)
- [Canvas API Token Generation](https://community.canvaslms.com/t5/Student-Guide/How-do-I-manage-API-access-tokens-as-a-student/ta-p/273)