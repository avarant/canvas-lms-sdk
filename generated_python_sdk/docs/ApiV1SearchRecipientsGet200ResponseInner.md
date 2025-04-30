# ApiV1SearchRecipientsGet200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier for the user or context. Prefixed by \&quot;group_\&quot; or \&quot;course_\&quot; for contexts.  | [optional] 
**name** | **str** | The name of the context or short name of the user. | [optional] 
**full_name** | **str** | Only set for users. The full name of the user. | [optional] 
**avatar_url** | **str** | Avatar image URL for the user or context. | [optional] 
**type** | **str** | Type of recipient. Defaults to null (all). \&quot;context\&quot; encompasses \&quot;course\&quot;, \&quot;section\&quot; and \&quot;group\&quot;.  | [optional] 
**types** | **List[str]** | Array of recipient types to return. | [optional] 
**user_count** | **int** | Only set for contexts. Number of messageable users. | [optional] 
**common_courses** | **Dict[str, List[str]]** | Only set for users. Mapping of course IDs to enrollment types shared with this user.  | [optional] 
**common_groups** | **Dict[str, List[str]]** | Only set for users. Mapping of group IDs to enrollment types shared with this user.  | [optional] 
**permissions** | **Dict[str, bool]** | Only set for contexts. Mapping of requested permissions that the context grants the current user.  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_search_recipients_get200_response_inner import ApiV1SearchRecipientsGet200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1SearchRecipientsGet200ResponseInner from a JSON string
api_v1_search_recipients_get200_response_inner_instance = ApiV1SearchRecipientsGet200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ApiV1SearchRecipientsGet200ResponseInner.to_json())

# convert the object into a dict
api_v1_search_recipients_get200_response_inner_dict = api_v1_search_recipients_get200_response_inner_instance.to_dict()
# create an instance of ApiV1SearchRecipientsGet200ResponseInner from a dict
api_v1_search_recipients_get200_response_inner_from_dict = ApiV1SearchRecipientsGet200ResponseInner.from_dict(api_v1_search_recipients_get200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


