# ApiLtiSubscriptionsIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | [**ApiLtiSubscriptionsIdPutRequestSubscription**](ApiLtiSubscriptionsIdPutRequestSubscription.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_lti_subscriptions_id_put_request import ApiLtiSubscriptionsIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLtiSubscriptionsIdPutRequest from a JSON string
api_lti_subscriptions_id_put_request_instance = ApiLtiSubscriptionsIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiLtiSubscriptionsIdPutRequest.to_json())

# convert the object into a dict
api_lti_subscriptions_id_put_request_dict = api_lti_subscriptions_id_put_request_instance.to_dict()
# create an instance of ApiLtiSubscriptionsIdPutRequest from a dict
api_lti_subscriptions_id_put_request_from_dict = ApiLtiSubscriptionsIdPutRequest.from_dict(api_lti_subscriptions_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


