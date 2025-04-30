# CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | **Dict[str, object]** | A hash containing arrays of create/update/delete operations.  | 
**group_category** | [**CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequestGroupCategory**](CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequestGroupCategory.md) |  | 

## Example

```python
from canvas_lms_sdk.models.courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request import CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest from a JSON string
courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request_instance = CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest.from_json(json)
# print the JSON string representation of the object
print(CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest.to_json())

# convert the object into a dict
courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request_dict = courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request_instance.to_dict()
# create an instance of CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest from a dict
courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request_from_dict = CoursesCourseIdGroupCategoriesBulkManageDifferentiationTagPostRequest.from_dict(courses_course_id_group_categories_bulk_manage_differentiation_tag_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


