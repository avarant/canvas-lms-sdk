# GroupCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the group category. | [optional] 
**name** | **str** | The display name of the group category. | [optional] 
**role** | **str** | Certain types of group categories have special role designations. Currently these include: &#39;communities&#39;, &#39;student_organized&#39;, &#39;imported&#39;.  | [optional] 
**self_signup** | **str** | If enabled, users may join a group themselves. Values: &#39;enabled&#39;, &#39;restricted&#39;, or null.  | [optional] 
**auto_leader** | **str** | Auto-assign group leaders. Values: &#39;random&#39;, &#39;first&#39;, or null.  | [optional] 
**context_type** | **str** |  | [optional] 
**account_id** | **int** |  | [optional] 
**course_id** | **int** |  | [optional] 
**group_limit** | **int** |  | [optional] 
**sis_group_category_id** | **str** |  | [optional] 
**sis_import_id** | **int** |  | [optional] 
**progress** | [**Progress**](Progress.md) |  | [optional] 
**non_collaborative** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.group_category import GroupCategory

# TODO update the JSON string below
json = "{}"
# create an instance of GroupCategory from a JSON string
group_category_instance = GroupCategory.from_json(json)
# print the JSON string representation of the object
print(GroupCategory.to_json())

# convert the object into a dict
group_category_dict = group_category_instance.to_dict()
# create an instance of GroupCategory from a dict
group_category_from_dict = GroupCategory.from_dict(group_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


