# Grade


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grade** | **float** |  | [optional] 
**total** | **float** |  | [optional] 
**possible** | **float** |  | [optional] 
**dropped** | **List[object]** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.grade import Grade

# TODO update the JSON string below
json = "{}"
# create an instance of Grade from a JSON string
grade_instance = Grade.from_json(json)
# print the JSON string representation of the object
print(Grade.to_json())

# convert the object into a dict
grade_dict = grade_instance.to_dict()
# create an instance of Grade from a dict
grade_from_dict = Grade.from_dict(grade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


