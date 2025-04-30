# FederatedAttributesConfigValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** |  | [optional] 
**provisioning_only** | **bool** |  | [optional] 
**autoconfirm** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.federated_attributes_config_value import FederatedAttributesConfigValue

# TODO update the JSON string below
json = "{}"
# create an instance of FederatedAttributesConfigValue from a JSON string
federated_attributes_config_value_instance = FederatedAttributesConfigValue.from_json(json)
# print the JSON string representation of the object
print(FederatedAttributesConfigValue.to_json())

# convert the object into a dict
federated_attributes_config_value_dict = federated_attributes_config_value_instance.to_dict()
# create an instance of FederatedAttributesConfigValue from a dict
federated_attributes_config_value_from_dict = FederatedAttributesConfigValue.from_dict(federated_attributes_config_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


