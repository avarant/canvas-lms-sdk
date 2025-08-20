# Progress1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**completion** | **int** |  | [optional] 
**context_id** | **int** |  | [optional] 
**context_type** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**message** | **str** |  | [optional] 
**tag** | **str** |  | [optional] 
**workflow_state** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.progress1 import Progress1

# TODO update the JSON string below
json = "{}"
# create an instance of Progress1 from a JSON string
progress1_instance = Progress1.from_json(json)
# print the JSON string representation of the object
print(Progress1.to_json())

# convert the object into a dict
progress1_dict = progress1_instance.to_dict()
# create an instance of Progress1 from a dict
progress1_from_dict = Progress1.from_dict(progress1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


