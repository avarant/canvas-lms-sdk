# Enrollment

A user's enrollment in a course or section.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**course_id** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 
**enrollment_state** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**start_at** | **datetime** |  | [optional] 
**end_at** | **datetime** |  | [optional] 
**last_activity_at** | **datetime** |  | [optional] 
**html_url** | **str** |  | [optional] 
**grades** | **object** |  | [optional] 
**user** | **object** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.enrollment import Enrollment

# TODO update the JSON string below
json = "{}"
# create an instance of Enrollment from a JSON string
enrollment_instance = Enrollment.from_json(json)
# print the JSON string representation of the object
print(Enrollment.to_json())

# convert the object into a dict
enrollment_dict = enrollment_instance.to_dict()
# create an instance of Enrollment from a dict
enrollment_from_dict = Enrollment.from_dict(enrollment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


