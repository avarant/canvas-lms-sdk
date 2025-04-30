# ApiLtiSubscriptionsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | [**ApiLtiSubscriptionsPostRequestSubscription**](ApiLtiSubscriptionsPostRequestSubscription.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_lti_subscriptions_post_request import ApiLtiSubscriptionsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLtiSubscriptionsPostRequest from a JSON string
api_lti_subscriptions_post_request_instance = ApiLtiSubscriptionsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiLtiSubscriptionsPostRequest.to_json())

# convert the object into a dict
api_lti_subscriptions_post_request_dict = api_lti_subscriptions_post_request_instance.to_dict()
# create an instance of ApiLtiSubscriptionsPostRequest from a dict
api_lti_subscriptions_post_request_from_dict = ApiLtiSubscriptionsPostRequest.from_dict(api_lti_subscriptions_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


