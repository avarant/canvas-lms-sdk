# canvas_lms_sdk.ConversationsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_conversations_get**](ConversationsApi.md#api_v1_conversations_get) | **GET** /api/v1/conversations | List conversations


# **api_v1_conversations_get**
> List[Conversation] api_v1_conversations_get(scope=scope, filter=filter, filter_mode=filter_mode, interleave_submissions=interleave_submissions, include_all_conversation_ids=include_all_conversation_ids, include=include)

List conversations

Returns the paginated list of conversations for the current user, most recent ones first.

### Example

* Bearer Authentication (bearerAuth):

```python
import canvas_lms_sdk
from canvas_lms_sdk.models.conversation import Conversation
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
    api_instance = canvas_lms_sdk.ConversationsApi(api_client)
    scope = 'scope_example' # str | When set, only return conversations of the specified type. For example, set to “unread” to return only conversations that haven’t been read. The default behavior is to return all non-archived conversations (i.e. read and unread).  (optional)
    filter = ['filter_example'] # List[str] | When set, only return conversations for the specified courses, groups or users. The id should be prefixed with its type, e.g. “user_123” or “course_456”. Can be an array (by setting “filter[]”) or single value (by setting “filter”).  (optional)
    filter_mode = 'filter_mode_example' # str | When filter[] contains multiple filters, combine them with this mode, filtering conversations that have at least all of the contexts (“and”) or at least one of the contexts (“or”).  (optional)
    interleave_submissions = True # bool | (Obsolete) Submissions are no longer linked to conversations. This parameter is ignored. (optional)
    include_all_conversation_ids = True # bool | Default is false. If true, the top-level element of the response will be an object rather than an array, and will have the keys “conversations” which will contain the paged conversation data, and “conversation_ids” which will contain the ids of all conversations under this scope/filter in the same order.  (optional)
    include = ['include_example'] # List[str] | Optionally include an “avatar_url” key for each user participating in the conversation.  (optional)

    try:
        # List conversations
        api_response = api_instance.api_v1_conversations_get(scope=scope, filter=filter, filter_mode=filter_mode, interleave_submissions=interleave_submissions, include_all_conversation_ids=include_all_conversation_ids, include=include)
        print("The response of ConversationsApi->api_v1_conversations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->api_v1_conversations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| When set, only return conversations of the specified type. For example, set to “unread” to return only conversations that haven’t been read. The default behavior is to return all non-archived conversations (i.e. read and unread).  | [optional] 
 **filter** | [**List[str]**](str.md)| When set, only return conversations for the specified courses, groups or users. The id should be prefixed with its type, e.g. “user_123” or “course_456”. Can be an array (by setting “filter[]”) or single value (by setting “filter”).  | [optional] 
 **filter_mode** | **str**| When filter[] contains multiple filters, combine them with this mode, filtering conversations that have at least all of the contexts (“and”) or at least one of the contexts (“or”).  | [optional] 
 **interleave_submissions** | **bool**| (Obsolete) Submissions are no longer linked to conversations. This parameter is ignored. | [optional] 
 **include_all_conversation_ids** | **bool**| Default is false. If true, the top-level element of the response will be an object rather than an array, and will have the keys “conversations” which will contain the paged conversation data, and “conversation_ids” which will contain the ids of all conversations under this scope/filter in the same order.  | [optional] 
 **include** | [**List[str]**](str.md)| Optionally include an “avatar_url” key for each user participating in the conversation.  | [optional] 

### Return type

[**List[Conversation]**](Conversation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Conversation objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

