# Progress

Represents the progress of a background job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the progress object. | 
**workflow_state** | **str** | The current state of the job. | 
**message** | **str** | A message associated with the job&#39;s progress. | [optional] 
**completion** | **float** | Percentage completion of the job. | 
**url** | **str** | URL to query the status of the job. | 

## Example

```python
from canvas_lms_sdk.models.progress import Progress

# TODO update the JSON string below
json = "{}"
# create an instance of Progress from a JSON string
progress_instance = Progress.from_json(json)
# print the JSON string representation of the object
print(Progress.to_json())

# convert the object into a dict
progress_dict = progress_instance.to_dict()
# create an instance of Progress from a dict
progress_from_dict = Progress.from_dict(progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


