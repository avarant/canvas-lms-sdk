# canvas_lms_sdk.NewQuizItemsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_quiz_v1_courses_course_id_quizzes_assignment_id_items_get**](NewQuizItemsApi.md#api_quiz_v1_courses_course_id_quizzes_assignment_id_items_get) | **GET** /api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items | List quiz items
[**api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_delete**](NewQuizItemsApi.md#api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_delete) | **DELETE** /api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id} | Delete a quiz item
[**api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_get**](NewQuizItemsApi.md#api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_get) | **GET** /api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id} | Get a quiz item
[**api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_patch**](NewQuizItemsApi.md#api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_patch) | **PATCH** /api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id} | Update a quiz item
[**api_quiz_v1_courses_course_id_quizzes_assignment_id_items_media_upload_url_get**](NewQuizItemsApi.md#api_quiz_v1_courses_course_id_quizzes_assignment_id_items_media_upload_url_get) | **GET** /api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/media_upload_url | Get items media_upload_url
[**api_quiz_v1_courses_course_id_quizzes_assignment_id_items_post**](NewQuizItemsApi.md#api_quiz_v1_courses_course_id_quizzes_assignment_id_items_post) | **POST** /api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items | Create a quiz item


# **api_quiz_v1_courses_course_id_quizzes_assignment_id_items_get**
> List[object] api_quiz_v1_courses_course_id_quizzes_assignment_id_items_get(course_id, assignment_id)

List quiz items

Get a list of items in a new quiz.

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
    api_instance = canvas_lms_sdk.NewQuizItemsApi(api_client)
    course_id = 56 # int | no description
    assignment_id = 56 # int | no description

    try:
        # List quiz items
        api_response = api_instance.api_quiz_v1_courses_course_id_quizzes_assignment_id_items_get(course_id, assignment_id)
        print("The response of NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| no description | 
 **assignment_id** | **int**| no description | 

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
**200** | A list of QuizItem objects |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_delete**
> object api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_delete(course_id, assignment_id, item_id)

Delete a quiz item

Delete a single quiz item in a new quiz.

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
    api_instance = canvas_lms_sdk.NewQuizItemsApi(api_client)
    course_id = 56 # int | no description
    assignment_id = 56 # int | The id of the assignment associated with the quiz.
    item_id = 56 # int | The id of the item associated with the quiz.

    try:
        # Delete a quiz item
        api_response = api_instance.api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_delete(course_id, assignment_id, item_id)
        print("The response of NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| no description | 
 **assignment_id** | **int**| The id of the assignment associated with the quiz. | 
 **item_id** | **int**| The id of the item associated with the quiz. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | QuizItem object |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_get**
> object api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_get(course_id, assignment_id, item_id)

Get a quiz item

Get details about a single item in a new quiz.

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
    api_instance = canvas_lms_sdk.NewQuizItemsApi(api_client)
    course_id = 56 # int | no description
    assignment_id = 56 # int | The id of the assignment associated with the quiz.
    item_id = 56 # int | The id of the item associated with the quiz.

    try:
        # Get a quiz item
        api_response = api_instance.api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_get(course_id, assignment_id, item_id)
        print("The response of NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| no description | 
 **assignment_id** | **int**| The id of the assignment associated with the quiz. | 
 **item_id** | **int**| The id of the item associated with the quiz. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | QuizItem object |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_patch**
> object api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_patch(course_id, assignment_id, item_id, body)

Update a quiz item

Update a single quiz item in a new quiz. Only QuestionItem types can be updated.

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
    api_instance = canvas_lms_sdk.NewQuizItemsApi(api_client)
    course_id = 56 # int | no description
    assignment_id = 56 # int | The id of the assignment associated with the quiz.
    item_id = 56 # int | The id of the item associated with the quiz.
    body = None # object | Fields to update for the quiz item

    try:
        # Update a quiz item
        api_response = api_instance.api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_patch(course_id, assignment_id, item_id, body)
        print("The response of NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_item_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| no description | 
 **assignment_id** | **int**| The id of the assignment associated with the quiz. | 
 **item_id** | **int**| The id of the item associated with the quiz. | 
 **body** | **object**| Fields to update for the quiz item | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | QuizItem object |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_quiz_v1_courses_course_id_quizzes_assignment_id_items_media_upload_url_get**
> MediaUploadUrl api_quiz_v1_courses_course_id_quizzes_assignment_id_items_media_upload_url_get(course_id, assignment_id)

Get items media_upload_url

Get a url for uploading media for use in hot-spot question types.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.media_upload_url import MediaUploadUrl
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
    api_instance = canvas_lms_sdk.NewQuizItemsApi(api_client)
    course_id = 56 # int | no description
    assignment_id = 56 # int | no description

    try:
        # Get items media_upload_url
        api_response = api_instance.api_quiz_v1_courses_course_id_quizzes_assignment_id_items_media_upload_url_get(course_id, assignment_id)
        print("The response of NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_media_upload_url_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_media_upload_url_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| no description | 
 **assignment_id** | **int**| no description | 

### Return type

[**MediaUploadUrl**](MediaUploadUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Upload URL for media |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_quiz_v1_courses_course_id_quizzes_assignment_id_items_post**
> object api_quiz_v1_courses_course_id_quizzes_assignment_id_items_post(course_id, assignment_id, body)

Create a quiz item

Create a quiz item in a new quiz. Only QuestionItem types can be created.

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
    api_instance = canvas_lms_sdk.NewQuizItemsApi(api_client)
    course_id = 56 # int | no description
    assignment_id = 56 # int | The id of the assignment associated with the quiz.
    body = None # object | Quiz item to create

    try:
        # Create a quiz item
        api_response = api_instance.api_quiz_v1_courses_course_id_quizzes_assignment_id_items_post(course_id, assignment_id, body)
        print("The response of NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NewQuizItemsApi->api_quiz_v1_courses_course_id_quizzes_assignment_id_items_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **course_id** | **int**| no description | 
 **assignment_id** | **int**| The id of the assignment associated with the quiz. | 
 **body** | **object**| Quiz item to create | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | QuizItem object |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

