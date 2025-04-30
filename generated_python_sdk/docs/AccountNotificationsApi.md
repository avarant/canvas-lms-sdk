# canvas_lms_sdk.AccountNotificationsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_account_id_account_notifications_get**](AccountNotificationsApi.md#accounts_account_id_account_notifications_get) | **GET** /accounts/{account_id}/account_notifications | Index of active global notifications for the user
[**accounts_account_id_account_notifications_id_delete**](AccountNotificationsApi.md#accounts_account_id_account_notifications_id_delete) | **DELETE** /accounts/{account_id}/account_notifications/{id} | Close notification for user or destroy notification for admin
[**accounts_account_id_account_notifications_id_get**](AccountNotificationsApi.md#accounts_account_id_account_notifications_id_get) | **GET** /accounts/{account_id}/account_notifications/{id} | Show a global notification
[**accounts_account_id_account_notifications_id_put**](AccountNotificationsApi.md#accounts_account_id_account_notifications_id_put) | **PUT** /accounts/{account_id}/account_notifications/{id} | Update a global notification
[**accounts_account_id_account_notifications_post**](AccountNotificationsApi.md#accounts_account_id_account_notifications_post) | **POST** /accounts/{account_id}/account_notifications | Create a global notification


# **accounts_account_id_account_notifications_get**
> List[AccountNotification] accounts_account_id_account_notifications_get(account_id, include_past=include_past, include_all=include_all, show_is_closed=show_is_closed)

Index of active global notifications for the user

Returns a list of all global notifications in the account for the current user. Notifications closed by the user will not be returned unless include_past is true. Admins can request all notifications by passing include_all=true.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.account_notification import AccountNotification
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
    api_instance = canvas_lms_sdk.AccountNotificationsApi(api_client)
    account_id = 56 # int | ID of the account
    include_past = True # bool | Include past and dismissed global announcements. (optional)
    include_all = True # bool | Include all global announcements, regardless of user’s role or availability date. Only available to account admins. (optional)
    show_is_closed = True # bool | Include a flag for each notification indicating whether it has been read by the user. (optional)

    try:
        # Index of active global notifications for the user
        api_response = api_instance.accounts_account_id_account_notifications_get(account_id, include_past=include_past, include_all=include_all, show_is_closed=show_is_closed)
        print("The response of AccountNotificationsApi->accounts_account_id_account_notifications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountNotificationsApi->accounts_account_id_account_notifications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **include_past** | **bool**| Include past and dismissed global announcements. | [optional] 
 **include_all** | **bool**| Include all global announcements, regardless of user’s role or availability date. Only available to account admins. | [optional] 
 **show_is_closed** | **bool**| Include a flag for each notification indicating whether it has been read by the user. | [optional] 

### Return type

[**List[AccountNotification]**](AccountNotification.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of AccountNotification objects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_account_notifications_id_delete**
> AccountNotification accounts_account_id_account_notifications_id_delete(account_id, id, remove=remove)

Close notification for user or destroy notification for admin

If the current user no longer wants to see this account notification, it can be closed with this call (affects current user only). If the current user is an admin and passes remove=true, the account notification will be destroyed (affects all users).


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.account_notification import AccountNotification
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
    api_instance = canvas_lms_sdk.AccountNotificationsApi(api_client)
    account_id = 56 # int | ID of the account
    id = 56 # int | ID of the notification
    remove = True # bool | Destroy the account notification. (optional)

    try:
        # Close notification for user or destroy notification for admin
        api_response = api_instance.accounts_account_id_account_notifications_id_delete(account_id, id, remove=remove)
        print("The response of AccountNotificationsApi->accounts_account_id_account_notifications_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountNotificationsApi->accounts_account_id_account_notifications_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **id** | **int**| ID of the notification | 
 **remove** | **bool**| Destroy the account notification. | [optional] 

### Return type

[**AccountNotification**](AccountNotification.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The AccountNotification object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_account_notifications_id_get**
> AccountNotification accounts_account_id_account_notifications_id_get(account_id, id)

Show a global notification

Returns a global notification for the current user. A notification that has been closed by the user will not be returned.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.account_notification import AccountNotification
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
    api_instance = canvas_lms_sdk.AccountNotificationsApi(api_client)
    account_id = 56 # int | ID of the account
    id = 56 # int | ID of the notification

    try:
        # Show a global notification
        api_response = api_instance.accounts_account_id_account_notifications_id_get(account_id, id)
        print("The response of AccountNotificationsApi->accounts_account_id_account_notifications_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountNotificationsApi->accounts_account_id_account_notifications_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **id** | **int**| ID of the notification | 

### Return type

[**AccountNotification**](AccountNotification.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An AccountNotification object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_account_notifications_id_put**
> AccountNotification accounts_account_id_account_notifications_id_put(account_id, id, account_notification_subject=account_notification_subject, account_notification_message=account_notification_message, account_notification_start_at=account_notification_start_at, account_notification_end_at=account_notification_end_at, account_notification_icon=account_notification_icon, account_notification_roles=account_notification_roles)

Update a global notification

Update global notification for an account.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.account_notification import AccountNotification
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
    api_instance = canvas_lms_sdk.AccountNotificationsApi(api_client)
    account_id = 56 # int | ID of the account
    id = 56 # int | ID of the notification
    account_notification_subject = 'account_notification_subject_example' # str | The subject of the notification. (optional)
    account_notification_message = 'account_notification_message_example' # str | The message body of the notification. (optional)
    account_notification_start_at = '2013-10-20T19:20:30+01:00' # datetime | The start date and time of the notification in ISO8601 format. (optional)
    account_notification_end_at = '2013-10-20T19:20:30+01:00' # datetime | The end date and time of the notification in ISO8601 format. (optional)
    account_notification_icon = 'account_notification_icon_example' # str | The icon to display with the notification. (optional)
    account_notification_roles = ['account_notification_roles_example'] # List[str] | The role(s) to send global notification to. Omitting this field will send to everyone. (optional)

    try:
        # Update a global notification
        api_response = api_instance.accounts_account_id_account_notifications_id_put(account_id, id, account_notification_subject=account_notification_subject, account_notification_message=account_notification_message, account_notification_start_at=account_notification_start_at, account_notification_end_at=account_notification_end_at, account_notification_icon=account_notification_icon, account_notification_roles=account_notification_roles)
        print("The response of AccountNotificationsApi->accounts_account_id_account_notifications_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountNotificationsApi->accounts_account_id_account_notifications_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **id** | **int**| ID of the notification | 
 **account_notification_subject** | **str**| The subject of the notification. | [optional] 
 **account_notification_message** | **str**| The message body of the notification. | [optional] 
 **account_notification_start_at** | **datetime**| The start date and time of the notification in ISO8601 format. | [optional] 
 **account_notification_end_at** | **datetime**| The end date and time of the notification in ISO8601 format. | [optional] 
 **account_notification_icon** | **str**| The icon to display with the notification. | [optional] 
 **account_notification_roles** | [**List[str]**](str.md)| The role(s) to send global notification to. Omitting this field will send to everyone. | [optional] 

### Return type

[**AccountNotification**](AccountNotification.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated AccountNotification object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_account_notifications_post**
> AccountNotification accounts_account_id_account_notifications_post(account_id, account_notification_subject, account_notification_message, account_notification_start_at, account_notification_end_at, account_notification_icon=account_notification_icon, account_notification_roles=account_notification_roles)

Create a global notification

Create and return a new global notification for an account.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.account_notification import AccountNotification
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
    api_instance = canvas_lms_sdk.AccountNotificationsApi(api_client)
    account_id = 56 # int | ID of the account
    account_notification_subject = 'account_notification_subject_example' # str | The subject of the notification.
    account_notification_message = 'account_notification_message_example' # str | The message body of the notification.
    account_notification_start_at = '2013-10-20T19:20:30+01:00' # datetime | The start date and time of the notification in ISO8601 format.
    account_notification_end_at = '2013-10-20T19:20:30+01:00' # datetime | The end date and time of the notification in ISO8601 format.
    account_notification_icon = 'account_notification_icon_example' # str | The icon to display with the notification. Defaults to warning. (optional)
    account_notification_roles = ['account_notification_roles_example'] # List[str] | The role(s) to send global notification to. Omitting this field will send to everyone. (optional)

    try:
        # Create a global notification
        api_response = api_instance.accounts_account_id_account_notifications_post(account_id, account_notification_subject, account_notification_message, account_notification_start_at, account_notification_end_at, account_notification_icon=account_notification_icon, account_notification_roles=account_notification_roles)
        print("The response of AccountNotificationsApi->accounts_account_id_account_notifications_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountNotificationsApi->accounts_account_id_account_notifications_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **account_notification_subject** | **str**| The subject of the notification. | 
 **account_notification_message** | **str**| The message body of the notification. | 
 **account_notification_start_at** | **datetime**| The start date and time of the notification in ISO8601 format. | 
 **account_notification_end_at** | **datetime**| The end date and time of the notification in ISO8601 format. | 
 **account_notification_icon** | **str**| The icon to display with the notification. Defaults to warning. | [optional] 
 **account_notification_roles** | [**List[str]**](str.md)| The role(s) to send global notification to. Omitting this field will send to everyone. | [optional] 

### Return type

[**AccountNotification**](AccountNotification.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created AccountNotification object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

