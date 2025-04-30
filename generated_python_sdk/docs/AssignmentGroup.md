# AssignmentGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The id of the Assignment Group | 
**name** | **str** | The name of the Assignment Group | 
**position** | **int** | The position of the Assignment Group | 
**group_weight** | **float** | The weight of the Assignment Group | 
**sis_source_id** | **str** | The sis source id of the Assignment Group | [optional] 
**integration_data** | **Dict[str, str]** | The integration data of the Assignment Group | [optional] 
**assignments** | **List[object]** | The assignments in this Assignment Group | [optional] 
**rules** | [**GradingRules**](GradingRules.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.assignment_group import AssignmentGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentGroup from a JSON string
assignment_group_instance = AssignmentGroup.from_json(json)
# print the JSON string representation of the object
print(AssignmentGroup.to_json())

# convert the object into a dict
assignment_group_dict = assignment_group_instance.to_dict()
# create an instance of AssignmentGroup from a dict
assignment_group_from_dict = AssignmentGroup.from_dict(assignment_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


