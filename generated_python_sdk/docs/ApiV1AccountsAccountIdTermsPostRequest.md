# ApiV1AccountsAccountIdTermsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrollment_term** | [**EnrollmentTermInput**](EnrollmentTermInput.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_accounts_account_id_terms_post_request import ApiV1AccountsAccountIdTermsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AccountsAccountIdTermsPostRequest from a JSON string
api_v1_accounts_account_id_terms_post_request_instance = ApiV1AccountsAccountIdTermsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AccountsAccountIdTermsPostRequest.to_json())

# convert the object into a dict
api_v1_accounts_account_id_terms_post_request_dict = api_v1_accounts_account_id_terms_post_request_instance.to_dict()
# create an instance of ApiV1AccountsAccountIdTermsPostRequest from a dict
api_v1_accounts_account_id_terms_post_request_from_dict = ApiV1AccountsAccountIdTermsPostRequest.from_dict(api_v1_accounts_account_id_terms_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


