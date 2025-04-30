# Answer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier for the answer. Do not supply if this answer is part of a new question. | [optional] 
**answer_text** | **str** |  | [optional] 
**answer_weight** | **int** |  | [optional] 
**answer_comments** | **str** |  | [optional] 
**text_after_answers** | **str** |  | [optional] 
**answer_match_left** | **str** |  | [optional] 
**answer_match_right** | **str** |  | [optional] 
**matching_answer_incorrect_matches** | **str** |  | [optional] 
**numerical_answer_type** | **str** |  | [optional] 
**exact** | **float** |  | [optional] 
**margin** | **float** |  | [optional] 
**approximate** | **float** |  | [optional] 
**precision** | **int** |  | [optional] 
**start** | **float** |  | [optional] 
**end** | **float** |  | [optional] 
**blank_id** | **int** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.answer import Answer

# TODO update the JSON string below
json = "{}"
# create an instance of Answer from a JSON string
answer_instance = Answer.from_json(json)
# print the JSON string representation of the object
print(Answer.to_json())

# convert the object into a dict
answer_dict = answer_instance.to_dict()
# create an instance of Answer from a dict
answer_from_dict = Answer.from_dict(answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


