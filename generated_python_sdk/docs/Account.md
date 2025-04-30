# Account


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the Account object | [optional] 
**name** | **str** | The display name of the account | [optional] 
**uuid** | **str** | The UUID of the account | [optional] 
**parent_account_id** | **int** | The account&#39;s parent ID, or null if this is the root account | [optional] 
**root_account_id** | **int** | The ID of the root account, or null if this is the root account | [optional] 
**default_storage_quota_mb** | **int** | The storage quota for the account in megabytes, if not otherwise specified | [optional] 
**default_user_storage_quota_mb** | **int** | The storage quota for a user in the account in megabytes, if not otherwise specified | [optional] 
**default_group_storage_quota_mb** | **int** | The storage quota for a group in the account in megabytes, if not otherwise specified | [optional] 
**default_time_zone** | **str** | The default time zone of the account. Allowed time zones are IANA time zones or Ruby on Rails time zones.  | [optional] 
**sis_account_id** | **str** | The account&#39;s identifier in the Student Information System (requires permission) | [optional] 
**integration_id** | **str** | The account&#39;s integration identifier in the Student Information System (requires permission) | [optional] 
**sis_import_id** | **int** | The ID of the SIS import if created through SIS (requires permission) | [optional] 
**course_count** | **int** | The number of courses directly under the account | [optional] 
**sub_account_count** | **int** | The number of sub-accounts directly under the account | [optional] 
**lti_guid** | **str** | The account&#39;s identifier sent as context_id in LTI launches | [optional] 
**workflow_state** | **str** | The state of the account. Can be &#39;active&#39; or &#39;deleted&#39;. | [optional] 

## Example

```python
from canvas_lms_sdk.models.account import Account

# TODO update the JSON string below
json = "{}"
# create an instance of Account from a JSON string
account_instance = Account.from_json(json)
# print the JSON string representation of the object
print(Account.to_json())

# convert the object into a dict
account_dict = account_instance.to_dict()
# create an instance of Account from a dict
account_from_dict = Account.from_dict(account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


