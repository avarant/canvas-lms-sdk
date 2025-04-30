# ApiLtiNoticeHandlersDeploymentIdGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **int** | The OAuth2 client identifier | [optional] 
**deployment_id** | **str** |  | [optional] 
**notice_handlers** | [**List[ApiLtiNoticeHandlersDeploymentIdGet200ResponseNoticeHandlersInner]**](ApiLtiNoticeHandlersDeploymentIdGet200ResponseNoticeHandlersInner.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_lti_notice_handlers_deployment_id_get200_response import ApiLtiNoticeHandlersDeploymentIdGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLtiNoticeHandlersDeploymentIdGet200Response from a JSON string
api_lti_notice_handlers_deployment_id_get200_response_instance = ApiLtiNoticeHandlersDeploymentIdGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiLtiNoticeHandlersDeploymentIdGet200Response.to_json())

# convert the object into a dict
api_lti_notice_handlers_deployment_id_get200_response_dict = api_lti_notice_handlers_deployment_id_get200_response_instance.to_dict()
# create an instance of ApiLtiNoticeHandlersDeploymentIdGet200Response from a dict
api_lti_notice_handlers_deployment_id_get200_response_from_dict = ApiLtiNoticeHandlersDeploymentIdGet200Response.from_dict(api_lti_notice_handlers_deployment_id_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


