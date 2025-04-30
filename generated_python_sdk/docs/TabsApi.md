# canvas_lms_sdk.TabsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_account_id_tabs_get**](TabsApi.md#accounts_account_id_tabs_get) | **GET** /accounts/{account_id}/tabs | List available tabs for an account
[**courses_course_id_tabs_get**](TabsApi.md#courses_course_id_tabs_get) | **GET** /courses/{course_id}/tabs | List available tabs for a course
[**courses_course_id_tabs_put**](TabsApi.md#courses_course_id_tabs_put) | **PUT** /courses/{course_id}/tabs | Update a tab for a course
[**groups_group_id_tabs_get**](TabsApi.md#groups_group_id_tabs_get) | **GET** /groups/{group_id}/tabs | List available tabs for a group
[**users_user_id_tabs_get**](TabsApi.md#users_user_id_tabs_get) | **GET** /users/{user_id}/tabs | List available tabs for a user


# **accounts_account_id_tabs_get**
> List[Tab] accounts_account_id_tabs_get(account_id, include=include)

List available tabs for an account

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.tab import Tab
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
    api_instance = canvas_lms_sdk.TabsApi(api_client)
    account_id = 56 # int | ID of the account
    include = 'include_example' # str | \"course_subject_tabs\": Optional flag to return the tabs associated with a canvas_for_elementary subject course’s home page instead of the typical sidebar navigation.  (optional)

    try:
        # List available tabs for an account
        api_response = api_instance.accounts_account_id_tabs_get(account_id, include=include)
        print("The response of TabsApi->accounts_account_id_tabs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TabsApi->accounts_account_id_tabs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| ID of the account | 
 **include** | **str**| \&quot;course_subject_tabs\&quot;: Optional flag to return the tabs associated with a canvas_for_elementary subject course’s home page instead of the typical sidebar navigation.  | [optional] 

### Return type

[**List[Tab]**](Tab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of navigation tabs available in the account |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_course_id_tabs_get**
> List[Tab] courses_course_id_tabs_get(course_id, include=include)

List available tabs for a course

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.tab import Tab
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
    api_instance = canvas_lms_sdk.TabsApi(api_client)
    course_id = 56 # int | ID of the course
    include = 'include_example' # str | \"course_subject_tabs\": Optional flag to return the tabs associated with a canvas_for_elementary subject course’s home page instead of the typical sidebar navigation.  (optional)

    try:
        # List available tabs for a course
        api_response = api_instance.courses_course_id_tabs_get(course_id, include=include)
        print("The response of TabsApi->courses_course_id_tabs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TabsApi->courses_course_id_tabs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **include** | **str**| \&quot;course_subject_tabs\&quot;: Optional flag to return the tabs associated with a canvas_for_elementary subject course’s home page instead of the typical sidebar navigation.  | [optional] 

### Return type

[**List[Tab]**](Tab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of navigation tabs available in the course |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_course_id_tabs_put**
> Tab courses_course_id_tabs_put(course_id, tab_id, position=position, hidden=hidden)

Update a tab for a course

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.tab import Tab
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
    api_instance = canvas_lms_sdk.TabsApi(api_client)
    course_id = 56 # int | ID of the course
    tab_id = 'tab_id_example' # str | ID of the tab to update
    position = 56 # int | The new position of the tab (1-based) (optional)
    hidden = True # bool | Whether the tab is hidden (optional)

    try:
        # Update a tab for a course
        api_response = api_instance.courses_course_id_tabs_put(course_id, tab_id, position=position, hidden=hidden)
        print("The response of TabsApi->courses_course_id_tabs_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TabsApi->courses_course_id_tabs_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| ID of the course | 
 **tab_id** | **str**| ID of the tab to update | 
 **position** | **int**| The new position of the tab (1-based) | [optional] 
 **hidden** | **bool**| Whether the tab is hidden | [optional] 

### Return type

[**Tab**](Tab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated tab object |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **groups_group_id_tabs_get**
> List[Tab] groups_group_id_tabs_get(group_id, include=include)

List available tabs for a group

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.tab import Tab
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
    api_instance = canvas_lms_sdk.TabsApi(api_client)
    group_id = 56 # int | ID of the group
    include = 'include_example' # str | \"course_subject_tabs\": Optional flag to return the tabs associated with a canvas_for_elementary subject course’s home page instead of the typical sidebar navigation.  (optional)

    try:
        # List available tabs for a group
        api_response = api_instance.groups_group_id_tabs_get(group_id, include=include)
        print("The response of TabsApi->groups_group_id_tabs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TabsApi->groups_group_id_tabs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **int**| ID of the group | 
 **include** | **str**| \&quot;course_subject_tabs\&quot;: Optional flag to return the tabs associated with a canvas_for_elementary subject course’s home page instead of the typical sidebar navigation.  | [optional] 

### Return type

[**List[Tab]**](Tab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of navigation tabs available in the group |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_tabs_get**
> List[Tab] users_user_id_tabs_get(user_id, include=include)

List available tabs for a user

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.tab import Tab
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
    api_instance = canvas_lms_sdk.TabsApi(api_client)
    user_id = 56 # int | ID of the user
    include = 'include_example' # str | \"course_subject_tabs\": Optional flag to return the tabs associated with a canvas_for_elementary subject course’s home page instead of the typical sidebar navigation.  (optional)

    try:
        # List available tabs for a user
        api_response = api_instance.users_user_id_tabs_get(user_id, include=include)
        print("The response of TabsApi->users_user_id_tabs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TabsApi->users_user_id_tabs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| ID of the user | 
 **include** | **str**| \&quot;course_subject_tabs\&quot;: Optional flag to return the tabs associated with a canvas_for_elementary subject course’s home page instead of the typical sidebar navigation.  | [optional] 

### Return type

[**List[Tab]**](Tab.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of navigation tabs available for the user |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

