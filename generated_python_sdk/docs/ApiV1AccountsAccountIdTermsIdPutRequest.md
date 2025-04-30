# ApiV1AccountsAccountIdTermsIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrollment_term** | [**EnrollmentTermInput**](EnrollmentTermInput.md) |  | [optional] 
**override_sis_stickiness** | **bool** | Default is true. If false, any fields containing “sticky” changes will not be updated. | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_accounts_account_id_terms_id_put_request import ApiV1AccountsAccountIdTermsIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AccountsAccountIdTermsIdPutRequest from a JSON string
api_v1_accounts_account_id_terms_id_put_request_instance = ApiV1AccountsAccountIdTermsIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AccountsAccountIdTermsIdPutRequest.to_json())

# convert the object into a dict
api_v1_accounts_account_id_terms_id_put_request_dict = api_v1_accounts_account_id_terms_id_put_request_instance.to_dict()
# create an instance of ApiV1AccountsAccountIdTermsIdPutRequest from a dict
api_v1_accounts_account_id_terms_id_put_request_from_dict = ApiV1AccountsAccountIdTermsIdPutRequest.from_dict(api_v1_accounts_account_id_terms_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


