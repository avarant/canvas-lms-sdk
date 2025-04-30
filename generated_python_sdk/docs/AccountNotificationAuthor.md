# AccountNotificationAuthor

The author of the notification. Only available to admins when include_all is used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.account_notification_author import AccountNotificationAuthor

# TODO update the JSON string below
json = "{}"
# create an instance of AccountNotificationAuthor from a JSON string
account_notification_author_instance = AccountNotificationAuthor.from_json(json)
# print the JSON string representation of the object
print(AccountNotificationAuthor.to_json())

# convert the object into a dict
account_notification_author_dict = account_notification_author_instance.to_dict()
# create an instance of AccountNotificationAuthor from a dict
account_notification_author_from_dict = AccountNotificationAuthor.from_dict(account_notification_author_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


