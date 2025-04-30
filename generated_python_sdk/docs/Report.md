# Report


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier for the report. | [optional] 
**report** | **str** | The type of report. | [optional] 
**file_url** | **str** | The URL to download the report. | [optional] 
**attachment** | **object** | The attachment API object of the report. Only available after the report has completed. | [optional] 
**status** | **str** | The status of the report. | [optional] 
**created_at** | **datetime** | The date and time the report was created. | [optional] 
**started_at** | **datetime** | The date and time the report started processing. | [optional] 
**ended_at** | **datetime** | The date and time the report finished processing. | [optional] 
**parameters** | **Dict[str, object]** | The report parameters. | [optional] 
**progress** | **int** | The progress of the report. | [optional] 
**current_line** | **int** | The current line count being written to the report. It updates every 1000 records. | [optional] 

## Example

```python
from canvas_lms_sdk.models.report import Report

# TODO update the JSON string below
json = "{}"
# create an instance of Report from a JSON string
report_instance = Report.from_json(json)
# print the JSON string representation of the object
print(Report.to_json())

# convert the object into a dict
report_dict = report_instance.to_dict()
# create an instance of Report from a dict
report_from_dict = Report.from_dict(report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


