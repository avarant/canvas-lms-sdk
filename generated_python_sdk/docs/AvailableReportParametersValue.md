# AvailableReportParametersValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**required** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.available_report_parameters_value import AvailableReportParametersValue

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableReportParametersValue from a JSON string
available_report_parameters_value_instance = AvailableReportParametersValue.from_json(json)
# print the JSON string representation of the object
print(AvailableReportParametersValue.to_json())

# convert the object into a dict
available_report_parameters_value_dict = available_report_parameters_value_instance.to_dict()
# create an instance of AvailableReportParametersValue from a dict
available_report_parameters_value_from_dict = AvailableReportParametersValue.from_dict(available_report_parameters_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


