# ResultViewSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result_view_restricted** | **bool** |  | [optional] 
**display_points_awarded** | **bool** |  | [optional] 
**display_points_possible** | **bool** |  | [optional] 
**display_items** | **bool** |  | [optional] 
**display_item_response** | **bool** |  | [optional] 
**display_item_response_qualifier** | **str** |  | [optional] 
**show_item_responses_at** | **datetime** |  | [optional] 
**hide_item_responses_at** | **datetime** |  | [optional] 
**display_item_response_correctness** | **bool** |  | [optional] 
**display_item_response_correctness_qualifier** | **str** |  | [optional] 
**show_item_response_correctness_at** | **datetime** |  | [optional] 
**hide_item_response_correctness_at** | **datetime** |  | [optional] 
**display_item_correct_answer** | **bool** |  | [optional] 
**display_item_feedback** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.result_view_settings import ResultViewSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ResultViewSettings from a JSON string
result_view_settings_instance = ResultViewSettings.from_json(json)
# print the JSON string representation of the object
print(ResultViewSettings.to_json())

# convert the object into a dict
result_view_settings_dict = result_view_settings_instance.to_dict()
# create an instance of ResultViewSettings from a dict
result_view_settings_from_dict = ResultViewSettings.from_dict(result_view_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


