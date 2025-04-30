# ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata

An object with a single key - 'Url'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The endpoint URL or queue identifier to receive events. | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_lti_subscriptions_post_request_subscription_transport_metadata import ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata from a JSON string
api_lti_subscriptions_post_request_subscription_transport_metadata_instance = ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata.from_json(json)
# print the JSON string representation of the object
print(ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata.to_json())

# convert the object into a dict
api_lti_subscriptions_post_request_subscription_transport_metadata_dict = api_lti_subscriptions_post_request_subscription_transport_metadata_instance.to_dict()
# create an instance of ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata from a dict
api_lti_subscriptions_post_request_subscription_transport_metadata_from_dict = ApiLtiSubscriptionsPostRequestSubscriptionTransportMetadata.from_dict(api_lti_subscriptions_post_request_subscription_transport_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


