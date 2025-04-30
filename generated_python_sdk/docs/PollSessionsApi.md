# canvas_lms_sdk.PollSessionsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_poll_sessions_closed_get**](PollSessionsApi.md#api_v1_poll_sessions_closed_get) | **GET** /api/v1/poll_sessions/closed | List closed poll sessions
[**api_v1_poll_sessions_opened_get**](PollSessionsApi.md#api_v1_poll_sessions_opened_get) | **GET** /api/v1/poll_sessions/opened | List opened poll sessions
[**api_v1_polls_poll_id_poll_sessions_get**](PollSessionsApi.md#api_v1_polls_poll_id_poll_sessions_get) | **GET** /api/v1/polls/{poll_id}/poll_sessions | List poll sessions for a poll
[**api_v1_polls_poll_id_poll_sessions_id_close_get**](PollSessionsApi.md#api_v1_polls_poll_id_poll_sessions_id_close_get) | **GET** /api/v1/polls/{poll_id}/poll_sessions/{id}/close | Close an opened poll session
[**api_v1_polls_poll_id_poll_sessions_id_delete**](PollSessionsApi.md#api_v1_polls_poll_id_poll_sessions_id_delete) | **DELETE** /api/v1/polls/{poll_id}/poll_sessions/{id} | Delete a poll session
[**api_v1_polls_poll_id_poll_sessions_id_get**](PollSessionsApi.md#api_v1_polls_poll_id_poll_sessions_id_get) | **GET** /api/v1/polls/{poll_id}/poll_sessions/{id} | Get the results for a single poll session
[**api_v1_polls_poll_id_poll_sessions_id_open_get**](PollSessionsApi.md#api_v1_polls_poll_id_poll_sessions_id_open_get) | **GET** /api/v1/polls/{poll_id}/poll_sessions/{id}/open | Open a poll session
[**api_v1_polls_poll_id_poll_sessions_id_put**](PollSessionsApi.md#api_v1_polls_poll_id_poll_sessions_id_put) | **PUT** /api/v1/polls/{poll_id}/poll_sessions/{id} | Update a single poll session
[**api_v1_polls_poll_id_poll_sessions_post**](PollSessionsApi.md#api_v1_polls_poll_id_poll_sessions_post) | **POST** /api/v1/polls/{poll_id}/poll_sessions | Create a single poll session


# **api_v1_poll_sessions_closed_get**
> ApiV1PollsPollIdPollSessionsGet200Response api_v1_poll_sessions_closed_get()

List closed poll sessions

A paginated list of all closed poll sessions available to the current user.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_get200_response import ApiV1PollsPollIdPollSessionsGet200Response
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
    api_instance = canvas_lms_sdk.PollSessionsApi(api_client)

    try:
        # List closed poll sessions
        api_response = api_instance.api_v1_poll_sessions_closed_get()
        print("The response of PollSessionsApi->api_v1_poll_sessions_closed_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PollSessionsApi->api_v1_poll_sessions_closed_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiV1PollsPollIdPollSessionsGet200Response**](ApiV1PollsPollIdPollSessionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of closed poll sessions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_poll_sessions_opened_get**
> ApiV1PollsPollIdPollSessionsGet200Response api_v1_poll_sessions_opened_get()

List opened poll sessions

A paginated list of all opened poll sessions available to the current user.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_get200_response import ApiV1PollsPollIdPollSessionsGet200Response
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
    api_instance = canvas_lms_sdk.PollSessionsApi(api_client)

    try:
        # List opened poll sessions
        api_response = api_instance.api_v1_poll_sessions_opened_get()
        print("The response of PollSessionsApi->api_v1_poll_sessions_opened_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PollSessionsApi->api_v1_poll_sessions_opened_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiV1PollsPollIdPollSessionsGet200Response**](ApiV1PollsPollIdPollSessionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of opened poll sessions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_polls_poll_id_poll_sessions_get**
> ApiV1PollsPollIdPollSessionsGet200Response api_v1_polls_poll_id_poll_sessions_get(poll_id)

List poll sessions for a poll

Returns the paginated list of PollSessions in this poll.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_get200_response import ApiV1PollsPollIdPollSessionsGet200Response
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
    api_instance = canvas_lms_sdk.PollSessionsApi(api_client)
    poll_id = 56 # int | 

    try:
        # List poll sessions for a poll
        api_response = api_instance.api_v1_polls_poll_id_poll_sessions_get(poll_id)
        print("The response of PollSessionsApi->api_v1_polls_poll_id_poll_sessions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PollSessionsApi->api_v1_polls_poll_id_poll_sessions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poll_id** | **int**|  | 

### Return type

[**ApiV1PollsPollIdPollSessionsGet200Response**](ApiV1PollsPollIdPollSessionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of poll sessions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_polls_poll_id_poll_sessions_id_close_get**
> api_v1_polls_poll_id_poll_sessions_id_close_get(poll_id, id)

Close an opened poll session

Marks the specified poll session as closed.

### Example


```python
import canvas_lms_sdk
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
    api_instance = canvas_lms_sdk.PollSessionsApi(api_client)
    poll_id = 56 # int | 
    id = 56 # int | 

    try:
        # Close an opened poll session
        api_instance.api_v1_polls_poll_id_poll_sessions_id_close_get(poll_id, id)
    except Exception as e:
        print("Exception when calling PollSessionsApi->api_v1_polls_poll_id_poll_sessions_id_close_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poll_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Poll session closed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_polls_poll_id_poll_sessions_id_delete**
> api_v1_polls_poll_id_poll_sessions_id_delete(poll_id, id)

Delete a poll session

Deletes the specified poll session.

### Example


```python
import canvas_lms_sdk
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
    api_instance = canvas_lms_sdk.PollSessionsApi(api_client)
    poll_id = 56 # int | 
    id = 56 # int | 

    try:
        # Delete a poll session
        api_instance.api_v1_polls_poll_id_poll_sessions_id_delete(poll_id, id)
    except Exception as e:
        print("Exception when calling PollSessionsApi->api_v1_polls_poll_id_poll_sessions_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poll_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_polls_poll_id_poll_sessions_id_get**
> ApiV1PollsPollIdPollSessionsGet200Response api_v1_polls_poll_id_poll_sessions_id_get(poll_id, id)

Get the results for a single poll session

Returns the poll session with the given id.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_get200_response import ApiV1PollsPollIdPollSessionsGet200Response
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
    api_instance = canvas_lms_sdk.PollSessionsApi(api_client)
    poll_id = 56 # int | 
    id = 56 # int | 

    try:
        # Get the results for a single poll session
        api_response = api_instance.api_v1_polls_poll_id_poll_sessions_id_get(poll_id, id)
        print("The response of PollSessionsApi->api_v1_polls_poll_id_poll_sessions_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PollSessionsApi->api_v1_polls_poll_id_poll_sessions_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poll_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

[**ApiV1PollsPollIdPollSessionsGet200Response**](ApiV1PollsPollIdPollSessionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A poll session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_polls_poll_id_poll_sessions_id_open_get**
> api_v1_polls_poll_id_poll_sessions_id_open_get(poll_id, id)

Open a poll session

Marks the specified poll session as open.

### Example


```python
import canvas_lms_sdk
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
    api_instance = canvas_lms_sdk.PollSessionsApi(api_client)
    poll_id = 56 # int | 
    id = 56 # int | 

    try:
        # Open a poll session
        api_instance.api_v1_polls_poll_id_poll_sessions_id_open_get(poll_id, id)
    except Exception as e:
        print("Exception when calling PollSessionsApi->api_v1_polls_poll_id_poll_sessions_id_open_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poll_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Poll session opened |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_polls_poll_id_poll_sessions_id_put**
> ApiV1PollsPollIdPollSessionsGet200Response api_v1_polls_poll_id_poll_sessions_id_put(poll_id, id, api_v1_polls_poll_id_poll_sessions_id_put_request)

Update a single poll session

Update an existing poll session for this poll.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_get200_response import ApiV1PollsPollIdPollSessionsGet200Response
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_id_put_request import ApiV1PollsPollIdPollSessionsIdPutRequest
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
    api_instance = canvas_lms_sdk.PollSessionsApi(api_client)
    poll_id = 56 # int | 
    id = 56 # int | 
    api_v1_polls_poll_id_poll_sessions_id_put_request = canvas_lms_sdk.ApiV1PollsPollIdPollSessionsIdPutRequest() # ApiV1PollsPollIdPollSessionsIdPutRequest | 

    try:
        # Update a single poll session
        api_response = api_instance.api_v1_polls_poll_id_poll_sessions_id_put(poll_id, id, api_v1_polls_poll_id_poll_sessions_id_put_request)
        print("The response of PollSessionsApi->api_v1_polls_poll_id_poll_sessions_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PollSessionsApi->api_v1_polls_poll_id_poll_sessions_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poll_id** | **int**|  | 
 **id** | **int**|  | 
 **api_v1_polls_poll_id_poll_sessions_id_put_request** | [**ApiV1PollsPollIdPollSessionsIdPutRequest**](ApiV1PollsPollIdPollSessionsIdPutRequest.md)|  | 

### Return type

[**ApiV1PollsPollIdPollSessionsGet200Response**](ApiV1PollsPollIdPollSessionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated poll session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_polls_poll_id_poll_sessions_post**
> ApiV1PollsPollIdPollSessionsGet200Response api_v1_polls_poll_id_poll_sessions_post(poll_id, api_v1_polls_poll_id_poll_sessions_post_request)

Create a single poll session

Create a new poll session for this poll.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_get200_response import ApiV1PollsPollIdPollSessionsGet200Response
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_post_request import ApiV1PollsPollIdPollSessionsPostRequest
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
    api_instance = canvas_lms_sdk.PollSessionsApi(api_client)
    poll_id = 56 # int | 
    api_v1_polls_poll_id_poll_sessions_post_request = canvas_lms_sdk.ApiV1PollsPollIdPollSessionsPostRequest() # ApiV1PollsPollIdPollSessionsPostRequest | 

    try:
        # Create a single poll session
        api_response = api_instance.api_v1_polls_poll_id_poll_sessions_post(poll_id, api_v1_polls_poll_id_poll_sessions_post_request)
        print("The response of PollSessionsApi->api_v1_polls_poll_id_poll_sessions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PollSessionsApi->api_v1_polls_poll_id_poll_sessions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poll_id** | **int**|  | 
 **api_v1_polls_poll_id_poll_sessions_post_request** | [**ApiV1PollsPollIdPollSessionsPostRequest**](ApiV1PollsPollIdPollSessionsPostRequest.md)|  | 

### Return type

[**ApiV1PollsPollIdPollSessionsGet200Response**](ApiV1PollsPollIdPollSessionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created poll session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

