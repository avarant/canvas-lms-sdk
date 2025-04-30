# Conversation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier for the conversation. | [optional] 
**subject** | **str** | The subject of the conversation. | [optional] 
**workflow_state** | **str** | The current state of the conversation (read, unread or archived). | [optional] 
**last_message** | **str** | A &lt;&#x3D;100 character preview from the most recent message. | [optional] 
**last_message_at** | **datetime** | The timestamp of the latest message. | [optional] 
**message_count** | **int** | The number of messages in this conversation. | [optional] 
**subscribed** | **bool** | Indicates whether the user is actively subscribed to the conversation. | [optional] 
**private** | **bool** | Indicates whether this is a private conversation (i.e. audience of one). | [optional] 
**starred** | **bool** | Whether the conversation is starred. | [optional] 
**properties** | **List[str]** | Additional conversation flags (last_author, attachments, media_objects). Each listed property means the flag is set to true.  | [optional] 
**audience** | **List[int]** | Array of user ids involved in the conversation, ordered by participation level.  | [optional] 
**audience_contexts** | [**ConversationAudienceContexts**](ConversationAudienceContexts.md) |  | [optional] 
**avatar_url** | **str** | URL to appropriate icon for this conversation. | [optional] 
**participants** | [**List[ConversationParticipant]**](ConversationParticipant.md) | Array of users participating in the conversation.  | [optional] 
**visible** | **bool** | Indicates whether the conversation is visible under the current scope and filter.  | [optional] 
**context_name** | **str** | Name of the course or group in which the conversation is occurring. | [optional] 

## Example

```python
from canvas_lms_sdk.models.conversation import Conversation

# TODO update the JSON string below
json = "{}"
# create an instance of Conversation from a JSON string
conversation_instance = Conversation.from_json(json)
# print the JSON string representation of the object
print(Conversation.to_json())

# convert the object into a dict
conversation_dict = conversation_instance.to_dict()
# create an instance of Conversation from a dict
conversation_from_dict = Conversation.from_dict(conversation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


