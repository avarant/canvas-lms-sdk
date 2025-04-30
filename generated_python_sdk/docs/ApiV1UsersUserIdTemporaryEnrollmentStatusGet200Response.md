# ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_provider** | **bool** |  | [optional] 
**is_recipient** | **bool** |  | [optional] 
**can_provide** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_users_user_id_temporary_enrollment_status_get200_response import ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response from a JSON string
api_v1_users_user_id_temporary_enrollment_status_get200_response_instance = ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response.to_json())

# convert the object into a dict
api_v1_users_user_id_temporary_enrollment_status_get200_response_dict = api_v1_users_user_id_temporary_enrollment_status_get200_response_instance.to_dict()
# create an instance of ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response from a dict
api_v1_users_user_id_temporary_enrollment_status_get200_response_from_dict = ApiV1UsersUserIdTemporaryEnrollmentStatusGet200Response.from_dict(api_v1_users_user_id_temporary_enrollment_status_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


