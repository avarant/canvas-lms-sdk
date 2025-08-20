# LockInfo

Information about why an assignment might be locked for a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_string** | **str** | Asset string for the object causing the lock (e.g., \&quot;assignment_4\&quot;). | 
**unlock_at** | **datetime** | (Optional) Time at which this was/will be unlocked by date. | [optional] 
**lock_at** | **datetime** | (Optional) Time at which this was/will be locked by date. | [optional] 
**context_module** | **object** | (Optional) Context module causing the lock via prerequisites or availability dates. | [optional] 
**manually_locked** | **bool** | If the assignment was manually locked by an instructor (module item). | 

## Example

```python
from canvas_lms_sdk.models.lock_info import LockInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LockInfo from a JSON string
lock_info_instance = LockInfo.from_json(json)
# print the JSON string representation of the object
print(LockInfo.to_json())

# convert the object into a dict
lock_info_dict = lock_info_instance.to_dict()
# create an instance of LockInfo from a dict
lock_info_from_dict = LockInfo.from_dict(lock_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


