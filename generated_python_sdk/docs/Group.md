# Group

A Canvas group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the group. | 
**name** | **str** | The display name of the group. | 
**description** | **str** | A description of the group. | [optional] 
**is_public** | **bool** | Whether or not the group is public. | [optional] 
**followed_by_user** | **bool** | Whether or not the current user is following this group. | [optional] 
**join_level** | **str** | How people are allowed to join the group. | [optional] 
**members_count** | **int** | The number of members currently in the group. | [optional] 
**avatar_url** | **str** | The URL of the group’s avatar. | [optional] 
**context_type** | **str** | The context type (Course or Account). | [optional] 
**context_name** | **str** | The name of the context (course or account). | [optional] 
**course_id** | **int** | The course ID if context_type is Course. | [optional] 
**group_category_id** | **int** | The ID of the group’s category. | [optional] 
**sis_group_id** | **str** | The SIS ID of the group. | [optional] 
**sis_import_id** | **int** | The SIS import ID if created through SIS. | [optional] 
**storage_quota_mb** | **int** | The storage quota for the group in megabytes. | [optional] 
**non_collaborative** | **bool** | Whether this group category is non-collaborative. | [optional] 
**permissions** | **object** | Permissions the user has for the group. | [optional] 
**users** | [**List[User2]**](User2.md) | A list of users that are members in the group. | [optional] 

## Example

```python
from canvas_lms_sdk.models.group import Group

# TODO update the JSON string below
json = "{}"
# create an instance of Group from a JSON string
group_instance = Group.from_json(json)
# print the JSON string representation of the object
print(Group.to_json())

# convert the object into a dict
group_dict = group_instance.to_dict()
# create an instance of Group from a dict
group_from_dict = Group.from_dict(group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


