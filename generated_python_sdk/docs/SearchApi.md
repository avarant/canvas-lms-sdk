# canvas_lms_sdk.SearchApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_search_all_courses_get**](SearchApi.md#api_v1_search_all_courses_get) | **GET** /api/v1/search/all_courses | A paginated list of all courses visible in the public index.
[**api_v1_search_recipients_get**](SearchApi.md#api_v1_search_recipients_get) | **GET** /api/v1/search/recipients | Find valid recipients (users, courses and groups) that the current user can send messages to. The /api/v1/search/recipients path is the preferred endpoint; /api/v1/conversations/find_recipients is deprecated. Pagination is supported. 


# **api_v1_search_all_courses_get**
> List[object] api_v1_search_all_courses_get(search=search, public_only=public_only, open_enrollment_only=open_enrollment_only)

A paginated list of all courses visible in the public index.

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
    api_instance = canvas_lms_sdk.SearchApi(api_client)
    search = 'search_example' # str | Search terms used for matching courses. If multiple terms are given, only results matching all terms will be returned.  (optional)
    public_only = True # bool | Only return courses with public content. Defaults to false. (optional)
    open_enrollment_only = True # bool | Only return courses that allow self enrollment. Defaults to false. (optional)

    try:
        # A paginated list of all courses visible in the public index.
        api_response = api_instance.api_v1_search_all_courses_get(search=search, public_only=public_only, open_enrollment_only=open_enrollment_only)
        print("The response of SearchApi->api_v1_search_all_courses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->api_v1_search_all_courses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Search terms used for matching courses. If multiple terms are given, only results matching all terms will be returned.  | [optional] 
 **public_only** | **bool**| Only return courses with public content. Defaults to false. | [optional] 
 **open_enrollment_only** | **bool**| Only return courses that allow self enrollment. Defaults to false. | [optional] 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of course objects. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_search_recipients_get**
> List[ApiV1SearchRecipientsGet200ResponseInner] api_v1_search_recipients_get(search=search, context=context, exclude=exclude, type=type, user_id=user_id, from_conversation_id=from_conversation_id, permissions=permissions)

Find valid recipients (users, courses and groups) that the current user can send messages to. The /api/v1/search/recipients path is the preferred endpoint; /api/v1/conversations/find_recipients is deprecated. Pagination is supported. 

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_v1_search_recipients_get200_response_inner import ApiV1SearchRecipientsGet200ResponseInner
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
    api_instance = canvas_lms_sdk.SearchApi(api_client)
    search = 'search_example' # str | Search terms used for matching users, courses, or groups. If multiple terms are given, only results matching all terms will be returned.  (optional)
    context = 'context_example' # str | Limit the search to a particular course or group (e.g. \"course_3\" or \"group_4\"). (optional)
    exclude = ['exclude_example'] # List[str] | Array of IDs to exclude from the search. These may be user IDs or course/group IDs prefixed with \"course_\" or \"group_\".  (optional)
    type = 'type_example' # str | Limit the search to just users or contexts (groups/courses). (optional)
    user_id = 56 # int | Search for a specific user ID. This ignores the other parameters and will never return more than one result.  (optional)
    from_conversation_id = 56 # int | When searching by user_id, specify a conversation to reference shared context. If both users are in the conversation, the user will be returned.  (optional)
    permissions = ['permissions_example'] # List[str] | Array of permission strings to be checked for each matched context. Determines which permissions may be returned in the response.  (optional)

    try:
        # Find valid recipients (users, courses and groups) that the current user can send messages to. The /api/v1/search/recipients path is the preferred endpoint; /api/v1/conversations/find_recipients is deprecated. Pagination is supported. 
        api_response = api_instance.api_v1_search_recipients_get(search=search, context=context, exclude=exclude, type=type, user_id=user_id, from_conversation_id=from_conversation_id, permissions=permissions)
        print("The response of SearchApi->api_v1_search_recipients_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->api_v1_search_recipients_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Search terms used for matching users, courses, or groups. If multiple terms are given, only results matching all terms will be returned.  | [optional] 
 **context** | **str**| Limit the search to a particular course or group (e.g. \&quot;course_3\&quot; or \&quot;group_4\&quot;). | [optional] 
 **exclude** | [**List[str]**](str.md)| Array of IDs to exclude from the search. These may be user IDs or course/group IDs prefixed with \&quot;course_\&quot; or \&quot;group_\&quot;.  | [optional] 
 **type** | **str**| Limit the search to just users or contexts (groups/courses). | [optional] 
 **user_id** | **int**| Search for a specific user ID. This ignores the other parameters and will never return more than one result.  | [optional] 
 **from_conversation_id** | **int**| When searching by user_id, specify a conversation to reference shared context. If both users are in the conversation, the user will be returned.  | [optional] 
 **permissions** | [**List[str]**](str.md)| Array of permission strings to be checked for each matched context. Determines which permissions may be returned in the response.  | [optional] 

### Return type

[**List[ApiV1SearchRecipientsGet200ResponseInner]**](ApiV1SearchRecipientsGet200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of matching recipients. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

