# Tab


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_url** | **str** | URL to access the tab in the Canvas UI | 
**id** | **str** | Unique identifier for the tab | 
**label** | **str** | Display name of the tab | 
**type** | **str** | Type of tab (e.g., internal or external) | 
**hidden** | **bool** | Whether the tab is hidden (only present if true) | [optional] 
**visibility** | **str** | Who can see the tab | 
**position** | **int** | Position of the tab in the navigation (1-based) | 

## Example

```python
from canvas_lms_sdk.models.tab import Tab

# TODO update the JSON string below
json = "{}"
# create an instance of Tab from a JSON string
tab_instance = Tab.from_json(json)
# print the JSON string representation of the object
print(Tab.to_json())

# convert the object into a dict
tab_dict = tab_instance.to_dict()
# create an instance of Tab from a dict
tab_from_dict = Tab.from_dict(tab_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


