# AvailableReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report** | **str** | The name of the report. | [optional] 
**title** | **str** | The human-readable title of the report. | [optional] 
**parameters** | [**Dict[str, AvailableReportParametersValue]**](AvailableReportParametersValue.md) | The parameters will vary for each report. | [optional] 

## Example

```python
from canvas_lms_sdk.models.available_report import AvailableReport

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableReport from a JSON string
available_report_instance = AvailableReport.from_json(json)
# print the JSON string representation of the object
print(AvailableReport.to_json())

# convert the object into a dict
available_report_dict = available_report_instance.to_dict()
# create an instance of AvailableReport from a dict
available_report_from_dict = AvailableReport.from_dict(available_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


