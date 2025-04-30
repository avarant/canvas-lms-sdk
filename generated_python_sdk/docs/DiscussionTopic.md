# DiscussionTopic

A discussion topic object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of this topic. | [optional] 
**title** | **str** | The topic title. | [optional] 
**message** | **str** | The HTML content of the message body. | [optional] 
**html_url** | **str** | The URL to the discussion topic in Canvas. | [optional] 
**posted_at** | **datetime** | The datetime the topic was posted. | [optional] 
**last_reply_at** | **datetime** | The datetime for when the last reply was in the topic. | [optional] 
**require_initial_post** | **bool** | Whether a user may not respond until making an initial reply. | [optional] 
**user_can_see_posts** | **bool** |  | [optional] 
**discussion_subentry_count** | **int** |  | [optional] 
**read_state** | **str** |  | [optional] 
**unread_count** | **int** |  | [optional] 
**subscribed** | **bool** |  | [optional] 
**subscription_hold** | **str** |  | [optional] 
**assignment_id** | **int** |  | [optional] 
**delayed_post_at** | **datetime** |  | [optional] 
**published** | **bool** |  | [optional] 
**lock_at** | **datetime** |  | [optional] 
**locked** | **bool** |  | [optional] 
**pinned** | **bool** |  | [optional] 
**locked_for_user** | **bool** |  | [optional] 
**lock_info** | **object** |  | [optional] 
**lock_explanation** | **str** |  | [optional] 
**user_name** | **str** |  | [optional] 
**group_topic_children** | [**List[DiscussionTopicGroupTopicChildrenInner]**](DiscussionTopicGroupTopicChildrenInner.md) |  | [optional] 
**podcast_url** | **str** |  | [optional] 
**discussion_type** | **str** |  | [optional] 
**group_category_id** | **int** |  | [optional] 
**attachments** | [**List[FileAttachment]**](FileAttachment.md) |  | [optional] 
**permissions** | **object** |  | [optional] 
**allow_rating** | **bool** |  | [optional] 
**only_graders_can_rate** | **bool** |  | [optional] 
**sort_order** | **str** |  | [optional] 
**sort_order_locked** | **bool** |  | [optional] 
**expand** | **bool** |  | [optional] 
**expand_locked** | **bool** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.discussion_topic import DiscussionTopic

# TODO update the JSON string below
json = "{}"
# create an instance of DiscussionTopic from a JSON string
discussion_topic_instance = DiscussionTopic.from_json(json)
# print the JSON string representation of the object
print(DiscussionTopic.to_json())

# convert the object into a dict
discussion_topic_dict = discussion_topic_instance.to_dict()
# create an instance of DiscussionTopic from a dict
discussion_topic_from_dict = DiscussionTopic.from_dict(discussion_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


