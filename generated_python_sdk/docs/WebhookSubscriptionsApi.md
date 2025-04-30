# canvas_lms_sdk.WebhookSubscriptionsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_lti_subscriptions_get**](WebhookSubscriptionsApi.md#api_lti_subscriptions_get) | **GET** /api/lti/subscriptions | List all Webhook Subscriptions
[**api_lti_subscriptions_id_delete**](WebhookSubscriptionsApi.md#api_lti_subscriptions_id_delete) | **DELETE** /api/lti/subscriptions/{id} | Delete a Webhook Subscription
[**api_lti_subscriptions_id_get**](WebhookSubscriptionsApi.md#api_lti_subscriptions_id_get) | **GET** /api/lti/subscriptions/{id} | Show a single Webhook Subscription
[**api_lti_subscriptions_id_put**](WebhookSubscriptionsApi.md#api_lti_subscriptions_id_put) | **PUT** /api/lti/subscriptions/{id} | Update a Webhook Subscription
[**api_lti_subscriptions_post**](WebhookSubscriptionsApi.md#api_lti_subscriptions_post) | **POST** /api/lti/subscriptions | Create a Webhook Subscription


# **api_lti_subscriptions_get**
> api_lti_subscriptions_get(start_key=start_key)

List all Webhook Subscriptions

Returns a paginated list of webhook subscriptions for the tool proxy.
Default limit is 100 items per page. To retrieve the next page, supply
a StartKey header with the value from the EndKey header of the previous response.


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
    api_instance = canvas_lms_sdk.WebhookSubscriptionsApi(api_client)
    start_key = 'start_key_example' # str | Start key header object (JSON string) to retrieve the next page. Example: {\"Id\":\"...\",\"DeveloperKey\":\"...\"}  (optional)

    try:
        # List all Webhook Subscriptions
        api_instance.api_lti_subscriptions_get(start_key=start_key)
    except Exception as e:
        print("Exception when calling WebhookSubscriptionsApi->api_lti_subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_key** | **str**| Start key header object (JSON string) to retrieve the next page. Example: {\&quot;Id\&quot;:\&quot;...\&quot;,\&quot;DeveloperKey\&quot;:\&quot;...\&quot;}  | [optional] 

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
**200** | A paginated list of subscriptions. |  -  |
**401** | Unauthorized – invalid or missing JWT access token. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_lti_subscriptions_id_delete**
> api_lti_subscriptions_id_delete(id)

Delete a Webhook Subscription

Deletes a specific webhook subscription.

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
    api_instance = canvas_lms_sdk.WebhookSubscriptionsApi(api_client)
    id = 'id_example' # str | The unique identifier of the subscription.

    try:
        # Delete a Webhook Subscription
        api_instance.api_lti_subscriptions_id_delete(id)
    except Exception as e:
        print("Exception when calling WebhookSubscriptionsApi->api_lti_subscriptions_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique identifier of the subscription. | 

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
**204** | Subscription deleted successfully. |  -  |
**401** | Unauthorized – invalid or missing JWT access token. |  -  |
**404** | Subscription not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_lti_subscriptions_id_get**
> api_lti_subscriptions_id_get(id)

Show a single Webhook Subscription

Retrieve details of a specific webhook subscription.

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
    api_instance = canvas_lms_sdk.WebhookSubscriptionsApi(api_client)
    id = 'id_example' # str | The unique identifier of the subscription.

    try:
        # Show a single Webhook Subscription
        api_instance.api_lti_subscriptions_id_get(id)
    except Exception as e:
        print("Exception when calling WebhookSubscriptionsApi->api_lti_subscriptions_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique identifier of the subscription. | 

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
**200** | Subscription details retrieved successfully. |  -  |
**401** | Unauthorized – invalid or missing JWT access token. |  -  |
**404** | Subscription not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_lti_subscriptions_id_put**
> api_lti_subscriptions_id_put(id, api_lti_subscriptions_id_put_request)

Update a Webhook Subscription

Update a webhook subscription using the same parameters as create.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_lti_subscriptions_id_put_request import ApiLtiSubscriptionsIdPutRequest
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
    api_instance = canvas_lms_sdk.WebhookSubscriptionsApi(api_client)
    id = 'id_example' # str | The unique identifier of the subscription.
    api_lti_subscriptions_id_put_request = canvas_lms_sdk.ApiLtiSubscriptionsIdPutRequest() # ApiLtiSubscriptionsIdPutRequest | 

    try:
        # Update a Webhook Subscription
        api_instance.api_lti_subscriptions_id_put(id, api_lti_subscriptions_id_put_request)
    except Exception as e:
        print("Exception when calling WebhookSubscriptionsApi->api_lti_subscriptions_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique identifier of the subscription. | 
 **api_lti_subscriptions_id_put_request** | [**ApiLtiSubscriptionsIdPutRequest**](ApiLtiSubscriptionsIdPutRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription updated successfully. |  -  |
**400** | Bad request – invalid parameters. |  -  |
**401** | Unauthorized – invalid or missing JWT access token. |  -  |
**404** | Subscription not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_lti_subscriptions_post**
> api_lti_subscriptions_post(api_lti_subscriptions_post_request)

Create a Webhook Subscription

Creates a webhook subscription for the specified event type and context.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_lti_subscriptions_post_request import ApiLtiSubscriptionsPostRequest
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
    api_instance = canvas_lms_sdk.WebhookSubscriptionsApi(api_client)
    api_lti_subscriptions_post_request = canvas_lms_sdk.ApiLtiSubscriptionsPostRequest() # ApiLtiSubscriptionsPostRequest | 

    try:
        # Create a Webhook Subscription
        api_instance.api_lti_subscriptions_post(api_lti_subscriptions_post_request)
    except Exception as e:
        print("Exception when calling WebhookSubscriptionsApi->api_lti_subscriptions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_lti_subscriptions_post_request** | [**ApiLtiSubscriptionsPostRequest**](ApiLtiSubscriptionsPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Subscription created successfully. |  -  |
**400** | Bad request – invalid parameters. |  -  |
**401** | Unauthorized – invalid or missing JWT access token. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

