# XAPIStatementResult

Optional result metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | ISO 8601 duration (e.g., “PT3M0S”), capped at 5 minutes | [optional] 

## Example

```python
from canvas_lms_sdk.models.xapi_statement_result import XAPIStatementResult

# TODO update the JSON string below
json = "{}"
# create an instance of XAPIStatementResult from a JSON string
xapi_statement_result_instance = XAPIStatementResult.from_json(json)
# print the JSON string representation of the object
print(XAPIStatementResult.to_json())

# convert the object into a dict
xapi_statement_result_dict = xapi_statement_result_instance.to_dict()
# create an instance of XAPIStatementResult from a dict
xapi_statement_result_from_dict = XAPIStatementResult.from_dict(xapi_statement_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


