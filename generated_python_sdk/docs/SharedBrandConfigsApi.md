# canvas_lms_sdk.SharedBrandConfigsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_account_id_shared_brand_configs_id_put**](SharedBrandConfigsApi.md#accounts_account_id_shared_brand_configs_id_put) | **PUT** /accounts/{account_id}/shared_brand_configs/{id} | Update a shared theme
[**accounts_account_id_shared_brand_configs_post**](SharedBrandConfigsApi.md#accounts_account_id_shared_brand_configs_post) | **POST** /accounts/{account_id}/shared_brand_configs | Share a BrandConfig (Theme)
[**shared_brand_configs_id_delete**](SharedBrandConfigsApi.md#shared_brand_configs_id_delete) | **DELETE** /shared_brand_configs/{id} | Un-share a BrandConfig (Theme)


# **accounts_account_id_shared_brand_configs_id_put**
> SharedBrandConfig accounts_account_id_shared_brand_configs_id_put(account_id, id, shared_brand_config_name, shared_brand_config_brand_config_md5)

Update a shared theme

Update the specified SharedBrandConfig with a new name or to point to a different BrandConfig. Uses same parameters as create.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.shared_brand_config import SharedBrandConfig
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
    api_instance = canvas_lms_sdk.SharedBrandConfigsApi(api_client)
    account_id = 'account_id_example' # str | The id of the account containing the SharedBrandConfig.
    id = 56 # int | The id of the SharedBrandConfig to update.
    shared_brand_config_name = 'shared_brand_config_name_example' # str | New name for the SharedBrandConfig.
    shared_brand_config_brand_config_md5 = 'shared_brand_config_brand_config_md5_example' # str | MD5 of the new BrandConfig to share.

    try:
        # Update a shared theme
        api_response = api_instance.accounts_account_id_shared_brand_configs_id_put(account_id, id, shared_brand_config_name, shared_brand_config_brand_config_md5)
        print("The response of SharedBrandConfigsApi->accounts_account_id_shared_brand_configs_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharedBrandConfigsApi->accounts_account_id_shared_brand_configs_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The id of the account containing the SharedBrandConfig. | 
 **id** | **int**| The id of the SharedBrandConfig to update. | 
 **shared_brand_config_name** | **str**| New name for the SharedBrandConfig. | 
 **shared_brand_config_brand_config_md5** | **str**| MD5 of the new BrandConfig to share. | 

### Return type

[**SharedBrandConfig**](SharedBrandConfig.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SharedBrandConfig object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_account_id_shared_brand_configs_post**
> SharedBrandConfig accounts_account_id_shared_brand_configs_post(account_id, shared_brand_config_name, shared_brand_config_brand_config_md5)

Share a BrandConfig (Theme)

Create a SharedBrandConfig, which will give the given brand_config a name and make it available to other users of this account.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.shared_brand_config import SharedBrandConfig
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
    api_instance = canvas_lms_sdk.SharedBrandConfigsApi(api_client)
    account_id = 'account_id_example' # str | The id of the account in which to share the BrandConfig.
    shared_brand_config_name = 'shared_brand_config_name_example' # str | Name to share this BrandConfig (theme) as.
    shared_brand_config_brand_config_md5 = 'shared_brand_config_brand_config_md5_example' # str | MD5 of the BrandConfig to share.

    try:
        # Share a BrandConfig (Theme)
        api_response = api_instance.accounts_account_id_shared_brand_configs_post(account_id, shared_brand_config_name, shared_brand_config_brand_config_md5)
        print("The response of SharedBrandConfigsApi->accounts_account_id_shared_brand_configs_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharedBrandConfigsApi->accounts_account_id_shared_brand_configs_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The id of the account in which to share the BrandConfig. | 
 **shared_brand_config_name** | **str**| Name to share this BrandConfig (theme) as. | 
 **shared_brand_config_brand_config_md5** | **str**| MD5 of the BrandConfig to share. | 

### Return type

[**SharedBrandConfig**](SharedBrandConfig.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SharedBrandConfig object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shared_brand_configs_id_delete**
> SharedBrandConfig shared_brand_configs_id_delete(id)

Un-share a BrandConfig (Theme)

Delete a SharedBrandConfig, which will unshare it so you nor anyone else in your account will see it as an option to pick from.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.shared_brand_config import SharedBrandConfig
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
    api_instance = canvas_lms_sdk.SharedBrandConfigsApi(api_client)
    id = 56 # int | The id of the SharedBrandConfig to delete.

    try:
        # Un-share a BrandConfig (Theme)
        api_response = api_instance.shared_brand_configs_id_delete(id)
        print("The response of SharedBrandConfigsApi->shared_brand_configs_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharedBrandConfigsApi->shared_brand_configs_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the SharedBrandConfig to delete. | 

### Return type

[**SharedBrandConfig**](SharedBrandConfig.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SharedBrandConfig object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

