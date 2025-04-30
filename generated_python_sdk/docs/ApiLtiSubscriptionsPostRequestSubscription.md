# ApiLtiSubscriptionsPostRequestSubscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The id of the context for the subscription. | 
**context_type** | **str** | The type of context for the subscription. | 
**event_types** | **List[str]** | Array of strings representing the event types for the subscription. | 
**format** | **str** | Format to deliver the live events. | 
**transport_metadata** | [**ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata**](ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata.md) |  | 
**transport_type** | **str** | Must be either &#39;sqs&#39; or &#39;https&#39;. | 

## Example

```python
from canvas_lms_sdk.models.api_lti_subscriptions_post_request_subscription import ApiLtiSubscriptionsPostRequestSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLtiSubscriptionsPostRequestSubscription from a JSON string
api_lti_subscriptions_post_request_subscription_instance = ApiLtiSubscriptionsPostRequestSubscription.from_json(json)
# print the JSON string representation of the object
print(ApiLtiSubscriptionsPostRequestSubscription.to_json())

# convert the object into a dict
api_lti_subscriptions_post_request_subscription_dict = api_lti_subscriptions_post_request_subscription_instance.to_dict()
# create an instance of ApiLtiSubscriptionsPostRequestSubscription from a dict
api_lti_subscriptions_post_request_subscription_from_dict = ApiLtiSubscriptionsPostRequestSubscription.from_dict(api_lti_subscriptions_post_request_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


