#!/usr/bin/env python3
"""
Fetch assignment due dates for a Canvas course.

This script retrieves all assignments for a specified course and displays them
organized by due date (upcoming, past, and no due date).

Usage:
    python fetch_assignment_due_dates.py <course_id>
    
Or set CANVAS_COURSE_ID in your .env file and run without arguments.
"""

import os
import sys
from datetime import datetime, timezone
from typing import List, Dict, Any, Optional
from pathlib import Path

# Add parent directory to path to import the SDK
sys.path.insert(0, str(Path(__file__).parent.parent / 'generated_python_sdk'))

from dotenv import load_dotenv
from canvas_lms_sdk import Configuration, ApiClient
from canvas_lms_sdk.api.assignments_api import AssignmentsApi
from canvas_lms_sdk.exceptions import ApiException


def load_environment():
    """Load environment variables from .env file."""
    # Try loading from parent directory first, then current directory
    env_path = Path(__file__).parent.parent / '.env'
    if env_path.exists():
        load_dotenv(env_path)
    else:
        load_dotenv()


def format_date(date_str: Optional[str]) -> str:
    """Format ISO date string to human-readable format."""
    if not date_str:
        return "Not set"
    
    try:
        dt = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
        return dt.strftime('%A, %B %d, %Y at %I:%M %p %Z')
    except (ValueError, AttributeError):
        return date_str


def calculate_days_until(date_str: Optional[str]) -> Optional[int]:
    """Calculate days until a given date."""
    if not date_str:
        return None
    
    try:
        dt = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
        now = datetime.now(timezone.utc)
        delta = dt - now
        return delta.days
    except (ValueError, AttributeError):
        return None


def display_assignment(assignment: Dict[str, Any], index: int):
    """Display assignment details with formatting."""
    print(f"{index}. {assignment.get('name', 'Unnamed Assignment')}")
    print(f"   Assignment ID: {assignment.get('id')}")
    
    due_at = assignment.get('due_at')
    print(f"   Due Date: {format_date(due_at)}")
    
    if due_at:
        days_until = calculate_days_until(due_at)
        if days_until is not None:
            if days_until > 0:
                print(f"   Time Until Due: {days_until} day(s)")
            elif days_until == 0:
                print(f"   Time Until Due: Due today!")
            else:
                print(f"   Time Since Due: {abs(days_until)} day(s) ago")
    
    points = assignment.get('points_possible')
    if points:
        print(f"   Points: {points}")
    
    submission_types = assignment.get('submission_types')
    if submission_types:
        print(f"   Submission Type: {', '.join(submission_types)}")
    
    # Check submission status
    if assignment.get('has_submitted_submissions'):
        print(f"   Status: Submitted ✓")
    elif assignment.get('locked_for_user'):
        print(f"   Status: Locked 🔒")
    else:
        print(f"   Status: Not submitted")
    
    html_url = assignment.get('html_url')
    if html_url:
        print(f"   URL: {html_url}")
    
    print('─' * 80)


def display_assignment_no_due(assignment: Dict[str, Any], index: int):
    """Display assignment without due date."""
    print(f"{index}. {assignment.get('name', 'Unnamed Assignment')}")
    print(f"   Assignment ID: {assignment.get('id')}")
    print(f"   Due Date: Not set")
    
    points = assignment.get('points_possible')
    if points:
        print(f"   Points: {points}")
    
    submission_types = assignment.get('submission_types')
    if submission_types:
        print(f"   Submission Type: {', '.join(submission_types)}")
    
    # Check submission status
    if assignment.get('has_submitted_submissions'):
        print(f"   Status: Submitted ✓")
    elif assignment.get('locked_for_user'):
        print(f"   Status: Locked 🔒")
    else:
        print(f"   Status: Available")
    
    html_url = assignment.get('html_url')
    if html_url:
        print(f"   URL: {html_url}")
    
    print('─' * 80)


