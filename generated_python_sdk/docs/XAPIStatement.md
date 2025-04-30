# XAPIStatement

A Tin Can API (xAPI) Statement object. Canvas will extract at minimum `actor`, `verb`, and `object`, and will honor an optional `result.duration` (ISO 8601, capped at 5 minutes). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the statement | 
**actor** | **object** | Statement actor; must include an &#x60;account&#x60; with &#x60;homePage&#x60; and &#x60;name&#x60; | 
**verb** | **object** | Action verb; typically uses ADL-defined URIs (e.g., “interacted”) | 
**object** | **object** | The activity or resource, with at least an &#x60;id&#x60; (logged as page view URL) | 
**result** | [**XAPIStatementResult**](XAPIStatementResult.md) |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.xapi_statement import XAPIStatement

# TODO update the JSON string below
json = "{}"
# create an instance of XAPIStatement from a JSON string
xapi_statement_instance = XAPIStatement.from_json(json)
# print the JSON string representation of the object
print(XAPIStatement.to_json())

# convert the object into a dict
xapi_statement_dict = xapi_statement_instance.to_dict()
# create an instance of XAPIStatement from a dict
xapi_statement_from_dict = XAPIStatement.from_dict(xapi_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


