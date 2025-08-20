# ExternalToolTagAttributes

Attributes for an external tool tag associated with an assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | URL to the external tool. | 
**new_tab** | **bool** | Whether the tool opens in a new tab. | [optional] 
**resource_link_id** | **str** | The identifier for this tool_tag. | 

## Example

```python
from canvas_lms_sdk.models.external_tool_tag_attributes import ExternalToolTagAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalToolTagAttributes from a JSON string
external_tool_tag_attributes_instance = ExternalToolTagAttributes.from_json(json)
# print the JSON string representation of the object
print(ExternalToolTagAttributes.to_json())

# convert the object into a dict
external_tool_tag_attributes_dict = external_tool_tag_attributes_instance.to_dict()
# create an instance of ExternalToolTagAttributes from a dict
external_tool_tag_attributes_from_dict = ExternalToolTagAttributes.from_dict(external_tool_tag_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


