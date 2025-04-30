# ApiLtiAccountsAccountIdAuthorizePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | JWT access token | [optional] 
**token_type** | **str** | Token type (bearer) | [optional] 
**expires_in** | **int** | Token lifetime in seconds | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_lti_accounts_account_id_authorize_post200_response import ApiLtiAccountsAccountIdAuthorizePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLtiAccountsAccountIdAuthorizePost200Response from a JSON string
api_lti_accounts_account_id_authorize_post200_response_instance = ApiLtiAccountsAccountIdAuthorizePost200Response.from_json(json)
# print the JSON string representation of the object
print(ApiLtiAccountsAccountIdAuthorizePost200Response.to_json())

# convert the object into a dict
api_lti_accounts_account_id_authorize_post200_response_dict = api_lti_accounts_account_id_authorize_post200_response_instance.to_dict()
# create an instance of ApiLtiAccountsAccountIdAuthorizePost200Response from a dict
api_lti_accounts_account_id_authorize_post200_response_from_dict = ApiLtiAccountsAccountIdAuthorizePost200Response.from_dict(api_lti_accounts_account_id_authorize_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


