# BulkUpdateAssignmentDatesRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the assignment to update. | 
**all_dates** | [**List[AssignmentDateInput]**](AssignmentDateInput.md) | Array of AssignmentDate structures (base and/or overrides). | 

## Example

```python
from canvas_lms_sdk.models.bulk_update_assignment_dates_request_inner import BulkUpdateAssignmentDatesRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUpdateAssignmentDatesRequestInner from a JSON string
bulk_update_assignment_dates_request_inner_instance = BulkUpdateAssignmentDatesRequestInner.from_json(json)
# print the JSON string representation of the object
print(BulkUpdateAssignmentDatesRequestInner.to_json())

# convert the object into a dict
bulk_update_assignment_dates_request_inner_dict = bulk_update_assignment_dates_request_inner_instance.to_dict()
# create an instance of BulkUpdateAssignmentDatesRequestInner from a dict
bulk_update_assignment_dates_request_inner_from_dict = BulkUpdateAssignmentDatesRequestInner.from_dict(bulk_update_assignment_dates_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


