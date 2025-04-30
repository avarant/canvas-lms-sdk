# SSOSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_handle_name** | **str** |  | [optional] 
**change_password_url** | **str** |  | [optional] 
**auth_discovery_url** | **str** |  | [optional] 
**unknown_user_url** | **str** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.sso_settings import SSOSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SSOSettings from a JSON string
sso_settings_instance = SSOSettings.from_json(json)
# print the JSON string representation of the object
print(SSOSettings.to_json())

# convert the object into a dict
sso_settings_dict = sso_settings_instance.to_dict()
# create an instance of SSOSettings from a dict
sso_settings_from_dict = SSOSettings.from_dict(sso_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


