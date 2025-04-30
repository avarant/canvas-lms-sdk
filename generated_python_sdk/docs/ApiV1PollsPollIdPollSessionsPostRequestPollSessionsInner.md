# ApiV1PollsPollIdPollSessionsPostRequestPollSessionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**course_id** | **int** | The id of the course this session is associated with. | 
**course_section_id** | **int** | The id of the course section this session is associated with. | [optional] 
**has_public_results** | **bool** | Whether or not results are viewable by students. | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_post_request_poll_sessions_inner import ApiV1PollsPollIdPollSessionsPostRequestPollSessionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1PollsPollIdPollSessionsPostRequestPollSessionsInner from a JSON string
api_v1_polls_poll_id_poll_sessions_post_request_poll_sessions_inner_instance = ApiV1PollsPollIdPollSessionsPostRequestPollSessionsInner.from_json(json)
# print the JSON string representation of the object
print(ApiV1PollsPollIdPollSessionsPostRequestPollSessionsInner.to_json())

# convert the object into a dict
api_v1_polls_poll_id_poll_sessions_post_request_poll_sessions_inner_dict = api_v1_polls_poll_id_poll_sessions_post_request_poll_sessions_inner_instance.to_dict()
# create an instance of ApiV1PollsPollIdPollSessionsPostRequestPollSessionsInner from a dict
api_v1_polls_poll_id_poll_sessions_post_request_poll_sessions_inner_from_dict = ApiV1PollsPollIdPollSessionsPostRequestPollSessionsInner.from_dict(api_v1_polls_poll_id_poll_sessions_post_request_poll_sessions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


