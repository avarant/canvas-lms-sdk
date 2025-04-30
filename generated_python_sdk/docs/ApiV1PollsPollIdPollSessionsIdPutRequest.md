# ApiV1PollsPollIdPollSessionsIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**poll_sessions** | [**List[ApiV1PollsPollIdPollSessionsIdPutRequestPollSessionsInner]**](ApiV1PollsPollIdPollSessionsIdPutRequestPollSessionsInner.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_polls_poll_id_poll_sessions_id_put_request import ApiV1PollsPollIdPollSessionsIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1PollsPollIdPollSessionsIdPutRequest from a JSON string
api_v1_polls_poll_id_poll_sessions_id_put_request_instance = ApiV1PollsPollIdPollSessionsIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1PollsPollIdPollSessionsIdPutRequest.to_json())

# convert the object into a dict
api_v1_polls_poll_id_poll_sessions_id_put_request_dict = api_v1_polls_poll_id_poll_sessions_id_put_request_instance.to_dict()
# create an instance of ApiV1PollsPollIdPollSessionsIdPutRequest from a dict
api_v1_polls_poll_id_poll_sessions_id_put_request_from_dict = ApiV1PollsPollIdPollSessionsIdPutRequest.from_dict(api_v1_polls_poll_id_poll_sessions_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


