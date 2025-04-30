# canvas_lms_sdk.CoursesApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_courses_get**](CoursesApi.md#api_v1_courses_get) | **GET** /api/v1/courses | List your courses


# **api_v1_courses_get**
> List[object] api_v1_courses_get(enrollment_type=enrollment_type, enrollment_role=enrollment_role, enrollment_role_id=enrollment_role_id, enrollment_state=enrollment_state, exclude_blueprint_courses=exclude_blueprint_courses, include=include, state=state)

List your courses

Returns the paginated list of active courses for the current user.

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
    api_instance = canvas_lms_sdk.CoursesApi(api_client)
    enrollment_type = 'enrollment_type_example' # str | When set, only return courses where the user is enrolled as this type. Ignored if enrollment_role is given. (optional)
    enrollment_role = 'enrollment_role_example' # str | Deprecated. Only return courses where the user is enrolled with the specified course‐level role. (optional)
    enrollment_role_id = 56 # int | Only return courses where the user is enrolled with the specified course‐level role ID. (optional)
    enrollment_state = 'enrollment_state_example' # str | Only return courses where the user has an enrollment with the given state. (optional)
    exclude_blueprint_courses = True # bool | When set, only return courses that are not blueprint courses. (optional)
    include = ['include_example'] # List[str] | Optional extra information to include with each Course. Allowed values: needs_grading_count, syllabus_body, public_description, total_scores, current_grading_period_scores, grading_periods, term, account, course_progress, sections, storage_quota_used_mb, total_students, passback_status, favorites, teachers, observed_users, tabs, course_image, banner_image, concluded, post_manually. (optional)
    state = ['state_example'] # List[str] | If set, only return courses that are in the given state(s). (optional)

    try:
        # List your courses
        api_response = api_instance.api_v1_courses_get(enrollment_type=enrollment_type, enrollment_role=enrollment_role, enrollment_role_id=enrollment_role_id, enrollment_state=enrollment_state, exclude_blueprint_courses=exclude_blueprint_courses, include=include, state=state)
        print("The response of CoursesApi->api_v1_courses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoursesApi->api_v1_courses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enrollment_type** | **str**| When set, only return courses where the user is enrolled as this type. Ignored if enrollment_role is given. | [optional] 
 **enrollment_role** | **str**| Deprecated. Only return courses where the user is enrolled with the specified course‐level role. | [optional] 
 **enrollment_role_id** | **int**| Only return courses where the user is enrolled with the specified course‐level role ID. | [optional] 
 **enrollment_state** | **str**| Only return courses where the user has an enrollment with the given state. | [optional] 
 **exclude_blueprint_courses** | **bool**| When set, only return courses that are not blueprint courses. | [optional] 
 **include** | [**List[str]**](str.md)| Optional extra information to include with each Course. Allowed values: needs_grading_count, syllabus_body, public_description, total_scores, current_grading_period_scores, grading_periods, term, account, course_progress, sections, storage_quota_used_mb, total_students, passback_status, favorites, teachers, observed_users, tabs, course_image, banner_image, concluded, post_manually. | [optional] 
 **state** | [**List[str]**](str.md)| If set, only return courses that are in the given state(s). | [optional] 

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
**200** | A list of Course objects. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

