# DeveloperKeyInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**developer_key** | [**DeveloperKeyInputDeveloperKey**](DeveloperKeyInputDeveloperKey.md) |  | 

## Example

```python
from canvas_lms_sdk.models.developer_key_input import DeveloperKeyInput

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperKeyInput from a JSON string
developer_key_input_instance = DeveloperKeyInput.from_json(json)
# print the JSON string representation of the object
print(DeveloperKeyInput.to_json())

# convert the object into a dict
developer_key_input_dict = developer_key_input_instance.to_dict()
# create an instance of DeveloperKeyInput from a dict
developer_key_input_from_dict = DeveloperKeyInput.from_dict(developer_key_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


