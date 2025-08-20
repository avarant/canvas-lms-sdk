# AssignmentDate

Represents a due date structure, potentially from an override or base assignment dates. Included in 'all_dates'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | (Optional) ID of the assignment override this date represents. Missing/null for base dates. | [optional] 
**base** | **bool** | (Optional) True if this date represents the base due date (not an override). Missing/null for override dates. | [optional] 
**title** | **str** | Title associated with this date set (e.g., override title or &#39;base&#39;). | 
**due_at** | **datetime** | The due date/time for this specific date set. | [optional] 
**unlock_at** | **datetime** | The unlock date/time for this specific date set. | [optional] 
**lock_at** | **datetime** | The lock date/time for this specific date set. | [optional] 

## Example

```python
from canvas_lms_sdk.models.assignment_date import AssignmentDate

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentDate from a JSON string
assignment_date_instance = AssignmentDate.from_json(json)
# print the JSON string representation of the object
print(AssignmentDate.to_json())

# convert the object into a dict
assignment_date_dict = assignment_date_instance.to_dict()
# create an instance of AssignmentDate from a dict
assignment_date_from_dict = AssignmentDate.from_dict(assignment_date_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


