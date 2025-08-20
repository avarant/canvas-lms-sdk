# canvas_lms_sdk.SectionsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_assignment_override_for_section**](SectionsApi.md#get_assignment_override_for_section) | **GET** /api/v1/sections/{course_section_id}/assignments/{assignment_id}/override | Redirect to the assignment override for a section


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
    api_instance = canvas_lms_sdk.SectionsApi(api_client)
    course_section_id = 56 # int | ID of the course section.
    assignment_id = 56 # int | ID of the assignment.

    try:
        # Redirect to the assignment override for a section
        api_instance.get_assignment_override_for_section(course_section_id, assignment_id)
    except Exception as e:
        print("Exception when calling SectionsApi->get_assignment_override_for_section: %s\n" % e)
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

