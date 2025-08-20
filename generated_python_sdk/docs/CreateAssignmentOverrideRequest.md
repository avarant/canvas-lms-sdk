# CreateAssignmentOverrideRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_override** | [**AssignmentOverrideInput**](AssignmentOverrideInput.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.create_assignment_override_request import CreateAssignmentOverrideRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAssignmentOverrideRequest from a JSON string
create_assignment_override_request_instance = CreateAssignmentOverrideRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAssignmentOverrideRequest.to_json())

# convert the object into a dict
create_assignment_override_request_dict = create_assignment_override_request_instance.to_dict()
# create an instance of CreateAssignmentOverrideRequest from a dict
create_assignment_override_request_from_dict = CreateAssignmentOverrideRequest.from_dict(create_assignment_override_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


