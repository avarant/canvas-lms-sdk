# Page


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_id** | **int** | The ID of the page | [optional] 
**url** | **str** | The unique locator for the page | [optional] 
**title** | **str** | The title of the page | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**hide_from_students** | **bool** | Deprecated; inverse of published | [optional] 
**editing_roles** | **str** | Roles allowed to edit the page | [optional] 
**last_edited_by** | **object** |  | [optional] 
**body** | **str** | The page content in HTML | [optional] 
**published** | **bool** |  | [optional] 
**publish_at** | **datetime** |  | [optional] 
**front_page** | **bool** |  | [optional] 
**locked_for_user** | **bool** |  | [optional] 
**lock_info** | **object** |  | [optional] 
**lock_explanation** | **str** |  | [optional] 
**editor** | **str** |  | [optional] 
**block_editor_attributes** | **object** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.page import Page

# TODO update the JSON string below
json = "{}"
# create an instance of Page from a JSON string
page_instance = Page.from_json(json)
# print the JSON string representation of the object
print(Page.to_json())

# convert the object into a dict
page_dict = page_instance.to_dict()
# create an instance of Page from a dict
page_from_dict = Page.from_dict(page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


