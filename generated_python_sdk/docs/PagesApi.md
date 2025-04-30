# canvas_lms_sdk.PagesApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_courses_course_id_front_page_get**](PagesApi.md#api_v1_courses_course_id_front_page_get) | **GET** /api/v1/courses/{course_id}/front_page | Show front page
[**api_v1_groups_group_id_front_page_get**](PagesApi.md#api_v1_groups_group_id_front_page_get) | **GET** /api/v1/groups/{group_id}/front_page | Show front page


# **api_v1_courses_course_id_front_page_get**
> Page api_v1_courses_course_id_front_page_get(course_id)

Show front page

Retrieve the content of the front page for a course.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.page import Page
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
    api_instance = canvas_lms_sdk.PagesApi(api_client)
    course_id = 56 # int | ID of the course

    try:
        # Show front page
        api_response = api_instance.api_v1_courses_course_id_front_page_get(course_id)
        print("The response of PagesApi->api_v1_courses_course_id_front_page_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PagesApi->api_v1_courses_course_id_front_page_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 

### Return type

[**Page**](Page.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Page object |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_groups_group_id_front_page_get**
> Page api_v1_groups_group_id_front_page_get(group_id)

Show front page

Retrieve the content of the front page for a group.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.page import Page
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
    api_instance = canvas_lms_sdk.PagesApi(api_client)
    group_id = 56 # int | ID of the group

    try:
        # Show front page
        api_response = api_instance.api_v1_groups_group_id_front_page_get(group_id)
        print("The response of PagesApi->api_v1_groups_group_id_front_page_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PagesApi->api_v1_groups_group_id_front_page_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**| ID of the group | 

### Return type

[**Page**](Page.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Page object |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

