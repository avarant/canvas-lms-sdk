# canvas_lms_sdk.OutcomeImportsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_accounts_account_id_outcome_imports_group_learning_outcome_group_id_post**](OutcomeImportsApi.md#api_v1_accounts_account_id_outcome_imports_group_learning_outcome_group_id_post) | **POST** /api/v1/accounts/{account_id}/outcome_imports/group/{learning_outcome_group_id} | Import outcomes into a specific learning outcome group
[**api_v1_accounts_account_id_outcome_imports_id_created_group_ids_get**](OutcomeImportsApi.md#api_v1_accounts_account_id_outcome_imports_id_created_group_ids_get) | **GET** /api/v1/accounts/{account_id}/outcome_imports/{id}/created_group_ids | Get IDs of outcome groups created after successful import
[**api_v1_accounts_account_id_outcome_imports_id_get**](OutcomeImportsApi.md#api_v1_accounts_account_id_outcome_imports_id_get) | **GET** /api/v1/accounts/{account_id}/outcome_imports/{id} | Get outcome import status
[**api_v1_accounts_account_id_outcome_imports_post**](OutcomeImportsApi.md#api_v1_accounts_account_id_outcome_imports_post) | **POST** /api/v1/accounts/{account_id}/outcome_imports | Import outcomes into Canvas
[**api_v1_courses_course_id_outcome_imports_group_learning_outcome_group_id_post**](OutcomeImportsApi.md#api_v1_courses_course_id_outcome_imports_group_learning_outcome_group_id_post) | **POST** /api/v1/courses/{course_id}/outcome_imports/group/{learning_outcome_group_id} | Import outcomes into a specific learning outcome group
[**api_v1_courses_course_id_outcome_imports_id_created_group_ids_get**](OutcomeImportsApi.md#api_v1_courses_course_id_outcome_imports_id_created_group_ids_get) | **GET** /api/v1/courses/{course_id}/outcome_imports/{id}/created_group_ids | Get IDs of outcome groups created after successful import
[**api_v1_courses_course_id_outcome_imports_id_get**](OutcomeImportsApi.md#api_v1_courses_course_id_outcome_imports_id_get) | **GET** /api/v1/courses/{course_id}/outcome_imports/{id} | Get outcome import status
[**api_v1_courses_course_id_outcome_imports_post**](OutcomeImportsApi.md#api_v1_courses_course_id_outcome_imports_post) | **POST** /api/v1/courses/{course_id}/outcome_imports | Import outcomes into Canvas


# **api_v1_accounts_account_id_outcome_imports_group_learning_outcome_group_id_post**
> OutcomeImport api_v1_accounts_account_id_outcome_imports_group_learning_outcome_group_id_post(account_id, learning_outcome_group_id, import_type=import_type, extension=extension, attachment=attachment, import_type2=import_type2, extension2=extension2)

Import outcomes into a specific learning outcome group

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.outcome_import import OutcomeImport
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
    api_instance = canvas_lms_sdk.OutcomeImportsApi(api_client)
    account_id = 56 # int | ID of the account
    learning_outcome_group_id = 56 # int | ID of the learning outcome group
    import_type = 'import_type_example' # str |  (optional)
    extension = 'extension_example' # str |  (optional)
    attachment = None # bytearray |  (optional)
    import_type2 = 'import_type_example' # str |  (optional)
    extension2 = 'extension_example' # str |  (optional)

    try:
        # Import outcomes into a specific learning outcome group
        api_response = api_instance.api_v1_accounts_account_id_outcome_imports_group_learning_outcome_group_id_post(account_id, learning_outcome_group_id, import_type=import_type, extension=extension, attachment=attachment, import_type2=import_type2, extension2=extension2)
        print("The response of OutcomeImportsApi->api_v1_accounts_account_id_outcome_imports_group_learning_outcome_group_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutcomeImportsApi->api_v1_accounts_account_id_outcome_imports_group_learning_outcome_group_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **learning_outcome_group_id** | **int**| ID of the learning outcome group | 
 **import_type** | **str**|  | [optional] 
 **extension** | **str**|  | [optional] 
 **attachment** | **bytearray**|  | [optional] 
 **import_type2** | **str**|  | [optional] 
 **extension2** | **str**|  | [optional] 

### Return type

[**OutcomeImport**](OutcomeImport.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, text/csv
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OutcomeImport object |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Account, group, or resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_outcome_imports_id_created_group_ids_get**
> List[int] api_v1_accounts_account_id_outcome_imports_id_created_group_ids_get(account_id, id)

Get IDs of outcome groups created after successful import

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
    api_instance = canvas_lms_sdk.OutcomeImportsApi(api_client)
    account_id = 56 # int | ID of the account
    id = 'id_example' # str | ID of the outcome import (or 'latest')

    try:
        # Get IDs of outcome groups created after successful import
        api_response = api_instance.api_v1_accounts_account_id_outcome_imports_id_created_group_ids_get(account_id, id)
        print("The response of OutcomeImportsApi->api_v1_accounts_account_id_outcome_imports_id_created_group_ids_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutcomeImportsApi->api_v1_accounts_account_id_outcome_imports_id_created_group_ids_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **id** | **str**| ID of the outcome import (or &#39;latest&#39;) | 

### Return type

**List[int]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of outcome group IDs |  -  |
**401** | Unauthorized |  -  |
**404** | Account or import not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_outcome_imports_id_get**
> OutcomeImport api_v1_accounts_account_id_outcome_imports_id_get(account_id, id)

Get outcome import status

Get the status of an already created Outcome import. Pass 'latest' for the outcome import id for the latest import.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.outcome_import import OutcomeImport
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
    api_instance = canvas_lms_sdk.OutcomeImportsApi(api_client)
    account_id = 56 # int | ID of the account
    id = 'id_example' # str | ID of the outcome import (or 'latest')

    try:
        # Get outcome import status
        api_response = api_instance.api_v1_accounts_account_id_outcome_imports_id_get(account_id, id)
        print("The response of OutcomeImportsApi->api_v1_accounts_account_id_outcome_imports_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutcomeImportsApi->api_v1_accounts_account_id_outcome_imports_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **id** | **str**| ID of the outcome import (or &#39;latest&#39;) | 

### Return type

[**OutcomeImport**](OutcomeImport.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OutcomeImport object |  -  |
**401** | Unauthorized |  -  |
**404** | Account or import not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_outcome_imports_post**
> OutcomeImport api_v1_accounts_account_id_outcome_imports_post(account_id, import_type=import_type, extension=extension, attachment=attachment, import_type2=import_type2, extension2=extension2)

Import outcomes into Canvas

Import outcomes into Canvas. For more information on the expected format, see the "Outcomes CSV" section in the API docs.


### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.outcome_import import OutcomeImport
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
    api_instance = canvas_lms_sdk.OutcomeImportsApi(api_client)
    account_id = 56 # int | ID of the account
    import_type = 'import_type_example' # str | Choose the data format for reading outcome data. With a standard Canvas install, this option can only be 'instructure_csv', and if unprovided, will be assumed to be so.  (optional)
    extension = 'extension_example' # str | Recommended for raw post request style imports. This field will be used to distinguish between csv and other file format extensions that would usually be provided with the filename in the multipart post request scenario. If not provided, this value will be inferred from the Content-Type, falling back to csv-file format if all else fails.  (optional)
    attachment = None # bytearray | File upload field named \\\"attachment\\\" containing outcome data.  (optional)
    import_type2 = 'import_type_example' # str |  (optional)
    extension2 = 'extension_example' # str |  (optional)

    try:
        # Import outcomes into Canvas
        api_response = api_instance.api_v1_accounts_account_id_outcome_imports_post(account_id, import_type=import_type, extension=extension, attachment=attachment, import_type2=import_type2, extension2=extension2)
        print("The response of OutcomeImportsApi->api_v1_accounts_account_id_outcome_imports_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutcomeImportsApi->api_v1_accounts_account_id_outcome_imports_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **import_type** | **str**| Choose the data format for reading outcome data. With a standard Canvas install, this option can only be &#39;instructure_csv&#39;, and if unprovided, will be assumed to be so.  | [optional] 
 **extension** | **str**| Recommended for raw post request style imports. This field will be used to distinguish between csv and other file format extensions that would usually be provided with the filename in the multipart post request scenario. If not provided, this value will be inferred from the Content-Type, falling back to csv-file format if all else fails.  | [optional] 
 **attachment** | **bytearray**| File upload field named \\\&quot;attachment\\\&quot; containing outcome data.  | [optional] 
 **import_type2** | **str**|  | [optional] 
 **extension2** | **str**|  | [optional] 

### Return type

[**OutcomeImport**](OutcomeImport.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, text/csv
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OutcomeImport object |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Account or resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_outcome_imports_group_learning_outcome_group_id_post**
> OutcomeImport api_v1_courses_course_id_outcome_imports_group_learning_outcome_group_id_post(course_id, learning_outcome_group_id, import_type=import_type, extension=extension, attachment=attachment, import_type2=import_type2, extension2=extension2)

Import outcomes into a specific learning outcome group

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.outcome_import import OutcomeImport
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
    api_instance = canvas_lms_sdk.OutcomeImportsApi(api_client)
    course_id = 56 # int | ID of the course
    learning_outcome_group_id = 56 # int | ID of the learning outcome group
    import_type = 'import_type_example' # str |  (optional)
    extension = 'extension_example' # str |  (optional)
    attachment = None # bytearray |  (optional)
    import_type2 = 'import_type_example' # str |  (optional)
    extension2 = 'extension_example' # str |  (optional)

    try:
        # Import outcomes into a specific learning outcome group
        api_response = api_instance.api_v1_courses_course_id_outcome_imports_group_learning_outcome_group_id_post(course_id, learning_outcome_group_id, import_type=import_type, extension=extension, attachment=attachment, import_type2=import_type2, extension2=extension2)
        print("The response of OutcomeImportsApi->api_v1_courses_course_id_outcome_imports_group_learning_outcome_group_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutcomeImportsApi->api_v1_courses_course_id_outcome_imports_group_learning_outcome_group_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **learning_outcome_group_id** | **int**| ID of the learning outcome group | 
 **import_type** | **str**|  | [optional] 
 **extension** | **str**|  | [optional] 
 **attachment** | **bytearray**|  | [optional] 
 **import_type2** | **str**|  | [optional] 
 **extension2** | **str**|  | [optional] 

### Return type

[**OutcomeImport**](OutcomeImport.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, text/csv
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OutcomeImport object |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Course, group, or resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_outcome_imports_id_created_group_ids_get**
> List[int] api_v1_courses_course_id_outcome_imports_id_created_group_ids_get(course_id, id)

Get IDs of outcome groups created after successful import

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
    api_instance = canvas_lms_sdk.OutcomeImportsApi(api_client)
    course_id = 56 # int | ID of the course
    id = 'id_example' # str | ID of the outcome import (or 'latest')

    try:
        # Get IDs of outcome groups created after successful import
        api_response = api_instance.api_v1_courses_course_id_outcome_imports_id_created_group_ids_get(course_id, id)
        print("The response of OutcomeImportsApi->api_v1_courses_course_id_outcome_imports_id_created_group_ids_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutcomeImportsApi->api_v1_courses_course_id_outcome_imports_id_created_group_ids_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **id** | **str**| ID of the outcome import (or &#39;latest&#39;) | 

### Return type

**List[int]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of outcome group IDs |  -  |
**401** | Unauthorized |  -  |
**404** | Course or import not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_outcome_imports_id_get**
> OutcomeImport api_v1_courses_course_id_outcome_imports_id_get(course_id, id)

Get outcome import status

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.outcome_import import OutcomeImport
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
    api_instance = canvas_lms_sdk.OutcomeImportsApi(api_client)
    course_id = 56 # int | ID of the course
    id = 'id_example' # str | ID of the outcome import (or 'latest')

    try:
        # Get outcome import status
        api_response = api_instance.api_v1_courses_course_id_outcome_imports_id_get(course_id, id)
        print("The response of OutcomeImportsApi->api_v1_courses_course_id_outcome_imports_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutcomeImportsApi->api_v1_courses_course_id_outcome_imports_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **id** | **str**| ID of the outcome import (or &#39;latest&#39;) | 

### Return type

[**OutcomeImport**](OutcomeImport.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OutcomeImport object |  -  |
**401** | Unauthorized |  -  |
**404** | Course or import not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_courses_course_id_outcome_imports_post**
> OutcomeImport api_v1_courses_course_id_outcome_imports_post(course_id, import_type=import_type, extension=extension, attachment=attachment, import_type2=import_type2, extension2=extension2)

Import outcomes into Canvas

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.outcome_import import OutcomeImport
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
    api_instance = canvas_lms_sdk.OutcomeImportsApi(api_client)
    course_id = 56 # int | ID of the course
    import_type = 'import_type_example' # str |  (optional)
    extension = 'extension_example' # str |  (optional)
    attachment = None # bytearray |  (optional)
    import_type2 = 'import_type_example' # str |  (optional)
    extension2 = 'extension_example' # str |  (optional)

    try:
        # Import outcomes into Canvas
        api_response = api_instance.api_v1_courses_course_id_outcome_imports_post(course_id, import_type=import_type, extension=extension, attachment=attachment, import_type2=import_type2, extension2=extension2)
        print("The response of OutcomeImportsApi->api_v1_courses_course_id_outcome_imports_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutcomeImportsApi->api_v1_courses_course_id_outcome_imports_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **import_type** | **str**|  | [optional] 
 **extension** | **str**|  | [optional] 
 **attachment** | **bytearray**|  | [optional] 
 **import_type2** | **str**|  | [optional] 
 **extension2** | **str**|  | [optional] 

### Return type

[**OutcomeImport**](OutcomeImport.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, text/csv
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OutcomeImport object |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Course or resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

