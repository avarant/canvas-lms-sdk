# canvas_lms_sdk.AuthenticationProvidersApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_accounts_account_id_authentication_providers_get**](AuthenticationProvidersApi.md#api_v1_accounts_account_id_authentication_providers_get) | **GET** /api/v1/accounts/{account_id}/authentication_providers | List authentication providers
[**api_v1_accounts_account_id_authentication_providers_id_delete**](AuthenticationProvidersApi.md#api_v1_accounts_account_id_authentication_providers_id_delete) | **DELETE** /api/v1/accounts/{account_id}/authentication_providers/{id} | Delete authentication provider
[**api_v1_accounts_account_id_authentication_providers_id_get**](AuthenticationProvidersApi.md#api_v1_accounts_account_id_authentication_providers_id_get) | **GET** /api/v1/accounts/{account_id}/authentication_providers/{id} | Get authentication provider
[**api_v1_accounts_account_id_authentication_providers_id_put**](AuthenticationProvidersApi.md#api_v1_accounts_account_id_authentication_providers_id_put) | **PUT** /api/v1/accounts/{account_id}/authentication_providers/{id} | Update authentication provider
[**api_v1_accounts_account_id_authentication_providers_id_restore_put**](AuthenticationProvidersApi.md#api_v1_accounts_account_id_authentication_providers_id_restore_put) | **PUT** /api/v1/accounts/{account_id}/authentication_providers/{id}/restore | Restore a deleted authentication provider
[**api_v1_accounts_account_id_authentication_providers_post**](AuthenticationProvidersApi.md#api_v1_accounts_account_id_authentication_providers_post) | **POST** /api/v1/accounts/{account_id}/authentication_providers | Add authentication provider
[**api_v1_accounts_account_id_sso_settings_get**](AuthenticationProvidersApi.md#api_v1_accounts_account_id_sso_settings_get) | **GET** /api/v1/accounts/{account_id}/sso_settings | Show account auth settings
[**api_v1_accounts_account_id_sso_settings_put**](AuthenticationProvidersApi.md#api_v1_accounts_account_id_sso_settings_put) | **PUT** /api/v1/accounts/{account_id}/sso_settings | Update account auth settings


# **api_v1_accounts_account_id_authentication_providers_get**
> List[AuthenticationProvider] api_v1_accounts_account_id_authentication_providers_get(account_id)

List authentication providers

Returns a paginated list of authentication providers for the account.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.authentication_provider import AuthenticationProvider
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
    api_instance = canvas_lms_sdk.AuthenticationProvidersApi(api_client)
    account_id = 56 # int | ID of the account

    try:
        # List authentication providers
        api_response = api_instance.api_v1_accounts_account_id_authentication_providers_get(account_id)
        print("The response of AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 

### Return type

[**List[AuthenticationProvider]**](AuthenticationProvider.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of AuthenticationProvider objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_authentication_providers_id_delete**
> api_v1_accounts_account_id_authentication_providers_id_delete(account_id, id)

Delete authentication provider

Delete the specified authentication provider configuration.

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
    api_instance = canvas_lms_sdk.AuthenticationProvidersApi(api_client)
    account_id = 56 # int | 
    id = 56 # int | 

    try:
        # Delete authentication provider
        api_instance.api_v1_accounts_account_id_authentication_providers_id_delete(account_id, id)
    except Exception as e:
        print("Exception when calling AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **id** | **int**|  | 

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
**204** | Authentication provider deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_authentication_providers_id_get**
> AuthenticationProvider api_v1_accounts_account_id_authentication_providers_id_get(account_id, id)

Get authentication provider

Retrieve the specified authentication provider.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.authentication_provider import AuthenticationProvider
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
    api_instance = canvas_lms_sdk.AuthenticationProvidersApi(api_client)
    account_id = 56 # int | 
    id = 56 # int | ID of the authentication provider

    try:
        # Get authentication provider
        api_response = api_instance.api_v1_accounts_account_id_authentication_providers_id_get(account_id, id)
        print("The response of AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **id** | **int**| ID of the authentication provider | 

### Return type

[**AuthenticationProvider**](AuthenticationProvider.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An AuthenticationProvider object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_authentication_providers_id_put**
> AuthenticationProvider api_v1_accounts_account_id_authentication_providers_id_put(account_id, id)

Update authentication provider

Update an authentication provider. Cannot change auth_type.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.authentication_provider import AuthenticationProvider
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
    api_instance = canvas_lms_sdk.AuthenticationProvidersApi(api_client)
    account_id = 56 # int | 
    id = 56 # int | 

    try:
        # Update authentication provider
        api_response = api_instance.api_v1_accounts_account_id_authentication_providers_id_put(account_id, id)
        print("The response of AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

[**AuthenticationProvider**](AuthenticationProvider.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated AuthenticationProvider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_authentication_providers_id_restore_put**
> AuthenticationProvider api_v1_accounts_account_id_authentication_providers_id_restore_put(account_id, id)

Restore a deleted authentication provider

Restore a previously deleted provider. Requires manage_account_settings permission on the root account.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.authentication_provider import AuthenticationProvider
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
    api_instance = canvas_lms_sdk.AuthenticationProvidersApi(api_client)
    account_id = 56 # int | 
    id = 56 # int | 

    try:
        # Restore a deleted authentication provider
        api_response = api_instance.api_v1_accounts_account_id_authentication_providers_id_restore_put(account_id, id)
        print("The response of AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_id_restore_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_id_restore_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **id** | **int**|  | 

### Return type

[**AuthenticationProvider**](AuthenticationProvider.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The restored AuthenticationProvider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_authentication_providers_post**
> AuthenticationProvider api_v1_accounts_account_id_authentication_providers_post(account_id, auth_type, position=position, jit_provisioning=jit_provisioning, mfa_required=mfa_required)

Add authentication provider

Add external authentication provider(s) for the account.  
See provider-specific parameters (auth_type required, plus other fields depending on auth_type).


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.authentication_provider import AuthenticationProvider
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
    api_instance = canvas_lms_sdk.AuthenticationProvidersApi(api_client)
    account_id = 56 # int | ID of the account
    auth_type = 'auth_type_example' # str | Type of provider (apple, cas, facebook, github, google, ldap, linkedin, microsoft, openid_connect, saml, etc.)
    position = 56 # int | Position/order of this provider (1 = default) (optional)
    jit_provisioning = True # bool | Enable just-in-time provisioning (not for Canvas type) (optional)
    mfa_required = True # bool | Require MFA on login via this provider (optional)

    try:
        # Add authentication provider
        api_response = api_instance.api_v1_accounts_account_id_authentication_providers_post(account_id, auth_type, position=position, jit_provisioning=jit_provisioning, mfa_required=mfa_required)
        print("The response of AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationProvidersApi->api_v1_accounts_account_id_authentication_providers_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **auth_type** | **str**| Type of provider (apple, cas, facebook, github, google, ldap, linkedin, microsoft, openid_connect, saml, etc.) | 
 **position** | **int**| Position/order of this provider (1 &#x3D; default) | [optional] 
 **jit_provisioning** | **bool**| Enable just-in-time provisioning (not for Canvas type) | [optional] 
 **mfa_required** | **bool**| Require MFA on login via this provider | [optional] 

### Return type

[**AuthenticationProvider**](AuthenticationProvider.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created AuthenticationProvider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_sso_settings_get**
> SSOSettings api_v1_accounts_account_id_sso_settings_get(account_id)

Show account auth settings

Get the current state of account-level SSO settings.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.sso_settings import SSOSettings
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
    api_instance = canvas_lms_sdk.AuthenticationProvidersApi(api_client)
    account_id = 56 # int | 

    try:
        # Show account auth settings
        api_response = api_instance.api_v1_accounts_account_id_sso_settings_get(account_id)
        print("The response of AuthenticationProvidersApi->api_v1_accounts_account_id_sso_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationProvidersApi->api_v1_accounts_account_id_sso_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 

### Return type

[**SSOSettings**](SSOSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SSOSettings object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_sso_settings_put**
> SSOSettings api_v1_accounts_account_id_sso_settings_put(account_id, sso_settings_login_handle_name=sso_settings_login_handle_name, sso_settings_change_password_url=sso_settings_change_password_url, sso_settings_auth_discovery_url=sso_settings_auth_discovery_url, sso_settings_unknown_user_url=sso_settings_unknown_user_url)

Update account auth settings

Set account-level SSO settings. Only supplied fields are updated; blank or null values unset the setting.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.sso_settings import SSOSettings
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
    api_instance = canvas_lms_sdk.AuthenticationProvidersApi(api_client)
    account_id = 56 # int | 
    sso_settings_login_handle_name = 'sso_settings_login_handle_name_example' # str | Label used for unique login identifiers (optional)
    sso_settings_change_password_url = 'sso_settings_change_password_url_example' # str | URL for password resets (blank for default) (optional)
    sso_settings_auth_discovery_url = 'sso_settings_auth_discovery_url_example' # str | Discovery URL for login selection (optional)
    sso_settings_unknown_user_url = 'sso_settings_unknown_user_url_example' # str | URL for unknown-user redirection (optional)

    try:
        # Update account auth settings
        api_response = api_instance.api_v1_accounts_account_id_sso_settings_put(account_id, sso_settings_login_handle_name=sso_settings_login_handle_name, sso_settings_change_password_url=sso_settings_change_password_url, sso_settings_auth_discovery_url=sso_settings_auth_discovery_url, sso_settings_unknown_user_url=sso_settings_unknown_user_url)
        print("The response of AuthenticationProvidersApi->api_v1_accounts_account_id_sso_settings_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationProvidersApi->api_v1_accounts_account_id_sso_settings_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**|  | 
 **sso_settings_login_handle_name** | **str**| Label used for unique login identifiers | [optional] 
 **sso_settings_change_password_url** | **str**| URL for password resets (blank for default) | [optional] 
 **sso_settings_auth_discovery_url** | **str**| Discovery URL for login selection | [optional] 
 **sso_settings_unknown_user_url** | **str**| URL for unknown-user redirection | [optional] 

### Return type

[**SSOSettings**](SSOSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated SSOSettings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

