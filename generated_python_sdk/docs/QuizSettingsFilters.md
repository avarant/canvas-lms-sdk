# QuizSettingsFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ips** | **List[List[str]]** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.quiz_settings_filters import QuizSettingsFilters

# TODO update the JSON string below
json = "{}"
# create an instance of QuizSettingsFilters from a JSON string
quiz_settings_filters_instance = QuizSettingsFilters.from_json(json)
# print the JSON string representation of the object
print(QuizSettingsFilters.to_json())

# convert the object into a dict
quiz_settings_filters_dict = quiz_settings_filters_instance.to_dict()
# create an instance of QuizSettingsFilters from a dict
quiz_settings_filters_from_dict = QuizSettingsFilters.from_dict(quiz_settings_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


