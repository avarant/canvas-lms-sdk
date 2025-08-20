# canvas_lms_sdk.AssignmentOverridesApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batch_create_assignment_overrides**](AssignmentOverridesApi.md#batch_create_assignment_overrides) | **POST** /api/v1/courses/{course_id}/assignments/overrides | Batch create overrides in a course
[**batch_retrieve_assignment_overrides**](AssignmentOverridesApi.md#batch_retrieve_assignment_overrides) | **GET** /api/v1/courses/{course_id}/assignments/overrides | Batch retrieve overrides in a course
[**batch_update_assignment_overrides**](AssignmentOverridesApi.md#batch_update_assignment_overrides) | **PUT** /api/v1/courses/{course_id}/assignments/overrides | Batch update overrides in a course
[**create_assignment_override**](AssignmentOverridesApi.md#create_assignment_override) | **POST** /api/v1/courses/{course_id}/assignments/{assignment_id}/overrides | Create an assignment override
[**delete_assignment_override**](AssignmentOverridesApi.md#delete_assignment_override) | **DELETE** /api/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id} | Delete an assignment override
[**get_assignment_override**](AssignmentOverridesApi.md#get_assignment_override) | **GET** /api/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id} | Get a single assignment override
[**get_assignment_override_for_group**](AssignmentOverridesApi.md#get_assignment_override_for_group) | **GET** /api/v1/groups/{group_id}/assignments/{assignment_id}/override | Redirect to the assignment override for a group
[**get_assignment_override_for_section**](AssignmentOverridesApi.md#get_assignment_override_for_section) | **GET** /api/v1/sections/{course_section_id}/assignments/{assignment_id}/override | Redirect to the assignment override for a section
[**list_assignment_overrides**](AssignmentOverridesApi.md#list_assignment_overrides) | **GET** /api/v1/courses/{course_id}/assignments/{assignment_id}/overrides | List assignment overrides
[**update_assignment_override**](AssignmentOverridesApi.md#update_assignment_override) | **PUT** /api/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id} | Update an assignment override


# **batch_create_assignment_overrides**
> List[AssignmentOverride] batch_create_assignment_overrides(course_id, batch_create_assignment_overrides_request)

Batch create overrides in a course

Creates the specified overrides for each assignment in a single transaction. Errors are reported in an errors attribute.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment_override import AssignmentOverride
from canvas_lms_sdk.models.batch_create_assignment_overrides_request import BatchCreateAssignmentOverridesRequest
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
    api_instance = canvas_lms_sdk.AssignmentOverridesApi(api_client)
    course_id = 56 # int | ID of the course.
    batch_create_assignment_overrides_request = canvas_lms_sdk.BatchCreateAssignmentOverridesRequest() # BatchCreateAssignmentOverridesRequest | 

    try:
        # Batch create overrides in a course
        api_response = api_instance.batch_create_assignment_overrides(course_id, batch_create_assignment_overrides_request)
        print("The response of AssignmentOverridesApi->batch_create_assignment_overrides:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentOverridesApi->batch_create_assignment_overrides: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **batch_create_assignment_overrides_request** | [**BatchCreateAssignmentOverridesRequest**](BatchCreateAssignmentOverridesRequest.md)|  | 

### Return type

[**List[AssignmentOverride]**](AssignmentOverride.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created assignment overrides. Might contain errors for specific items. |  -  |
**400** | Invalid input data (global errors or errors on all items). |  -  |
**401** | Unauthorized. |  -  |
**404** | Course not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_retrieve_assignment_overrides**
> List[BatchRetrieveAssignmentOverrides200ResponseInner] batch_retrieve_assignment_overrides(course_id, assignment_overrides_id, assignment_overrides_assignment_id)

Batch retrieve overrides in a course

Returns a list of specified overrides in this course. Requires assignment_overrides[][id] and assignment_overrides[][assignment_id] parameters. Returns null for unfound overrides.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.batch_retrieve_assignment_overrides200_response_inner import BatchRetrieveAssignmentOverrides200ResponseInner
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
    api_instance = canvas_lms_sdk.AssignmentOverridesApi(api_client)
    course_id = 56 # int | ID of the course.
    assignment_overrides_id = [56] # List[int] | IDs of the overrides to retrieve. Match index with assignment_id.
    assignment_overrides_assignment_id = [56] # List[int] | IDs of the assignments for each override. Match index with id.

    try:
        # Batch retrieve overrides in a course
        api_response = api_instance.batch_retrieve_assignment_overrides(course_id, assignment_overrides_id, assignment_overrides_assignment_id)
        print("The response of AssignmentOverridesApi->batch_retrieve_assignment_overrides:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentOverridesApi->batch_retrieve_assignment_overrides: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **assignment_overrides_id** | [**List[int]**](int.md)| IDs of the overrides to retrieve. Match index with assignment_id. | 
 **assignment_overrides_assignment_id** | [**List[int]**](int.md)| IDs of the assignments for each override. Match index with id. | 

### Return type

[**List[BatchRetrieveAssignmentOverrides200ResponseInner]**](BatchRetrieveAssignmentOverrides200ResponseInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing the retrieved AssignmentOverride objects or null elements. |  -  |
**401** | Unauthorized. |  -  |
**404** | Course not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_update_assignment_overrides**
> List[AssignmentOverride] batch_update_assignment_overrides(course_id, batch_update_assignment_overrides_request)

Batch update overrides in a course

Updates a list of specified overrides for each assignment in a single transaction. Errors are reported in an errors attribute.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment_override import AssignmentOverride
from canvas_lms_sdk.models.batch_update_assignment_overrides_request import BatchUpdateAssignmentOverridesRequest
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
    api_instance = canvas_lms_sdk.AssignmentOverridesApi(api_client)
    course_id = 56 # int | ID of the course.
    batch_update_assignment_overrides_request = canvas_lms_sdk.BatchUpdateAssignmentOverridesRequest() # BatchUpdateAssignmentOverridesRequest | 

    try:
        # Batch update overrides in a course
        api_response = api_instance.batch_update_assignment_overrides(course_id, batch_update_assignment_overrides_request)
        print("The response of AssignmentOverridesApi->batch_update_assignment_overrides:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentOverridesApi->batch_update_assignment_overrides: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **batch_update_assignment_overrides_request** | [**BatchUpdateAssignmentOverridesRequest**](BatchUpdateAssignmentOverridesRequest.md)|  | 

### Return type

[**List[AssignmentOverride]**](AssignmentOverride.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated assignment overrides. Might contain errors for specific items. |  -  |
**400** | Invalid input data (global errors or errors on all items). |  -  |
**401** | Unauthorized. |  -  |
**404** | Course not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_assignment_override**
> AssignmentOverride create_assignment_override(course_id, assignment_id, create_assignment_override_request)

Create an assignment override

Create a new override for this assignment. One of student_ids, group_id, or course_section_id must be present and valid.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment_override import AssignmentOverride
from canvas_lms_sdk.models.create_assignment_override_request import CreateAssignmentOverrideRequest
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
    api_instance = canvas_lms_sdk.AssignmentOverridesApi(api_client)
    course_id = 56 # int | ID of the course.
    assignment_id = 56 # int | ID of the assignment.
    create_assignment_override_request = canvas_lms_sdk.CreateAssignmentOverrideRequest() # CreateAssignmentOverrideRequest | 

    try:
        # Create an assignment override
        api_response = api_instance.create_assignment_override(course_id, assignment_id, create_assignment_override_request)
        print("The response of AssignmentOverridesApi->create_assignment_override:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentOverridesApi->create_assignment_override: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **assignment_id** | **int**| ID of the assignment. | 
 **create_assignment_override_request** | [**CreateAssignmentOverrideRequest**](CreateAssignmentOverrideRequest.md)|  | 

### Return type

[**AssignmentOverride**](AssignmentOverride.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully created assignment override. |  -  |
**400** | Invalid input parameters (e.g., missing target, invalid ID, target already overridden). |  -  |
**401** | Unauthorized. |  -  |
**404** | Course or Assignment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_assignment_override**
> AssignmentOverride delete_assignment_override(course_id, assignment_id, id)

Delete an assignment override

Deletes the assignment override with the given id.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment_override import AssignmentOverride
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
    api_instance = canvas_lms_sdk.AssignmentOverridesApi(api_client)
    course_id = 56 # int | ID of the course.
    assignment_id = 56 # int | ID of the assignment.
    id = 56 # int | ID of the assignment override to delete.

    try:
        # Delete an assignment override
        api_response = api_instance.delete_assignment_override(course_id, assignment_id, id)
        print("The response of AssignmentOverridesApi->delete_assignment_override:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentOverridesApi->delete_assignment_override: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **assignment_id** | **int**| ID of the assignment. | 
 **id** | **int**| ID of the assignment override to delete. | 

### Return type

[**AssignmentOverride**](AssignmentOverride.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted assignment override. |  -  |
**401** | Unauthorized. |  -  |
**404** | Course, Assignment, or AssignmentOverride not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_assignment_override**
> AssignmentOverride get_assignment_override(course_id, assignment_id, id)

Get a single assignment override

Returns details of the assignment override with the given id.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment_override import AssignmentOverride
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
    api_instance = canvas_lms_sdk.AssignmentOverridesApi(api_client)
    course_id = 56 # int | ID of the course.
    assignment_id = 56 # int | ID of the assignment.
    id = 56 # int | ID of the assignment override.

    try:
        # Get a single assignment override
        api_response = api_instance.get_assignment_override(course_id, assignment_id, id)
        print("The response of AssignmentOverridesApi->get_assignment_override:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentOverridesApi->get_assignment_override: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **assignment_id** | **int**| ID of the assignment. | 
 **id** | **int**| ID of the assignment override. | 

### Return type

[**AssignmentOverride**](AssignmentOverride.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved assignment override. |  -  |
**401** | Unauthorized. |  -  |
**404** | Course, Assignment, or AssignmentOverride not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
    api_instance = canvas_lms_sdk.AssignmentOverridesApi(api_client)
    group_id = 56 # int | ID of the group.
    assignment_id = 56 # int | ID of the assignment.

    try:
        # Redirect to the assignment override for a group
        api_instance.get_assignment_override_for_group(group_id, assignment_id)
    except Exception as e:
        print("Exception when calling AssignmentOverridesApi->get_assignment_override_for_group: %s\n" % e)
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

# **get_assignment_override_for_section**
> get_assignment_override_for_section(course_section_id, assignment_id)

Redirect to the assignment override for a section

Responds with a redirect to the override for the given section and assignment, if one exists (404 otherwise).

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
    api_instance = canvas_lms_sdk.AssignmentOverridesApi(api_client)
    course_section_id = 56 # int | ID of the course section.
    assignment_id = 56 # int | ID of the assignment.

    try:
        # Redirect to the assignment override for a section
        api_instance.get_assignment_override_for_section(course_section_id, assignment_id)
    except Exception as e:
        print("Exception when calling AssignmentOverridesApi->get_assignment_override_for_section: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_section_id** | **int**| ID of the course section. | 
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
**302** | Redirects to the section&#39;s assignment override URL. |  -  |
**401** | Unauthorized. |  -  |
**404** | Section, Assignment not found, or no override exists for this section/assignment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_assignment_overrides**
> List[AssignmentOverride] list_assignment_overrides(course_id, assignment_id)

List assignment overrides

Returns the paginated list of overrides for this assignment that target sections/groups/students visible to the current user.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment_override import AssignmentOverride
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
    api_instance = canvas_lms_sdk.AssignmentOverridesApi(api_client)
    course_id = 56 # int | ID of the course.
    assignment_id = 56 # int | ID of the assignment.

    try:
        # List assignment overrides
        api_response = api_instance.list_assignment_overrides(course_id, assignment_id)
        print("The response of AssignmentOverridesApi->list_assignment_overrides:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentOverridesApi->list_assignment_overrides: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **assignment_id** | **int**| ID of the assignment. | 

### Return type

[**List[AssignmentOverride]**](AssignmentOverride.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of AssignmentOverride objects. |  -  |
**401** | Unauthorized. |  -  |
**404** | Course or Assignment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_assignment_override**
> AssignmentOverride update_assignment_override(course_id, assignment_id, id, create_assignment_override_request)

Update an assignment override

Update an existing assignment override. All current overridden values must be supplied if they are to be retained. Target override sets cannot be changed for group or section overrides.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.assignment_override import AssignmentOverride
from canvas_lms_sdk.models.create_assignment_override_request import CreateAssignmentOverrideRequest
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
    api_instance = canvas_lms_sdk.AssignmentOverridesApi(api_client)
    course_id = 56 # int | ID of the course.
    assignment_id = 56 # int | ID of the assignment.
    id = 56 # int | ID of the assignment override to update.
    create_assignment_override_request = canvas_lms_sdk.CreateAssignmentOverrideRequest() # CreateAssignmentOverrideRequest | 

    try:
        # Update an assignment override
        api_response = api_instance.update_assignment_override(course_id, assignment_id, id, create_assignment_override_request)
        print("The response of AssignmentOverridesApi->update_assignment_override:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssignmentOverridesApi->update_assignment_override: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course. | 
 **assignment_id** | **int**| ID of the assignment. | 
 **id** | **int**| ID of the assignment override to update. | 
 **create_assignment_override_request** | [**CreateAssignmentOverrideRequest**](CreateAssignmentOverrideRequest.md)|  | 

### Return type

[**AssignmentOverride**](AssignmentOverride.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated assignment override. |  -  |
**400** | Invalid input parameters. |  -  |
**401** | Unauthorized. |  -  |
**404** | Course, Assignment, or AssignmentOverride not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

