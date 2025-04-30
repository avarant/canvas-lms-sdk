# AccountsAccountIdLtiRegistrationsIdBindPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_state** | **str** | The desired state for this registration/account binding. | 

## Example

```python
from canvas_lms_sdk.models.accounts_account_id_lti_registrations_id_bind_post_request import AccountsAccountIdLtiRegistrationsIdBindPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsAccountIdLtiRegistrationsIdBindPostRequest from a JSON string
accounts_account_id_lti_registrations_id_bind_post_request_instance = AccountsAccountIdLtiRegistrationsIdBindPostRequest.from_json(json)
# print the JSON string representation of the object
print(AccountsAccountIdLtiRegistrationsIdBindPostRequest.to_json())

# convert the object into a dict
accounts_account_id_lti_registrations_id_bind_post_request_dict = accounts_account_id_lti_registrations_id_bind_post_request_instance.to_dict()
# create an instance of AccountsAccountIdLtiRegistrationsIdBindPostRequest from a dict
accounts_account_id_lti_registrations_id_bind_post_request_from_dict = AccountsAccountIdLtiRegistrationsIdBindPostRequest.from_dict(accounts_account_id_lti_registrations_id_bind_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


