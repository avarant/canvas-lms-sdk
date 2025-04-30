# ApiV1UsersUserIdObserveesPostRequestObservee


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unique_id** | **str** | The login id for the user to observe. Required if access_token is omitted. | [optional] 
**password** | **str** | The password for the user to observe. Required if access_token is omitted. | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_users_user_id_observees_post_request_observee import ApiV1UsersUserIdObserveesPostRequestObservee

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1UsersUserIdObserveesPostRequestObservee from a JSON string
api_v1_users_user_id_observees_post_request_observee_instance = ApiV1UsersUserIdObserveesPostRequestObservee.from_json(json)
# print the JSON string representation of the object
print(ApiV1UsersUserIdObserveesPostRequestObservee.to_json())

# convert the object into a dict
api_v1_users_user_id_observees_post_request_observee_dict = api_v1_users_user_id_observees_post_request_observee_instance.to_dict()
# create an instance of ApiV1UsersUserIdObserveesPostRequestObservee from a dict
api_v1_users_user_id_observees_post_request_observee_from_dict = ApiV1UsersUserIdObserveesPostRequestObservee.from_dict(api_v1_users_user_id_observees_post_request_observee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


