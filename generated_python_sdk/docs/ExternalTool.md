# ExternalTool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**domain** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**consumer_key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**privacy_level** | **str** |  | [optional] 
**custom_fields** | **Dict[str, str]** |  | [optional] 
**is_rce_favorite** | **bool** |  | [optional] 
**is_top_nav_favorite** | **bool** |  | [optional] 
**account_navigation** | **object** |  | [optional] 
**assignment_selection** | **object** |  | [optional] 
**course_navigation** | **object** |  | [optional] 
**editor_button** | **object** |  | [optional] 
**selection_width** | **int** |  | [optional] 
**selection_height** | **int** |  | [optional] 
**icon_url** | **str** |  | [optional] 
**not_selectable** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.external_tool import ExternalTool

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalTool from a JSON string
external_tool_instance = ExternalTool.from_json(json)
# print the JSON string representation of the object
print(ExternalTool.to_json())

# convert the object into a dict
external_tool_dict = external_tool_instance.to_dict()
# create an instance of ExternalTool from a dict
external_tool_from_dict = ExternalTool.from_dict(external_tool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


