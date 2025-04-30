# ApiLtiNoticeHandlersDeploymentIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notice_type** | **str** | The notice type to handle | 
**handler** | **str** | The public endpoint URL for receiving notices; empty to unregister | 

## Example

```python
from canvas_lms_sdk.models.api_lti_notice_handlers_deployment_id_put_request import ApiLtiNoticeHandlersDeploymentIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLtiNoticeHandlersDeploymentIdPutRequest from a JSON string
api_lti_notice_handlers_deployment_id_put_request_instance = ApiLtiNoticeHandlersDeploymentIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiLtiNoticeHandlersDeploymentIdPutRequest.to_json())

# convert the object into a dict
api_lti_notice_handlers_deployment_id_put_request_dict = api_lti_notice_handlers_deployment_id_put_request_instance.to_dict()
# create an instance of ApiLtiNoticeHandlersDeploymentIdPutRequest from a dict
api_lti_notice_handlers_deployment_id_put_request_from_dict = ApiLtiNoticeHandlersDeploymentIdPutRequest.from_dict(api_lti_notice_handlers_deployment_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


