# EnrollmentTermOverridesValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_at** | **datetime** |  | [optional] 
**end_at** | **datetime** |  | [optional] 

## Example

```python
from canvas_lms_sdk.models.enrollment_term_overrides_value import EnrollmentTermOverridesValue

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollmentTermOverridesValue from a JSON string
enrollment_term_overrides_value_instance = EnrollmentTermOverridesValue.from_json(json)
# print the JSON string representation of the object
print(EnrollmentTermOverridesValue.to_json())

# convert the object into a dict
enrollment_term_overrides_value_dict = enrollment_term_overrides_value_instance.to_dict()
# create an instance of EnrollmentTermOverridesValue from a dict
enrollment_term_overrides_value_from_dict = EnrollmentTermOverridesValue.from_dict(enrollment_term_overrides_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


