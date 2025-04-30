# ContentShare


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**content_type** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**user_id** | **int** |  | [optional] 
**sender** | [**ContentShareSender**](ContentShareSender.md) |  | [optional] 
**receivers** | [**List[ContentShareSender]**](ContentShareSender.md) |  | [optional] 
**source_course** | [**ContentShareSourceCourse**](ContentShareSourceCourse.md) |  | [optional] 
**read_state** | **str** |  | [optional] 
**content_export** | [**ContentShareContentExport**](ContentShareContentExport.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.content_share import ContentShare

# TODO update the JSON string below
json = "{}"
# create an instance of ContentShare from a JSON string
content_share_instance = ContentShare.from_json(json)
# print the JSON string representation of the object
print(ContentShare.to_json())

# convert the object into a dict
content_share_dict = content_share_instance.to_dict()
# create an instance of ContentShare from a dict
content_share_from_dict = ContentShare.from_dict(content_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


