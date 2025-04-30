# canvas_lms_sdk.EnrollmentTermsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_accounts_account_id_terms_get**](EnrollmentTermsApi.md#api_v1_accounts_account_id_terms_get) | **GET** /api/v1/accounts/{account_id}/terms | List enrollment terms
[**api_v1_accounts_account_id_terms_id_delete**](EnrollmentTermsApi.md#api_v1_accounts_account_id_terms_id_delete) | **DELETE** /api/v1/accounts/{account_id}/terms/{id} | Delete enrollment term
[**api_v1_accounts_account_id_terms_id_get**](EnrollmentTermsApi.md#api_v1_accounts_account_id_terms_id_get) | **GET** /api/v1/accounts/{account_id}/terms/{id} | Retrieve enrollment term
[**api_v1_accounts_account_id_terms_id_put**](EnrollmentTermsApi.md#api_v1_accounts_account_id_terms_id_put) | **PUT** /api/v1/accounts/{account_id}/terms/{id} | Update enrollment term
[**api_v1_accounts_account_id_terms_post**](EnrollmentTermsApi.md#api_v1_accounts_account_id_terms_post) | **POST** /api/v1/accounts/{account_id}/terms | Create enrollment term


# **api_v1_accounts_account_id_terms_get**
> EnrollmentTermsList api_v1_accounts_account_id_terms_get(account_id, workflow_state=workflow_state, include=include, term_name=term_name)

List enrollment terms

An object with a paginated list of all of the terms in the account.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.enrollment_terms_list import EnrollmentTermsList
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
    api_instance = canvas_lms_sdk.EnrollmentTermsApi(api_client)
    account_id = 56 # int | The account ID.
    workflow_state = ['workflow_state_example'] # List[str] | If set, only returns terms that are in the given state. Defaults to 'active'. (optional)
    include = ['include_example'] # List[str] | Array of additional information to include. (optional)
    term_name = 'term_name_example' # str | Search keyword matched against term name. (optional)

    try:
        # List enrollment terms
        api_response = api_instance.api_v1_accounts_account_id_terms_get(account_id, workflow_state=workflow_state, include=include, term_name=term_name)
        print("The response of EnrollmentTermsApi->api_v1_accounts_account_id_terms_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrollmentTermsApi->api_v1_accounts_account_id_terms_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The account ID. | 
 **workflow_state** | [**List[str]**](str.md)| If set, only returns terms that are in the given state. Defaults to &#39;active&#39;. | [optional] 
 **include** | [**List[str]**](str.md)| Array of additional information to include. | [optional] 
 **term_name** | **str**| Search keyword matched against term name. | [optional] 

### Return type

[**EnrollmentTermsList**](EnrollmentTermsList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of enrollment terms. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_terms_id_delete**
> EnrollmentTerm api_v1_accounts_account_id_terms_id_delete(account_id, id)

Delete enrollment term

Delete the specified enrollment term.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.enrollment_term import EnrollmentTerm
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
    api_instance = canvas_lms_sdk.EnrollmentTermsApi(api_client)
    account_id = 56 # int | The account ID.
    id = 56 # int | The enrollment term ID.

    try:
        # Delete enrollment term
        api_response = api_instance.api_v1_accounts_account_id_terms_id_delete(account_id, id)
        print("The response of EnrollmentTermsApi->api_v1_accounts_account_id_terms_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrollmentTermsApi->api_v1_accounts_account_id_terms_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The account ID. | 
 **id** | **int**| The enrollment term ID. | 

### Return type

[**EnrollmentTerm**](EnrollmentTerm.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | EnrollmentTerm object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_terms_id_get**
> EnrollmentTerm api_v1_accounts_account_id_terms_id_get(account_id, id)

Retrieve enrollment term

Retrieves the details for an enrollment term in the account. Includes overrides by default.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.enrollment_term import EnrollmentTerm
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
    api_instance = canvas_lms_sdk.EnrollmentTermsApi(api_client)
    account_id = 56 # int | The account ID.
    id = 56 # int | The enrollment term ID.

    try:
        # Retrieve enrollment term
        api_response = api_instance.api_v1_accounts_account_id_terms_id_get(account_id, id)
        print("The response of EnrollmentTermsApi->api_v1_accounts_account_id_terms_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrollmentTermsApi->api_v1_accounts_account_id_terms_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The account ID. | 
 **id** | **int**| The enrollment term ID. | 

### Return type

[**EnrollmentTerm**](EnrollmentTerm.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | EnrollmentTerm object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_terms_id_put**
> EnrollmentTerm api_v1_accounts_account_id_terms_id_put(account_id, id, api_v1_accounts_account_id_terms_id_put_request)

Update enrollment term

Update an existing enrollment term for the specified account.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_accounts_account_id_terms_id_put_request import ApiV1AccountsAccountIdTermsIdPutRequest
from canvas_lms_sdk.models.enrollment_term import EnrollmentTerm
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
    api_instance = canvas_lms_sdk.EnrollmentTermsApi(api_client)
    account_id = 56 # int | The account ID.
    id = 56 # int | The enrollment term ID.
    api_v1_accounts_account_id_terms_id_put_request = canvas_lms_sdk.ApiV1AccountsAccountIdTermsIdPutRequest() # ApiV1AccountsAccountIdTermsIdPutRequest | 

    try:
        # Update enrollment term
        api_response = api_instance.api_v1_accounts_account_id_terms_id_put(account_id, id, api_v1_accounts_account_id_terms_id_put_request)
        print("The response of EnrollmentTermsApi->api_v1_accounts_account_id_terms_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrollmentTermsApi->api_v1_accounts_account_id_terms_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The account ID. | 
 **id** | **int**| The enrollment term ID. | 
 **api_v1_accounts_account_id_terms_id_put_request** | [**ApiV1AccountsAccountIdTermsIdPutRequest**](ApiV1AccountsAccountIdTermsIdPutRequest.md)|  | 

### Return type

[**EnrollmentTerm**](EnrollmentTerm.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | EnrollmentTerm object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_terms_post**
> EnrollmentTerm api_v1_accounts_account_id_terms_post(account_id, api_v1_accounts_account_id_terms_post_request)

Create enrollment term

Create a new enrollment term for the specified account.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_accounts_account_id_terms_post_request import ApiV1AccountsAccountIdTermsPostRequest
from canvas_lms_sdk.models.enrollment_term import EnrollmentTerm
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
    api_instance = canvas_lms_sdk.EnrollmentTermsApi(api_client)
    account_id = 56 # int | The account ID.
    api_v1_accounts_account_id_terms_post_request = canvas_lms_sdk.ApiV1AccountsAccountIdTermsPostRequest() # ApiV1AccountsAccountIdTermsPostRequest | 

    try:
        # Create enrollment term
        api_response = api_instance.api_v1_accounts_account_id_terms_post(account_id, api_v1_accounts_account_id_terms_post_request)
        print("The response of EnrollmentTermsApi->api_v1_accounts_account_id_terms_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrollmentTermsApi->api_v1_accounts_account_id_terms_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| The account ID. | 
 **api_v1_accounts_account_id_terms_post_request** | [**ApiV1AccountsAccountIdTermsPostRequest**](ApiV1AccountsAccountIdTermsPostRequest.md)|  | 

### Return type

[**EnrollmentTerm**](EnrollmentTerm.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | EnrollmentTerm object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

