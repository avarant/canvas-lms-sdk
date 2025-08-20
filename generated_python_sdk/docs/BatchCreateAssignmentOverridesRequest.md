# BatchCreateAssignmentOverridesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_overrides** | [**List[BatchCreateAssignmentOverridesRequestAssignmentOverridesInner]**](BatchCreateAssignmentOverridesRequestAssignmentOverridesInner.md) |  | 

## Example

```python
from canvas_lms_sdk.models.batch_create_assignment_overrides_request import BatchCreateAssignmentOverridesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateAssignmentOverridesRequest from a JSON string
batch_create_assignment_overrides_request_instance = BatchCreateAssignmentOverridesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreateAssignmentOverridesRequest.to_json())

# convert the object into a dict
batch_create_assignment_overrides_request_dict = batch_create_assignment_overrides_request_instance.to_dict()
# create an instance of BatchCreateAssignmentOverridesRequest from a dict
batch_create_assignment_overrides_request_from_dict = BatchCreateAssignmentOverridesRequest.from_dict(batch_create_assignment_overrides_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


