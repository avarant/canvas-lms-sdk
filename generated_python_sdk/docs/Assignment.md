# Assignment

An Assignment object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the assignment | 
**name** | **str** | The name of the assignment | 
**description** | **str** | The assignment description, in an HTML fragment | [optional] 
**created_at** | **datetime** | Time at which this assignment was originally created | 
**updated_at** | **datetime** | Time at which this assignment was last modified | 
**due_at** | **datetime** | The due date for the assignment | [optional] 
**lock_at** | **datetime** | The lock date for the assignment | [optional] 
**unlock_at** | **datetime** | The unlock date for the assignment | [optional] 
**course_id** | **int** | The ID of the course the assignment belongs to | 
**html_url** | **str** | URL to the assignment&#39;s web page | 
**points_possible** | **float** | The maximum points possible for the assignment | 
**grading_type** | **str** | The type of grading the assignment receives | 

## Example

```python
from canvas_lms_sdk.models.assignment import Assignment

# TODO update the JSON string below
json = "{}"
# create an instance of Assignment from a JSON string
assignment_instance = Assignment.from_json(json)
# print the JSON string representation of the object
print(Assignment.to_json())

# convert the object into a dict
assignment_dict = assignment_instance.to_dict()
# create an instance of Assignment from a dict
assignment_from_dict = Assignment.from_dict(assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


