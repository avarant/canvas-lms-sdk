# TurnitinSettingsInput

Input settings for Turnitin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originality_report_visibility** | **str** |  | [optional] 
**s_paper_check** | **bool** |  | [optional] 
**internet_check** | **bool** |  | [optional] 
**journal_check** | **bool** |  | [optional] 
**exclude_biblio** | **bool** |  | [optional] 
**exclude_quoted** | **bool** |  | [optional] 
**exclude_small_matches_type** | **str** |  | [optional] 
**exclude_small_matches_value** | **int** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.turnitin_settings_input import TurnitinSettingsInput

# TODO update the JSON string below
json = "{}"
# create an instance of TurnitinSettingsInput from a JSON string
turnitin_settings_input_instance = TurnitinSettingsInput.from_json(json)
# print the JSON string representation of the object
print(TurnitinSettingsInput.to_json())

# convert the object into a dict
turnitin_settings_input_dict = turnitin_settings_input_instance.to_dict()
# create an instance of TurnitinSettingsInput from a dict
turnitin_settings_input_from_dict = TurnitinSettingsInput.from_dict(turnitin_settings_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


