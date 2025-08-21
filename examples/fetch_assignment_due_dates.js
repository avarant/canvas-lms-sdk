"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var path = require("path");
// Load environment variables from parent .env
var isCompiled = __dirname.endsWith('dist');
var envPath = isCompiled ? path.join(__dirname, '../../.env') : path.join(__dirname, '../.env');
dotenv.config({ path: envPath });
// Dynamic import to handle different paths when running from TypeScript vs compiled JavaScript
var sdkPath = isCompiled
    ? '../../generated_typescript_sdk/dist'
    : '../generated_typescript_sdk/dist';
var _a = require(sdkPath), AssignmentsApi = _a.AssignmentsApi, Configuration = _a.Configuration;
function fetchAssignmentDueDates(courseId) {
    return __awaiter(this, void 0, void 0, function () {
        var canvasHost, canvasToken, targetCourseId, basePath, configuration, assignmentsApi, assignments, upcoming_1, past_1, noDueDate_1, now_1, nextDue, dueDate, daysUntil, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvasHost = process.env.CANVAS_HOST || process.env.CANVAS_API_URL;
                    canvasToken = process.env.CANVAS_TOKEN || process.env.CANVAS_API_KEY;
                    if (!canvasHost || !canvasToken) {
                        console.error('Error: CANVAS_HOST and CANVAS_TOKEN environment variables must be set.');
                        console.error('Found in .env:');
                        console.error('  CANVAS_HOST:', canvasHost ? 'Set' : 'Not set');
                        console.error('  CANVAS_TOKEN:', canvasToken ? '***' : 'Not set');
                        process.exit(1);
                    }
                    targetCourseId = courseId || process.argv[2] || process.env.CANVAS_COURSE_ID;
                    if (!targetCourseId) {
                        console.error('Error: Course ID must be provided');
                        console.error('Usage: node fetch_assignment_due_dates.js <course_id>');
                        console.error('Or set CANVAS_COURSE_ID in your .env file');
                        process.exit(1);
                    }
                    basePath = canvasHost.replace(/\/$/, '');
                    basePath = basePath.replace(/\/api\/v1$/, ''); // Remove /api/v1 if present
                    console.log('Connecting to Canvas at:', basePath);
                    console.log('Fetching assignments for course ID:', targetCourseId);
                    console.log('');
                    configuration = new Configuration({
                        basePath: basePath,
                        headers: {
                            'Authorization': "Bearer ".concat(canvasToken)
                        }
                    });
                    assignmentsApi = new AssignmentsApi(configuration);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, assignmentsApi.apiV1CoursesCourseIdAssignmentsGet({
                            courseId: targetCourseId,
                            orderBy: 'due_at' // Order by due date
                        })];
                case 2:
                    assignments = _a.sent();
                    if (!assignments || assignments.length === 0) {
                        console.log('No assignments found for this course.');
                        return [2 /*return*/];
                    }
                    console.log("Found ".concat(assignments.length, " assignment(s):\n"));
                    console.log('═'.repeat(80));
                    upcoming_1 = [];
                    past_1 = [];
                    noDueDate_1 = [];
                    now_1 = new Date();
                    assignments.forEach(function (assignment) {
                        if (!assignment.due_at) {
                            noDueDate_1.push(assignment);
                        }
                        else {
                            var dueDate = new Date(assignment.due_at);
                            if (dueDate > now_1) {
                                upcoming_1.push(assignment);
                            }
                            else {
                                past_1.push(assignment);
                            }
                        }
                    });
                    // Display upcoming assignments
                    if (upcoming_1.length > 0) {
                        console.log('\n📅 UPCOMING ASSIGNMENTS\n');
                        console.log('─'.repeat(80));
                        upcoming_1.forEach(function (assignment, index) {
                            displayAssignment(assignment, index + 1);
                        });
                    }
                    // Display past assignments
                    if (past_1.length > 0) {
                        console.log('\n✓ PAST ASSIGNMENTS\n');
                        console.log('─'.repeat(80));
                        past_1.forEach(function (assignment, index) {
                            displayAssignment(assignment, index + 1);
                        });
                    }
                    // Display assignments with no due date
                    if (noDueDate_1.length > 0) {
                        console.log('\n🔄 NO DUE DATE\n');
                        console.log('─'.repeat(80));
                        noDueDate_1.forEach(function (assignment, index) {
                            displayAssignmentNoDue(assignment, index + 1);
                        });
                    }
                    // Summary statistics
                    console.log('\n═'.repeat(80));
                    console.log('\n📊 SUMMARY\n');
                    console.log("  Total assignments: ".concat(assignments.length));
                    console.log("  Upcoming: ".concat(upcoming_1.length));
                    console.log("  Past due: ".concat(past_1.length));
                    console.log("  No due date: ".concat(noDueDate_1.length));
                    if (upcoming_1.length > 0) {
                        nextDue = upcoming_1[0];
                        dueDate = new Date(nextDue.due_at);
                        daysUntil = Math.ceil((dueDate.getTime() - now_1.getTime()) / (1000 * 60 * 60 * 24));
                        console.log("\n  \u26A0\uFE0F  Next assignment due: \"".concat(nextDue.name, "\""));
                        console.log("     Due in ".concat(daysUntil, " day(s): ").concat(formatDate(dueDate)));
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching assignments:');
                    if (error_1.response) {
                        console.error("  Status: ".concat(error_1.response.status));
                        console.error("  Message: ".concat(error_1.response.statusText));
                        if (error_1.response.status === 404) {
                            console.error("  Course ID ".concat(targetCourseId, " not found or you don't have access to it."));
                        }
                        else if (error_1.response.status === 401) {
                            console.error("  Authentication failed. Please check your API token.");
                        }
                        if (error_1.response.body) {
                            console.error("  Details:", error_1.response.body);
                        }
                    }
                    else if (error_1.request) {
                        console.error('  No response received from Canvas API');
                        console.error('  Please check your network connection and Canvas URL');
                    }
                    else {
                        console.error("  ".concat(error_1.message || error_1));
                    }
                    process.exit(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function displayAssignment(assignment, index) {
    var dueDate = new Date(assignment.due_at);
    var now = new Date();
    var daysUntil = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    console.log("".concat(index, ". ").concat(assignment.name));
    console.log("   Assignment ID: ".concat(assignment.id));
    console.log("   Due Date: ".concat(formatDate(dueDate)));
    if (daysUntil > 0) {
        console.log("   Time Until Due: ".concat(daysUntil, " day(s)"));
    }
    else if (daysUntil === 0) {
        console.log("   Time Until Due: Due today!");
    }
    else {
        console.log("   Time Since Due: ".concat(Math.abs(daysUntil), " day(s) ago"));
    }
    if (assignment.points_possible) {
        console.log("   Points: ".concat(assignment.points_possible));
    }
    if (assignment.submission_types && assignment.submission_types.length > 0) {
        console.log("   Submission Type: ".concat(assignment.submission_types.join(', ')));
    }
    if (assignment.has_submitted_submissions) {
        console.log("   Status: Submitted \u2713");
    }
    else if (assignment.locked_for_user) {
        console.log("   Status: Locked \uD83D\uDD12");
    }
    else {
        console.log("   Status: Not submitted");
    }
    if (assignment.html_url) {
        console.log("   URL: ".concat(assignment.html_url));
    }
    console.log('─'.repeat(80));
}
function displayAssignmentNoDue(assignment, index) {
    console.log("".concat(index, ". ").concat(assignment.name));
    console.log("   Assignment ID: ".concat(assignment.id));
    console.log("   Due Date: Not set");
    if (assignment.points_possible) {
        console.log("   Points: ".concat(assignment.points_possible));
    }
    if (assignment.submission_types && assignment.submission_types.length > 0) {
        console.log("   Submission Type: ".concat(assignment.submission_types.join(', ')));
    }
    if (assignment.has_submitted_submissions) {
        console.log("   Status: Submitted \u2713");
    }
    else if (assignment.locked_for_user) {
        console.log("   Status: Locked \uD83D\uDD12");
    }
    else {
        console.log("   Status: Available");
    }
    if (assignment.html_url) {
        console.log("   URL: ".concat(assignment.html_url));
    }
    console.log('─'.repeat(80));
}
function formatDate(date) {
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    };
    return date.toLocaleString('en-US', options);
}
// Run the script
fetchAssignmentDueDates().then(function () {
    console.log('\nScript completed successfully.');
}).catch(function (error) {
    console.error('Unexpected error:', error);
    process.exit(1);
});
