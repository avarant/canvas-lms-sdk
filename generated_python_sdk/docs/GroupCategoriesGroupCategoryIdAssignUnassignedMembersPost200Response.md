# GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**completion** | **int** |  | [optional] 
**context_id** | **int** |  | [optional] 
**context_type** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**message** | **str** |  | [optional] 
**tag** | **str** |  | [optional] 
**workflow_state** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.group_categories_group_category_id_assign_unassigned_members_post200_response import GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response from a JSON string
group_categories_group_category_id_assign_unassigned_members_post200_response_instance = GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response.from_json(json)
# print the JSON string representation of the object
print(GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response.to_json())

# convert the object into a dict
group_categories_group_category_id_assign_unassigned_members_post200_response_dict = group_categories_group_category_id_assign_unassigned_members_post200_response_instance.to_dict()
# create an instance of GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response from a dict
group_categories_group_category_id_assign_unassigned_members_post200_response_from_dict = GroupCategoriesGroupCategoryIdAssignUnassignedMembersPost200Response.from_dict(group_categories_group_category_id_assign_unassigned_members_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


