# canvas_lms_sdk.ServicesApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_services_kaltura_get**](ServicesApi.md#api_v1_services_kaltura_get) | **GET** /api/v1/services/kaltura | Return the config information for the Kaltura plugin in JSON format.
[**api_v1_services_kaltura_session_post**](ServicesApi.md#api_v1_services_kaltura_session_post) | **POST** /api/v1/services/kaltura_session | Start a new Kaltura session, so that new media can be recorded and uploaded to this Canvas instance’s Kaltura instance.


# **api_v1_services_kaltura_get**
> ApiV1ServicesKalturaGet200Response api_v1_services_kaltura_get()

Return the config information for the Kaltura plugin in JSON format.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_services_kaltura_get200_response import ApiV1ServicesKalturaGet200Response
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
    api_instance = canvas_lms_sdk.ServicesApi(api_client)

    try:
        # Return the config information for the Kaltura plugin in JSON format.
        api_response = api_instance.api_v1_services_kaltura_get()
        print("The response of ServicesApi->api_v1_services_kaltura_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->api_v1_services_kaltura_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiV1ServicesKalturaGet200Response**](ApiV1ServicesKalturaGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Kaltura configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_services_kaltura_session_post**
> ApiV1ServicesKalturaSessionPost200Response api_v1_services_kaltura_session_post()

Start a new Kaltura session, so that new media can be recorded and uploaded to this Canvas instance’s Kaltura instance.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_services_kaltura_session_post200_response import ApiV1ServicesKalturaSessionPost200Response
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
    api_instance = canvas_lms_sdk.ServicesApi(api_client)

    try:
        # Start a new Kaltura session, so that new media can be recorded and uploaded to this Canvas instance’s Kaltura instance.
        api_response = api_instance.api_v1_services_kaltura_session_post()
        print("The response of ServicesApi->api_v1_services_kaltura_session_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicesApi->api_v1_services_kaltura_session_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiV1ServicesKalturaSessionPost200Response**](ApiV1ServicesKalturaSessionPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Kaltura session ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

