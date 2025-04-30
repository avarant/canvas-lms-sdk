# AccountsAccountIdLtiRegistrationsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the tool. | [optional] 
**admin_nickname** | **str** | A friendly nickname set by admins. | [optional] 
**vendor** | **str** | The vendor of the tool. | [optional] 
**description** | **str** | A description of the tool. Cannot exceed 2048 bytes. | [optional] 
**configuration** | **object** | Lti::ToolConfiguration or Lti::LegacyConfiguration for the tool. | 
**overlay** | **object** | Lti::Overlay configuration overrides. | [optional] 
**unified_tool_id** | **str** | Unique identifier for analytics. Generated if omitted. | [optional] 
**workflow_state** | **str** | The desired state for this registration/account binding.   \&quot;allow\&quot; is only valid for Site Admin registrations. Defaults to \&quot;off\&quot;.  | [optional] 

## Example

```python
from canvas_lms_sdk.models.accounts_account_id_lti_registrations_post_request import AccountsAccountIdLtiRegistrationsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsAccountIdLtiRegistrationsPostRequest from a JSON string
accounts_account_id_lti_registrations_post_request_instance = AccountsAccountIdLtiRegistrationsPostRequest.from_json(json)
# print the JSON string representation of the object
print(AccountsAccountIdLtiRegistrationsPostRequest.to_json())

# convert the object into a dict
accounts_account_id_lti_registrations_post_request_dict = accounts_account_id_lti_registrations_post_request_instance.to_dict()
# create an instance of AccountsAccountIdLtiRegistrationsPostRequest from a dict
accounts_account_id_lti_registrations_post_request_from_dict = AccountsAccountIdLtiRegistrationsPostRequest.from_dict(accounts_account_id_lti_registrations_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


