# ApiV1PollsPollIdPollSessionsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**poll_sessions** | [**List[ApiV1PollsPollIdPollSessionsPostRequestPollSessionsInner]**](ApiV1PollsPollIdPollSessionsPostRequestPollSessionsInner.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_post_request import ApiV1PollsPollIdPollSessionsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1PollsPollIdPollSessionsPostRequest from a JSON string
api_v1_polls_poll_id_poll_sessions_post_request_instance = ApiV1PollsPollIdPollSessionsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1PollsPollIdPollSessionsPostRequest.to_json())

# convert the object into a dict
api_v1_polls_poll_id_poll_sessions_post_request_dict = api_v1_polls_poll_id_poll_sessions_post_request_instance.to_dict()
# create an instance of ApiV1PollsPollIdPollSessionsPostRequest from a dict
api_v1_polls_poll_id_poll_sessions_post_request_from_dict = ApiV1PollsPollIdPollSessionsPostRequest.from_dict(api_v1_polls_poll_id_poll_sessions_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


