# canvas_lms_sdk.PlagiarismDetectionPlatformAssignmentsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_lti_assignments_assignment_id_get**](PlagiarismDetectionPlatformAssignmentsApi.md#api_lti_assignments_assignment_id_get) | **GET** /api/lti/assignments/{assignment_id} | Get a single assignment (LTI)


# **api_lti_assignments_assignment_id_get**
> LtiAssignment api_lti_assignments_assignment_id_get(assignment_id, user_id=user_id)

Get a single assignment (LTI)

Get a single Canvas assignment by Canvas id or LTI id. Tool providers may only access assignments that are associated with their tool.


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.lti_assignment import LtiAssignment
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
    api_instance = canvas_lms_sdk.PlagiarismDetectionPlatformAssignmentsApi(api_client)
    assignment_id = 'assignment_id_example' # str | The id of the assignment. Can be a Canvas or LTI id for the assignment.
    user_id = 'user_id_example' # str | The id of the user. Can be a Canvas or LTI id for the user. (optional)

    try:
        # Get a single assignment (LTI)
        api_response = api_instance.api_lti_assignments_assignment_id_get(assignment_id, user_id=user_id)
        print("The response of PlagiarismDetectionPlatformAssignmentsApi->api_lti_assignments_assignment_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlagiarismDetectionPlatformAssignmentsApi->api_lti_assignments_assignment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignment_id** | **str**| The id of the assignment. Can be a Canvas or LTI id for the assignment. | 
 **user_id** | **str**| The id of the user. Can be a Canvas or LTI id for the user. | [optional] 

### Return type

[**LtiAssignment**](LtiAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A single LtiAssignment object |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized – JWT access token is missing or invalid |  -  |
**403** | Forbidden – Not permitted to access this assignment |  -  |
**404** | Assignment not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

