# Section


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**sis_section_id** | **str** |  | [optional] 
**integration_id** | **str** |  | [optional] 
**sis_import_id** | **int** |  | [optional] 
**course_id** | **int** |  | [optional] 
**sis_course_id** | **str** |  | [optional] 
**start_at** | **datetime** |  | [optional] 
**end_at** | **str** |  | [optional] 
**restrict_enrollments_to_section_dates** | **bool** |  | [optional] 
**nonxlist_course_id** | **int** |  | [optional] 
**total_students** | **int** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.section import Section

# TODO update the JSON string below
json = "{}"
# create an instance of Section from a JSON string
section_instance = Section.from_json(json)
# print the JSON string representation of the object
print(Section.to_json())

# convert the object into a dict
section_dict = section_instance.to_dict()
# create an instance of Section from a dict
section_from_dict = Section.from_dict(section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


