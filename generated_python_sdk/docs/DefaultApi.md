# canvas_lms_sdk.DefaultApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_account_id_group_categories_get**](DefaultApi.md#accounts_account_id_group_categories_get) | **GET** /accounts/{account_id}/group_categories | List group categories for an account
[**accounts_account_id_group_categories_post**](DefaultApi.md#accounts_account_id_group_categories_post) | **POST** /accounts/{account_id}/group_categories | Create a Group Category in an account
[**accounts_account_id_lti_registration_by_client_id_client_id_get**](DefaultApi.md#accounts_account_id_lti_registration_by_client_id_client_id_get) | **GET** /accounts/{account_id}/lti_registration_by_client_id/{client_id} | Show an LTI Registration (via the client_id)
[**accounts_account_id_lti_registrations_get**](DefaultApi.md#accounts_account_id_lti_registrations_get) | **GET** /accounts/{account_id}/lti_registrations | List LTI Registrations in an account
[**accounts_account_id_lti_registrations_id_bind_post**](DefaultApi.md#accounts_account_id_lti_registrations_id_bind_post) | **POST** /accounts/{account_id}/lti_registrations/{id}/bind | Bind an LTI Registration to an Account
[**accounts_account_id_lti_registrations_id_delete**](DefaultApi.md#accounts_account_id_lti_registrations_id_delete) | **DELETE** /accounts/{account_id}/lti_registrations/{id} | Delete an LTI Registration
[**accounts_account_id_lti_registrations_id_get**](DefaultApi.md#accounts_account_id_lti_registrations_id_get) | **GET** /accounts/{account_id}/lti_registrations/{id} | Show an LTI Registration
[**accounts_account_id_lti_registrations_id_put**](DefaultApi.md#accounts_account_id_lti_registrations_id_put) | **PUT** /accounts/{account_id}/lti_registrations/{id} | Update an LTI Registration
[**accounts_account_id_lti_registrations_id_reset_put**](DefaultApi.md#accounts_account_id_lti_registrations_id_reset_put) | **PUT** /accounts/{account_id}/lti_registrations/{id}/reset | Reset an LTI Registration to Defaults
[**accounts_account_id_lti_registrations_post**](DefaultApi.md#accounts_account_id_lti_registrations_post) | **POST** /accounts/{account_id}/lti_registrations | Create an LTI Registration
[**api_lti_assignments_assignment_id_submissions_submission_id_get**](DefaultApi.md#api_lti_assignments_assignment_id_submissions_submission_id_get) | **GET** /api/lti/assignments/{assignment_id}/submissions/{submission_id} | Get a single submission
[**api_lti_assignments_assignment_id_submissions_submission_id_history_get**](DefaultApi.md#api_lti_assignments_assignment_id_submissions_submission_id_history_get) | **GET** /api/lti/assignments/{assignment_id}/submissions/{submission_id}/history | Get the history of a single submission
[**api_lti_groups_group_id_users_get**](DefaultApi.md#api_lti_groups_group_id_users_get) | **GET** /api/lti/groups/{group_id}/users | Get all users in a group (lti)
[**api_lti_users_id_get**](DefaultApi.md#api_lti_users_id_get) | **GET** /api/lti/users/{id} | Get a single user (lti)
[**api_v1_accounts_account_id_developer_keys_get**](DefaultApi.md#api_v1_accounts_account_id_developer_keys_get) | **GET** /api/v1/accounts/{account_id}/developer_keys | List Developer Keys
[**api_v1_accounts_account_id_developer_keys_post**](DefaultApi.md#api_v1_accounts_account_id_developer_keys_post) | **POST** /api/v1/accounts/{account_id}/developer_keys | Create a Developer Key
[**api_v1_accounts_account_id_enrollments_id_get**](DefaultApi.md#api_v1_accounts_account_id_enrollments_id_get) | **GET** /api/v1/accounts/{account_id}/enrollments/{id} | Get an Enrollment by ID
[**api_v1_accounts_account_id_external_tools_get**](DefaultApi.md#api_v1_accounts_account_id_external_tools_get) | **GET** /api/v1/accounts/{account_id}/external_tools | List external tools (account)
[**api_v1_accounts_account_id_sis_import_errors_get**](DefaultApi.md#api_v1_accounts_account_id_sis_import_errors_get) | **GET** /api/v1/accounts/{account_id}/sis_import_errors | Get SIS import error list for an account
[**api_v1_accounts_account_id_sis_imports_id_errors_get**](DefaultApi.md#api_v1_accounts_account_id_sis_imports_id_errors_get) | **GET** /api/v1/accounts/{account_id}/sis_imports/{id}/errors | Get SIS import error list for a specific SIS import
[**api_v1_accounts_account_id_temporary_enrollment_pairings_get**](DefaultApi.md#api_v1_accounts_account_id_temporary_enrollment_pairings_get) | **GET** /api/v1/accounts/{account_id}/temporary_enrollment_pairings | List temporary enrollment pairings
[**api_v1_accounts_account_id_temporary_enrollment_pairings_id_delete**](DefaultApi.md#api_v1_accounts_account_id_temporary_enrollment_pairings_id_delete) | **DELETE** /api/v1/accounts/{account_id}/temporary_enrollment_pairings/{id} | Delete Temporary Enrollment Pairing
[**api_v1_accounts_account_id_temporary_enrollment_pairings_id_get**](DefaultApi.md#api_v1_accounts_account_id_temporary_enrollment_pairings_id_get) | **GET** /api/v1/accounts/{account_id}/temporary_enrollment_pairings/{id} | Get a single temporary enrollment pairing
[**api_v1_accounts_account_id_temporary_enrollment_pairings_new_get**](DefaultApi.md#api_v1_accounts_account_id_temporary_enrollment_pairings_new_get) | **GET** /api/v1/accounts/{account_id}/temporary_enrollment_pairings/new | Initialize an unsaved TemporaryEnrollmentPairing
[**api_v1_accounts_account_id_temporary_enrollment_pairings_post**](DefaultApi.md#api_v1_accounts_account_id_temporary_enrollment_pairings_post) | **POST** /api/v1/accounts/{account_id}/temporary_enrollment_pairings | Create Temporary Enrollment Pairing
[**api_v1_accounts_get**](DefaultApi.md#api_v1_accounts_get) | **GET** /api/v1/accounts | List accounts
[**api_v1_courses_course_id_assignment_groups_assignment_group_id_delete**](DefaultApi.md#api_v1_courses_course_id_assignment_groups_assignment_group_id_delete) | **DELETE** /api/v1/courses/{course_id}/assignment_groups/{assignment_group_id} | Destroy an Assignment Group
[**api_v1_courses_course_id_assignment_groups_assignment_group_id_get**](DefaultApi.md#api_v1_courses_course_id_assignment_groups_assignment_group_id_get) | **GET** /api/v1/courses/{course_id}/assignment_groups/{assignment_group_id} | Get an Assignment Group
[**api_v1_courses_course_id_assignment_groups_assignment_group_id_put**](DefaultApi.md#api_v1_courses_course_id_assignment_groups_assignment_group_id_put) | **PUT** /api/v1/courses/{course_id}/assignment_groups/{assignment_group_id} | Edit an Assignment Group
[**api_v1_courses_course_id_assignment_groups_get**](DefaultApi.md#api_v1_courses_course_id_assignment_groups_get) | **GET** /api/v1/courses/{course_id}/assignment_groups | List assignment groups
[**api_v1_courses_course_id_assignment_groups_post**](DefaultApi.md#api_v1_courses_course_id_assignment_groups_post) | **POST** /api/v1/courses/{course_id}/assignment_groups | Create an Assignment Group
[**api_v1_courses_course_id_content_migrations_content_migration_id_migration_issues_get**](DefaultApi.md#api_v1_courses_course_id_content_migrations_content_migration_id_migration_issues_get) | **GET** /api/v1/courses/{course_id}/content_migrations/{content_migration_id}/migration_issues | List migration issues
[**api_v1_courses_course_id_discussion_topics_get**](DefaultApi.md#api_v1_courses_course_id_discussion_topics_get) | **GET** /api/v1/courses/{course_id}/discussion_topics | Returns the paginated list of discussion topics for a course.
[**api_v1_courses_course_id_enrollments_get**](DefaultApi.md#api_v1_courses_course_id_enrollments_get) | **GET** /api/v1/courses/{course_id}/enrollments | Return a paginated list of enrollments in a course
[**api_v1_courses_course_id_enrollments_id_accept_post**](DefaultApi.md#api_v1_courses_course_id_enrollments_id_accept_post) | **POST** /api/v1/courses/{course_id}/enrollments/{id}/accept | Accept a pending course invitation
[**api_v1_courses_course_id_enrollments_id_delete**](DefaultApi.md#api_v1_courses_course_id_enrollments_id_delete) | **DELETE** /api/v1/courses/{course_id}/enrollments/{id} | Conclude, deactivate, or delete an enrollment
[**api_v1_courses_course_id_enrollments_id_reactivate_put**](DefaultApi.md#api_v1_courses_course_id_enrollments_id_reactivate_put) | **PUT** /api/v1/courses/{course_id}/enrollments/{id}/reactivate | Re-activate an inactive enrollment
[**api_v1_courses_course_id_enrollments_id_reject_post**](DefaultApi.md#api_v1_courses_course_id_enrollments_id_reject_post) | **POST** /api/v1/courses/{course_id}/enrollments/{id}/reject | Reject a pending course invitation
[**api_v1_courses_course_id_enrollments_post**](DefaultApi.md#api_v1_courses_course_id_enrollments_post) | **POST** /api/v1/courses/{course_id}/enrollments | Enroll a user in a course
[**api_v1_courses_course_id_external_tools_get**](DefaultApi.md#api_v1_courses_course_id_external_tools_get) | **GET** /api/v1/courses/{course_id}/external_tools | List external tools
[**api_v1_courses_course_id_lti_resource_links_bulk_post**](DefaultApi.md#api_v1_courses_course_id_lti_resource_links_bulk_post) | **POST** /api/v1/courses/{course_id}/lti_resource_links/bulk | Bulk Create LTI Resource Links
[**api_v1_courses_course_id_lti_resource_links_get**](DefaultApi.md#api_v1_courses_course_id_lti_resource_links_get) | **GET** /api/v1/courses/{course_id}/lti_resource_links | Returns all Resource Links in the specified course
[**api_v1_courses_course_id_lti_resource_links_id_delete**](DefaultApi.md#api_v1_courses_course_id_lti_resource_links_id_delete) | **DELETE** /api/v1/courses/{course_id}/lti_resource_links/{id} | Delete an LTI Resource Link
[**api_v1_courses_course_id_lti_resource_links_id_get**](DefaultApi.md#api_v1_courses_course_id_lti_resource_links_id_get) | **GET** /api/v1/courses/{course_id}/lti_resource_links/{id} | Show an LTI Resource Link
[**api_v1_courses_course_id_lti_resource_links_id_put**](DefaultApi.md#api_v1_courses_course_id_lti_resource_links_id_put) | **PUT** /api/v1/courses/{course_id}/lti_resource_links/{id} | Update an LTI Resource Link
[**api_v1_courses_course_id_lti_resource_links_post**](DefaultApi.md#api_v1_courses_course_id_lti_resource_links_post) | **POST** /api/v1/courses/{course_id}/lti_resource_links | Create an LTI Resource Link
[**api_v1_courses_course_id_quizzes_get**](DefaultApi.md#api_v1_courses_course_id_quizzes_get) | **GET** /api/v1/courses/{course_id}/quizzes | List quizzes in a course
[**api_v1_courses_course_id_quizzes_id_delete**](DefaultApi.md#api_v1_courses_course_id_quizzes_id_delete) | **DELETE** /api/v1/courses/{course_id}/quizzes/{id} | Delete a quiz
[**api_v1_courses_course_id_quizzes_id_get**](DefaultApi.md#api_v1_courses_course_id_quizzes_id_get) | **GET** /api/v1/courses/{course_id}/quizzes/{id} | Get a single quiz
[**api_v1_courses_course_id_quizzes_id_put**](DefaultApi.md#api_v1_courses_course_id_quizzes_id_put) | **PUT** /api/v1/courses/{course_id}/quizzes/{id} | Edit a quiz
[**api_v1_courses_course_id_quizzes_id_reorder_post**](DefaultApi.md#api_v1_courses_course_id_quizzes_id_reorder_post) | **POST** /api/v1/courses/{course_id}/quizzes/{id}/reorder | Reorder quiz items
[**api_v1_courses_course_id_quizzes_id_validate_access_code_post**](DefaultApi.md#api_v1_courses_course_id_quizzes_id_validate_access_code_post) | **POST** /api/v1/courses/{course_id}/quizzes/{id}/validate_access_code | Validate quiz access code
[**api_v1_courses_course_id_quizzes_post**](DefaultApi.md#api_v1_courses_course_id_quizzes_post) | **POST** /api/v1/courses/{course_id}/quizzes | Create a quiz
[**api_v1_courses_course_id_quizzes_quiz_id_questions_get**](DefaultApi.md#api_v1_courses_course_id_quizzes_quiz_id_questions_get) | **GET** /api/v1/courses/{course_id}/quizzes/{quiz_id}/questions | List questions in a quiz or a submission
[**api_v1_courses_course_id_quizzes_quiz_id_questions_id_delete**](DefaultApi.md#api_v1_courses_course_id_quizzes_quiz_id_questions_id_delete) | **DELETE** /api/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id} | Delete a quiz question
[**api_v1_courses_course_id_quizzes_quiz_id_questions_id_get**](DefaultApi.md#api_v1_courses_course_id_quizzes_quiz_id_questions_id_get) | **GET** /api/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id} | Get a single quiz question
[**api_v1_courses_course_id_quizzes_quiz_id_questions_id_put**](DefaultApi.md#api_v1_courses_course_id_quizzes_quiz_id_questions_id_put) | **PUT** /api/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id} | Update an existing quiz question
[**api_v1_courses_course_id_quizzes_quiz_id_questions_post**](DefaultApi.md#api_v1_courses_course_id_quizzes_quiz_id_questions_post) | **POST** /api/v1/courses/{course_id}/quizzes/{quiz_id}/questions | Create a single quiz question
[**api_v1_courses_course_id_sections_get**](DefaultApi.md#api_v1_courses_course_id_sections_get) | **GET** /api/v1/courses/{course_id}/sections | A paginated list of the sections for this course.
[**api_v1_courses_course_id_sections_id_get**](DefaultApi.md#api_v1_courses_course_id_sections_id_get) | **GET** /api/v1/courses/{course_id}/sections/{id} | Gets details about a specific section.
[**api_v1_courses_course_id_sections_post**](DefaultApi.md#api_v1_courses_course_id_sections_post) | **POST** /api/v1/courses/{course_id}/sections | Creates a new section for this course.
[**api_v1_courses_course_id_users_user_id_last_attended_put**](DefaultApi.md#api_v1_courses_course_id_users_user_id_last_attended_put) | **PUT** /api/v1/courses/{course_id}/users/{user_id}/last_attended | Add last attended date to a student enrollment
[**api_v1_courses_course_id_what_if_grades_reset_put**](DefaultApi.md#api_v1_courses_course_id_what_if_grades_reset_put) | **PUT** /api/v1/courses/{course_id}/what_if_grades/reset | Reset the what-if scores for the current user for an entire course and recalculate grades
[**api_v1_developer_keys_id_delete**](DefaultApi.md#api_v1_developer_keys_id_delete) | **DELETE** /api/v1/developer_keys/{id} | Delete a Developer Key
[**api_v1_developer_keys_id_put**](DefaultApi.md#api_v1_developer_keys_id_put) | **PUT** /api/v1/developer_keys/{id} | Update a Developer Key
[**api_v1_groups_group_id_discussion_topics_get**](DefaultApi.md#api_v1_groups_group_id_discussion_topics_get) | **GET** /api/v1/groups/{group_id}/discussion_topics | Returns the paginated list of discussion topics for a group.
[**api_v1_quiz_submissions_quiz_submission_id_questions_get**](DefaultApi.md#api_v1_quiz_submissions_quiz_submission_id_questions_get) | **GET** /api/v1/quiz_submissions/{quiz_submission_id}/questions | Get a list of all the question records for this quiz submission.
[**api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put**](DefaultApi.md#api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put) | **PUT** /api/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/flag | Set a flag on a quiz question to indicate that you want to return to it later.
[**api_v1_quiz_submissions_quiz_submission_id_questions_id_formatted_answer_get**](DefaultApi.md#api_v1_quiz_submissions_quiz_submission_id_questions_id_formatted_answer_get) | **GET** /api/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/formatted_answer | Matches the intended behavior of the UI when a numerical answer is entered and returns the resulting formatted number.
[**api_v1_quiz_submissions_quiz_submission_id_questions_id_unflag_put**](DefaultApi.md#api_v1_quiz_submissions_quiz_submission_id_questions_id_unflag_put) | **PUT** /api/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/unflag | Remove the flag that you previously set on a quiz question after you&#39;ve returned to it.
[**api_v1_quiz_submissions_quiz_submission_id_questions_post**](DefaultApi.md#api_v1_quiz_submissions_quiz_submission_id_questions_post) | **POST** /api/v1/quiz_submissions/{quiz_submission_id}/questions | Provide or update an answer to one or more QuizQuestions.
[**api_v1_sections_id_crosslist_delete**](DefaultApi.md#api_v1_sections_id_crosslist_delete) | **DELETE** /api/v1/sections/{id}/crosslist | Undo cross-listing of a Section.
[**api_v1_sections_id_crosslist_new_course_id_post**](DefaultApi.md#api_v1_sections_id_crosslist_new_course_id_post) | **POST** /api/v1/sections/{id}/crosslist/{new_course_id} | Move the section to another course.
[**api_v1_sections_id_delete**](DefaultApi.md#api_v1_sections_id_delete) | **DELETE** /api/v1/sections/{id} | Delete an existing section.
[**api_v1_sections_id_get**](DefaultApi.md#api_v1_sections_id_get) | **GET** /api/v1/sections/{id} | Gets details about a specific section.
[**api_v1_sections_id_put**](DefaultApi.md#api_v1_sections_id_put) | **PUT** /api/v1/sections/{id} | Modify an existing section.
[**api_v1_sections_section_id_enrollments_get**](DefaultApi.md#api_v1_sections_section_id_enrollments_get) | **GET** /api/v1/sections/{section_id}/enrollments | Return a paginated list of enrollments in a section
[**api_v1_submissions_id_what_if_grades_put**](DefaultApi.md#api_v1_submissions_id_what_if_grades_put) | **PUT** /api/v1/submissions/{id}/what_if_grades | Update a submission&#39;s what-if score and calculate grades
[**api_v1_users_self_groups_get**](DefaultApi.md#api_v1_users_self_groups_get) | **GET** /api/v1/users/self/groups | List your groups
[**api_v1_users_user_id_content_shares_id_add_users_post**](DefaultApi.md#api_v1_users_user_id_content_shares_id_add_users_post) | **POST** /api/v1/users/{user_id}/content_shares/{id}/add_users | Send a previously created content share to additional users
[**api_v1_users_user_id_content_shares_id_delete**](DefaultApi.md#api_v1_users_user_id_content_shares_id_delete) | **DELETE** /api/v1/users/{user_id}/content_shares/{id} | Remove a content share from your list
[**api_v1_users_user_id_content_shares_id_get**](DefaultApi.md#api_v1_users_user_id_content_shares_id_get) | **GET** /api/v1/users/{user_id}/content_shares/{id} | Get a content share
[**api_v1_users_user_id_content_shares_id_put**](DefaultApi.md#api_v1_users_user_id_content_shares_id_put) | **PUT** /api/v1/users/{user_id}/content_shares/{id} | Mark a content share read or unread
[**api_v1_users_user_id_content_shares_post**](DefaultApi.md#api_v1_users_user_id_content_shares_post) | **POST** /api/v1/users/{user_id}/content_shares | Share content directly between two or more users
[**api_v1_users_user_id_content_shares_received_get**](DefaultApi.md#api_v1_users_user_id_content_shares_received_get) | **GET** /api/v1/users/{user_id}/content_shares/received | List content shares received by a user
[**api_v1_users_user_id_content_shares_sent_get**](DefaultApi.md#api_v1_users_user_id_content_shares_sent_get) | **GET** /api/v1/users/{user_id}/content_shares/sent | List content shares sent by a user
[**api_v1_users_user_id_content_shares_unread_count_get**](DefaultApi.md#api_v1_users_user_id_content_shares_unread_count_get) | **GET** /api/v1/users/{user_id}/content_shares/unread_count | Get the number of unread content shares received by a user
[**api_v1_users_user_id_enrollments_get**](DefaultApi.md#api_v1_users_user_id_enrollments_get) | **GET** /api/v1/users/{user_id}/enrollments | Return a paginated list of a user&#39;s enrollments
[**api_v1_users_user_id_temporary_enrollment_status_get**](DefaultApi.md#api_v1_users_user_id_temporary_enrollment_status_get) | **GET** /api/v1/users/{user_id}/temporary_enrollment_status | Show temporary enrollment recipient and provider status
[**courses_course_id_group_categories_bulk_manage_differentiation_tag_post**](DefaultApi.md#courses_course_id_group_categories_bulk_manage_differentiation_tag_post) | **POST** /courses/{course_id}/group_categories/bulk_manage_differentiation_tag | Bulk manage differentiation tags
[**courses_course_id_group_categories_get**](DefaultApi.md#courses_course_id_group_categories_get) | **GET** /courses/{course_id}/group_categories | List group categories for a course
[**courses_course_id_group_categories_post**](DefaultApi.md#courses_course_id_group_categories_post) | **POST** /courses/{course_id}/group_categories | Create a Group Category in a course
[**courses_course_id_quizzes_assignment_id_delete**](DefaultApi.md#courses_course_id_quizzes_assignment_id_delete) | **DELETE** /courses/{course_id}/quizzes/{assignment_id} | Delete a new quiz
[**courses_course_id_quizzes_assignment_id_get**](DefaultApi.md#courses_course_id_quizzes_assignment_id_get) | **GET** /courses/{course_id}/quizzes/{assignment_id} | Get a new quiz
[**courses_course_id_quizzes_assignment_id_patch**](DefaultApi.md#courses_course_id_quizzes_assignment_id_patch) | **PATCH** /courses/{course_id}/quizzes/{assignment_id} | Update a single quiz
[**courses_course_id_quizzes_get**](DefaultApi.md#courses_course_id_quizzes_get) | **GET** /courses/{course_id}/quizzes | List new quizzes
[**courses_course_id_quizzes_post**](DefaultApi.md#courses_course_id_quizzes_post) | **POST** /courses/{course_id}/quizzes | Create a new quiz
[**delete_assignment**](DefaultApi.md#delete_assignment) | **DELETE** /api/v1/courses/{course_id}/assignments/{id} | Delete the given assignment
[**group_categories_group_category_id_assign_unassigned_members_post**](DefaultApi.md#group_categories_group_category_id_assign_unassigned_members_post) | **POST** /group_categories/{group_category_id}/assign_unassigned_members | Assign unassigned members
[**group_categories_group_category_id_delete**](DefaultApi.md#group_categories_group_category_id_delete) | **DELETE** /group_categories/{group_category_id} | Delete a Group Category
[**group_categories_group_category_id_export_get**](DefaultApi.md#group_categories_group_category_id_export_get) | **GET** /group_categories/{group_category_id}/export | Export groups and users in category
[**group_categories_group_category_id_get**](DefaultApi.md#group_categories_group_category_id_get) | **GET** /group_categories/{group_category_id} | Get a single group category
[**group_categories_group_category_id_groups_get**](DefaultApi.md#group_categories_group_category_id_groups_get) | **GET** /group_categories/{group_category_id}/groups | List groups in a group category
[**group_categories_group_category_id_import_post**](DefaultApi.md#group_categories_group_category_id_import_post) | **POST** /group_categories/{group_category_id}/import | Import category groups
[**group_categories_group_category_id_put**](DefaultApi.md#group_categories_group_category_id_put) | **PUT** /group_categories/{group_category_id} | Update a Group Category
[**group_categories_group_category_id_users_get**](DefaultApi.md#group_categories_group_category_id_users_get) | **GET** /group_categories/{group_category_id}/users | List users in group category
[**lti_xapi_post**](DefaultApi.md#lti_xapi_post) | **POST** /lti/xapi | Log xAPI interaction activity for an LTI tool


# **accounts_account_id_group_categories_get**
> List[GroupCategory] accounts_account_id_group_categories_get(account_id, collaboration_state=collaboration_state)

List group categories for an account

Returns a paginated list of group categories in an account context.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.group_category import GroupCategory
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | 
    collaboration_state = 'collaboration_state_example' # str | Filter by collaboration state: 'all', 'collaborative' (default), or 'non_collaborative'.  (optional)

    try:
        # List group categories for an account
        api_response = api_instance.accounts_account_id_group_categories_get(account_id, collaboration_state=collaboration_state)
        print("The response of DefaultApi->accounts_account_id_group_categories_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_account_id_group_categories_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **collaboration_state** | **str**| Filter by collaboration state: &#39;all&#39;, &#39;collaborative&#39; (default), or &#39;non_collaborative&#39;.  | [optional] 

### Return type

[**List[GroupCategory]**](GroupCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of GroupCategory objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_group_categories_post**
> GroupCategory accounts_account_id_group_categories_post(account_id, name, non_collaborative=non_collaborative, self_signup=self_signup, auto_leader=auto_leader, group_limit=group_limit, sis_group_category_id=sis_group_category_id, create_group_count=create_group_count, split_group_count=split_group_count)

Create a Group Category in an account

Create a new group category under an account.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.group_category import GroupCategory
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | 
    name = 'name_example' # str | Name of the group category.
    non_collaborative = True # bool | Only users with the Differentiated Tag Add permission can set. (optional)
    self_signup = 'self_signup_example' # str | Allow students to self sign up (course only).  (optional)
    auto_leader = 'auto_leader_example' # str | Auto-assign group leaders. (optional)
    group_limit = 56 # int | Limit number of users per group (requires self_signup). (optional)
    sis_group_category_id = 'sis_group_category_id_example' # str | SIS identifier. (optional)
    create_group_count = 56 # int | Create this number of groups (course only). (optional)
    split_group_count = 56 # int | Deprecated. Evenly distribute students synchronously. (optional)

    try:
        # Create a Group Category in an account
        api_response = api_instance.accounts_account_id_group_categories_post(account_id, name, non_collaborative=non_collaborative, self_signup=self_signup, auto_leader=auto_leader, group_limit=group_limit, sis_group_category_id=sis_group_category_id, create_group_count=create_group_count, split_group_count=split_group_count)
        print("The response of DefaultApi->accounts_account_id_group_categories_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_account_id_group_categories_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **name** | **str**| Name of the group category. | 
 **non_collaborative** | **bool**| Only users with the Differentiated Tag Add permission can set. | [optional] 
 **self_signup** | **str**| Allow students to self sign up (course only).  | [optional] 
 **auto_leader** | **str**| Auto-assign group leaders. | [optional] 
 **group_limit** | **int**| Limit number of users per group (requires self_signup). | [optional] 
 **sis_group_category_id** | **str**| SIS identifier. | [optional] 
 **create_group_count** | **int**| Create this number of groups (course only). | [optional] 
 **split_group_count** | **int**| Deprecated. Evenly distribute students synchronously. | [optional] 

### Return type

[**GroupCategory**](GroupCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created GroupCategory object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_lti_registration_by_client_id_client_id_get**
> object accounts_account_id_lti_registration_by_client_id_client_id_get(account_id, client_id)

Show an LTI Registration (via the client_id)

Returns details about the specified LTI registration by client_id.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | 
    client_id = 'client_id_example' # str | The client_id of the registration.

    try:
        # Show an LTI Registration (via the client_id)
        api_response = api_instance.accounts_account_id_lti_registration_by_client_id_client_id_get(account_id, client_id)
        print("The response of DefaultApi->accounts_account_id_lti_registration_by_client_id_client_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_account_id_lti_registration_by_client_id_client_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **client_id** | **str**| The client_id of the registration. | 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified LTI registration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_lti_registrations_get**
> ListLtiRegistrationsResponse accounts_account_id_lti_registrations_get(account_id, per_page=per_page, page=page, sort=sort, dir=dir, include=include)

List LTI Registrations in an account

Returns all LTI registrations in the specified account. Includes registrations created in this account, those set to 'allow' from a parent root account, and those enabled 'on' at the parent root account level.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.list_lti_registrations_response import ListLtiRegistrationsResponse
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | The Canvas account ID.
    per_page = 56 # int | The number of registrations to return per page. Defaults to 15. (optional)
    page = 56 # int | The page number to return. Defaults to 1. (optional)
    sort = 'sort_example' # str | The field to sort by. Choices: name, nickname, lti_version, installed, installed_by, updated_by, updated, on. Defaults to installed. (optional)
    dir = 'dir_example' # str | The order to sort the given column by. Defaults to desc. (optional)
    include = ['include_example'] # List[str] | Array of additional data to include. Always includes [account_binding]. (optional)

    try:
        # List LTI Registrations in an account
        api_response = api_instance.accounts_account_id_lti_registrations_get(account_id, per_page=per_page, page=page, sort=sort, dir=dir, include=include)
        print("The response of DefaultApi->accounts_account_id_lti_registrations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_account_id_lti_registrations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The Canvas account ID. | 
 **per_page** | **int**| The number of registrations to return per page. Defaults to 15. | [optional] 
 **page** | **int**| The page number to return. Defaults to 1. | [optional] 
 **sort** | **str**| The field to sort by. Choices: name, nickname, lti_version, installed, installed_by, updated_by, updated, on. Defaults to installed. | [optional] 
 **dir** | **str**| The order to sort the given column by. Defaults to desc. | [optional] 
 **include** | [**List[str]**](str.md)| Array of additional data to include. Always includes [account_binding]. | [optional] 

### Return type

[**ListLtiRegistrationsResponse**](ListLtiRegistrationsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of LTI registrations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_lti_registrations_id_bind_post**
> object accounts_account_id_lti_registrations_id_bind_post(account_id, id, accounts_account_id_lti_registrations_id_bind_post_request)

Bind an LTI Registration to an Account

Enable or disable the specified LTI registration for the specified account. Only allowed for root accounts. Use "allow" to make the registration visible but not enabled.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.accounts_account_id_lti_registrations_id_bind_post_request import AccountsAccountIdLtiRegistrationsIdBindPostRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | 
    id = 56 # int | 
    accounts_account_id_lti_registrations_id_bind_post_request = canvas_lms_sdk.AccountsAccountIdLtiRegistrationsIdBindPostRequest() # AccountsAccountIdLtiRegistrationsIdBindPostRequest | 

    try:
        # Bind an LTI Registration to an Account
        api_response = api_instance.accounts_account_id_lti_registrations_id_bind_post(account_id, id, accounts_account_id_lti_registrations_id_bind_post_request)
        print("The response of DefaultApi->accounts_account_id_lti_registrations_id_bind_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_account_id_lti_registrations_id_bind_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **id** | **int**|  | 
 **accounts_account_id_lti_registrations_id_bind_post_request** | [**AccountsAccountIdLtiRegistrationsIdBindPostRequest**](AccountsAccountIdLtiRegistrationsIdBindPostRequest.md)|  | 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The binding result as an LTI registration object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_lti_registrations_id_delete**
> object accounts_account_id_lti_registrations_id_delete(account_id, id)

Delete an LTI Registration

Remove the specified LTI registration.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | 
    id = 56 # int | 

    try:
        # Delete an LTI Registration
        api_response = api_instance.accounts_account_id_lti_registrations_id_delete(account_id, id)
        print("The response of DefaultApi->accounts_account_id_lti_registrations_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_account_id_lti_registrations_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted LTI registration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_lti_registrations_id_get**
> object accounts_account_id_lti_registrations_id_get(account_id, id, include=include)

Show an LTI Registration

Return details about the specified LTI registration, including the configuration and account binding.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | The Canvas account ID.
    id = 56 # int | The registration ID.
    include = ['include_example'] # List[str] | Array of additional data to include. (optional)

    try:
        # Show an LTI Registration
        api_response = api_instance.accounts_account_id_lti_registrations_id_get(account_id, id, include=include)
        print("The response of DefaultApi->accounts_account_id_lti_registrations_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_account_id_lti_registrations_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The Canvas account ID. | 
 **id** | **int**| The registration ID. | 
 **include** | [**List[str]**](str.md)| Array of additional data to include. | [optional] 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of the specified LTI registration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_lti_registrations_id_put**
> object accounts_account_id_lti_registrations_id_put(account_id, id, accounts_account_id_lti_registrations_id_put_request)

Update an LTI Registration

Update the specified LTI registration. Updating the base tool configuration of a dynamic registration returns 422; other fields are freely updatable.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.accounts_account_id_lti_registrations_id_put_request import AccountsAccountIdLtiRegistrationsIdPutRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | 
    id = 56 # int | 
    accounts_account_id_lti_registrations_id_put_request = canvas_lms_sdk.AccountsAccountIdLtiRegistrationsIdPutRequest() # AccountsAccountIdLtiRegistrationsIdPutRequest | 

    try:
        # Update an LTI Registration
        api_response = api_instance.accounts_account_id_lti_registrations_id_put(account_id, id, accounts_account_id_lti_registrations_id_put_request)
        print("The response of DefaultApi->accounts_account_id_lti_registrations_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_account_id_lti_registrations_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **id** | **int**|  | 
 **accounts_account_id_lti_registrations_id_put_request** | [**AccountsAccountIdLtiRegistrationsIdPutRequest**](AccountsAccountIdLtiRegistrationsIdPutRequest.md)|  | 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated LTI registration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_lti_registrations_id_reset_put**
> object accounts_account_id_lti_registrations_id_reset_put(account_id, id)

Reset an LTI Registration to Defaults

Reset the specified LTI registration to its default settings in this context, removing all customizations present in the overlay.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | 
    id = 56 # int | 

    try:
        # Reset an LTI Registration to Defaults
        api_response = api_instance.accounts_account_id_lti_registrations_id_reset_put(account_id, id)
        print("The response of DefaultApi->accounts_account_id_lti_registrations_id_reset_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_account_id_lti_registrations_id_reset_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The reset LTI registration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_lti_registrations_post**
> object accounts_account_id_lti_registrations_post(account_id, accounts_account_id_lti_registrations_post_request)

Create an LTI Registration

Create a new LTI Registration, along with an associated Tool Configuration, Developer Key, and Registration Account binding.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.accounts_account_id_lti_registrations_post_request import AccountsAccountIdLtiRegistrationsPostRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | The Canvas account ID.
    accounts_account_id_lti_registrations_post_request = canvas_lms_sdk.AccountsAccountIdLtiRegistrationsPostRequest() # AccountsAccountIdLtiRegistrationsPostRequest | 

    try:
        # Create an LTI Registration
        api_response = api_instance.accounts_account_id_lti_registrations_post(account_id, accounts_account_id_lti_registrations_post_request)
        print("The response of DefaultApi->accounts_account_id_lti_registrations_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_account_id_lti_registrations_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The Canvas account ID. | 
 **accounts_account_id_lti_registrations_post_request** | [**AccountsAccountIdLtiRegistrationsPostRequest**](AccountsAccountIdLtiRegistrationsPostRequest.md)|  | 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created LTI registration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_lti_assignments_assignment_id_submissions_submission_id_get**
> Submission1 api_lti_assignments_assignment_id_submissions_submission_id_get(assignment_id, submission_id)

Get a single submission

Get a single submission, based on submission id.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.submission1 import Submission1
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    assignment_id = 56 # int | ID of the assignment
    submission_id = 56 # int | ID of the submission

    try:
        # Get a single submission
        api_response = api_instance.api_lti_assignments_assignment_id_submissions_submission_id_get(assignment_id, submission_id)
        print("The response of DefaultApi->api_lti_assignments_assignment_id_submissions_submission_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_lti_assignments_assignment_id_submissions_submission_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignment_id** | **int**| ID of the assignment | 
 **submission_id** | **int**| ID of the submission | 

### Return type

[**Submission1**](Submission1.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A single submission |  -  |
**404** | Submission not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_lti_assignments_assignment_id_submissions_submission_id_history_get**
> List[Submission1] api_lti_assignments_assignment_id_submissions_submission_id_history_get(assignment_id, submission_id)

Get the history of a single submission

Get a list of all attempts made for a submission, based on submission id.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.submission1 import Submission1
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    assignment_id = 56 # int | ID of the assignment
    submission_id = 56 # int | ID of the submission

    try:
        # Get the history of a single submission
        api_response = api_instance.api_lti_assignments_assignment_id_submissions_submission_id_history_get(assignment_id, submission_id)
        print("The response of DefaultApi->api_lti_assignments_assignment_id_submissions_submission_id_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_lti_assignments_assignment_id_submissions_submission_id_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignment_id** | **int**| ID of the assignment | 
 **submission_id** | **int**| ID of the submission | 

### Return type

[**List[Submission1]**](Submission1.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of submission attempts |  -  |
**404** | Submission not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_lti_groups_group_id_users_get**
> List[object] api_lti_groups_group_id_users_get(group_id)

Get all users in a group (lti)

Get all Canvas users in a group. Tool providers may only access groups that belong to the context the tool is installed in.


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    group_id = 'group_id_example' # str | Canvas group id

    try:
        # Get all users in a group (lti)
        api_response = api_instance.api_lti_groups_group_id_users_get(group_id)
        print("The response of DefaultApi->api_lti_groups_group_id_users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_lti_groups_group_id_users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Canvas group id | 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of User objects |  -  |
**401** | Unauthorized – invalid or missing JWT access token |  -  |
**404** | Group not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_lti_users_id_get**
> object api_lti_users_id_get(id)

Get a single user (lti)

Get a single Canvas user by Canvas id or LTI id. Tool providers may only access users that have been assigned an assignment associated with their tool.


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    id = 'id_example' # str | Canvas user id or LTI id

    try:
        # Get a single user (lti)
        api_response = api_instance.api_lti_users_id_get(id)
        print("The response of DefaultApi->api_lti_users_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_lti_users_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Canvas user id or LTI id | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A User object |  -  |
**401** | Unauthorized – invalid or missing JWT access token |  -  |
**404** | User not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_developer_keys_get**
> List[DeveloperKey] api_v1_accounts_account_id_developer_keys_get(account_id, inherited=inherited)

List Developer Keys

List all developer keys created in the current account.


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.developer_key import DeveloperKey
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | The Canvas account ID.
    inherited = True # bool | Defaults to false. If true, lists keys inherited from Site Admin (and consortium parent account, if applicable). (optional)

    try:
        # List Developer Keys
        api_response = api_instance.api_v1_accounts_account_id_developer_keys_get(account_id, inherited=inherited)
        print("The response of DefaultApi->api_v1_accounts_account_id_developer_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_developer_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The Canvas account ID. | 
 **inherited** | **bool**| Defaults to false. If true, lists keys inherited from Site Admin (and consortium parent account, if applicable). | [optional] 

### Return type

[**List[DeveloperKey]**](DeveloperKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of DeveloperKey objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_developer_keys_post**
> DeveloperKey api_v1_accounts_account_id_developer_keys_post(account_id, developer_key_input)

Create a Developer Key

Create a new Canvas API key. Creating an LTI 1.3 registration is not supported here and should be done via the LTI Registration API.


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.developer_key import DeveloperKey
from canvas_lms_sdk.models.developer_key_input import DeveloperKeyInput
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | The Canvas account ID.
    developer_key_input = canvas_lms_sdk.DeveloperKeyInput() # DeveloperKeyInput | Attributes for the new Developer Key

    try:
        # Create a Developer Key
        api_response = api_instance.api_v1_accounts_account_id_developer_keys_post(account_id, developer_key_input)
        print("The response of DefaultApi->api_v1_accounts_account_id_developer_keys_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_developer_keys_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The Canvas account ID. | 
 **developer_key_input** | [**DeveloperKeyInput**](DeveloperKeyInput.md)| Attributes for the new Developer Key | 

### Return type

[**DeveloperKey**](DeveloperKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created DeveloperKey object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_enrollments_id_get**
> Enrollment api_v1_accounts_account_id_enrollments_id_get(account_id, id)

Get an Enrollment by ID

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.enrollment import Enrollment
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | The ID of the account.
    id = 56 # int | The ID of the enrollment.

    try:
        # Get an Enrollment by ID
        api_response = api_instance.api_v1_accounts_account_id_enrollments_id_get(account_id, id)
        print("The response of DefaultApi->api_v1_accounts_account_id_enrollments_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_enrollments_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The ID of the account. | 
 **id** | **int**| The ID of the enrollment. | 

### Return type

[**Enrollment**](Enrollment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Enrollment object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_external_tools_get**
> List[ExternalTool] api_v1_accounts_account_id_external_tools_get(account_id, search_term=search_term, selectable=selectable, include_parents=include_parents, placement=placement)

List external tools (account)

Returns the paginated list of external tools for the specified account context.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.external_tool import ExternalTool
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 'account_id_example' # str | ID of the account
    search_term = 'search_term_example' # str |  (optional)
    selectable = True # bool |  (optional)
    include_parents = True # bool |  (optional)
    placement = 'placement_example' # str |  (optional)

    try:
        # List external tools (account)
        api_response = api_instance.api_v1_accounts_account_id_external_tools_get(account_id, search_term=search_term, selectable=selectable, include_parents=include_parents, placement=placement)
        print("The response of DefaultApi->api_v1_accounts_account_id_external_tools_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_external_tools_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| ID of the account | 
 **search_term** | **str**|  | [optional] 
 **selectable** | **bool**|  | [optional] 
 **include_parents** | **bool**|  | [optional] 
 **placement** | **str**|  | [optional] 

### Return type

[**List[ExternalTool]**](ExternalTool.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of external tools |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_sis_import_errors_get**
> List[SisImportError] api_v1_accounts_account_id_sis_import_errors_get(account_id, failure=failure)

Get SIS import error list for an account

Returns the list of SIS import errors for an account. Import errors are only stored for 30 days.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.sis_import_error import SisImportError
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | The ID of the account.
    failure = True # bool | If set, only shows errors on a SIS import that would cause a failure. (optional)

    try:
        # Get SIS import error list for an account
        api_response = api_instance.api_v1_accounts_account_id_sis_import_errors_get(account_id, failure=failure)
        print("The response of DefaultApi->api_v1_accounts_account_id_sis_import_errors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_sis_import_errors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The ID of the account. | 
 **failure** | **bool**| If set, only shows errors on a SIS import that would cause a failure. | [optional] 

### Return type

[**List[SisImportError]**](SisImportError.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of SIS import errors. |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_sis_imports_id_errors_get**
> List[SisImportError] api_v1_accounts_account_id_sis_imports_id_errors_get(account_id, id, failure=failure)

Get SIS import error list for a specific SIS import

Returns the list of SIS import errors for a specific SIS import. Import errors are only stored for 30 days.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.sis_import_error import SisImportError
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | The ID of the account.
    id = 56 # int | The ID of the SIS import.
    failure = True # bool | If set, only shows errors on a SIS import that would cause a failure. (optional)

    try:
        # Get SIS import error list for a specific SIS import
        api_response = api_instance.api_v1_accounts_account_id_sis_imports_id_errors_get(account_id, id, failure=failure)
        print("The response of DefaultApi->api_v1_accounts_account_id_sis_imports_id_errors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_sis_imports_id_errors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The ID of the account. | 
 **id** | **int**| The ID of the SIS import. | 
 **failure** | **bool**| If set, only shows errors on a SIS import that would cause a failure. | [optional] 

### Return type

[**List[SisImportError]**](SisImportError.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of SIS import errors. |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_temporary_enrollment_pairings_get**
> List[TemporaryEnrollmentPairing] api_v1_accounts_account_id_temporary_enrollment_pairings_get(account_id)

List temporary enrollment pairings

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.temporary_enrollment_pairing import TemporaryEnrollmentPairing
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | ID of the account

    try:
        # List temporary enrollment pairings
        api_response = api_instance.api_v1_accounts_account_id_temporary_enrollment_pairings_get(account_id)
        print("The response of DefaultApi->api_v1_accounts_account_id_temporary_enrollment_pairings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_temporary_enrollment_pairings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 

### Return type

[**List[TemporaryEnrollmentPairing]**](TemporaryEnrollmentPairing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of TemporaryEnrollmentPairing objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_temporary_enrollment_pairings_id_delete**
> TemporaryEnrollmentPairing api_v1_accounts_account_id_temporary_enrollment_pairings_id_delete(account_id, id)

Delete Temporary Enrollment Pairing

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.temporary_enrollment_pairing import TemporaryEnrollmentPairing
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | ID of the account
    id = 56 # int | ID of the temporary enrollment pairing

    try:
        # Delete Temporary Enrollment Pairing
        api_response = api_instance.api_v1_accounts_account_id_temporary_enrollment_pairings_id_delete(account_id, id)
        print("The response of DefaultApi->api_v1_accounts_account_id_temporary_enrollment_pairings_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_temporary_enrollment_pairings_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **id** | **int**| ID of the temporary enrollment pairing | 

### Return type

[**TemporaryEnrollmentPairing**](TemporaryEnrollmentPairing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted TemporaryEnrollmentPairing object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_temporary_enrollment_pairings_id_get**
> TemporaryEnrollmentPairing api_v1_accounts_account_id_temporary_enrollment_pairings_id_get(account_id, id)

Get a single temporary enrollment pairing

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.temporary_enrollment_pairing import TemporaryEnrollmentPairing
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | ID of the account
    id = 56 # int | ID of the temporary enrollment pairing

    try:
        # Get a single temporary enrollment pairing
        api_response = api_instance.api_v1_accounts_account_id_temporary_enrollment_pairings_id_get(account_id, id)
        print("The response of DefaultApi->api_v1_accounts_account_id_temporary_enrollment_pairings_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_temporary_enrollment_pairings_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **id** | **int**| ID of the temporary enrollment pairing | 

### Return type

[**TemporaryEnrollmentPairing**](TemporaryEnrollmentPairing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A TemporaryEnrollmentPairing object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_temporary_enrollment_pairings_new_get**
> TemporaryEnrollmentPairing api_v1_accounts_account_id_temporary_enrollment_pairings_new_get(account_id)

Initialize an unsaved TemporaryEnrollmentPairing

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.temporary_enrollment_pairing import TemporaryEnrollmentPairing
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | ID of the account

    try:
        # Initialize an unsaved TemporaryEnrollmentPairing
        api_response = api_instance.api_v1_accounts_account_id_temporary_enrollment_pairings_new_get(account_id)
        print("The response of DefaultApi->api_v1_accounts_account_id_temporary_enrollment_pairings_new_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_temporary_enrollment_pairings_new_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 

### Return type

[**TemporaryEnrollmentPairing**](TemporaryEnrollmentPairing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An unsaved TemporaryEnrollmentPairing object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_temporary_enrollment_pairings_post**
> TemporaryEnrollmentPairing api_v1_accounts_account_id_temporary_enrollment_pairings_post(account_id, api_v1_accounts_account_id_temporary_enrollment_pairings_post_request)

Create Temporary Enrollment Pairing

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_accounts_account_id_temporary_enrollment_pairings_post_request import ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest
from canvas_lms_sdk.models.temporary_enrollment_pairing import TemporaryEnrollmentPairing
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    account_id = 56 # int | ID of the account
    api_v1_accounts_account_id_temporary_enrollment_pairings_post_request = canvas_lms_sdk.ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest() # ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest | 

    try:
        # Create Temporary Enrollment Pairing
        api_response = api_instance.api_v1_accounts_account_id_temporary_enrollment_pairings_post(account_id, api_v1_accounts_account_id_temporary_enrollment_pairings_post_request)
        print("The response of DefaultApi->api_v1_accounts_account_id_temporary_enrollment_pairings_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_account_id_temporary_enrollment_pairings_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **api_v1_accounts_account_id_temporary_enrollment_pairings_post_request** | [**ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest**](ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest.md)|  | 

### Return type

[**TemporaryEnrollmentPairing**](TemporaryEnrollmentPairing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TemporaryEnrollmentPairing created successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_get**
> List[Account] api_v1_accounts_get(include=include)

List accounts

A paginated list of accounts that the current user can view or manage. Typically, students and even teachers will get an empty list in response; only account admins can view the accounts that they are in.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.account import Account
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    include = ['include_example'] # List[str] | Array of additional information to include. Allowed values:   - lti_guid: the ‘tool_consumer_instance_guid’ that will be sent for this account on LTI launches   - registration_settings: returns info about the privacy policy and terms of use   - services: returns services and whether they are enabled (requires account management permissions)   - course_count: returns the number of courses directly under each account   - sub_account_count: returns the number of sub-accounts directly under each account  (optional)

    try:
        # List accounts
        api_response = api_instance.api_v1_accounts_get(include=include)
        print("The response of DefaultApi->api_v1_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | [**List[str]**](str.md)| Array of additional information to include. Allowed values:   - lti_guid: the ‘tool_consumer_instance_guid’ that will be sent for this account on LTI launches   - registration_settings: returns info about the privacy policy and terms of use   - services: returns services and whether they are enabled (requires account management permissions)   - course_count: returns the number of courses directly under each account   - sub_account_count: returns the number of sub-accounts directly under each account  | [optional] 

### Return type

[**List[Account]**](Account.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON array of Account objects. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_assignment_groups_assignment_group_id_delete**
> AssignmentGroup api_v1_courses_course_id_assignment_groups_assignment_group_id_delete(course_id, assignment_group_id, move_assignments_to=move_assignments_to)

Destroy an Assignment Group

Deletes the assignment group with the given id.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment_group import AssignmentGroup
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    assignment_group_id = 56 # int | 
    move_assignments_to = 56 # int | The ID of an active Assignment Group to which the assignments that are currently assigned to the destroyed Assignment Group will be assigned. If not provided, assignments in this Assignment Group will be deleted. (optional)

    try:
        # Destroy an Assignment Group
        api_response = api_instance.api_v1_courses_course_id_assignment_groups_assignment_group_id_delete(course_id, assignment_group_id, move_assignments_to=move_assignments_to)
        print("The response of DefaultApi->api_v1_courses_course_id_assignment_groups_assignment_group_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_assignment_groups_assignment_group_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **assignment_group_id** | **int**|  | 
 **move_assignments_to** | **int**| The ID of an active Assignment Group to which the assignments that are currently assigned to the destroyed Assignment Group will be assigned. If not provided, assignments in this Assignment Group will be deleted. | [optional] 

### Return type

[**AssignmentGroup**](AssignmentGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AssignmentGroup destroyed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_assignment_groups_assignment_group_id_get**
> AssignmentGroup api_v1_courses_course_id_assignment_groups_assignment_group_id_get(course_id, assignment_group_id, include=include, override_assignment_dates=override_assignment_dates, grading_period_id=grading_period_id)

Get an Assignment Group

Returns the assignment group with the given id.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment_group import AssignmentGroup
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    assignment_group_id = 56 # int | 
    include = ['include_example'] # List[str] | Associations to include with the group. “discussion_topic” and “assignment_visibility” and “submission” are only valid if “assignments” is also included. “score_statistics” is only valid if “submission” and “assignments” are also included. The “assignment_visibility” option additionally requires that the Differentiated Assignments course feature be turned on. (optional)
    override_assignment_dates = True # bool | Apply assignment overrides for each assignment, defaults to true. (optional)
    grading_period_id = 56 # int | The id of the grading period in which assignment groups are being requested (Requires grading periods to exist on the account) (optional)

    try:
        # Get an Assignment Group
        api_response = api_instance.api_v1_courses_course_id_assignment_groups_assignment_group_id_get(course_id, assignment_group_id, include=include, override_assignment_dates=override_assignment_dates, grading_period_id=grading_period_id)
        print("The response of DefaultApi->api_v1_courses_course_id_assignment_groups_assignment_group_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_assignment_groups_assignment_group_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **assignment_group_id** | **int**|  | 
 **include** | [**List[str]**](str.md)| Associations to include with the group. “discussion_topic” and “assignment_visibility” and “submission” are only valid if “assignments” is also included. “score_statistics” is only valid if “submission” and “assignments” are also included. The “assignment_visibility” option additionally requires that the Differentiated Assignments course feature be turned on. | [optional] 
 **override_assignment_dates** | **bool**| Apply assignment overrides for each assignment, defaults to true. | [optional] 
 **grading_period_id** | **int**| The id of the grading period in which assignment groups are being requested (Requires grading periods to exist on the account) | [optional] 

### Return type

[**AssignmentGroup**](AssignmentGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with an AssignmentGroup object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_assignment_groups_assignment_group_id_put**
> AssignmentGroup api_v1_courses_course_id_assignment_groups_assignment_group_id_put(course_id, assignment_group_id, api_v1_courses_course_id_assignment_groups_assignment_group_id_put_request)

Edit an Assignment Group

Modify an existing Assignment Group.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_assignment_groups_assignment_group_id_put_request import ApiV1CoursesCourseIdAssignmentGroupsAssignmentGroupIdPutRequest
from canvas_lms_sdk.models.assignment_group import AssignmentGroup
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    assignment_group_id = 56 # int | 
    api_v1_courses_course_id_assignment_groups_assignment_group_id_put_request = canvas_lms_sdk.ApiV1CoursesCourseIdAssignmentGroupsAssignmentGroupIdPutRequest() # ApiV1CoursesCourseIdAssignmentGroupsAssignmentGroupIdPutRequest | 

    try:
        # Edit an Assignment Group
        api_response = api_instance.api_v1_courses_course_id_assignment_groups_assignment_group_id_put(course_id, assignment_group_id, api_v1_courses_course_id_assignment_groups_assignment_group_id_put_request)
        print("The response of DefaultApi->api_v1_courses_course_id_assignment_groups_assignment_group_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_assignment_groups_assignment_group_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **assignment_group_id** | **int**|  | 
 **api_v1_courses_course_id_assignment_groups_assignment_group_id_put_request** | [**ApiV1CoursesCourseIdAssignmentGroupsAssignmentGroupIdPutRequest**](ApiV1CoursesCourseIdAssignmentGroupsAssignmentGroupIdPutRequest.md)|  | 

### Return type

[**AssignmentGroup**](AssignmentGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AssignmentGroup updated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_assignment_groups_get**
> List[AssignmentGroup] api_v1_courses_course_id_assignment_groups_get(course_id, include=include, assignment_ids=assignment_ids, exclude_assignment_submission_types=exclude_assignment_submission_types, override_assignment_dates=override_assignment_dates, grading_period_id=grading_period_id, scope_assignments_to_student=scope_assignments_to_student)

List assignment groups

Returns the paginated list of assignment groups for the current context. The returned groups are sorted by their position field.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment_group import AssignmentGroup
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    include = ['include_example'] # List[str] | Associations to include with the group. “discussion_topic”, “all_dates”, “can_edit”, “assignment_visibility” & “submission” are only valid if “assignments” is also included. “score_statistics” requires that the “assignments” and “submission” options are included. The “assignment_visibility” option additionally requires that the Differentiated Assignments course feature be turned on. If “observed_users” is passed along with “assignments” and “submission”, submissions for observed users will also be included. (optional)
    assignment_ids = ['assignment_ids_example'] # List[str] | If “assignments” are included, optionally return only assignments having their ID in this array. This argument may also be passed as a comma separated string. (optional)
    exclude_assignment_submission_types = ['exclude_assignment_submission_types_example'] # List[str] | If “assignments” are included, those with the specified submission types will be excluded from the assignment groups. (optional)
    override_assignment_dates = True # bool | Apply assignment overrides for each assignment, defaults to true. (optional)
    grading_period_id = 56 # int | The id of the grading period in which assignment groups are being requested (Requires grading periods to exist.) (optional)
    scope_assignments_to_student = True # bool | If true, all assignments returned will apply to the current user in the specified grading period. If assignments apply to other students in the specified grading period, but not the current user, they will not be returned. (Requires the grading_period_id argument and grading periods to exist. In addition, the current user must be a student.) (optional)

    try:
        # List assignment groups
        api_response = api_instance.api_v1_courses_course_id_assignment_groups_get(course_id, include=include, assignment_ids=assignment_ids, exclude_assignment_submission_types=exclude_assignment_submission_types, override_assignment_dates=override_assignment_dates, grading_period_id=grading_period_id, scope_assignments_to_student=scope_assignments_to_student)
        print("The response of DefaultApi->api_v1_courses_course_id_assignment_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_assignment_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **include** | [**List[str]**](str.md)| Associations to include with the group. “discussion_topic”, “all_dates”, “can_edit”, “assignment_visibility” &amp; “submission” are only valid if “assignments” is also included. “score_statistics” requires that the “assignments” and “submission” options are included. The “assignment_visibility” option additionally requires that the Differentiated Assignments course feature be turned on. If “observed_users” is passed along with “assignments” and “submission”, submissions for observed users will also be included. | [optional] 
 **assignment_ids** | [**List[str]**](str.md)| If “assignments” are included, optionally return only assignments having their ID in this array. This argument may also be passed as a comma separated string. | [optional] 
 **exclude_assignment_submission_types** | [**List[str]**](str.md)| If “assignments” are included, those with the specified submission types will be excluded from the assignment groups. | [optional] 
 **override_assignment_dates** | **bool**| Apply assignment overrides for each assignment, defaults to true. | [optional] 
 **grading_period_id** | **int**| The id of the grading period in which assignment groups are being requested (Requires grading periods to exist.) | [optional] 
 **scope_assignments_to_student** | **bool**| If true, all assignments returned will apply to the current user in the specified grading period. If assignments apply to other students in the specified grading period, but not the current user, they will not be returned. (Requires the grading_period_id argument and grading periods to exist. In addition, the current user must be a student.) | [optional] 

### Return type

[**List[AssignmentGroup]**](AssignmentGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of AssignmentGroup objects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_assignment_groups_post**
> AssignmentGroup api_v1_courses_course_id_assignment_groups_post(course_id, api_v1_courses_course_id_assignment_groups_post_request)

Create an Assignment Group

Create a new assignment group for this course.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_assignment_groups_post_request import ApiV1CoursesCourseIdAssignmentGroupsPostRequest
from canvas_lms_sdk.models.assignment_group import AssignmentGroup
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    api_v1_courses_course_id_assignment_groups_post_request = canvas_lms_sdk.ApiV1CoursesCourseIdAssignmentGroupsPostRequest() # ApiV1CoursesCourseIdAssignmentGroupsPostRequest | 

    try:
        # Create an Assignment Group
        api_response = api_instance.api_v1_courses_course_id_assignment_groups_post(course_id, api_v1_courses_course_id_assignment_groups_post_request)
        print("The response of DefaultApi->api_v1_courses_course_id_assignment_groups_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_assignment_groups_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **api_v1_courses_course_id_assignment_groups_post_request** | [**ApiV1CoursesCourseIdAssignmentGroupsPostRequest**](ApiV1CoursesCourseIdAssignmentGroupsPostRequest.md)|  | 

### Return type

[**AssignmentGroup**](AssignmentGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | AssignmentGroup created successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_content_migrations_content_migration_id_migration_issues_get**
> List[MigrationIssue] api_v1_courses_course_id_content_migrations_content_migration_id_migration_issues_get(course_id, content_migration_id)

List migration issues

Returns paginated migration issues

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.migration_issue import MigrationIssue
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 'course_id_example' # str | ID of the course
    content_migration_id = 'content_migration_id_example' # str | ID of the content migration

    try:
        # List migration issues
        api_response = api_instance.api_v1_courses_course_id_content_migrations_content_migration_id_migration_issues_get(course_id, content_migration_id)
        print("The response of DefaultApi->api_v1_courses_course_id_content_migrations_content_migration_id_migration_issues_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_content_migrations_content_migration_id_migration_issues_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **str**| ID of the course | 
 **content_migration_id** | **str**| ID of the content migration | 

### Return type

[**List[MigrationIssue]**](MigrationIssue.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of MigrationIssue objects |  -  |
**401** | Unauthorized – invalid or missing authentication |  -  |
**404** | Course or content migration not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_discussion_topics_get**
> List[DiscussionTopic] api_v1_courses_course_id_discussion_topics_get(course_id, include=include, order_by=order_by, scope=scope, only_announcements=only_announcements, filter_by=filter_by, search_term=search_term, exclude_context_module_locked_topics=exclude_context_module_locked_topics)

Returns the paginated list of discussion topics for a course.

Returns the paginated list of discussion topics for this course.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.discussion_topic import DiscussionTopic
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The ID of the course.
    include = ['include_example'] # List[str] | If “all_dates” is passed, all dates associated with graded discussions’ assignments will be included. If “sections” is passed, includes the course sections that are associated with the topic. If “sections_user_count” is passed, then either (a) if sections were asked for *and* the topic is specific to certain course sections, includes the number of users in each section; or (b) includes at the root level the total number of users in the topic's context. If “overrides” is passed, the overrides for the assignment will be included.  (optional)
    order_by = 'order_by_example' # str | Determines the order of the discussion topic list. Defaults to “position”. (optional)
    scope = 'scope_example' # str | Only return discussion topics in the given state(s). Defaults to including all topics. Filtering is done after pagination.  (optional)
    only_announcements = True # bool | Return announcements instead of discussion topics. Defaults to false. (optional)
    filter_by = 'filter_by_example' # str | The state of the discussion topic to return. Currently only supports “unread”. (optional)
    search_term = 'search_term_example' # str | The partial title of the discussion topics to match and return. (optional)
    exclude_context_module_locked_topics = True # bool | For students, exclude topics that are locked by module progression. Defaults to false. (optional)

    try:
        # Returns the paginated list of discussion topics for a course.
        api_response = api_instance.api_v1_courses_course_id_discussion_topics_get(course_id, include=include, order_by=order_by, scope=scope, only_announcements=only_announcements, filter_by=filter_by, search_term=search_term, exclude_context_module_locked_topics=exclude_context_module_locked_topics)
        print("The response of DefaultApi->api_v1_courses_course_id_discussion_topics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_discussion_topics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The ID of the course. | 
 **include** | [**List[str]**](str.md)| If “all_dates” is passed, all dates associated with graded discussions’ assignments will be included. If “sections” is passed, includes the course sections that are associated with the topic. If “sections_user_count” is passed, then either (a) if sections were asked for *and* the topic is specific to certain course sections, includes the number of users in each section; or (b) includes at the root level the total number of users in the topic&#39;s context. If “overrides” is passed, the overrides for the assignment will be included.  | [optional] 
 **order_by** | **str**| Determines the order of the discussion topic list. Defaults to “position”. | [optional] 
 **scope** | **str**| Only return discussion topics in the given state(s). Defaults to including all topics. Filtering is done after pagination.  | [optional] 
 **only_announcements** | **bool**| Return announcements instead of discussion topics. Defaults to false. | [optional] 
 **filter_by** | **str**| The state of the discussion topic to return. Currently only supports “unread”. | [optional] 
 **search_term** | **str**| The partial title of the discussion topics to match and return. | [optional] 
 **exclude_context_module_locked_topics** | **bool**| For students, exclude topics that are locked by module progression. Defaults to false. | [optional] 

### Return type

[**List[DiscussionTopic]**](DiscussionTopic.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of DiscussionTopic objects |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_enrollments_get**
> List[Enrollment] api_v1_courses_course_id_enrollments_get(course_id, type=type, role=role, state=state, include=include, user_id=user_id, grading_period_id=grading_period_id, enrollment_term_id=enrollment_term_id, sis_account_id=sis_account_id, sis_course_id=sis_course_id, sis_section_id=sis_section_id, sis_user_id=sis_user_id, created_for_sis_id=created_for_sis_id)

Return a paginated list of enrollments in a course

Depending on the URL given, return a paginated list of either (1) all of the enrollments in a course.
Includes student, teacher, TA, and observer enrollments. Inactive enrollments are included by default for account admins.


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.enrollment import Enrollment
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The ID of the course.
    type = ['type_example'] # List[str] | A list of enrollment types to return. Accepted values are 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'DesignerEnrollment', and 'ObserverEnrollment'. Ignored if `role[]` is given.  (optional)
    role = ['role_example'] # List[str] | A list of enrollment roles to return. Accepted values include custom course-level roles and base enrollment types.  (optional)
    state = ['state_example'] # List[str] | Filter by enrollment state. If omitted, 'active' and 'invited' are returned. Synthetic states (e.g. current_and_invited) only apply when querying a user's enrollments.  (optional)
    include = ['include_example'] # List[str] | Array of additional information to include. Allowed values: avatar_url, group_ids, locked, observed_users, can_be_removed, uuid, current_points.  (optional)
    user_id = 'user_id_example' # str | Filter by user_id (only valid for course enrollment queries). (optional)
    grading_period_id = 56 # int | Return grades for the given grading period. (optional)
    enrollment_term_id = 56 # int | Returns only enrollments for the specified enrollment term. Only applies to user enrollments path.  (optional)
    sis_account_id = ['sis_account_id_example'] # List[str] | Filter by SIS account ID(s). (optional)
    sis_course_id = ['sis_course_id_example'] # List[str] | Filter by SIS course ID(s). (optional)
    sis_section_id = ['sis_section_id_example'] # List[str] | Filter by SIS section ID(s). (optional)
    sis_user_id = ['sis_user_id_example'] # List[str] | Filter by SIS user ID(s). (optional)
    created_for_sis_id = [True] # List[bool] | If sis_user_id is present and this is true, returns only enrollments created via that SIS import.  (optional)

    try:
        # Return a paginated list of enrollments in a course
        api_response = api_instance.api_v1_courses_course_id_enrollments_get(course_id, type=type, role=role, state=state, include=include, user_id=user_id, grading_period_id=grading_period_id, enrollment_term_id=enrollment_term_id, sis_account_id=sis_account_id, sis_course_id=sis_course_id, sis_section_id=sis_section_id, sis_user_id=sis_user_id, created_for_sis_id=created_for_sis_id)
        print("The response of DefaultApi->api_v1_courses_course_id_enrollments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_enrollments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The ID of the course. | 
 **type** | [**List[str]**](str.md)| A list of enrollment types to return. Accepted values are &#39;StudentEnrollment&#39;, &#39;TeacherEnrollment&#39;, &#39;TaEnrollment&#39;, &#39;DesignerEnrollment&#39;, and &#39;ObserverEnrollment&#39;. Ignored if &#x60;role[]&#x60; is given.  | [optional] 
 **role** | [**List[str]**](str.md)| A list of enrollment roles to return. Accepted values include custom course-level roles and base enrollment types.  | [optional] 
 **state** | [**List[str]**](str.md)| Filter by enrollment state. If omitted, &#39;active&#39; and &#39;invited&#39; are returned. Synthetic states (e.g. current_and_invited) only apply when querying a user&#39;s enrollments.  | [optional] 
 **include** | [**List[str]**](str.md)| Array of additional information to include. Allowed values: avatar_url, group_ids, locked, observed_users, can_be_removed, uuid, current_points.  | [optional] 
 **user_id** | **str**| Filter by user_id (only valid for course enrollment queries). | [optional] 
 **grading_period_id** | **int**| Return grades for the given grading period. | [optional] 
 **enrollment_term_id** | **int**| Returns only enrollments for the specified enrollment term. Only applies to user enrollments path.  | [optional] 
 **sis_account_id** | [**List[str]**](str.md)| Filter by SIS account ID(s). | [optional] 
 **sis_course_id** | [**List[str]**](str.md)| Filter by SIS course ID(s). | [optional] 
 **sis_section_id** | [**List[str]**](str.md)| Filter by SIS section ID(s). | [optional] 
 **sis_user_id** | [**List[str]**](str.md)| Filter by SIS user ID(s). | [optional] 
 **created_for_sis_id** | [**List[bool]**](bool.md)| If sis_user_id is present and this is true, returns only enrollments created via that SIS import.  | [optional] 

### Return type

[**List[Enrollment]**](Enrollment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Enrollment objects |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_enrollments_id_accept_post**
> ApiV1CoursesCourseIdEnrollmentsIdAcceptPost200Response api_v1_courses_course_id_enrollments_id_accept_post(course_id, id)

Accept a pending course invitation

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_enrollments_id_accept_post200_response import ApiV1CoursesCourseIdEnrollmentsIdAcceptPost200Response
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    id = 56 # int | 

    try:
        # Accept a pending course invitation
        api_response = api_instance.api_v1_courses_course_id_enrollments_id_accept_post(course_id, id)
        print("The response of DefaultApi->api_v1_courses_course_id_enrollments_id_accept_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_enrollments_id_accept_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

[**ApiV1CoursesCourseIdEnrollmentsIdAcceptPost200Response**](ApiV1CoursesCourseIdEnrollmentsIdAcceptPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invitation accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_enrollments_id_delete**
> Enrollment api_v1_courses_course_id_enrollments_id_delete(course_id, id, task=task)

Conclude, deactivate, or delete an enrollment

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.enrollment import Enrollment
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    id = 56 # int | 
    task = 'task_example' # str | Action to take on the enrollment. (optional)

    try:
        # Conclude, deactivate, or delete an enrollment
        api_response = api_instance.api_v1_courses_course_id_enrollments_id_delete(course_id, id, task=task)
        print("The response of DefaultApi->api_v1_courses_course_id_enrollments_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_enrollments_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **id** | **int**|  | 
 **task** | **str**| Action to take on the enrollment. | [optional] 

### Return type

[**Enrollment**](Enrollment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated Enrollment object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_enrollments_id_reactivate_put**
> Enrollment api_v1_courses_course_id_enrollments_id_reactivate_put(course_id, id)

Re-activate an inactive enrollment

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.enrollment import Enrollment
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    id = 56 # int | 

    try:
        # Re-activate an inactive enrollment
        api_response = api_instance.api_v1_courses_course_id_enrollments_id_reactivate_put(course_id, id)
        print("The response of DefaultApi->api_v1_courses_course_id_enrollments_id_reactivate_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_enrollments_id_reactivate_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

[**Enrollment**](Enrollment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The reactivated Enrollment object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_enrollments_id_reject_post**
> ApiV1CoursesCourseIdEnrollmentsIdAcceptPost200Response api_v1_courses_course_id_enrollments_id_reject_post(course_id, id)

Reject a pending course invitation

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_enrollments_id_accept_post200_response import ApiV1CoursesCourseIdEnrollmentsIdAcceptPost200Response
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    id = 56 # int | 

    try:
        # Reject a pending course invitation
        api_response = api_instance.api_v1_courses_course_id_enrollments_id_reject_post(course_id, id)
        print("The response of DefaultApi->api_v1_courses_course_id_enrollments_id_reject_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_enrollments_id_reject_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

[**ApiV1CoursesCourseIdEnrollmentsIdAcceptPost200Response**](ApiV1CoursesCourseIdEnrollmentsIdAcceptPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invitation rejected |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_enrollments_post**
> Enrollment api_v1_courses_course_id_enrollments_post(course_id, enrollment, root_account=root_account)

Enroll a user in a course

Create a new user enrollment for a course.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_enrollments_post_request_enrollment import ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment
from canvas_lms_sdk.models.enrollment import Enrollment
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The ID of the course.
    enrollment = canvas_lms_sdk.ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment() # ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment | 
    root_account = 'root_account_example' # str | Domain of account for SIS lookup. (optional)

    try:
        # Enroll a user in a course
        api_response = api_instance.api_v1_courses_course_id_enrollments_post(course_id, enrollment, root_account=root_account)
        print("The response of DefaultApi->api_v1_courses_course_id_enrollments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_enrollments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The ID of the course. | 
 **enrollment** | [**ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment**](ApiV1CoursesCourseIdEnrollmentsPostRequestEnrollment.md)|  | 
 **root_account** | **str**| Domain of account for SIS lookup. | [optional] 

### Return type

[**Enrollment**](Enrollment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created Enrollment object |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_external_tools_get**
> List[ExternalTool] api_v1_courses_course_id_external_tools_get(course_id, search_term=search_term, selectable=selectable, include_parents=include_parents, placement=placement)

List external tools

Returns the paginated list of external tools for the current context. See the Get a single external tool endpoint for a list of properties on an external tool.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.external_tool import ExternalTool
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 'course_id_example' # str | ID of the course
    search_term = 'search_term_example' # str | The partial name of the tools to match and return (optional)
    selectable = True # bool | If true, then only tools that are meant to be selectable are returned (optional)
    include_parents = True # bool | If true, then include tools installed in all accounts above the current context (optional)
    placement = 'placement_example' # str | The placement type to filter by (optional)

    try:
        # List external tools
        api_response = api_instance.api_v1_courses_course_id_external_tools_get(course_id, search_term=search_term, selectable=selectable, include_parents=include_parents, placement=placement)
        print("The response of DefaultApi->api_v1_courses_course_id_external_tools_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_external_tools_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **str**| ID of the course | 
 **search_term** | **str**| The partial name of the tools to match and return | [optional] 
 **selectable** | **bool**| If true, then only tools that are meant to be selectable are returned | [optional] 
 **include_parents** | **bool**| If true, then include tools installed in all accounts above the current context | [optional] 
 **placement** | **str**| The placement type to filter by | [optional] 

### Return type

[**List[ExternalTool]**](ExternalTool.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of external tools |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_lti_resource_links_bulk_post**
> List[ResourceLink] api_v1_courses_course_id_lti_resource_links_bulk_post(course_id, api_v1_courses_course_id_lti_resource_links_post_request)

Bulk Create LTI Resource Links

Create up to 100 new LTI Resource Links in the specified course with the provided parameters.
If any parameters are invalid or a matching tool is not found, no links will be created.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_lti_resource_links_post_request import ApiV1CoursesCourseIdLtiResourceLinksPostRequest
from canvas_lms_sdk.models.resource_link import ResourceLink
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The Canvas identifier for the course.
    api_v1_courses_course_id_lti_resource_links_post_request = [canvas_lms_sdk.ApiV1CoursesCourseIdLtiResourceLinksPostRequest()] # List[ApiV1CoursesCourseIdLtiResourceLinksPostRequest] | 

    try:
        # Bulk Create LTI Resource Links
        api_response = api_instance.api_v1_courses_course_id_lti_resource_links_bulk_post(course_id, api_v1_courses_course_id_lti_resource_links_post_request)
        print("The response of DefaultApi->api_v1_courses_course_id_lti_resource_links_bulk_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_lti_resource_links_bulk_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The Canvas identifier for the course. | 
 **api_v1_courses_course_id_lti_resource_links_post_request** | [**List[ApiV1CoursesCourseIdLtiResourceLinksPostRequest]**](ApiV1CoursesCourseIdLtiResourceLinksPostRequest.md)|  | 

### Return type

[**List[ResourceLink]**](ResourceLink.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of created LTI Resource Link objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_lti_resource_links_get**
> List[ResourceLink] api_v1_courses_course_id_lti_resource_links_get(course_id, include_deleted=include_deleted, per_page=per_page)

Returns all Resource Links in the specified course

Returns all Resource Links in the specified course. This includes links that are associated with
Assignments, Module Items, Collaborations, and that are embedded in rich content. This endpoint
is paginated and will return 50 links per page by default. Links are sorted by creation order.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.resource_link import ResourceLink
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The Canvas identifier for the course.
    include_deleted = True # bool | Include deleted resource links and links associated with deleted content in response. Default is false. (optional)
    per_page = 56 # int | The number of registrations to return per page. Defaults to 50. (optional)

    try:
        # Returns all Resource Links in the specified course
        api_response = api_instance.api_v1_courses_course_id_lti_resource_links_get(course_id, include_deleted=include_deleted, per_page=per_page)
        print("The response of DefaultApi->api_v1_courses_course_id_lti_resource_links_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_lti_resource_links_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The Canvas identifier for the course. | 
 **include_deleted** | **bool**| Include deleted resource links and links associated with deleted content in response. Default is false. | [optional] 
 **per_page** | **int**| The number of registrations to return per page. Defaults to 50. | [optional] 

### Return type

[**List[ResourceLink]**](ResourceLink.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of LTI Resource Link objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_lti_resource_links_id_delete**
> ResourceLink api_v1_courses_course_id_lti_resource_links_id_delete(course_id, id)

Delete an LTI Resource Link

Delete the specified resource link. Only links not associated with Assignments, Module Items,
or Collaborations can be deleted.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.resource_link import ResourceLink
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The Canvas identifier for the course.
    id = 'id_example' # str | The LTI Resource Link identifier or special lookup format.

    try:
        # Delete an LTI Resource Link
        api_response = api_instance.api_v1_courses_course_id_lti_resource_links_id_delete(course_id, id)
        print("The response of DefaultApi->api_v1_courses_course_id_lti_resource_links_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_lti_resource_links_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The Canvas identifier for the course. | 
 **id** | **str**| The LTI Resource Link identifier or special lookup format. | 

### Return type

[**ResourceLink**](ResourceLink.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted LTI Resource Link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_lti_resource_links_id_get**
> ResourceLink api_v1_courses_course_id_lti_resource_links_id_get(course_id, id, include_deleted=include_deleted)

Show an LTI Resource Link

Return details about the specified resource link. The ID can be in the standard Canvas format,
or in the special formats `resource_link_uuid:<uuid>` or `lookup_uuid:<uuid>`.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.resource_link import ResourceLink
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The Canvas identifier for the course.
    id = 'id_example' # str | The LTI Resource Link identifier or special lookup format.
    include_deleted = True # bool | Include deleted resource links in search. Default is false. (optional)

    try:
        # Show an LTI Resource Link
        api_response = api_instance.api_v1_courses_course_id_lti_resource_links_id_get(course_id, id, include_deleted=include_deleted)
        print("The response of DefaultApi->api_v1_courses_course_id_lti_resource_links_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_lti_resource_links_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The Canvas identifier for the course. | 
 **id** | **str**| The LTI Resource Link identifier or special lookup format. | 
 **include_deleted** | **bool**| Include deleted resource links in search. Default is false. | [optional] 

### Return type

[**ResourceLink**](ResourceLink.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An LTI Resource Link object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_lti_resource_links_id_put**
> ResourceLink api_v1_courses_course_id_lti_resource_links_id_put(course_id, id, url=url, custom=custom, include_deleted=include_deleted, context_external_tool_id=context_external_tool_id)

Update an LTI Resource Link

Update the specified resource link with the provided parameters.
Changing existing links may result in launch errors.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.resource_link import ResourceLink
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The Canvas identifier for the course.
    id = 'id_example' # str | The LTI Resource Link identifier or special lookup format.
    url = 'url_example' # str | The launch URL for this resource link. Must match the URL or domain of the associated tool.  (optional)
    custom = None # Dict[str, str] | Custom parameters to be sent to the tool when launching this link. (optional)
    include_deleted = True # bool | Update link even if it is deleted. Default is false. (optional)
    context_external_tool_id = 56 # int | The Canvas identifier for the LTI 1.3 External Tool that the resource link was originally installed from.  (optional)

    try:
        # Update an LTI Resource Link
        api_response = api_instance.api_v1_courses_course_id_lti_resource_links_id_put(course_id, id, url=url, custom=custom, include_deleted=include_deleted, context_external_tool_id=context_external_tool_id)
        print("The response of DefaultApi->api_v1_courses_course_id_lti_resource_links_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_lti_resource_links_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The Canvas identifier for the course. | 
 **id** | **str**| The LTI Resource Link identifier or special lookup format. | 
 **url** | **str**| The launch URL for this resource link. Must match the URL or domain of the associated tool.  | [optional] 
 **custom** | [**Dict[str, str]**](Dict.md)| Custom parameters to be sent to the tool when launching this link. | [optional] 
 **include_deleted** | **bool**| Update link even if it is deleted. Default is false. | [optional] 
 **context_external_tool_id** | **int**| The Canvas identifier for the LTI 1.3 External Tool that the resource link was originally installed from.  | [optional] 

### Return type

[**ResourceLink**](ResourceLink.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated LTI Resource Link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_lti_resource_links_post**
> ResourceLink api_v1_courses_course_id_lti_resource_links_post(course_id, url, title=title, custom=custom)

Create an LTI Resource Link

Create a new LTI Resource Link in the specified course with the provided parameters.
Links created via this API cannot be associated with specific Canvas content and are suitable only
for embedding in rich content using the canvas_launch_url provided in the response.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.resource_link import ResourceLink
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The Canvas identifier for the course.
    url = 'url_example' # str | The launch URL for this resource link.
    title = 'title_example' # str | The title of the resource link. (optional)
    custom = None # Dict[str, str] | Custom parameters to be sent to the tool when launching this link. (optional)

    try:
        # Create an LTI Resource Link
        api_response = api_instance.api_v1_courses_course_id_lti_resource_links_post(course_id, url, title=title, custom=custom)
        print("The response of DefaultApi->api_v1_courses_course_id_lti_resource_links_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_lti_resource_links_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The Canvas identifier for the course. | 
 **url** | **str**| The launch URL for this resource link. | 
 **title** | **str**| The title of the resource link. | [optional] 
 **custom** | [**Dict[str, str]**](Dict.md)| Custom parameters to be sent to the tool when launching this link. | [optional] 

### Return type

[**ResourceLink**](ResourceLink.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created LTI Resource Link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_get**
> List[object] api_v1_courses_course_id_quizzes_get(course_id, search_term=search_term)

List quizzes in a course

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course
    search_term = 'search_term_example' # str | The partial title of the quizzes to match and return. (optional)

    try:
        # List quizzes in a course
        api_response = api_instance.api_v1_courses_course_id_quizzes_get(course_id, search_term=search_term)
        print("The response of DefaultApi->api_v1_courses_course_id_quizzes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **search_term** | **str**| The partial title of the quizzes to match and return. | [optional] 

### Return type

**List[object]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of Quiz objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_id_delete**
> api_v1_courses_course_id_quizzes_id_delete(course_id, id)

Delete a quiz

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    id = 56 # int | 

    try:
        # Delete a quiz
        api_instance.api_v1_courses_course_id_quizzes_id_delete(course_id, id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Quiz deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_id_get**
> object api_v1_courses_course_id_quizzes_id_get(course_id, id)

Get a single quiz

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course
    id = 56 # int | ID of the quiz

    try:
        # Get a single quiz
        api_response = api_instance.api_v1_courses_course_id_quizzes_id_get(course_id, id)
        print("The response of DefaultApi->api_v1_courses_course_id_quizzes_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **id** | **int**| ID of the quiz | 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Quiz object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_id_put**
> object api_v1_courses_course_id_quizzes_id_put(course_id, id, api_v1_courses_course_id_quizzes_id_put_request=api_v1_courses_course_id_quizzes_id_put_request)

Edit a quiz

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_quizzes_id_put_request import ApiV1CoursesCourseIdQuizzesIdPutRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    id = 56 # int | 
    api_v1_courses_course_id_quizzes_id_put_request = canvas_lms_sdk.ApiV1CoursesCourseIdQuizzesIdPutRequest() # ApiV1CoursesCourseIdQuizzesIdPutRequest |  (optional)

    try:
        # Edit a quiz
        api_response = api_instance.api_v1_courses_course_id_quizzes_id_put(course_id, id, api_v1_courses_course_id_quizzes_id_put_request=api_v1_courses_course_id_quizzes_id_put_request)
        print("The response of DefaultApi->api_v1_courses_course_id_quizzes_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **id** | **int**|  | 
 **api_v1_courses_course_id_quizzes_id_put_request** | [**ApiV1CoursesCourseIdQuizzesIdPutRequest**](ApiV1CoursesCourseIdQuizzesIdPutRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated Quiz object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_id_reorder_post**
> api_v1_courses_course_id_quizzes_id_reorder_post(course_id, id, api_v1_courses_course_id_quizzes_id_reorder_post_request)

Reorder quiz items

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_quizzes_id_reorder_post_request import ApiV1CoursesCourseIdQuizzesIdReorderPostRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    id = 56 # int | 
    api_v1_courses_course_id_quizzes_id_reorder_post_request = canvas_lms_sdk.ApiV1CoursesCourseIdQuizzesIdReorderPostRequest() # ApiV1CoursesCourseIdQuizzesIdReorderPostRequest | 

    try:
        # Reorder quiz items
        api_instance.api_v1_courses_course_id_quizzes_id_reorder_post(course_id, id, api_v1_courses_course_id_quizzes_id_reorder_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_id_reorder_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **id** | **int**|  | 
 **api_v1_courses_course_id_quizzes_id_reorder_post_request** | [**ApiV1CoursesCourseIdQuizzesIdReorderPostRequest**](ApiV1CoursesCourseIdQuizzesIdReorderPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content (reorder successful) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_id_validate_access_code_post**
> bool api_v1_courses_course_id_quizzes_id_validate_access_code_post(course_id, id, api_v1_courses_course_id_quizzes_id_validate_access_code_post_request)

Validate quiz access code

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_quizzes_id_validate_access_code_post_request import ApiV1CoursesCourseIdQuizzesIdValidateAccessCodePostRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    id = 56 # int | 
    api_v1_courses_course_id_quizzes_id_validate_access_code_post_request = canvas_lms_sdk.ApiV1CoursesCourseIdQuizzesIdValidateAccessCodePostRequest() # ApiV1CoursesCourseIdQuizzesIdValidateAccessCodePostRequest | 

    try:
        # Validate quiz access code
        api_response = api_instance.api_v1_courses_course_id_quizzes_id_validate_access_code_post(course_id, id, api_v1_courses_course_id_quizzes_id_validate_access_code_post_request)
        print("The response of DefaultApi->api_v1_courses_course_id_quizzes_id_validate_access_code_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_id_validate_access_code_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **id** | **int**|  | 
 **api_v1_courses_course_id_quizzes_id_validate_access_code_post_request** | [**ApiV1CoursesCourseIdQuizzesIdValidateAccessCodePostRequest**](ApiV1CoursesCourseIdQuizzesIdValidateAccessCodePostRequest.md)|  | 

### Return type

**bool**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Boolean indicating whether the access code is correct |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_post**
> object api_v1_courses_course_id_quizzes_post(course_id, api_v1_courses_course_id_quizzes_post_request)

Create a quiz

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_quizzes_post_request import ApiV1CoursesCourseIdQuizzesPostRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course
    api_v1_courses_course_id_quizzes_post_request = canvas_lms_sdk.ApiV1CoursesCourseIdQuizzesPostRequest() # ApiV1CoursesCourseIdQuizzesPostRequest | 

    try:
        # Create a quiz
        api_response = api_instance.api_v1_courses_course_id_quizzes_post(course_id, api_v1_courses_course_id_quizzes_post_request)
        print("The response of DefaultApi->api_v1_courses_course_id_quizzes_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **api_v1_courses_course_id_quizzes_post_request** | [**ApiV1CoursesCourseIdQuizzesPostRequest**](ApiV1CoursesCourseIdQuizzesPostRequest.md)|  | 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The newly created Quiz object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_quiz_id_questions_get**
> List[QuizQuestion] api_v1_courses_course_id_quizzes_quiz_id_questions_get(course_id, quiz_id, quiz_submission_id=quiz_submission_id, quiz_submission_attempt=quiz_submission_attempt)

List questions in a quiz or a submission

Returns the paginated list of QuizQuestions in this quiz.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.quiz_question import QuizQuestion
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The course’s unique identifier.
    quiz_id = 56 # int | The quiz’s unique identifier.
    quiz_submission_id = 56 # int | If specified, the endpoint will return the questions that were presented for that submission. This is useful if the quiz has been modified after the submission was created and the latest quiz version’s set of questions does not match the submission’s. NOTE: you must specify quiz_submission_attempt as well if you specify this parameter. (optional)
    quiz_submission_attempt = 56 # int | The attempt of the submission you want the questions for. (optional)

    try:
        # List questions in a quiz or a submission
        api_response = api_instance.api_v1_courses_course_id_quizzes_quiz_id_questions_get(course_id, quiz_id, quiz_submission_id=quiz_submission_id, quiz_submission_attempt=quiz_submission_attempt)
        print("The response of DefaultApi->api_v1_courses_course_id_quizzes_quiz_id_questions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_quiz_id_questions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The course’s unique identifier. | 
 **quiz_id** | **int**| The quiz’s unique identifier. | 
 **quiz_submission_id** | **int**| If specified, the endpoint will return the questions that were presented for that submission. This is useful if the quiz has been modified after the submission was created and the latest quiz version’s set of questions does not match the submission’s. NOTE: you must specify quiz_submission_attempt as well if you specify this parameter. | [optional] 
 **quiz_submission_attempt** | **int**| The attempt of the submission you want the questions for. | [optional] 

### Return type

[**List[QuizQuestion]**](QuizQuestion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of QuizQuestion objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_quiz_id_questions_id_delete**
> api_v1_courses_course_id_quizzes_quiz_id_questions_id_delete(course_id, quiz_id, id)

Delete a quiz question

Deletes a quiz question

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The course’s unique identifier.
    quiz_id = 56 # int | The quiz’s unique identifier.
    id = 56 # int | The quiz question’s unique identifier.

    try:
        # Delete a quiz question
        api_instance.api_v1_courses_course_id_quizzes_quiz_id_questions_id_delete(course_id, quiz_id, id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_quiz_id_questions_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The course’s unique identifier. | 
 **quiz_id** | **int**| The quiz’s unique identifier. | 
 **id** | **int**| The quiz question’s unique identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content, question deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_quiz_id_questions_id_get**
> QuizQuestion api_v1_courses_course_id_quizzes_quiz_id_questions_id_get(course_id, quiz_id, id)

Get a single quiz question

Returns the quiz question with the given id

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.quiz_question import QuizQuestion
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The course’s unique identifier.
    quiz_id = 56 # int | The quiz’s unique identifier.
    id = 56 # int | The quiz question unique identifier.

    try:
        # Get a single quiz question
        api_response = api_instance.api_v1_courses_course_id_quizzes_quiz_id_questions_id_get(course_id, quiz_id, id)
        print("The response of DefaultApi->api_v1_courses_course_id_quizzes_quiz_id_questions_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_quiz_id_questions_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The course’s unique identifier. | 
 **quiz_id** | **int**| The quiz’s unique identifier. | 
 **id** | **int**| The quiz question unique identifier. | 

### Return type

[**QuizQuestion**](QuizQuestion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | QuizQuestion object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_quiz_id_questions_id_put**
> QuizQuestion api_v1_courses_course_id_quizzes_quiz_id_questions_id_put(course_id, quiz_id, id, api_v1_courses_course_id_quizzes_quiz_id_questions_post_request)

Update an existing quiz question

Updates an existing quiz question for this quiz

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_quizzes_quiz_id_questions_post_request import ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest
from canvas_lms_sdk.models.quiz_question import QuizQuestion
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The course’s unique identifier.
    quiz_id = 56 # int | The quiz’s unique identifier.
    id = 56 # int | The quiz question’s unique identifier.
    api_v1_courses_course_id_quizzes_quiz_id_questions_post_request = canvas_lms_sdk.ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest() # ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest | Quiz question fields to update

    try:
        # Update an existing quiz question
        api_response = api_instance.api_v1_courses_course_id_quizzes_quiz_id_questions_id_put(course_id, quiz_id, id, api_v1_courses_course_id_quizzes_quiz_id_questions_post_request)
        print("The response of DefaultApi->api_v1_courses_course_id_quizzes_quiz_id_questions_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_quiz_id_questions_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The course’s unique identifier. | 
 **quiz_id** | **int**| The quiz’s unique identifier. | 
 **id** | **int**| The quiz question’s unique identifier. | 
 **api_v1_courses_course_id_quizzes_quiz_id_questions_post_request** | [**ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest**](ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest.md)| Quiz question fields to update | 

### Return type

[**QuizQuestion**](QuizQuestion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | QuizQuestion updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_quizzes_quiz_id_questions_post**
> QuizQuestion api_v1_courses_course_id_quizzes_quiz_id_questions_post(course_id, quiz_id, api_v1_courses_course_id_quizzes_quiz_id_questions_post_request)

Create a single quiz question

Create a new quiz question for this quiz

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_quizzes_quiz_id_questions_post_request import ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest
from canvas_lms_sdk.models.quiz_question import QuizQuestion
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | The course’s unique identifier.
    quiz_id = 56 # int | The quiz’s unique identifier.
    api_v1_courses_course_id_quizzes_quiz_id_questions_post_request = canvas_lms_sdk.ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest() # ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest | Quiz question to create

    try:
        # Create a single quiz question
        api_response = api_instance.api_v1_courses_course_id_quizzes_quiz_id_questions_post(course_id, quiz_id, api_v1_courses_course_id_quizzes_quiz_id_questions_post_request)
        print("The response of DefaultApi->api_v1_courses_course_id_quizzes_quiz_id_questions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_quizzes_quiz_id_questions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| The course’s unique identifier. | 
 **quiz_id** | **int**| The quiz’s unique identifier. | 
 **api_v1_courses_course_id_quizzes_quiz_id_questions_post_request** | [**ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest**](ApiV1CoursesCourseIdQuizzesQuizIdQuestionsPostRequest.md)| Quiz question to create | 

### Return type

[**QuizQuestion**](QuizQuestion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | QuizQuestion created successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_sections_get**
> List[Section] api_v1_courses_course_id_sections_get(course_id, include=include, search_term=search_term)

A paginated list of the sections for this course.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.section import Section
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course.
    include = ['include_example'] # List[str] | Associations to include with the section. (optional)
    search_term = 'search_term_example' # str | Search term for course sections, minimum 2 characters. (optional)

    try:
        # A paginated list of the sections for this course.
        api_response = api_instance.api_v1_courses_course_id_sections_get(course_id, include=include, search_term=search_term)
        print("The response of DefaultApi->api_v1_courses_course_id_sections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_sections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **include** | [**List[str]**](str.md)| Associations to include with the section. | [optional] 
 **search_term** | **str**| Search term for course sections, minimum 2 characters. | [optional] 

### Return type

[**List[Section]**](Section.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Section objects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_sections_id_get**
> Section api_v1_courses_course_id_sections_id_get(course_id, id, include=include)

Gets details about a specific section.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.section import Section
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course.
    id = 56 # int | ID of the section.
    include = ['include_example'] # List[str] | Associations to include with the section. (optional)

    try:
        # Gets details about a specific section.
        api_response = api_instance.api_v1_courses_course_id_sections_id_get(course_id, id, include=include)
        print("The response of DefaultApi->api_v1_courses_course_id_sections_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_sections_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **id** | **int**| ID of the section. | 
 **include** | [**List[str]**](str.md)| Associations to include with the section. | [optional] 

### Return type

[**Section**](Section.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Section object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_sections_post**
> Section api_v1_courses_course_id_sections_post(course_id, api_v1_courses_course_id_sections_post_request)

Creates a new section for this course.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_sections_post_request import ApiV1CoursesCourseIdSectionsPostRequest
from canvas_lms_sdk.models.section import Section
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course.
    api_v1_courses_course_id_sections_post_request = canvas_lms_sdk.ApiV1CoursesCourseIdSectionsPostRequest() # ApiV1CoursesCourseIdSectionsPostRequest | 

    try:
        # Creates a new section for this course.
        api_response = api_instance.api_v1_courses_course_id_sections_post(course_id, api_v1_courses_course_id_sections_post_request)
        print("The response of DefaultApi->api_v1_courses_course_id_sections_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_sections_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **api_v1_courses_course_id_sections_post_request** | [**ApiV1CoursesCourseIdSectionsPostRequest**](ApiV1CoursesCourseIdSectionsPostRequest.md)|  | 

### Return type

[**Section**](Section.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Section created successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_users_user_id_last_attended_put**
> Enrollment api_v1_courses_course_id_users_user_id_last_attended_put(course_id, user_id, var_date=var_date)

Add last attended date to a student enrollment

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.enrollment import Enrollment
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    user_id = 56 # int | 
    var_date = '2013-10-20' # date | The last attended date in ISO8601 format. (optional)

    try:
        # Add last attended date to a student enrollment
        api_response = api_instance.api_v1_courses_course_id_users_user_id_last_attended_put(course_id, user_id, var_date=var_date)
        print("The response of DefaultApi->api_v1_courses_course_id_users_user_id_last_attended_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_users_user_id_last_attended_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **user_id** | **int**|  | 
 **var_date** | **date**| The last attended date in ISO8601 format. | [optional] 

### Return type

[**Enrollment**](Enrollment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated Enrollment object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_what_if_grades_reset_put**
> api_v1_courses_course_id_what_if_grades_reset_put(course_id)

Reset the what-if scores for the current user for an entire course and recalculate grades

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | Course ID

    try:
        # Reset the what-if scores for the current user for an entire course and recalculate grades
        api_instance.api_v1_courses_course_id_what_if_grades_reset_put(course_id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_courses_course_id_what_if_grades_reset_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| Course ID | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful reset of what-if grades |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_developer_keys_id_delete**
> DeveloperKey api_v1_developer_keys_id_delete(id)

Delete a Developer Key

Delete an existing Canvas API key. Deleting an LTI 1.3 registration should be done via the LTI Registration API.


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.developer_key import DeveloperKey
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    id = 56 # int | The Canvas DeveloperKey ID.

    try:
        # Delete a Developer Key
        api_response = api_instance.api_v1_developer_keys_id_delete(id)
        print("The response of DefaultApi->api_v1_developer_keys_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_developer_keys_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The Canvas DeveloperKey ID. | 

### Return type

[**DeveloperKey**](DeveloperKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted DeveloperKey object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_developer_keys_id_put**
> DeveloperKey api_v1_developer_keys_id_put(id, developer_key_input)

Update a Developer Key

Update an existing Canvas API key. Updating an LTI 1.3 registration is not supported here and should be done via the LTI Registration API.


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.developer_key import DeveloperKey
from canvas_lms_sdk.models.developer_key_input import DeveloperKeyInput
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    id = 56 # int | The Canvas DeveloperKey ID.
    developer_key_input = canvas_lms_sdk.DeveloperKeyInput() # DeveloperKeyInput | Attributes to update on the Developer Key

    try:
        # Update a Developer Key
        api_response = api_instance.api_v1_developer_keys_id_put(id, developer_key_input)
        print("The response of DefaultApi->api_v1_developer_keys_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_developer_keys_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The Canvas DeveloperKey ID. | 
 **developer_key_input** | [**DeveloperKeyInput**](DeveloperKeyInput.md)| Attributes to update on the Developer Key | 

### Return type

[**DeveloperKey**](DeveloperKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated DeveloperKey object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_groups_group_id_discussion_topics_get**
> List[DiscussionTopic] api_v1_groups_group_id_discussion_topics_get(group_id, include=include, order_by=order_by, scope=scope, only_announcements=only_announcements, filter_by=filter_by, search_term=search_term, exclude_context_module_locked_topics=exclude_context_module_locked_topics)

Returns the paginated list of discussion topics for a group.

Returns the paginated list of discussion topics for this group.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.discussion_topic import DiscussionTopic
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    group_id = 56 # int | The ID of the group.
    include = ['include_example'] # List[str] | If “all_dates” is passed, all dates associated with graded discussions’ assignments will be included. If “sections” is passed, includes the course sections that are associated with the topic. If “sections_user_count” is passed, then either (a) if sections were asked for *and* the topic is specific to certain course sections, includes the number of users in each section; or (b) includes at the root level the total number of users in the topic's context. If “overrides” is passed, the overrides for the assignment will be included.  (optional)
    order_by = 'order_by_example' # str | Determines the order of the discussion topic list. Defaults to “position”. (optional)
    scope = 'scope_example' # str | Only return discussion topics in the given state(s). Defaults to including all topics. Filtering is done after pagination.  (optional)
    only_announcements = True # bool | Return announcements instead of discussion topics. Defaults to false. (optional)
    filter_by = 'filter_by_example' # str | The state of the discussion topic to return. Currently only supports “unread”. (optional)
    search_term = 'search_term_example' # str | The partial title of the discussion topics to match and return. (optional)
    exclude_context_module_locked_topics = True # bool | For students, exclude topics that are locked by module progression. Defaults to false. (optional)

    try:
        # Returns the paginated list of discussion topics for a group.
        api_response = api_instance.api_v1_groups_group_id_discussion_topics_get(group_id, include=include, order_by=order_by, scope=scope, only_announcements=only_announcements, filter_by=filter_by, search_term=search_term, exclude_context_module_locked_topics=exclude_context_module_locked_topics)
        print("The response of DefaultApi->api_v1_groups_group_id_discussion_topics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_groups_group_id_discussion_topics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**| The ID of the group. | 
 **include** | [**List[str]**](str.md)| If “all_dates” is passed, all dates associated with graded discussions’ assignments will be included. If “sections” is passed, includes the course sections that are associated with the topic. If “sections_user_count” is passed, then either (a) if sections were asked for *and* the topic is specific to certain course sections, includes the number of users in each section; or (b) includes at the root level the total number of users in the topic&#39;s context. If “overrides” is passed, the overrides for the assignment will be included.  | [optional] 
 **order_by** | **str**| Determines the order of the discussion topic list. Defaults to “position”. | [optional] 
 **scope** | **str**| Only return discussion topics in the given state(s). Defaults to including all topics. Filtering is done after pagination.  | [optional] 
 **only_announcements** | **bool**| Return announcements instead of discussion topics. Defaults to false. | [optional] 
 **filter_by** | **str**| The state of the discussion topic to return. Currently only supports “unread”. | [optional] 
 **search_term** | **str**| The partial title of the discussion topics to match and return. | [optional] 
 **exclude_context_module_locked_topics** | **bool**| For students, exclude topics that are locked by module progression. Defaults to false. | [optional] 

### Return type

[**List[DiscussionTopic]**](DiscussionTopic.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of DiscussionTopic objects |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_quiz_submissions_quiz_submission_id_questions_get**
> ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response api_v1_quiz_submissions_quiz_submission_id_questions_get(quiz_submission_id, include=include)

Get a list of all the question records for this quiz submission.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_quiz_submissions_quiz_submission_id_questions_get200_response import ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    quiz_submission_id = 56 # int | 
    include = 'include_example' # str | Associations to include with the quiz submission question. (optional)

    try:
        # Get a list of all the question records for this quiz submission.
        api_response = api_instance.api_v1_quiz_submissions_quiz_submission_id_questions_get(quiz_submission_id, include=include)
        print("The response of DefaultApi->api_v1_quiz_submissions_quiz_submission_id_questions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_quiz_submissions_quiz_submission_id_questions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quiz_submission_id** | **int**|  | 
 **include** | **str**| Associations to include with the quiz submission question. | [optional] 

### Return type

[**ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response**](ApiV1QuizSubmissionsQuizSubmissionIdQuestionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put**
> api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put(quiz_submission_id, id, api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request)

Set a flag on a quiz question to indicate that you want to return to it later.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request import ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    quiz_submission_id = 56 # int | 
    id = 56 # int | 
    api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request = canvas_lms_sdk.ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest() # ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest | 

    try:
        # Set a flag on a quiz question to indicate that you want to return to it later.
        api_instance.api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put(quiz_submission_id, id, api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quiz_submission_id** | **int**|  | 
 **id** | **int**|  | 
 **api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request** | [**ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest**](ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Question flagged successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_quiz_submissions_quiz_submission_id_questions_id_formatted_answer_get**
> ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFormattedAnswerGet200Response api_v1_quiz_submissions_quiz_submission_id_questions_id_formatted_answer_get(quiz_submission_id, id, answer)

Matches the intended behavior of the UI when a numerical answer is entered and returns the resulting formatted number.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_quiz_submissions_quiz_submission_id_questions_id_formatted_answer_get200_response import ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFormattedAnswerGet200Response
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    quiz_submission_id = 56 # int | 
    id = 56 # int | 
    answer = 3.4 # float | 

    try:
        # Matches the intended behavior of the UI when a numerical answer is entered and returns the resulting formatted number.
        api_response = api_instance.api_v1_quiz_submissions_quiz_submission_id_questions_id_formatted_answer_get(quiz_submission_id, id, answer)
        print("The response of DefaultApi->api_v1_quiz_submissions_quiz_submission_id_questions_id_formatted_answer_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_quiz_submissions_quiz_submission_id_questions_id_formatted_answer_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quiz_submission_id** | **int**|  | 
 **id** | **int**|  | 
 **answer** | **float**|  | 

### Return type

[**ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFormattedAnswerGet200Response**](ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFormattedAnswerGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Formatted numerical answer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_quiz_submissions_quiz_submission_id_questions_id_unflag_put**
> api_v1_quiz_submissions_quiz_submission_id_questions_id_unflag_put(quiz_submission_id, id, api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request)

Remove the flag that you previously set on a quiz question after you've returned to it.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request import ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    quiz_submission_id = 56 # int | 
    id = 56 # int | 
    api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request = canvas_lms_sdk.ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest() # ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest | 

    try:
        # Remove the flag that you previously set on a quiz question after you've returned to it.
        api_instance.api_v1_quiz_submissions_quiz_submission_id_questions_id_unflag_put(quiz_submission_id, id, api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_quiz_submissions_quiz_submission_id_questions_id_unflag_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quiz_submission_id** | **int**|  | 
 **id** | **int**|  | 
 **api_v1_quiz_submissions_quiz_submission_id_questions_id_flag_put_request** | [**ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest**](ApiV1QuizSubmissionsQuizSubmissionIdQuestionsIdFlagPutRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Question unflagged successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_quiz_submissions_quiz_submission_id_questions_post**
> List[QuizSubmissionQuestion] api_v1_quiz_submissions_quiz_submission_id_questions_post(quiz_submission_id, api_v1_quiz_submissions_quiz_submission_id_questions_post_request)

Provide or update an answer to one or more QuizQuestions.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_quiz_submissions_quiz_submission_id_questions_post_request import ApiV1QuizSubmissionsQuizSubmissionIdQuestionsPostRequest
from canvas_lms_sdk.models.quiz_submission_question import QuizSubmissionQuestion
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    quiz_submission_id = 56 # int | 
    api_v1_quiz_submissions_quiz_submission_id_questions_post_request = canvas_lms_sdk.ApiV1QuizSubmissionsQuizSubmissionIdQuestionsPostRequest() # ApiV1QuizSubmissionsQuizSubmissionIdQuestionsPostRequest | 

    try:
        # Provide or update an answer to one or more QuizQuestions.
        api_response = api_instance.api_v1_quiz_submissions_quiz_submission_id_questions_post(quiz_submission_id, api_v1_quiz_submissions_quiz_submission_id_questions_post_request)
        print("The response of DefaultApi->api_v1_quiz_submissions_quiz_submission_id_questions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_quiz_submissions_quiz_submission_id_questions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quiz_submission_id** | **int**|  | 
 **api_v1_quiz_submissions_quiz_submission_id_questions_post_request** | [**ApiV1QuizSubmissionsQuizSubmissionIdQuestionsPostRequest**](ApiV1QuizSubmissionsQuizSubmissionIdQuestionsPostRequest.md)|  | 

### Return type

[**List[QuizSubmissionQuestion]**](QuizSubmissionQuestion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of QuizSubmissionQuestion objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_sections_id_crosslist_delete**
> Section api_v1_sections_id_crosslist_delete(id, api_v1_sections_id_crosslist_new_course_id_post_request=api_v1_sections_id_crosslist_new_course_id_post_request)

Undo cross-listing of a Section.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_sections_id_crosslist_new_course_id_post_request import ApiV1SectionsIdCrosslistNewCourseIdPostRequest
from canvas_lms_sdk.models.section import Section
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    id = 56 # int | ID of the section.
    api_v1_sections_id_crosslist_new_course_id_post_request = canvas_lms_sdk.ApiV1SectionsIdCrosslistNewCourseIdPostRequest() # ApiV1SectionsIdCrosslistNewCourseIdPostRequest |  (optional)

    try:
        # Undo cross-listing of a Section.
        api_response = api_instance.api_v1_sections_id_crosslist_delete(id, api_v1_sections_id_crosslist_new_course_id_post_request=api_v1_sections_id_crosslist_new_course_id_post_request)
        print("The response of DefaultApi->api_v1_sections_id_crosslist_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_sections_id_crosslist_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the section. | 
 **api_v1_sections_id_crosslist_new_course_id_post_request** | [**ApiV1SectionsIdCrosslistNewCourseIdPostRequest**](ApiV1SectionsIdCrosslistNewCourseIdPostRequest.md)|  | [optional] 

### Return type

[**Section**](Section.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Section de-cross-listed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_sections_id_crosslist_new_course_id_post**
> Section api_v1_sections_id_crosslist_new_course_id_post(id, new_course_id, api_v1_sections_id_crosslist_new_course_id_post_request=api_v1_sections_id_crosslist_new_course_id_post_request)

Move the section to another course.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_sections_id_crosslist_new_course_id_post_request import ApiV1SectionsIdCrosslistNewCourseIdPostRequest
from canvas_lms_sdk.models.section import Section
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    id = 56 # int | ID of the section.
    new_course_id = 56 # int | ID of the new course.
    api_v1_sections_id_crosslist_new_course_id_post_request = canvas_lms_sdk.ApiV1SectionsIdCrosslistNewCourseIdPostRequest() # ApiV1SectionsIdCrosslistNewCourseIdPostRequest |  (optional)

    try:
        # Move the section to another course.
        api_response = api_instance.api_v1_sections_id_crosslist_new_course_id_post(id, new_course_id, api_v1_sections_id_crosslist_new_course_id_post_request=api_v1_sections_id_crosslist_new_course_id_post_request)
        print("The response of DefaultApi->api_v1_sections_id_crosslist_new_course_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_sections_id_crosslist_new_course_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the section. | 
 **new_course_id** | **int**| ID of the new course. | 
 **api_v1_sections_id_crosslist_new_course_id_post_request** | [**ApiV1SectionsIdCrosslistNewCourseIdPostRequest**](ApiV1SectionsIdCrosslistNewCourseIdPostRequest.md)|  | [optional] 

### Return type

[**Section**](Section.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Section cross-listed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_sections_id_delete**
> Section api_v1_sections_id_delete(id)

Delete an existing section.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.section import Section
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    id = 56 # int | ID of the section.

    try:
        # Delete an existing section.
        api_response = api_instance.api_v1_sections_id_delete(id)
        print("The response of DefaultApi->api_v1_sections_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_sections_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the section. | 

### Return type

[**Section**](Section.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Section deleted successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_sections_id_get**
> Section api_v1_sections_id_get(id, include=include)

Gets details about a specific section.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.section import Section
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    id = 56 # int | ID of the section.
    include = ['include_example'] # List[str] | Associations to include with the section. (optional)

    try:
        # Gets details about a specific section.
        api_response = api_instance.api_v1_sections_id_get(id, include=include)
        print("The response of DefaultApi->api_v1_sections_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_sections_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the section. | 
 **include** | [**List[str]**](str.md)| Associations to include with the section. | [optional] 

### Return type

[**Section**](Section.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Section object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_sections_id_put**
> Section api_v1_sections_id_put(id, api_v1_sections_id_put_request=api_v1_sections_id_put_request)

Modify an existing section.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_sections_id_put_request import ApiV1SectionsIdPutRequest
from canvas_lms_sdk.models.section import Section
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    id = 56 # int | ID of the section.
    api_v1_sections_id_put_request = canvas_lms_sdk.ApiV1SectionsIdPutRequest() # ApiV1SectionsIdPutRequest |  (optional)

    try:
        # Modify an existing section.
        api_response = api_instance.api_v1_sections_id_put(id, api_v1_sections_id_put_request=api_v1_sections_id_put_request)
        print("The response of DefaultApi->api_v1_sections_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_sections_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the section. | 
 **api_v1_sections_id_put_request** | [**ApiV1SectionsIdPutRequest**](ApiV1SectionsIdPutRequest.md)|  | [optional] 

### Return type

[**Section**](Section.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Section updated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_sections_section_id_enrollments_get**
> List[Enrollment] api_v1_sections_section_id_enrollments_get(section_id)

Return a paginated list of enrollments in a section

Same behavior as course enrollments, scoped to a section.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.enrollment import Enrollment
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    section_id = 56 # int | The ID of the section.

    try:
        # Return a paginated list of enrollments in a section
        api_response = api_instance.api_v1_sections_section_id_enrollments_get(section_id)
        print("The response of DefaultApi->api_v1_sections_section_id_enrollments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_sections_section_id_enrollments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_id** | **int**| The ID of the section. | 

### Return type

[**List[Enrollment]**](Enrollment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Enrollment objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_submissions_id_what_if_grades_put**
> ApiV1SubmissionsIdWhatIfGradesPut200Response api_v1_submissions_id_what_if_grades_put(id, api_v1_submissions_id_what_if_grades_put_request)

Update a submission's what-if score and calculate grades

Enter a what-if score for a submission and receive the calculated grades.
Grade calculation is a costly operation, so this API should be used sparingly.


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_submissions_id_what_if_grades_put200_response import ApiV1SubmissionsIdWhatIfGradesPut200Response
from canvas_lms_sdk.models.api_v1_submissions_id_what_if_grades_put_request import ApiV1SubmissionsIdWhatIfGradesPutRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    id = 56 # int | Submission ID
    api_v1_submissions_id_what_if_grades_put_request = canvas_lms_sdk.ApiV1SubmissionsIdWhatIfGradesPutRequest() # ApiV1SubmissionsIdWhatIfGradesPutRequest | 

    try:
        # Update a submission's what-if score and calculate grades
        api_response = api_instance.api_v1_submissions_id_what_if_grades_put(id, api_v1_submissions_id_what_if_grades_put_request)
        print("The response of DefaultApi->api_v1_submissions_id_what_if_grades_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_submissions_id_what_if_grades_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Submission ID | 
 **api_v1_submissions_id_what_if_grades_put_request** | [**ApiV1SubmissionsIdWhatIfGradesPutRequest**](ApiV1SubmissionsIdWhatIfGradesPutRequest.md)|  | 

### Return type

[**ApiV1SubmissionsIdWhatIfGradesPut200Response**](ApiV1SubmissionsIdWhatIfGradesPut200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Grades objects and the submission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_self_groups_get**
> List[Group] api_v1_users_self_groups_get(context_type=context_type, include=include)

List your groups

Returns a paginated list of active groups for the current user.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.group import Group
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    context_type = 'context_type_example' # str | Only include groups that are in this type of context. (optional)
    include = ['include_example'] # List[str] | Include additional resources: - \"tabs\": Include the list of tabs configured for each group.  (optional)

    try:
        # List your groups
        api_response = api_instance.api_v1_users_self_groups_get(context_type=context_type, include=include)
        print("The response of DefaultApi->api_v1_users_self_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_self_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context_type** | **str**| Only include groups that are in this type of context. | [optional] 
 **include** | [**List[str]**](str.md)| Include additional resources: - \&quot;tabs\&quot;: Include the list of tabs configured for each group.  | [optional] 

### Return type

[**List[Group]**](Group.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Group objects |  -  |
**401** | Unauthorized – the caller doesn’t have rights to see groups |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_content_shares_id_add_users_post**
> ContentShare api_v1_users_user_id_content_shares_id_add_users_post(user_id, id, receiver_ids=receiver_ids)

Send a previously created content share to additional users

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.content_share import ContentShare
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user or \"self\"
    id = 56 # int | The ID of the content share
    receiver_ids = [56] # List[int] | IDs of users to share the content with. (optional)

    try:
        # Send a previously created content share to additional users
        api_response = api_instance.api_v1_users_user_id_content_shares_id_add_users_post(user_id, id, receiver_ids=receiver_ids)
        print("The response of DefaultApi->api_v1_users_user_id_content_shares_id_add_users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_user_id_content_shares_id_add_users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user or \&quot;self\&quot; | 
 **id** | **int**| The ID of the content share | 
 **receiver_ids** | [**List[int]**](int.md)| IDs of users to share the content with. | [optional] 

### Return type

[**ContentShare**](ContentShare.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A ContentShare object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_content_shares_id_delete**
> api_v1_users_user_id_content_shares_id_delete(user_id, id)

Remove a content share from your list

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user or \"self\"
    id = 56 # int | The ID of the content share

    try:
        # Remove a content share from your list
        api_instance.api_v1_users_user_id_content_shares_id_delete(user_id, id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_user_id_content_shares_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user or \&quot;self\&quot; | 
 **id** | **int**| The ID of the content share | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Content share removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_content_shares_id_get**
> ContentShare api_v1_users_user_id_content_shares_id_get(user_id, id)

Get a content share

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.content_share import ContentShare
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user or \"self\"
    id = 56 # int | The ID of the content share

    try:
        # Get a content share
        api_response = api_instance.api_v1_users_user_id_content_shares_id_get(user_id, id)
        print("The response of DefaultApi->api_v1_users_user_id_content_shares_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_user_id_content_shares_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user or \&quot;self\&quot; | 
 **id** | **int**| The ID of the content share | 

### Return type

[**ContentShare**](ContentShare.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A ContentShare object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_content_shares_id_put**
> ContentShare api_v1_users_user_id_content_shares_id_put(user_id, id, read_state=read_state)

Mark a content share read or unread

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.content_share import ContentShare
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user or \"self\"
    id = 56 # int | The ID of the content share
    read_state = 'read_state_example' # str | Read state for the content share (optional)

    try:
        # Mark a content share read or unread
        api_response = api_instance.api_v1_users_user_id_content_shares_id_put(user_id, id, read_state=read_state)
        print("The response of DefaultApi->api_v1_users_user_id_content_shares_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_user_id_content_shares_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user or \&quot;self\&quot; | 
 **id** | **int**| The ID of the content share | 
 **read_state** | **str**| Read state for the content share | [optional] 

### Return type

[**ContentShare**](ContentShare.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A ContentShare object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_content_shares_post**
> ContentShare api_v1_users_user_id_content_shares_post(user_id, receiver_ids, content_type, content_id)

Share content directly between two or more users

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.content_share import ContentShare
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user or \"self\"
    receiver_ids = [56] # List[int] | IDs of users to share the content with.
    content_type = 'content_type_example' # str | Type of content you are sharing.
    content_id = 56 # int | The id of the content that you are sharing.

    try:
        # Share content directly between two or more users
        api_response = api_instance.api_v1_users_user_id_content_shares_post(user_id, receiver_ids, content_type, content_id)
        print("The response of DefaultApi->api_v1_users_user_id_content_shares_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_user_id_content_shares_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user or \&quot;self\&quot; | 
 **receiver_ids** | [**List[int]**](int.md)| IDs of users to share the content with. | 
 **content_type** | **str**| Type of content you are sharing. | 
 **content_id** | **int**| The id of the content that you are sharing. | 

### Return type

[**ContentShare**](ContentShare.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A ContentShare object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_content_shares_received_get**
> List[ContentShare] api_v1_users_user_id_content_shares_received_get(user_id)

List content shares received by a user

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.content_share import ContentShare
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user or \"self\"

    try:
        # List content shares received by a user
        api_response = api_instance.api_v1_users_user_id_content_shares_received_get(user_id)
        print("The response of DefaultApi->api_v1_users_user_id_content_shares_received_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_user_id_content_shares_received_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user or \&quot;self\&quot; | 

### Return type

[**List[ContentShare]**](ContentShare.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of ContentShare objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_content_shares_sent_get**
> List[ContentShare] api_v1_users_user_id_content_shares_sent_get(user_id)

List content shares sent by a user

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.content_share import ContentShare
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user or \"self\"

    try:
        # List content shares sent by a user
        api_response = api_instance.api_v1_users_user_id_content_shares_sent_get(user_id)
        print("The response of DefaultApi->api_v1_users_user_id_content_shares_sent_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_user_id_content_shares_sent_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user or \&quot;self\&quot; | 

### Return type

[**List[ContentShare]**](ContentShare.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of ContentShare objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_content_shares_unread_count_get**
> int api_v1_users_user_id_content_shares_unread_count_get(user_id)

Get the number of unread content shares received by a user

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user or \"self\"

    try:
        # Get the number of unread content shares received by a user
        api_response = api_instance.api_v1_users_user_id_content_shares_unread_count_get(user_id)
        print("The response of DefaultApi->api_v1_users_user_id_content_shares_unread_count_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_user_id_content_shares_unread_count_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user or \&quot;self\&quot; | 

### Return type

**int**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Number of unread content shares |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_enrollments_get**
> List[Enrollment] api_v1_users_user_id_enrollments_get(user_id)

Return a paginated list of a user's enrollments

Returns all of a user's enrollments across courses and sections.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.enrollment import Enrollment
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    user_id = 56 # int | The ID of the user.

    try:
        # Return a paginated list of a user's enrollments
        api_response = api_instance.api_v1_users_user_id_enrollments_get(user_id)
        print("The response of DefaultApi->api_v1_users_user_id_enrollments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_user_id_enrollments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| The ID of the user. | 

### Return type

[**List[Enrollment]**](Enrollment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Enrollment objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_temporary_enrollment_status_get**
> ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response api_v1_users_user_id_temporary_enrollment_status_get(user_id, account_id=account_id)

Show temporary enrollment recipient and provider status

Returns whether the user is a temporary enrollment provider or recipient.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_users_user_id_temporary_enrollment_status_get200_response import ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    user_id = 56 # int | 
    account_id = 'account_id_example' # str | Account ID to check; defaults to root account. (optional)

    try:
        # Show temporary enrollment recipient and provider status
        api_response = api_instance.api_v1_users_user_id_temporary_enrollment_status_get(user_id, account_id=account_id)
        print("The response of DefaultApi->api_v1_users_user_id_temporary_enrollment_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_users_user_id_temporary_enrollment_status_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **account_id** | **str**| Account ID to check; defaults to root account. | [optional] 

### Return type

[**ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response**](ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Temporary enrollment status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_course_id_group_categories_bulk_manage_differentiation_tag_post**
> courses_course_id_group_categories_bulk_manage_differentiation_tag_post(course_id, courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request)

Bulk manage differentiation tags

Perform bulk create/update/delete operations on groups within a non-collaborative group category.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request import CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request = canvas_lms_sdk.CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest() # CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest | 

    try:
        # Bulk manage differentiation tags
        api_instance.courses_course_id_group_categories_bulk_manage_differentiation_tag_post(course_id, courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->courses_course_id_group_categories_bulk_manage_differentiation_tag_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request** | [**CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest**](CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bulk operation result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_course_id_group_categories_get**
> List[GroupCategory] courses_course_id_group_categories_get(course_id, collaboration_state=collaboration_state)

List group categories for a course

Returns a paginated list of group categories in a course context.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.group_category import GroupCategory
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    collaboration_state = 'collaboration_state_example' # str |  (optional)

    try:
        # List group categories for a course
        api_response = api_instance.courses_course_id_group_categories_get(course_id, collaboration_state=collaboration_state)
        print("The response of DefaultApi->courses_course_id_group_categories_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->courses_course_id_group_categories_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **collaboration_state** | **str**|  | [optional] 

### Return type

[**List[GroupCategory]**](GroupCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of GroupCategory objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_course_id_group_categories_post**
> GroupCategory courses_course_id_group_categories_post(course_id, name, non_collaborative=non_collaborative, self_signup=self_signup, auto_leader=auto_leader, group_limit=group_limit, sis_group_category_id=sis_group_category_id, create_group_count=create_group_count, split_group_count=split_group_count)

Create a Group Category in a course

Create a new group category under a course.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.group_category import GroupCategory
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | 
    name = 'name_example' # str | 
    non_collaborative = True # bool |  (optional)
    self_signup = 'self_signup_example' # str |  (optional)
    auto_leader = 'auto_leader_example' # str |  (optional)
    group_limit = 56 # int |  (optional)
    sis_group_category_id = 'sis_group_category_id_example' # str |  (optional)
    create_group_count = 56 # int |  (optional)
    split_group_count = 56 # int |  (optional)

    try:
        # Create a Group Category in a course
        api_response = api_instance.courses_course_id_group_categories_post(course_id, name, non_collaborative=non_collaborative, self_signup=self_signup, auto_leader=auto_leader, group_limit=group_limit, sis_group_category_id=sis_group_category_id, create_group_count=create_group_count, split_group_count=split_group_count)
        print("The response of DefaultApi->courses_course_id_group_categories_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->courses_course_id_group_categories_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**|  | 
 **name** | **str**|  | 
 **non_collaborative** | **bool**|  | [optional] 
 **self_signup** | **str**|  | [optional] 
 **auto_leader** | **str**|  | [optional] 
 **group_limit** | **int**|  | [optional] 
 **sis_group_category_id** | **str**|  | [optional] 
 **create_group_count** | **int**|  | [optional] 
 **split_group_count** | **int**|  | [optional] 

### Return type

[**GroupCategory**](GroupCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created GroupCategory object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_course_id_quizzes_assignment_id_delete**
> NewQuiz courses_course_id_quizzes_assignment_id_delete(course_id, assignment_id)

Delete a new quiz

Delete a single new quiz.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.new_quiz import NewQuiz
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course
    assignment_id = 56 # int | ID of the assignment associated with the quiz

    try:
        # Delete a new quiz
        api_response = api_instance.courses_course_id_quizzes_assignment_id_delete(course_id, assignment_id)
        print("The response of DefaultApi->courses_course_id_quizzes_assignment_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->courses_course_id_quizzes_assignment_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **assignment_id** | **int**| ID of the assignment associated with the quiz | 

### Return type

[**NewQuiz**](NewQuiz.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted NewQuiz object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_course_id_quizzes_assignment_id_get**
> NewQuiz courses_course_id_quizzes_assignment_id_get(course_id, assignment_id)

Get a new quiz

Get details about a single new quiz.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.new_quiz import NewQuiz
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course
    assignment_id = 56 # int | ID of the assignment associated with the quiz

    try:
        # Get a new quiz
        api_response = api_instance.courses_course_id_quizzes_assignment_id_get(course_id, assignment_id)
        print("The response of DefaultApi->courses_course_id_quizzes_assignment_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->courses_course_id_quizzes_assignment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **assignment_id** | **int**| ID of the assignment associated with the quiz | 

### Return type

[**NewQuiz**](NewQuiz.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A NewQuiz object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_course_id_quizzes_assignment_id_patch**
> NewQuiz courses_course_id_quizzes_assignment_id_patch(course_id, assignment_id, courses_course_id_quizzes_post_request)

Update a single quiz

Update properties of an existing quiz.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.courses_course_id_quizzes_post_request import CoursesCourseIdQuizzesPostRequest
from canvas_lms_sdk.models.new_quiz import NewQuiz
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course
    assignment_id = 56 # int | ID of the assignment associated with the quiz
    courses_course_id_quizzes_post_request = canvas_lms_sdk.CoursesCourseIdQuizzesPostRequest() # CoursesCourseIdQuizzesPostRequest | 

    try:
        # Update a single quiz
        api_response = api_instance.courses_course_id_quizzes_assignment_id_patch(course_id, assignment_id, courses_course_id_quizzes_post_request)
        print("The response of DefaultApi->courses_course_id_quizzes_assignment_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->courses_course_id_quizzes_assignment_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **assignment_id** | **int**| ID of the assignment associated with the quiz | 
 **courses_course_id_quizzes_post_request** | [**CoursesCourseIdQuizzesPostRequest**](CoursesCourseIdQuizzesPostRequest.md)|  | 

### Return type

[**NewQuiz**](NewQuiz.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated NewQuiz object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_course_id_quizzes_get**
> List[NewQuiz] courses_course_id_quizzes_get(course_id)

List new quizzes

Get a list of new quizzes for a course.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.new_quiz import NewQuiz
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course

    try:
        # List new quizzes
        api_response = api_instance.courses_course_id_quizzes_get(course_id)
        print("The response of DefaultApi->courses_course_id_quizzes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->courses_course_id_quizzes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 

### Return type

[**List[NewQuiz]**](NewQuiz.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of NewQuiz objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_course_id_quizzes_post**
> NewQuiz courses_course_id_quizzes_post(course_id, courses_course_id_quizzes_post_request)

Create a new quiz

Create a new quiz for the specified course.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.courses_course_id_quizzes_post_request import CoursesCourseIdQuizzesPostRequest
from canvas_lms_sdk.models.new_quiz import NewQuiz
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course
    courses_course_id_quizzes_post_request = canvas_lms_sdk.CoursesCourseIdQuizzesPostRequest() # CoursesCourseIdQuizzesPostRequest | 

    try:
        # Create a new quiz
        api_response = api_instance.courses_course_id_quizzes_post(course_id, courses_course_id_quizzes_post_request)
        print("The response of DefaultApi->courses_course_id_quizzes_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->courses_course_id_quizzes_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **courses_course_id_quizzes_post_request** | [**CoursesCourseIdQuizzesPostRequest**](CoursesCourseIdQuizzesPostRequest.md)|  | 

### Return type

[**NewQuiz**](NewQuiz.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created NewQuiz object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_assignment**
> Assignment delete_assignment(course_id, id)

Delete the given assignment

Deletes the specified assignment and returns the deleted Assignment object.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment import Assignment
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    course_id = 56 # int | ID of the course
    id = 56 # int | ID of the assignment to delete

    try:
        # Delete the given assignment
        api_response = api_instance.delete_assignment(course_id, id)
        print("The response of DefaultApi->delete_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **id** | **int**| ID of the assignment to delete | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted assignment |  -  |
**401** | Unauthorized – invalid or missing authentication token |  -  |
**404** | Assignment not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **group_categories_group_category_id_assign_unassigned_members_post**
> GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response group_categories_group_category_id_assign_unassigned_members_post(group_category_id, sync=sync)

Assign unassigned members

Assign all unassigned members as evenly as possible among existing groups.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.group_categories_group_category_id_assign_unassigned_members_post200_response import GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    group_category_id = 56 # int | 
    sync = True # bool | If true, perform assignment synchronously (default is async).  (optional)

    try:
        # Assign unassigned members
        api_response = api_instance.group_categories_group_category_id_assign_unassigned_members_post(group_category_id, sync=sync)
        print("The response of DefaultApi->group_categories_group_category_id_assign_unassigned_members_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->group_categories_group_category_id_assign_unassigned_members_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_category_id** | **int**|  | 
 **sync** | **bool**| If true, perform assignment synchronously (default is async).  | [optional] 

### Return type

[**GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response**](GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If async, returns a Progress object; if sync, returns an array of group membership assignments.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **group_categories_group_category_id_delete**
> group_categories_group_category_id_delete(group_category_id)

Delete a Group Category

Deletes a group category and all groups under it.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    group_category_id = 56 # int | 

    try:
        # Delete a Group Category
        api_instance.group_categories_group_category_id_delete(group_category_id)
    except Exception as e:
        print("Exception when calling DefaultApi->group_categories_group_category_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_category_id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **group_categories_group_category_id_export_get**
> str group_categories_group_category_id_export_get(group_category_id)

Export groups and users in category

Returns a CSV file of users in a ready-to-import format. (BETA)

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    group_category_id = 56 # int | 

    try:
        # Export groups and users in category
        api_response = api_instance.group_categories_group_category_id_export_get(group_category_id)
        print("The response of DefaultApi->group_categories_group_category_id_export_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->group_categories_group_category_id_export_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_category_id** | **int**|  | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CSV export |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **group_categories_group_category_id_get**
> GroupCategory group_categories_group_category_id_get(group_category_id)

Get a single group category

Returns the data for a single group category.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.group_category import GroupCategory
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    group_category_id = 56 # int | 

    try:
        # Get a single group category
        api_response = api_instance.group_categories_group_category_id_get(group_category_id)
        print("The response of DefaultApi->group_categories_group_category_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->group_categories_group_category_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_category_id** | **int**|  | 

### Return type

[**GroupCategory**](GroupCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A GroupCategory object |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **group_categories_group_category_id_groups_get**
> List[object] group_categories_group_category_id_groups_get(group_category_id)

List groups in a group category

Returns a paginated list of groups in a group category.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    group_category_id = 56 # int | 

    try:
        # List groups in a group category
        api_response = api_instance.group_categories_group_category_id_groups_get(group_category_id)
        print("The response of DefaultApi->group_categories_group_category_id_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->group_categories_group_category_id_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_category_id** | **int**|  | 

### Return type

**List[object]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Group objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **group_categories_group_category_id_import_post**
> Progress group_categories_group_category_id_import_post(group_category_id, attachment=attachment)

Import category groups

Create groups via CSV import.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.progress import Progress
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    group_category_id = 56 # int | 
    attachment = None # bytearray |  (optional)

    try:
        # Import category groups
        api_response = api_instance.group_categories_group_category_id_import_post(group_category_id, attachment=attachment)
        print("The response of DefaultApi->group_categories_group_category_id_import_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->group_categories_group_category_id_import_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_category_id** | **int**|  | 
 **attachment** | **bytearray**|  | [optional] 

### Return type

[**Progress**](Progress.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, text/csv
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Import progress object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **group_categories_group_category_id_put**
> GroupCategory group_categories_group_category_id_put(group_category_id, name=name, self_signup=self_signup, auto_leader=auto_leader, group_limit=group_limit, sis_group_category_id=sis_group_category_id, create_group_count=create_group_count, split_group_count=split_group_count)

Update a Group Category

Modifies an existing group category.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.group_category import GroupCategory
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    group_category_id = 56 # int | 
    name = 'name_example' # str |  (optional)
    self_signup = 'self_signup_example' # str |  (optional)
    auto_leader = 'auto_leader_example' # str |  (optional)
    group_limit = 56 # int |  (optional)
    sis_group_category_id = 'sis_group_category_id_example' # str |  (optional)
    create_group_count = 56 # int |  (optional)
    split_group_count = 56 # int |  (optional)

    try:
        # Update a Group Category
        api_response = api_instance.group_categories_group_category_id_put(group_category_id, name=name, self_signup=self_signup, auto_leader=auto_leader, group_limit=group_limit, sis_group_category_id=sis_group_category_id, create_group_count=create_group_count, split_group_count=split_group_count)
        print("The response of DefaultApi->group_categories_group_category_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->group_categories_group_category_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_category_id** | **int**|  | 
 **name** | **str**|  | [optional] 
 **self_signup** | **str**|  | [optional] 
 **auto_leader** | **str**|  | [optional] 
 **group_limit** | **int**|  | [optional] 
 **sis_group_category_id** | **str**|  | [optional] 
 **create_group_count** | **int**|  | [optional] 
 **split_group_count** | **int**|  | [optional] 

### Return type

[**GroupCategory**](GroupCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated GroupCategory object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **group_categories_group_category_id_users_get**
> List[object] group_categories_group_category_id_users_get(group_category_id, search_term=search_term, unassigned=unassigned)

List users in group category

Returns a paginated list of users in the group category.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = canvas_lms_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    group_category_id = 56 # int | 
    search_term = 'search_term_example' # str | Partial name or ID to match (min 3 characters). (optional)
    unassigned = True # bool | If true, only unassigned users are returned. (optional)

    try:
        # List users in group category
        api_response = api_instance.group_categories_group_category_id_users_get(group_category_id, search_term=search_term, unassigned=unassigned)
        print("The response of DefaultApi->group_categories_group_category_id_users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->group_categories_group_category_id_users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_category_id** | **int**|  | 
 **search_term** | **str**| Partial name or ID to match (min 3 characters). | [optional] 
 **unassigned** | **bool**| If true, only unassigned users are returned. | [optional] 

### Return type

**List[object]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of User objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lti_xapi_post**
> lti_xapi_post(xapi_statement)

Log xAPI interaction activity for an LTI tool

External tools must POST a valid xAPI Statement (Tin Can API) to this endpoint. The URL for this endpoint is supplied at launch via the `$Canvas.xapi.url` substitution.


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.xapi_statement import XAPIStatement
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.DefaultApi(api_client)
    xapi_statement = {"id":"12345678-1234-5678-1234-567812345678","actor":{"account":{"homePage":"http://www.instructure.com/","name":"unique_name_for_user_of_some_kind_maybe_lti_user_id"}},"verb":{"id":"http://adlnet.gov/expapi/verbs/interacted","display":{"en-US":"interacted"}},"object":{"id":"http://example.com/"},"result":{"duration":"PT3M0S"}} # XAPIStatement | 

    try:
        # Log xAPI interaction activity for an LTI tool
        api_instance.lti_xapi_post(xapi_statement)
    except Exception as e:
        print("Exception when calling DefaultApi->lti_xapi_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xapi_statement** | [**XAPIStatement**](XAPIStatement.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Statement accepted and activity logged |  -  |
**400** | Bad Request – invalid xAPI statement |  -  |
**401** | Unauthorized – invalid or missing OAuth signature |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

