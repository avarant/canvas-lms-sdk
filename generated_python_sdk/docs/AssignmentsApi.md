# canvas_lms_sdk.AssignmentsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulk_update_assignment_dates**](AssignmentsApi.md#bulk_update_assignment_dates) | **PUT** /api/v1/courses/{course_id}/assignments/bulk_update | Bulk update assignment dates
[**create_assignment**](AssignmentsApi.md#create_assignment) | **POST** /api/v1/courses/{course_id}/assignments | Create an assignment
[**delete_assignment**](AssignmentsApi.md#delete_assignment) | **DELETE** /api/v1/courses/{course_id}/assignments/{id} | Delete an assignment
[**duplicate_assignment**](AssignmentsApi.md#duplicate_assignment) | **POST** /api/v1/courses/{course_id}/assignments/{assignment_id}/duplicate | Duplicate assignment
[**edit_assignment**](AssignmentsApi.md#edit_assignment) | **PUT** /api/v1/courses/{course_id}/assignments/{id} | Edit an assignment
[**get_assignment**](AssignmentsApi.md#get_assignment) | **GET** /api/v1/courses/{course_id}/assignments/{id} | Get a single assignment
[**list_assignment_group_members_for_user**](AssignmentsApi.md#list_assignment_group_members_for_user) | **GET** /api/v1/courses/{course_id}/assignments/{assignment_id}/users/{user_id}/group_members | List group members for a student on an assignment
[**list_assignments_for_course**](AssignmentsApi.md#list_assignments_for_course) | **GET** /api/v1/courses/{course_id}/assignments | List assignments
[**list_assignments_for_group**](AssignmentsApi.md#list_assignments_for_group) | **GET** /api/v1/courses/{course_id}/assignment_groups/{assignment_group_id}/assignments | List assignments for assignment group
[**list_assignments_for_user**](AssignmentsApi.md#list_assignments_for_user) | **GET** /api/v1/users/{user_id}/courses/{course_id}/assignments | List assignments for user


# **bulk_update_assignment_dates**
> Progress bulk_update_assignment_dates(course_id, bulk_update_assignment_dates_request_inner)

Bulk update assignment dates

Update due dates and availability dates for multiple assignments in a course. Accepts a JSON array of objects containing 'id' and 'all_dates' (array of AssignmentDate structures). Performs update in a background job.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.bulk_update_assignment_dates_request_inner import BulkUpdateAssignmentDatesRequestInner
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
    api_instance = canvas_lms_sdk.AssignmentsApi(api_client)
    course_id = 56 # int | ID of the course.
    bulk_update_assignment_dates_request_inner = [canvas_lms_sdk.BulkUpdateAssignmentDatesRequestInner()] # List[BulkUpdateAssignmentDatesRequestInner] | 

    try:
        # Bulk update assignment dates
        api_response = api_instance.bulk_update_assignment_dates(course_id, bulk_update_assignment_dates_request_inner)
        print("The response of AssignmentsApi->bulk_update_assignment_dates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentsApi->bulk_update_assignment_dates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **bulk_update_assignment_dates_request_inner** | [**List[BulkUpdateAssignmentDatesRequestInner]**](BulkUpdateAssignmentDatesRequestInner.md)|  | 

### Return type

[**Progress**](Progress.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully started the bulk update job. |  -  |
**400** | Invalid input data (validation errors). |  -  |
**401** | Unauthorized. |  -  |
**404** | Course not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_assignment**
> Assignment create_assignment(course_id, create_assignment_request)

Create an assignment

Create a new assignment for this course. The assignment is created in the active state.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment import Assignment
from canvas_lms_sdk.models.create_assignment_request import CreateAssignmentRequest
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
    api_instance = canvas_lms_sdk.AssignmentsApi(api_client)
    course_id = 56 # int | ID of the course.
    create_assignment_request = canvas_lms_sdk.CreateAssignmentRequest() # CreateAssignmentRequest | 

    try:
        # Create an assignment
        api_response = api_instance.create_assignment(course_id, create_assignment_request)
        print("The response of AssignmentsApi->create_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentsApi->create_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **create_assignment_request** | [**CreateAssignmentRequest**](CreateAssignmentRequest.md)|  | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully created assignment. |  -  |
**400** | Invalid input parameters. |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden (e.g., insufficient permissions). |  -  |
**404** | Course not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_assignment**
> Assignment delete_assignment(course_id, id)

Delete an assignment

Delete the given assignment.

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
    api_instance = canvas_lms_sdk.AssignmentsApi(api_client)
    course_id = 56 # int | ID of the course.
    id = 56 # int | ID of the assignment to delete.

    try:
        # Delete an assignment
        api_response = api_instance.delete_assignment(course_id, id)
        print("The response of AssignmentsApi->delete_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentsApi->delete_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **id** | **int**| ID of the assignment to delete. | 

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
**200** | Successfully deleted assignment. |  -  |
**401** | Unauthorized. |  -  |
**404** | Assignment or Course not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **duplicate_assignment**
> Assignment duplicate_assignment(course_id, assignment_id, result_type=result_type)

Duplicate assignment

Duplicate an assignment and return the new assignment. Optionally returns a Quiz object if result_type=Quiz and New Quizzes are enabled.

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
    api_instance = canvas_lms_sdk.AssignmentsApi(api_client)
    course_id = 56 # int | ID of the course.
    assignment_id = 56 # int | ID of the assignment to duplicate.
    result_type = 'result_type_example' # str | If 'Quiz' and New Quizzes are enabled, returns a Quiz object instead. (optional)

    try:
        # Duplicate assignment
        api_response = api_instance.duplicate_assignment(course_id, assignment_id, result_type=result_type)
        print("The response of AssignmentsApi->duplicate_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentsApi->duplicate_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **assignment_id** | **int**| ID of the assignment to duplicate. | 
 **result_type** | **str**| If &#39;Quiz&#39; and New Quizzes are enabled, returns a Quiz object instead. | [optional] 

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
**200** | Successfully duplicated assignment. |  -  |
**401** | Unauthorized. |  -  |
**404** | Course or Assignment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **edit_assignment**
> Assignment edit_assignment(course_id, id, edit_assignment_request)

Edit an assignment

Modify an existing assignment. If assignment[assignment_overrides] is provided, all existing overrides are deleted and replaced by the new ones.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment import Assignment
from canvas_lms_sdk.models.edit_assignment_request import EditAssignmentRequest
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
    api_instance = canvas_lms_sdk.AssignmentsApi(api_client)
    course_id = 56 # int | ID of the course.
    id = 56 # int | ID of the assignment.
    edit_assignment_request = canvas_lms_sdk.EditAssignmentRequest() # EditAssignmentRequest | 

    try:
        # Edit an assignment
        api_response = api_instance.edit_assignment(course_id, id, edit_assignment_request)
        print("The response of AssignmentsApi->edit_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentsApi->edit_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **id** | **int**| ID of the assignment. | 
 **edit_assignment_request** | [**EditAssignmentRequest**](EditAssignmentRequest.md)|  | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated assignment. |  -  |
**400** | Invalid input parameters. |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden (e.g., trying to modify frozen attributes or attributes locked due to submissions). |  -  |
**404** | Assignment or Course not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_assignment**
> Assignment get_assignment(course_id, id, include=include, override_assignment_dates=override_assignment_dates, needs_grading_count_by_section=needs_grading_count_by_section, all_dates=all_dates)

Get a single assignment

Returns the assignment with the given id.

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
    api_instance = canvas_lms_sdk.AssignmentsApi(api_client)
    course_id = 56 # int | ID of the course.
    id = 56 # int | ID of the assignment.
    include = ['include_example'] # List[str] | Associations to include with the assignment. (optional)
    override_assignment_dates = True # bool | Apply assignment overrides. Defaults to true. (optional) (default to True)
    needs_grading_count_by_section = False # bool | Split needs_grading_count by section. Defaults to false. (optional) (default to False)
    all_dates = True # bool | If true, include all dates associated with the assignment, if applicable. (optional)

    try:
        # Get a single assignment
        api_response = api_instance.get_assignment(course_id, id, include=include, override_assignment_dates=override_assignment_dates, needs_grading_count_by_section=needs_grading_count_by_section, all_dates=all_dates)
        print("The response of AssignmentsApi->get_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentsApi->get_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **id** | **int**| ID of the assignment. | 
 **include** | [**List[str]**](str.md)| Associations to include with the assignment. | [optional] 
 **override_assignment_dates** | **bool**| Apply assignment overrides. Defaults to true. | [optional] [default to True]
 **needs_grading_count_by_section** | **bool**| Split needs_grading_count by section. Defaults to false. | [optional] [default to False]
 **all_dates** | **bool**| If true, include all dates associated with the assignment, if applicable. | [optional] 

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
**200** | Successfully retrieved assignment. |  -  |
**401** | Unauthorized. |  -  |
**404** | Assignment or Course not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_assignment_group_members_for_user**
> List[BasicUser] list_assignment_group_members_for_user(course_id, assignment_id, user_id)

List group members for a student on an assignment

Returns student ids and names for the group the specified user is in for the given assignment.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.basic_user import BasicUser
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
    api_instance = canvas_lms_sdk.AssignmentsApi(api_client)
    course_id = 56 # int | ID of the course.
    assignment_id = 56 # int | ID of the assignment.
    user_id = 'user_id_example' # str | ID of the user.

    try:
        # List group members for a student on an assignment
        api_response = api_instance.list_assignment_group_members_for_user(course_id, assignment_id, user_id)
        print("The response of AssignmentsApi->list_assignment_group_members_for_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentsApi->list_assignment_group_members_for_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **assignment_id** | **int**| ID of the assignment. | 
 **user_id** | **str**| ID of the user. | 

### Return type

[**List[BasicUser]**](BasicUser.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of basic user information for group members. |  -  |
**401** | Unauthorized. |  -  |
**404** | Course, Assignment, or User not found, or User not in a group for this assignment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_assignments_for_course**
> List[Assignment] list_assignments_for_course(course_id, include=include, search_term=search_term, override_assignment_dates=override_assignment_dates, needs_grading_count_by_section=needs_grading_count_by_section, bucket=bucket, assignment_ids=assignment_ids, order_by=order_by, post_to_sis=post_to_sis, new_quizzes=new_quizzes)

List assignments

Returns the paginated list of assignments for the current course.

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
    api_instance = canvas_lms_sdk.AssignmentsApi(api_client)
    course_id = 56 # int | ID of the course.
    include = ['include_example'] # List[str] | Associations to include with the assignment. (optional)
    search_term = 'search_term_example' # str | Partial title of assignments to match. (optional)
    override_assignment_dates = True # bool | Apply assignment overrides. Defaults to true. (optional) (default to True)
    needs_grading_count_by_section = False # bool | Split needs_grading_count by section. Defaults to false. (optional) (default to False)
    bucket = 'bucket_example' # str | Filter assignments by due date and submission status. (optional)
    assignment_ids = [56] # List[int] | Return only specified assignment IDs. (optional)
    order_by = position # str | Order of assignments. Defaults to position. (optional) (default to position)
    post_to_sis = True # bool | Filter assignments based on post_to_sis flag. (optional)
    new_quizzes = True # bool | Return only New Quizzes assignments. (optional)

    try:
        # List assignments
        api_response = api_instance.list_assignments_for_course(course_id, include=include, search_term=search_term, override_assignment_dates=override_assignment_dates, needs_grading_count_by_section=needs_grading_count_by_section, bucket=bucket, assignment_ids=assignment_ids, order_by=order_by, post_to_sis=post_to_sis, new_quizzes=new_quizzes)
        print("The response of AssignmentsApi->list_assignments_for_course:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentsApi->list_assignments_for_course: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **include** | [**List[str]**](str.md)| Associations to include with the assignment. | [optional] 
 **search_term** | **str**| Partial title of assignments to match. | [optional] 
 **override_assignment_dates** | **bool**| Apply assignment overrides. Defaults to true. | [optional] [default to True]
 **needs_grading_count_by_section** | **bool**| Split needs_grading_count by section. Defaults to false. | [optional] [default to False]
 **bucket** | **str**| Filter assignments by due date and submission status. | [optional] 
 **assignment_ids** | [**List[int]**](int.md)| Return only specified assignment IDs. | [optional] 
 **order_by** | **str**| Order of assignments. Defaults to position. | [optional] [default to position]
 **post_to_sis** | **bool**| Filter assignments based on post_to_sis flag. | [optional] 
 **new_quizzes** | **bool**| Return only New Quizzes assignments. | [optional] 

### Return type

[**List[Assignment]**](Assignment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of Assignment objects. |  -  |
**401** | Unauthorized. |  -  |
**404** | Course not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_assignments_for_group**
> List[Assignment] list_assignments_for_group(course_id, assignment_group_id, include=include, search_term=search_term, override_assignment_dates=override_assignment_dates, needs_grading_count_by_section=needs_grading_count_by_section, bucket=bucket, assignment_ids=assignment_ids, order_by=order_by, post_to_sis=post_to_sis, new_quizzes=new_quizzes)

List assignments for assignment group

Returns the paginated list of assignments for the assignment group.

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
    api_instance = canvas_lms_sdk.AssignmentsApi(api_client)
    course_id = 56 # int | ID of the course.
    assignment_group_id = 56 # int | ID of the assignment group.
    include = ['include_example'] # List[str] | Associations to include with the assignment. (optional)
    search_term = 'search_term_example' # str | Partial title of assignments to match. (optional)
    override_assignment_dates = True # bool | Apply assignment overrides. Defaults to true. (optional) (default to True)
    needs_grading_count_by_section = False # bool | Split needs_grading_count by section. Defaults to false. (optional) (default to False)
    bucket = 'bucket_example' # str | Filter assignments by due date and submission status. (optional)
    assignment_ids = [56] # List[int] | Return only specified assignment IDs. (optional)
    order_by = position # str | Order of assignments. Defaults to position. (optional) (default to position)
    post_to_sis = True # bool | Filter assignments based on post_to_sis flag. (optional)
    new_quizzes = True # bool | Return only New Quizzes assignments. (optional)

    try:
        # List assignments for assignment group
        api_response = api_instance.list_assignments_for_group(course_id, assignment_group_id, include=include, search_term=search_term, override_assignment_dates=override_assignment_dates, needs_grading_count_by_section=needs_grading_count_by_section, bucket=bucket, assignment_ids=assignment_ids, order_by=order_by, post_to_sis=post_to_sis, new_quizzes=new_quizzes)
        print("The response of AssignmentsApi->list_assignments_for_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentsApi->list_assignments_for_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **assignment_group_id** | **int**| ID of the assignment group. | 
 **include** | [**List[str]**](str.md)| Associations to include with the assignment. | [optional] 
 **search_term** | **str**| Partial title of assignments to match. | [optional] 
 **override_assignment_dates** | **bool**| Apply assignment overrides. Defaults to true. | [optional] [default to True]
 **needs_grading_count_by_section** | **bool**| Split needs_grading_count by section. Defaults to false. | [optional] [default to False]
 **bucket** | **str**| Filter assignments by due date and submission status. | [optional] 
 **assignment_ids** | [**List[int]**](int.md)| Return only specified assignment IDs. | [optional] 
 **order_by** | **str**| Order of assignments. Defaults to position. | [optional] [default to position]
 **post_to_sis** | **bool**| Filter assignments based on post_to_sis flag. | [optional] 
 **new_quizzes** | **bool**| Return only New Quizzes assignments. | [optional] 

### Return type

[**List[Assignment]**](Assignment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of Assignment objects. |  -  |
**401** | Unauthorized. |  -  |
**404** | Course or AssignmentGroup not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_assignments_for_user**
> List[Assignment] list_assignments_for_user(user_id, course_id, include=include, search_term=search_term, override_assignment_dates=override_assignment_dates, needs_grading_count_by_section=needs_grading_count_by_section, bucket=bucket, assignment_ids=assignment_ids, order_by=order_by, post_to_sis=post_to_sis, new_quizzes=new_quizzes)

List assignments for user

Returns the paginated list of assignments for the specified user if the current user has rights to view. See List assignments for valid arguments.

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
    api_instance = canvas_lms_sdk.AssignmentsApi(api_client)
    user_id = 'user_id_example' # str | ID of the user.
    course_id = 56 # int | ID of the course.
    include = ['include_example'] # List[str] | Associations to include with the assignment. (optional)
    search_term = 'search_term_example' # str | Partial title of assignments to match. (optional)
    override_assignment_dates = True # bool | Apply assignment overrides. Defaults to true. (optional) (default to True)
    needs_grading_count_by_section = False # bool | Split needs_grading_count by section. Defaults to false. (optional) (default to False)
    bucket = 'bucket_example' # str | Filter assignments by due date and submission status. (optional)
    assignment_ids = [56] # List[int] | Return only specified assignment IDs. (optional)
    order_by = position # str | Order of assignments. Defaults to position. (optional) (default to position)
    post_to_sis = True # bool | Filter assignments based on post_to_sis flag. (optional)
    new_quizzes = True # bool | Return only New Quizzes assignments. (optional)

    try:
        # List assignments for user
        api_response = api_instance.list_assignments_for_user(user_id, course_id, include=include, search_term=search_term, override_assignment_dates=override_assignment_dates, needs_grading_count_by_section=needs_grading_count_by_section, bucket=bucket, assignment_ids=assignment_ids, order_by=order_by, post_to_sis=post_to_sis, new_quizzes=new_quizzes)
        print("The response of AssignmentsApi->list_assignments_for_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentsApi->list_assignments_for_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| ID of the user. | 
 **course_id** | **int**| ID of the course. | 
 **include** | [**List[str]**](str.md)| Associations to include with the assignment. | [optional] 
 **search_term** | **str**| Partial title of assignments to match. | [optional] 
 **override_assignment_dates** | **bool**| Apply assignment overrides. Defaults to true. | [optional] [default to True]
 **needs_grading_count_by_section** | **bool**| Split needs_grading_count by section. Defaults to false. | [optional] [default to False]
 **bucket** | **str**| Filter assignments by due date and submission status. | [optional] 
 **assignment_ids** | [**List[int]**](int.md)| Return only specified assignment IDs. | [optional] 
 **order_by** | **str**| Order of assignments. Defaults to position. | [optional] [default to position]
 **post_to_sis** | **bool**| Filter assignments based on post_to_sis flag. | [optional] 
 **new_quizzes** | **bool**| Return only New Quizzes assignments. | [optional] 

### Return type

[**List[Assignment]**](Assignment.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of Assignment objects. |  -  |
**401** | Unauthorized. |  -  |
**404** | User or Course not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

