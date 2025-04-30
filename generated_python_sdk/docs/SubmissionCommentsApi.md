# canvas_lms_sdk.SubmissionCommentsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_files_post**](SubmissionCommentsApi.md#api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_files_post) | **POST** /api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/files | Upload a file to attach to a submission comment
[**api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_delete**](SubmissionCommentsApi.md#api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_delete) | **DELETE** /api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id} | Delete a submission comment
[**api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_put**](SubmissionCommentsApi.md#api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_put) | **PUT** /api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id} | Edit a submission comment


# **api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_files_post**
> object api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_files_post(course_id, assignment_id, user_id, file=file)

Upload a file to attach to a submission comment

Upload a file to attach to a submission comment.
See the File Upload Documentation for details on the file upload workflow.
The final step of the file upload workflow will return the attachment data,
including the new file id. The caller can then PUT the file_id to the submission API to attach it to a comment.


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
    api_instance = canvas_lms_sdk.SubmissionCommentsApi(api_client)
    course_id = 'course_id_example' # str | ID of the course
    assignment_id = 'assignment_id_example' # str | ID of the assignment
    user_id = 'user_id_example' # str | ID of the user who made the submission
    file = None # bytearray | The file to upload (optional)

    try:
        # Upload a file to attach to a submission comment
        api_response = api_instance.api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_files_post(course_id, assignment_id, user_id, file=file)
        print("The response of SubmissionCommentsApi->api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_files_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubmissionCommentsApi->api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_files_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **str**| ID of the course | 
 **assignment_id** | **str**| ID of the assignment | 
 **user_id** | **str**| ID of the user who made the submission | 
 **file** | **bytearray**| The file to upload | [optional] 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Attachment data including the new file id |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_delete**
> object api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_delete(course_id, assignment_id, user_id, id)

Delete a submission comment

Delete the given submission comment.

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
    api_instance = canvas_lms_sdk.SubmissionCommentsApi(api_client)
    course_id = 'course_id_example' # str | ID of the course
    assignment_id = 'assignment_id_example' # str | ID of the assignment
    user_id = 'user_id_example' # str | ID of the user who made the submission
    id = 'id_example' # str | ID of the comment

    try:
        # Delete a submission comment
        api_response = api_instance.api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_delete(course_id, assignment_id, user_id, id)
        print("The response of SubmissionCommentsApi->api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubmissionCommentsApi->api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **str**| ID of the course | 
 **assignment_id** | **str**| ID of the assignment | 
 **user_id** | **str**| ID of the user who made the submission | 
 **id** | **str**| ID of the comment | 

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
**200** | SubmissionComment object |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_put**
> object api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_put(course_id, assignment_id, user_id, id, comment)

Edit a submission comment

Edit the given submission comment.

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
    api_instance = canvas_lms_sdk.SubmissionCommentsApi(api_client)
    course_id = 'course_id_example' # str | ID of the course
    assignment_id = 'assignment_id_example' # str | ID of the assignment
    user_id = 'user_id_example' # str | ID of the user who made the submission
    id = 'id_example' # str | ID of the comment
    comment = 'comment_example' # str | If this argument is present, edit the text of a comment

    try:
        # Edit a submission comment
        api_response = api_instance.api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_put(course_id, assignment_id, user_id, id, comment)
        print("The response of SubmissionCommentsApi->api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubmissionCommentsApi->api_v1_courses_course_id_assignments_assignment_id_submissions_user_id_comments_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **str**| ID of the course | 
 **assignment_id** | **str**| ID of the assignment | 
 **user_id** | **str**| ID of the user who made the submission | 
 **id** | **str**| ID of the comment | 
 **comment** | **str**| If this argument is present, edit the text of a comment | 

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SubmissionComment object |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

