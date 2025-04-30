# ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_state** | **str** | The workflow state of the temporary enrollment pairing. | [optional] 
**ending_enrollment_state** | **str** | The ending enrollment state to be given to each associated enrollment when the enrollment period has been reached. | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_accounts_account_id_temporary_enrollment_pairings_post_request import ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest from a JSON string
api_v1_accounts_account_id_temporary_enrollment_pairings_post_request_instance = ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest.to_json())

# convert the object into a dict
api_v1_accounts_account_id_temporary_enrollment_pairings_post_request_dict = api_v1_accounts_account_id_temporary_enrollment_pairings_post_request_instance.to_dict()
# create an instance of ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest from a dict
api_v1_accounts_account_id_temporary_enrollment_pairings_post_request_from_dict = ApiV1AccountsAccountIdTemporaryEnrollmentPairingsPostRequest.from_dict(api_v1_accounts_account_id_temporary_enrollment_pairings_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


