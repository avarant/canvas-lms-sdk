# canvas_lms_sdk.GroupsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_assignment_override_for_group**](GroupsApi.md#get_assignment_override_for_group) | **GET** /api/v1/groups/{group_id}/assignments/{assignment_id}/override | Redirect to the assignment override for a group
[**list_assignment_group_members_for_user**](GroupsApi.md#list_assignment_group_members_for_user) | **GET** /api/v1/courses/{course_id}/assignments/{assignment_id}/users/{user_id}/group_members | List group members for a student on an assignment


# **get_assignment_override_for_group**
> get_assignment_override_for_group(group_id, assignment_id)

Redirect to the assignment override for a group

Responds with a redirect to the override for the given group and assignment, if one exists (404 otherwise).

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
    api_instance = canvas_lms_sdk.GroupsApi(api_client)
    group_id = 56 # int | ID of the group.
    assignment_id = 56 # int | ID of the assignment.

    try:
        # Redirect to the assignment override for a group
        api_instance.get_assignment_override_for_group(group_id, assignment_id)
    except Exception as e:
        print("Exception when calling GroupsApi->get_assignment_override_for_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**| ID of the group. | 
 **assignment_id** | **int**| ID of the assignment. | 

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
**302** | Redirects to the group&#39;s assignment override URL. |  -  |
**401** | Unauthorized. |  -  |
**404** | Group, Assignment not found, or no override exists for this group/assignment. |  -  |

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
    api_instance = canvas_lms_sdk.GroupsApi(api_client)
    course_id = 56 # int | ID of the course.
    assignment_id = 56 # int | ID of the assignment.
    user_id = 'user_id_example' # str | ID of the user.

    try:
        # List group members for a student on an assignment
        api_response = api_instance.list_assignment_group_members_for_user(course_id, assignment_id, user_id)
        print("The response of GroupsApi->list_assignment_group_members_for_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->list_assignment_group_members_for_user: %s\n" % e)
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

