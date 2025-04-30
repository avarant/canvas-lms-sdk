# ApiV1CoursesCourseIdExternalToolsGet200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**domain** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**consumer_key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**privacy_level** | **str** |  | [optional] 
**custom_fields** | **Dict[str, str]** |  | [optional] 
**is_rce_favorite** | **bool** |  | [optional] 
**is_top_nav_favorite** | **bool** |  | [optional] 
**account_navigation** | **object** |  | [optional] 
**assignment_selection** | **object** |  | [optional] 
**course_navigation** | **object** |  | [optional] 
**editor_button** | **object** |  | [optional] 
**selection_width** | **int** |  | [optional] 
**selection_height** | **int** |  | [optional] 
**icon_url** | **str** |  | [optional] 
**not_selectable** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_external_tools_get200_response_inner import ApiV1CoursesCourseIdExternalToolsGet200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdExternalToolsGet200ResponseInner from a JSON string
api_v1_courses_course_id_external_tools_get200_response_inner_instance = ApiV1CoursesCourseIdExternalToolsGet200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdExternalToolsGet200ResponseInner.to_json())

# convert the object into a dict
api_v1_courses_course_id_external_tools_get200_response_inner_dict = api_v1_courses_course_id_external_tools_get200_response_inner_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdExternalToolsGet200ResponseInner from a dict
api_v1_courses_course_id_external_tools_get200_response_inner_from_dict = ApiV1CoursesCourseIdExternalToolsGet200ResponseInner.from_dict(api_v1_courses_course_id_external_tools_get200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


