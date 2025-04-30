# MultipleAttemptsSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multiple_attempts_enabled** | **bool** |  | [optional] 
**attempt_limit** | **bool** |  | [optional] 
**max_attempts** | **int** |  | [optional] 
**score_to_keep** | **str** |  | [optional] 
**cooling_period** | **bool** |  | [optional] 
**cooling_period_seconds** | **int** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.multiple_attempts_settings import MultipleAttemptsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MultipleAttemptsSettings from a JSON string
multiple_attempts_settings_instance = MultipleAttemptsSettings.from_json(json)
# print the JSON string representation of the object
print(MultipleAttemptsSettings.to_json())

# convert the object into a dict
multiple_attempts_settings_dict = multiple_attempts_settings_instance.to_dict()
# create an instance of MultipleAttemptsSettings from a dict
multiple_attempts_settings_from_dict = MultipleAttemptsSettings.from_dict(multiple_attempts_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


