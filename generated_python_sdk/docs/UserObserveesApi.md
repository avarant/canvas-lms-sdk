# canvas_lms_sdk.UserObserveesApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_users_user_id_observees_get**](UserObserveesApi.md#api_v1_users_user_id_observees_get) | **GET** /api/v1/users/{user_id}/observees | List observees
[**api_v1_users_user_id_observees_observee_id_delete**](UserObserveesApi.md#api_v1_users_user_id_observees_observee_id_delete) | **DELETE** /api/v1/users/{user_id}/observees/{observee_id} | Remove an observee
[**api_v1_users_user_id_observees_observee_id_get**](UserObserveesApi.md#api_v1_users_user_id_observees_observee_id_get) | **GET** /api/v1/users/{user_id}/observees/{observee_id} | Show an observee
[**api_v1_users_user_id_observees_observee_id_put**](UserObserveesApi.md#api_v1_users_user_id_observees_observee_id_put) | **PUT** /api/v1/users/{user_id}/observees/{observee_id} | Add an observee
[**api_v1_users_user_id_observees_post**](UserObserveesApi.md#api_v1_users_user_id_observees_post) | **POST** /api/v1/users/{user_id}/observees | Add an observee with credentials
[**api_v1_users_user_id_observer_pairing_codes_post**](UserObserveesApi.md#api_v1_users_user_id_observer_pairing_codes_post) | **POST** /api/v1/users/{user_id}/observer_pairing_codes | Create observer pairing code
[**api_v1_users_user_id_observers_get**](UserObserveesApi.md#api_v1_users_user_id_observers_get) | **GET** /api/v1/users/{user_id}/observers | List observers
[**api_v1_users_user_id_observers_observer_id_get**](UserObserveesApi.md#api_v1_users_user_id_observers_observer_id_get) | **GET** /api/v1/users/{user_id}/observers/{observer_id} | Show an observer


# **api_v1_users_user_id_observees_get**
> List[object] api_v1_users_user_id_observees_get(user_id, include=include)

List observees

A paginated list of the users that the given user is observing.
Note: all users are allowed to list their own observees. Administrators can list other users’ observees.
The returned observees will include an attribute “observation_link_root_account_ids”, a list of ids for the root accounts the observer and observee are linked on.


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
    api_instance = canvas_lms_sdk.UserObserveesApi(api_client)
    user_id = 56 # int | The ID of the user.
    include = 'include_example' # str | Optionally include avatar_url. (optional)

    try:
        # List observees
        api_response = api_instance.api_v1_users_user_id_observees_get(user_id, include=include)
        print("The response of UserObserveesApi->api_v1_users_user_id_observees_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserObserveesApi->api_v1_users_user_id_observees_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| The ID of the user. | 
 **include** | **str**| Optionally include avatar_url. | [optional] 

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
**200** | A list of observed users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_observees_observee_id_delete**
> object api_v1_users_user_id_observees_observee_id_delete(user_id, observee_id, root_account_id=root_account_id)

Remove an observee

Unregisters a user as being observed by the given user.

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
    api_instance = canvas_lms_sdk.UserObserveesApi(api_client)
    user_id = 56 # int | 
    observee_id = 56 # int | 
    root_account_id = 56 # int | If specified, only removes the link for the given root account. (optional)

    try:
        # Remove an observee
        api_response = api_instance.api_v1_users_user_id_observees_observee_id_delete(user_id, observee_id, root_account_id=root_account_id)
        print("The response of UserObserveesApi->api_v1_users_user_id_observees_observee_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserObserveesApi->api_v1_users_user_id_observees_observee_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **observee_id** | **int**|  | 
 **root_account_id** | **int**| If specified, only removes the link for the given root account. | [optional] 

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
**200** | The updated User object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_observees_observee_id_get**
> object api_v1_users_user_id_observees_observee_id_get(user_id, observee_id)

Show an observee

Gets information about an observed user. Note: all users are allowed to view their own observees.


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
    api_instance = canvas_lms_sdk.UserObserveesApi(api_client)
    user_id = 56 # int | 
    observee_id = 56 # int | 

    try:
        # Show an observee
        api_response = api_instance.api_v1_users_user_id_observees_observee_id_get(user_id, observee_id)
        print("The response of UserObserveesApi->api_v1_users_user_id_observees_observee_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserObserveesApi->api_v1_users_user_id_observees_observee_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **observee_id** | **int**|  | 

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
**200** | The observed User object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_observees_observee_id_put**
> object api_v1_users_user_id_observees_observee_id_put(user_id, observee_id, root_account_id=root_account_id)

Add an observee

Registers a user as being observed by the given user.

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
    api_instance = canvas_lms_sdk.UserObserveesApi(api_client)
    user_id = 56 # int | 
    observee_id = 56 # int | 
    root_account_id = 56 # int | The ID for the root account to associate with the observation link. If not specified, a link will be created for each root account associated to both the observer and observee. (optional)

    try:
        # Add an observee
        api_response = api_instance.api_v1_users_user_id_observees_observee_id_put(user_id, observee_id, root_account_id=root_account_id)
        print("The response of UserObserveesApi->api_v1_users_user_id_observees_observee_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserObserveesApi->api_v1_users_user_id_observees_observee_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **observee_id** | **int**|  | 
 **root_account_id** | **int**| The ID for the root account to associate with the observation link. If not specified, a link will be created for each root account associated to both the observer and observee. | [optional] 

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
**200** | The updated User object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_observees_post**
> object api_v1_users_user_id_observees_post(user_id, observee=observee, access_token=access_token, pairing_code=pairing_code, root_account_id=root_account_id)

Add an observee with credentials

Register the given user to observe another user, given the observee’s credentials.
Note: all users are allowed to add their own observees, given the observee’s credentials or access token are provided.
Administrators can add observees given credentials, access token or the observee’s id.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_users_user_id_observees_post_request_observee import ApiV1UsersUserIdObserveesPostRequestObservee
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
    api_instance = canvas_lms_sdk.UserObserveesApi(api_client)
    user_id = 56 # int | The ID of the observer user.
    observee = canvas_lms_sdk.ApiV1UsersUserIdObserveesPostRequestObservee() # ApiV1UsersUserIdObserveesPostRequestObservee |  (optional)
    access_token = 'access_token_example' # str | The access token for the user to observe. Required if observee.unique_id or observee.password are omitted. (optional)
    pairing_code = 'pairing_code_example' # str | A generated pairing code for the user to observe. Required if the Observer pairing code feature flag is enabled. (optional)
    root_account_id = 56 # int | The ID for the root account to associate with the observation link. Defaults to the current domain account. If ‘all’ is specified, a link will be created for each root account associated to both the observer and observee. (optional)

    try:
        # Add an observee with credentials
        api_response = api_instance.api_v1_users_user_id_observees_post(user_id, observee=observee, access_token=access_token, pairing_code=pairing_code, root_account_id=root_account_id)
        print("The response of UserObserveesApi->api_v1_users_user_id_observees_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserObserveesApi->api_v1_users_user_id_observees_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| The ID of the observer user. | 
 **observee** | [**ApiV1UsersUserIdObserveesPostRequestObservee**](ApiV1UsersUserIdObserveesPostRequestObservee.md)|  | [optional] 
 **access_token** | **str**| The access token for the user to observe. Required if observee.unique_id or observee.password are omitted. | [optional] 
 **pairing_code** | **str**| A generated pairing code for the user to observe. Required if the Observer pairing code feature flag is enabled. | [optional] 
 **root_account_id** | **int**| The ID for the root account to associate with the observation link. Defaults to the current domain account. If ‘all’ is specified, a link will be created for each root account associated to both the observer and observee. | [optional] 

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
**200** | The newly observed User object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_observer_pairing_codes_post**
> PairingCode api_v1_users_user_id_observer_pairing_codes_post(user_id)

Create observer pairing code

If the user is a student, will generate a code to be used with self registration or observees APIs to link another user to this student.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.pairing_code import PairingCode
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
    api_instance = canvas_lms_sdk.UserObserveesApi(api_client)
    user_id = 56 # int | 

    try:
        # Create observer pairing code
        api_response = api_instance.api_v1_users_user_id_observer_pairing_codes_post(user_id)
        print("The response of UserObserveesApi->api_v1_users_user_id_observer_pairing_codes_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserObserveesApi->api_v1_users_user_id_observer_pairing_codes_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 

### Return type

[**PairingCode**](PairingCode.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A pairing code object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_observers_get**
> List[object] api_v1_users_user_id_observers_get(user_id, include=include)

List observers

A paginated list of the observers of a given user.
Note: all users are allowed to list their own observers. Administrators can list other users’ observers.
The returned observers will include an attribute “observation_link_root_account_ids”, a list of ids for the root accounts the observer and observee are linked on.


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
    api_instance = canvas_lms_sdk.UserObserveesApi(api_client)
    user_id = 56 # int | 
    include = 'include_example' # str | Optionally include avatar_url. (optional)

    try:
        # List observers
        api_response = api_instance.api_v1_users_user_id_observers_get(user_id, include=include)
        print("The response of UserObserveesApi->api_v1_users_user_id_observers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserObserveesApi->api_v1_users_user_id_observers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **include** | **str**| Optionally include avatar_url. | [optional] 

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
**200** | A list of observer User objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_users_user_id_observers_observer_id_get**
> object api_v1_users_user_id_observers_observer_id_get(user_id, observer_id)

Show an observer

Gets information about an observer.
Note: all users are allowed to view their own observers.


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
    api_instance = canvas_lms_sdk.UserObserveesApi(api_client)
    user_id = 56 # int | 
    observer_id = 56 # int | 

    try:
        # Show an observer
        api_response = api_instance.api_v1_users_user_id_observers_observer_id_get(user_id, observer_id)
        print("The response of UserObserveesApi->api_v1_users_user_id_observers_observer_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserObserveesApi->api_v1_users_user_id_observers_observer_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **observer_id** | **int**|  | 

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
**200** | The observer User object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

