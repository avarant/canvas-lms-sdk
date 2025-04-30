# ResourceLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The Canvas identifier for the LTI Resource Link. | [optional] 
**context_id** | **int** | The Canvas identifier for the context associated with the LTI Resource Link. | [optional] 
**context_type** | **str** | The type of the context associated with the LTI Resource Link. | [optional] 
**context_external_tool_id** | **int** | The Canvas identifier for the LTI 1.3 External Tool originally installed from. | [optional] 
**resource_type** | **str** | The Canvas content type for the resource link. | [optional] 
**canvas_launch_url** | **str** | The Canvas URL that launches the LTI Resource Link. | [optional] 
**resource_link_uuid** | **str** | The LTI identifier for the Resource Link included on launch. | [optional] 
**lookup_uuid** | **str** | A unique identifier for content migration, remains the same across migrations. | [optional] 
**title** | **str** | The title of the LTI Resource Link. | [optional] 
**url** | **str** | The tool URL to which the LTI Resource Link will launch. | [optional] 
**lti_1_1_id** | **str** | The LTI 1.1 identifier for backward compatibility. | [optional] 
**created_at** | **datetime** | Timestamp of the resource link&#39;s creation. | [optional] 
**updated_at** | **datetime** | Timestamp of the resource link&#39;s last update. | [optional] 
**workflow_state** | **str** | The state of the resource link. | [optional] 
**associated_content_type** | **str** | The type of associated content if present. | [optional] 
**associated_content_id** | **int** | The Canvas identifier of the associated content if present. | [optional] 

## Example

```python
from canvas_lms_sdk.models.resource_link import ResourceLink

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceLink from a JSON string
resource_link_instance = ResourceLink.from_json(json)
# print the JSON string representation of the object
print(ResourceLink.to_json())

# convert the object into a dict
resource_link_dict = resource_link_instance.to_dict()
# create an instance of ResourceLink from a dict
resource_link_from_dict = ResourceLink.from_dict(resource_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


