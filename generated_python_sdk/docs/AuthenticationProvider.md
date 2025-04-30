# AuthenticationProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**auth_type** | **str** |  | [optional] 
**identifier_format** | **str** |  | [optional] 
**log_in_url** | **str** |  | [optional] 
**log_out_url** | **str** |  | [optional] 
**certificate_fingerprint** | **str** |  | [optional] 
**requested_authn_context** | **str** |  | [optional] 
**auth_host** | **str** |  | [optional] 
**auth_filter** | **str** |  | [optional] 
**auth_over_tls** | **str** |  | [optional] 
**auth_base** | **str** |  | [optional] 
**auth_username** | **str** |  | [optional] 
**auth_port** | **int** |  | [optional] 
**position** | **int** |  | [optional] 
**idp_entity_id** | **str** |  | [optional] 
**login_attribute** | **str** |  | [optional] 
**sig_alg** | **str** |  | [optional] 
**jit_provisioning** | **bool** |  | [optional] 
**federated_attributes** | [**Dict[str, FederatedAttributesConfigValue]**](FederatedAttributesConfigValue.md) |  | [optional] 
**mfa_required** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.authentication_provider import AuthenticationProvider

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationProvider from a JSON string
authentication_provider_instance = AuthenticationProvider.from_json(json)
# print the JSON string representation of the object
print(AuthenticationProvider.to_json())

# convert the object into a dict
authentication_provider_dict = authentication_provider_instance.to_dict()
# create an instance of AuthenticationProvider from a dict
authentication_provider_from_dict = AuthenticationProvider.from_dict(authentication_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


