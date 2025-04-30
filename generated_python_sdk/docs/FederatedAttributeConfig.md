# FederatedAttributeConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** |  | [optional] 
**provisioning_only** | **bool** |  | [optional] 
**autoconfirm** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.federated_attribute_config import FederatedAttributeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FederatedAttributeConfig from a JSON string
federated_attribute_config_instance = FederatedAttributeConfig.from_json(json)
# print the JSON string representation of the object
print(FederatedAttributeConfig.to_json())

# convert the object into a dict
federated_attribute_config_dict = federated_attribute_config_instance.to_dict()
# create an instance of FederatedAttributeConfig from a dict
federated_attribute_config_from_dict = FederatedAttributeConfig.from_dict(federated_attribute_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


