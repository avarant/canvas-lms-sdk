# AssignmentRubricSettings

(Optional) Basic rubric attributes (if rubric exists).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points_possible** | **float** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.assignment_rubric_settings import AssignmentRubricSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentRubricSettings from a JSON string
assignment_rubric_settings_instance = AssignmentRubricSettings.from_json(json)
# print the JSON string representation of the object
print(AssignmentRubricSettings.to_json())

# convert the object into a dict
assignment_rubric_settings_dict = assignment_rubric_settings_instance.to_dict()
# create an instance of AssignmentRubricSettings from a dict
assignment_rubric_settings_from_dict = AssignmentRubricSettings.from_dict(assignment_rubric_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


