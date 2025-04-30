# QuizSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculator_type** | **str** |  | [optional] 
**filter_ip_address** | **bool** |  | [optional] 
**filters** | [**QuizSettingsFilters**](QuizSettingsFilters.md) |  | [optional] 
**one_at_a_time_type** | **str** |  | [optional] 
**allow_backtracking** | **bool** |  | [optional] 
**shuffle_answers** | **bool** |  | [optional] 
**shuffle_questions** | **bool** |  | [optional] 
**require_student_access_code** | **bool** |  | [optional] 
**student_access_code** | **str** |  | [optional] 
**has_time_limit** | **bool** |  | [optional] 
**session_time_limit_in_seconds** | **int** |  | [optional] 
**multiple_attempts** | [**MultipleAttemptsSettings**](MultipleAttemptsSettings.md) |  | [optional] 
**result_view_settings** | [**ResultViewSettings**](ResultViewSettings.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.quiz_settings import QuizSettings

# TODO update the JSON string below
json = "{}"
# create an instance of QuizSettings from a JSON string
quiz_settings_instance = QuizSettings.from_json(json)
# print the JSON string representation of the object
print(QuizSettings.to_json())

# convert the object into a dict
quiz_settings_dict = quiz_settings_instance.to_dict()
# create an instance of QuizSettings from a dict
quiz_settings_from_dict = QuizSettings.from_dict(quiz_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


