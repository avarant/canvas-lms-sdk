# AssignmentDateInput

Input structure for assignment dates in bulk update. Use 'base: true' for base dates, or 'id' for overrides. Use 'id' for overrides. Use 'due_at' for due date. Use 'unlock_at' for unlock date. Use 'lock_at' for lock date. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | (Optional) ID of the assignment override to update. Use this OR base&#x3D;true. | [optional] 
**base** | **bool** | (Optional) Set to true to update the base assignment dates. Use this OR id. | [optional] 
**due_at** | **datetime** | The due date/time. Null to clear. | [optional] 
**unlock_at** | **datetime** | The unlock date/time. Null to clear. | [optional] 
**lock_at** | **datetime** | The lock date/time. Null to clear. | [optional] 

## Example

```python
from canvas_lms_sdk.models.assignment_date_input import AssignmentDateInput

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentDateInput from a JSON string
assignment_date_input_instance = AssignmentDateInput.from_json(json)
# print the JSON string representation of the object
print(AssignmentDateInput.to_json())

# convert the object into a dict
assignment_date_input_dict = assignment_date_input_instance.to_dict()
# create an instance of AssignmentDateInput from a dict
assignment_date_input_from_dict = AssignmentDateInput.from_dict(assignment_date_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


