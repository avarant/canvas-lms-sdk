# ApiV1CoursesCourseIdAssignmentGroupsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The assignment group’s name | [optional] 
**position** | **int** | The position of this assignment group in relation to the other assignment groups | [optional] 
**group_weight** | **float** | The percent of the total grade that this assignment group represents | [optional] 
**sis_source_id** | **str** | The sis source id of the Assignment Group | [optional] 
**integration_data** | **Dict[str, str]** | The integration data of the Assignment Group | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_courses_course_id_assignment_groups_post_request import ApiV1CoursesCourseIdAssignmentGroupsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CoursesCourseIdAssignmentGroupsPostRequest from a JSON string
api_v1_courses_course_id_assignment_groups_post_request_instance = ApiV1CoursesCourseIdAssignmentGroupsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1CoursesCourseIdAssignmentGroupsPostRequest.to_json())

# convert the object into a dict
api_v1_courses_course_id_assignment_groups_post_request_dict = api_v1_courses_course_id_assignment_groups_post_request_instance.to_dict()
# create an instance of ApiV1CoursesCourseIdAssignmentGroupsPostRequest from a dict
api_v1_courses_course_id_assignment_groups_post_request_from_dict = ApiV1CoursesCourseIdAssignmentGroupsPostRequest.from_dict(api_v1_courses_course_id_assignment_groups_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