def fetch_assignment_due_dates(course_id: Optional[str] = None):
    """Fetch and display assignment due dates for a course."""
    
    # Load environment variables
    load_environment()
    
    # Get Canvas credentials
    canvas_host = os.getenv('CANVAS_HOST') or os.getenv('CANVAS_API_URL')
    canvas_token = os.getenv('CANVAS_TOKEN') or os.getenv('CANVAS_API_KEY')
    
    if not canvas_host or not canvas_token:
        print("Error: CANVAS_HOST and CANVAS_TOKEN environment variables must be set.")
        print("Found in .env:")
        print(f"  CANVAS_HOST: {'Set' if canvas_host else 'Not set'}")
        print(f"  CANVAS_TOKEN: {'***' if canvas_token else 'Not set'}")
        sys.exit(1)
    
    # Get course ID from argument, command line, or environment
    if not course_id:
        if len(sys.argv) > 1:
            course_id = sys.argv[1]
        else:
            course_id = os.getenv('CANVAS_COURSE_ID')
    
    if not course_id:
        print("Error: Course ID must be provided")
        print("Usage: python fetch_assignment_due_dates.py <course_id>")
        print("Or set CANVAS_COURSE_ID in your .env file")
        sys.exit(1)
    
    # Convert course ID to integer
    try:
        course_id = int(course_id)
    except ValueError:
        print(f"Error: Course ID must be a number, got: {course_id}")
        sys.exit(1)
    
    # Clean up the host URL
    base_url = canvas_host.rstrip('/')
    if base_url.endswith('/api/v1'):
        base_url = base_url[:-7]  # Remove /api/v1
    
    print(f"Connecting to Canvas at: {base_url}")
    print(f"Fetching assignments for course ID: {course_id}")
    print()
    
    # Configure API client
    configuration = Configuration()
    configuration.host = f"{base_url}/api/v1"
    configuration.access_token = canvas_token
    
    # Create API client and assignments API instance
    with ApiClient(configuration) as api_client:
        assignments_api = AssignmentsApi(api_client)
        
        try:
            # Fetch all assignments for the course
            assignments = assignments_api.list_assignments_for_course(
                course_id=course_id,
                order_by='due_at'  # Order by due date
            )
            
            if not assignments:
                print("No assignments found for this course.")
                return
            
            print(f"Found {len(assignments)} assignment(s):\n")
            print('═' * 80)
            
            # Separate assignments by status
            upcoming = []
            past = []
            no_due_date = []
            now = datetime.now(timezone.utc)
            
            for assignment in assignments:
                assignment_dict = assignment.to_dict() if hasattr(assignment, 'to_dict') else assignment
                
                due_at = assignment_dict.get('due_at')
                if not due_at:
                    no_due_date.append(assignment_dict)
                else:
                    try:
                        due_date = datetime.fromisoformat(due_at.replace('Z', '+00:00'))
                        if due_date > now:
                            upcoming.append(assignment_dict)
                        else:
                            past.append(assignment_dict)
                    except (ValueError, AttributeError):
                        no_due_date.append(assignment_dict)
            
            # Display upcoming assignments
            if upcoming:
                print("\n📅 UPCOMING ASSIGNMENTS\n")
                print('─' * 80)
                for i, assignment in enumerate(upcoming, 1):
                    display_assignment(assignment, i)
            
            # Display past assignments
            if past:
                print("\n✓ PAST ASSIGNMENTS\n")
                print('─' * 80)
                for i, assignment in enumerate(past, 1):
                    display_assignment(assignment, i)
            
            # Display assignments with no due date
            if no_due_date:
                print("\n🔄 NO DUE DATE\n")
                print('─' * 80)
                for i, assignment in enumerate(no_due_date, 1):
                    display_assignment_no_due(assignment, i)
            
            # Summary statistics
            print('\n' + '═' * 80)
            print("\n📊 SUMMARY\n")
            print(f"  Total assignments: {len(assignments)}")
            print(f"  Upcoming: {len(upcoming)}")
            print(f"  Past due: {len(past)}")
            print(f"  No due date: {len(no_due_date)}")
            
            if upcoming:
                next_due = upcoming[0]
                due_at = next_due.get('due_at')
                if due_at:
                    days_until = calculate_days_until(due_at)
                    if days_until is not None:
                        print(f"\n  ⚠️  Next assignment due: \"{next_due.get('name', 'Unknown')}\"")
                        print(f"     Due in {days_until} day(s): {format_date(due_at)}")
            
        except ApiException as e:
            print("Error fetching assignments:")
            print(f"  Status: {e.status}")
            print(f"  Reason: {e.reason}")
            
            if e.status == 404:
                print(f"  Course ID {course_id} not found or you don't have access to it.")
            elif e.status == 401:
                print("  Authentication failed. Please check your API token.")
            
            if e.body:
                print(f"  Details: {e.body}")
            
            sys.exit(1)
        except Exception as e:
            print(f"Unexpected error: {e}")
            sys.exit(1)


if __name__ == "__main__":
    fetch_assignment_due_dates()
    print("\nScript completed successfully.")