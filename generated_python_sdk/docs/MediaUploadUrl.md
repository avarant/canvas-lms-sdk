# MediaUploadUrl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | Pre-signed URL for uploading media. | [optional] 

## Example

```python
from canvas_lms_sdk.models.media_upload_url import MediaUploadUrl

# TODO update the JSON string below
json = "{}"
# create an instance of MediaUploadUrl from a JSON string
media_upload_url_instance = MediaUploadUrl.from_json(json)
# print the JSON string representation of the object
print(MediaUploadUrl.to_json())

# convert the object into a dict
media_upload_url_dict = media_upload_url_instance.to_dict()
# create an instance of MediaUploadUrl from a dict
media_upload_url_from_dict = MediaUploadUrl.from_dict(media_upload_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


