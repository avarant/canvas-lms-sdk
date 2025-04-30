# ContentShareSourceCourse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.content_share_source_course import ContentShareSourceCourse

# TODO update the JSON string below
json = "{}"
# create an instance of ContentShareSourceCourse from a JSON string
content_share_source_course_instance = ContentShareSourceCourse.from_json(json)
# print the JSON string representation of the object
print(ContentShareSourceCourse.to_json())

# convert the object into a dict
content_share_source_course_dict = content_share_source_course_instance.to_dict()
# create an instance of ContentShareSourceCourse from a dict
content_share_source_course_from_dict = ContentShareSourceCourse.from_dict(content_share_source_course_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


