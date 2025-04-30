# canvas_lms_sdk.FilesApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_courses_course_id_files_quota_get**](FilesApi.md#api_v1_courses_course_id_files_quota_get) | **GET** /api/v1/courses/{course_id}/files/quota | Get quota information for a course
[**api_v1_groups_group_id_files_quota_get**](FilesApi.md#api_v1_groups_group_id_files_quota_get) | **GET** /api/v1/groups/{group_id}/files/quota | Get quota information for a group
[**api_v1_users_user_id_files_quota_get**](FilesApi.md#api_v1_users_user_id_files_quota_get) | **GET** /api/v1/users/{user_id}/files/quota | Get quota information for a user


# **api_v1_courses_course_id_files_quota_get**
> ApiV1CoursesCourseIdFilesQuotaGet200Response api_v1_courses_course_id_files_quota_get(course_id)

Get quota information for a course

Returns the total and used storage quota for the specified course.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_files_quota_get200_response import ApiV1CoursesCourseIdFilesQuotaGet200Response
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
    api_instance = canvas_lms_sdk.FilesApi(api_client)
    course_id = 56 # int | ID of the course

    try:
        # Get quota information for a course
        api_response = api_instance.api_v1_courses_course_id_files_quota_get(course_id)
        print("The response of FilesApi->api_v1_courses_course_id_files_quota_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->api_v1_courses_course_id_files_quota_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 

### Return type

[**ApiV1CoursesCourseIdFilesQuotaGet200Response**](ApiV1CoursesCourseIdFilesQuotaGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quota information retrieved successfully |  -  |
**401** | Unauthorized – invalid or missing authentication token |  -  |
**404** | Course not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_groups_group_id_files_quota_get**
> ApiV1CoursesCourseIdFilesQuotaGet200Response api_v1_groups_group_id_files_quota_get(group_id)

Get quota information for a group

Returns the total and used storage quota for the specified group.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_files_quota_get200_response import ApiV1CoursesCourseIdFilesQuotaGet200Response
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
    api_instance = canvas_lms_sdk.FilesApi(api_client)
    group_id = 56 # int | ID of the group

    try:
        # Get quota information for a group
        api_response = api_instance.api_v1_groups_group_id_files_quota_get(group_id)
        print("The response of FilesApi->api_v1_groups_group_id_files_quota_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->api_v1_groups_group_id_files_quota_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**| ID of the group | 

### Return type

[**ApiV1CoursesCourseIdFilesQuotaGet200Response**](ApiV1CoursesCourseIdFilesQuotaGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quota information retrieved successfully |  -  |
**401** | Unauthorized – invalid or missing authentication token |  -  |
**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_files_quota_get**
> ApiV1CoursesCourseIdFilesQuotaGet200Response api_v1_users_user_id_files_quota_get(user_id)

Get quota information for a user

Returns the total and used storage quota for the specified user.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_courses_course_id_files_quota_get200_response import ApiV1CoursesCourseIdFilesQuotaGet200Response
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
    api_instance = canvas_lms_sdk.FilesApi(api_client)
    user_id = 56 # int | ID of the user

    try:
        # Get quota information for a user
        api_response = api_instance.api_v1_users_user_id_files_quota_get(user_id)
        print("The response of FilesApi->api_v1_users_user_id_files_quota_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->api_v1_users_user_id_files_quota_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| ID of the user | 

### Return type

[**ApiV1CoursesCourseIdFilesQuotaGet200Response**](ApiV1CoursesCourseIdFilesQuotaGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quota information retrieved successfully |  -  |
**401** | Unauthorized – invalid or missing authentication token |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

