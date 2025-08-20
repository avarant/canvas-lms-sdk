# RubricCriteria

Represents a criterion in an assignment rubric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points** | **float** | Points possible for this criterion. | 
**id** | **str** | The ID of the rubric criterion. | 
**learning_outcome_id** | **str** | (Optional) The ID of the learning outcome this criterion uses, if any. | [optional] 
**vendor_guid** | **str** | (Optional) The 3rd party vendor&#39;s GUID for the outcome this criteria references, if any. | [optional] 
**description** | **str** | The description of the criterion. | 
**long_description** | **str** | More detailed description of the criterion. | [optional] 
**criterion_use_range** | **bool** | Whether the criterion uses a point range. | 
**ratings** | [**List[RubricRating]**](RubricRating.md) | List of rating levels for the criterion. | [optional] 
**ignore_for_scoring** | **bool** | Whether this criterion should be ignored when calculating the score. | 

## Example

```python
from canvas_lms_sdk.models.rubric_criteria import RubricCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of RubricCriteria from a JSON string
rubric_criteria_instance = RubricCriteria.from_json(json)
# print the JSON string representation of the object
print(RubricCriteria.to_json())

# convert the object into a dict
rubric_criteria_dict = rubric_criteria_instance.to_dict()
# create an instance of RubricCriteria from a dict
rubric_criteria_from_dict = RubricCriteria.from_dict(rubric_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


