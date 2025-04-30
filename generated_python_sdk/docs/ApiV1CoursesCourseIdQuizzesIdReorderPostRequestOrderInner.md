# ApiV1CoursesCourseIdQuizzesIdReorderPostRequestOrderInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The associated item&#39;s unique identifier | 
**type** | **str** | The type of item (&#39;question&#39; or &#39;group&#39;) | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_quizzes_id_reorder_post_request_order_inner import ApiV1CoursesCourseIdQuizzesIdReorderPostRequestOrderInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdQuizzesIdReorderPostRequestOrderInner from a JSON string
api_v1_courses_course_id_quizzes_id_reorder_post_request_order_inner_instance = ApiV1CoursesCourseIdQuizzesIdReorderPostRequestOrderInner.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdQuizzesIdReorderPostRequestOrderInner.to_json())

# convert the object into a dict
api_v1_courses_course_id_quizzes_id_reorder_post_request_order_inner_dict = api_v1_courses_course_id_quizzes_id_reorder_post_request_order_inner_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdQuizzesIdReorderPostRequestOrderInner from a dict
api_v1_courses_course_id_quizzes_id_reorder_post_request_order_inner_from_dict = ApiV1CoursesCourseIdQuizzesIdReorderPostRequestOrderInner.from_dict(api_v1_courses_course_id_quizzes_id_reorder_post_request_order_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


