# canvas_lms_sdk.PlatformNotificationServiceApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_lti_notice_handlers_deployment_id_get**](PlatformNotificationServiceApi.md#api_lti_notice_handlers_deployment_id_get) | **GET** /api/lti/notice-handlers/{deployment_id} | Retrieve registered notice handlers
[**api_lti_notice_handlers_deployment_id_put**](PlatformNotificationServiceApi.md#api_lti_notice_handlers_deployment_id_put) | **PUT** /api/lti/notice-handlers/{deployment_id} | Register or update a notice handler


# **api_lti_notice_handlers_deployment_id_get**
> ApiLtiNoticeHandlersDeploymentIdGet200Response api_lti_notice_handlers_deployment_id_get(deployment_id)

Retrieve registered notice handlers

Get the list of notice handlers currently registered for the given LTI deployment.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_lti_notice_handlers_deployment_id_get200_response import ApiLtiNoticeHandlersDeploymentIdGet200Response
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
    api_instance = canvas_lms_sdk.PlatformNotificationServiceApi(api_client)
    deployment_id = 'deployment_id_example' # str | LTI deployment ID from the platform launch claim

    try:
        # Retrieve registered notice handlers
        api_response = api_instance.api_lti_notice_handlers_deployment_id_get(deployment_id)
        print("The response of PlatformNotificationServiceApi->api_lti_notice_handlers_deployment_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformNotificationServiceApi->api_lti_notice_handlers_deployment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_id** | **str**| LTI deployment ID from the platform launch claim | 

### Return type

[**ApiLtiNoticeHandlersDeploymentIdGet200Response**](ApiLtiNoticeHandlersDeploymentIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of registered notice handlers |  -  |
**401** | Unauthorized – invalid or missing token |  -  |
**403** | Forbidden – missing required scope |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_lti_notice_handlers_deployment_id_put**
> ApiLtiNoticeHandlersDeploymentIdGet200ResponseNoticeHandlersInner api_lti_notice_handlers_deployment_id_put(deployment_id, api_lti_notice_handlers_deployment_id_put_request)

Register or update a notice handler

Register a notice handler endpoint to receive specific notice types.
To remove a handler for a notice type, set the handler field to an empty string.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_lti_notice_handlers_deployment_id_get200_response_notice_handlers_inner import ApiLtiNoticeHandlersDeploymentIdGet200ResponseNoticeHandlersInner
from canvas_lms_sdk.models.api_lti_notice_handlers_deployment_id_put_request import ApiLtiNoticeHandlersDeploymentIdPutRequest
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
    api_instance = canvas_lms_sdk.PlatformNotificationServiceApi(api_client)
    deployment_id = 'deployment_id_example' # str | LTI deployment ID from the platform launch claim
    api_lti_notice_handlers_deployment_id_put_request = {"notice_type":"LtiContextCopyNotice","handler":"http://lti-13-test-tool.inseng.test/notice_handlers/106:8865aa05b4b79b64a91a86042e43af5ea8ae79eb"} # ApiLtiNoticeHandlersDeploymentIdPutRequest | 

    try:
        # Register or update a notice handler
        api_response = api_instance.api_lti_notice_handlers_deployment_id_put(deployment_id, api_lti_notice_handlers_deployment_id_put_request)
        print("The response of PlatformNotificationServiceApi->api_lti_notice_handlers_deployment_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformNotificationServiceApi->api_lti_notice_handlers_deployment_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_id** | **str**| LTI deployment ID from the platform launch claim | 
 **api_lti_notice_handlers_deployment_id_put_request** | [**ApiLtiNoticeHandlersDeploymentIdPutRequest**](ApiLtiNoticeHandlersDeploymentIdPutRequest.md)|  | 

### Return type

[**ApiLtiNoticeHandlersDeploymentIdGet200ResponseNoticeHandlersInner**](ApiLtiNoticeHandlersDeploymentIdGet200ResponseNoticeHandlersInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Notice handler registered successfully |  -  |
**400** | Invalid request payload |  -  |
**401** | Unauthorized – invalid or missing token |  -  |
**403** | Forbidden – missing required scope |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

