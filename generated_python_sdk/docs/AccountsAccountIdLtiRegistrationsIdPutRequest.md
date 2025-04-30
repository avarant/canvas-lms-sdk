# AccountsAccountIdLtiRegistrationsIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**admin_nickname** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**configuration** | **object** | Lti::ToolConfiguration or Lti::LegacyConfiguration. Not allowed for dynamic registrations. | [optional] 
**overlay** | **object** | Lti::Overlay overrides. | [optional] 
**workflow_state** | **str** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.accounts_account_id_lti_registrations_id_put_request import AccountsAccountIdLtiRegistrationsIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsAccountIdLtiRegistrationsIdPutRequest from a JSON string
accounts_account_id_lti_registrations_id_put_request_instance = AccountsAccountIdLtiRegistrationsIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(AccountsAccountIdLtiRegistrationsIdPutRequest.to_json())

# convert the object into a dict
accounts_account_id_lti_registrations_id_put_request_dict = accounts_account_id_lti_registrations_id_put_request_instance.to_dict()
# create an instance of AccountsAccountIdLtiRegistrationsIdPutRequest from a dict
accounts_account_id_lti_registrations_id_put_request_from_dict = AccountsAccountIdLtiRegistrationsIdPutRequest.from_dict(accounts_account_id_lti_registrations_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


