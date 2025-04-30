# ListLtiRegistrationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**data** | **List[object]** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.list_lti_registrations_response import ListLtiRegistrationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLtiRegistrationsResponse from a JSON string
list_lti_registrations_response_instance = ListLtiRegistrationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLtiRegistrationsResponse.to_json())

# convert the object into a dict
list_lti_registrations_response_dict = list_lti_registrations_response_instance.to_dict()
# create an instance of ListLtiRegistrationsResponse from a dict
list_lti_registrations_response_from_dict = ListLtiRegistrationsResponse.from_dict(list_lti_registrations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


