# ContentShareSender


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**display_name** | **str** |  | [optional] 
**avatar_image_url** | **str** |  | [optional] 
**html_url** | **str** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.content_share_sender import ContentShareSender

# TODO update the JSON string below
json = "{}"
# create an instance of ContentShareSender from a JSON string
content_share_sender_instance = ContentShareSender.from_json(json)
# print the JSON string representation of the object
print(ContentShareSender.to_json())

# convert the object into a dict
content_share_sender_dict = content_share_sender_instance.to_dict()
# create an instance of ContentShareSender from a dict
content_share_sender_from_dict = ContentShareSender.from_dict(content_share_sender_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


