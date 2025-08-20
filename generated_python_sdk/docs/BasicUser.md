# BasicUser

Basic user information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The user&#39;s ID. | 
**name** | **str** | The user&#39;s name. | 

## Example

```python
from canvas_lms_sdk.models.basic_user import BasicUser

# TODO update the JSON string below
json = "{}"
# create an instance of BasicUser from a JSON string
basic_user_instance = BasicUser.from_json(json)
# print the JSON string representation of the object
print(BasicUser.to_json())

# convert the object into a dict
basic_user_dict = basic_user_instance.to_dict()
# create an instance of BasicUser from a dict
basic_user_from_dict = BasicUser.from_dict(basic_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


