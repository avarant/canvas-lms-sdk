# ApiLtiSubscriptionsIdPutRequestSubscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** |  | 
**context_type** | **str** |  | 
**event_types** | **List[str]** |  | 
**format** | **str** |  | 
**transport_metadata** | [**ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata**](ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata.md) |  | 
**transport_type** | **str** |  | 

## Example

```python
from canvas_lms_sdk.models.api_lti_subscriptions_id_put_request_subscription import ApiLtiSubscriptionsIdPutRequestSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLtiSubscriptionsIdPutRequestSubscription from a JSON string
api_lti_subscriptions_id_put_request_subscription_instance = ApiLtiSubscriptionsIdPutRequestSubscription.from_json(json)
# print the JSON string representation of the object
print(ApiLtiSubscriptionsIdPutRequestSubscription.to_json())

# convert the object into a dict
api_lti_subscriptions_id_put_request_subscription_dict = api_lti_subscriptions_id_put_request_subscription_instance.to_dict()
# create an instance of ApiLtiSubscriptionsIdPutRequestSubscription from a dict
api_lti_subscriptions_id_put_request_subscription_from_dict = ApiLtiSubscriptionsIdPutRequestSubscription.from_dict(api_lti_subscriptions_id_put_request_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


