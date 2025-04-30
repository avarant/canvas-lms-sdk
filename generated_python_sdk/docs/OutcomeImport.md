# OutcomeImport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier for the outcome import | [optional] 
**learning_outcome_group_id** | **int** | The ID of the group into which the outcomes will be imported | [optional] 
**created_at** | **datetime** |  | [optional] 
**ended_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**workflow_state** | **str** | The current state of the outcome import: - &#39;created&#39;: The outcome import has been created. - &#39;importing&#39;: The outcome import is currently processing. - &#39;succeeded&#39;: The outcome import has completed successfully. - &#39;failed&#39;: The outcome import failed.  | [optional] 
**data** | [**OutcomeImportData**](OutcomeImportData.md) |  | [optional] 
**progress** | **str** | The progress of the outcome import as a percentage | [optional] 
**user** | **object** | The user that initiated the outcome import | [optional] 
**processing_errors** | **List[List[OutcomeImportProcessingErrorsInnerInner]]** | An array of row number / error message pairs (first 25 errors) | [optional] 

## Example

```python
from canvas_lms_sdk.models.outcome_import import OutcomeImport

# TODO update the JSON string below
json = "{}"
# create an instance of OutcomeImport from a JSON string
outcome_import_instance = OutcomeImport.from_json(json)
# print the JSON string representation of the object
print(OutcomeImport.to_json())

# convert the object into a dict
outcome_import_dict = outcome_import_instance.to_dict()
# create an instance of OutcomeImport from a dict
outcome_import_from_dict = OutcomeImport.from_dict(outcome_import_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


