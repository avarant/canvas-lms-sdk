# Error5


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**status** | **int** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.error5 import Error5

# TODO update the JSON string below
json = "{}"
# create an instance of Error5 from a JSON string
error5_instance = Error5.from_json(json)
# print the JSON string representation of the object
print(Error5.to_json())

# convert the object into a dict
error5_dict = error5_instance.to_dict()
# create an instance of Error5 from a dict
error5_from_dict = Error5.from_dict(error5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


