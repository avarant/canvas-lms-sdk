# DeveloperKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**workflow_state** | **str** |  | [optional] 
**is_lti_key** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 
**icon_url** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**vendor_code** | **str** |  | [optional] 
**account_name** | **str** |  | [optional] 
**visible** | **bool** |  | [optional] 
**scopes** | **List[str]** |  | [optional] 
**redirect_uri** | **str** |  | [optional] 
**redirect_uris** | **List[str]** |  | [optional] 
**access_token_count** | **int** |  | [optional] 
**last_used_at** | **datetime** |  | [optional] 
**test_cluster_only** | **bool** |  | [optional] 
**allow_includes** | **bool** |  | [optional] 
**require_scopes** | **bool** |  | [optional] 
**client_credentials_audience** | **str** |  | [optional] 
**api_key** | **str** |  | [optional] 
**tool_configuration** | **object** |  | [optional] 
**public_jwk** | **object** |  | [optional] 
**public_jwk_url** | **str** |  | [optional] 
**lti_registration** | **object** |  | [optional] 
**is_lti_registration** | **bool** |  | [optional] 
**user_name** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.developer_key import DeveloperKey

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperKey from a JSON string
developer_key_instance = DeveloperKey.from_json(json)
# print the JSON string representation of the object
print(DeveloperKey.to_json())

# convert the object into a dict
developer_key_dict = developer_key_instance.to_dict()
# create an instance of DeveloperKey from a dict
developer_key_from_dict = DeveloperKey.from_dict(developer_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


