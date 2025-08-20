# EditAssignmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment** | [**EditAssignmentRequestAssignment**](EditAssignmentRequestAssignment.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.edit_assignment_request import EditAssignmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EditAssignmentRequest from a JSON string
edit_assignment_request_instance = EditAssignmentRequest.from_json(json)
# print the JSON string representation of the object
print(EditAssignmentRequest.to_json())

# convert the object into a dict
edit_assignment_request_dict = edit_assignment_request_instance.to_dict()
# create an instance of EditAssignmentRequest from a dict
edit_assignment_request_from_dict = EditAssignmentRequest.from_dict(edit_assignment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


