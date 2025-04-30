# File


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | File identifier | [optional] 
**display_name** | **str** | Name of the file | [optional] 
**size** | **int** | Size of the file in bytes | [optional] 
**content_type** | **str** | MIME type of the file | [optional] 
**url** | **str** | Download URL for the file | [optional] 
**created_at** | **datetime** | File creation timestamp | [optional] 
**updated_at** | **datetime** | File update timestamp | [optional] 

## Example

```python
from canvas_lms_sdk.models.file import File

# TODO update the JSON string below
json = "{}"
# create an instance of File from a JSON string
file_instance = File.from_json(json)
# print the JSON string representation of the object
print(File.to_json())

# convert the object into a dict
file_dict = file_instance.to_dict()
# create an instance of File from a dict
file_from_dict = File.from_dict(file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


