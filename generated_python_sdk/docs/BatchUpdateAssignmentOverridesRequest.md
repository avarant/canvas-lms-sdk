# BatchUpdateAssignmentOverridesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_overrides** | [**List[BatchUpdateAssignmentOverridesRequestAssignmentOverridesInner]**](BatchUpdateAssignmentOverridesRequestAssignmentOverridesInner.md) |  | 

## Example

```python
from canvas_lms_sdk.models.batch_update_assignment_overrides_request import BatchUpdateAssignmentOverridesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateAssignmentOverridesRequest from a JSON string
batch_update_assignment_overrides_request_instance = BatchUpdateAssignmentOverridesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateAssignmentOverridesRequest.to_json())

# convert the object into a dict
batch_update_assignment_overrides_request_dict = batch_update_assignment_overrides_request_instance.to_dict()
# create an instance of BatchUpdateAssignmentOverridesRequest from a dict
batch_update_assignment_overrides_request_from_dict = BatchUpdateAssignmentOverridesRequest.from_dict(batch_update_assignment_overrides_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


