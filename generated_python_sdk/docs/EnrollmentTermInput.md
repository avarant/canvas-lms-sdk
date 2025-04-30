# EnrollmentTermInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the term. | 
**start_at** | **datetime** | The day/time the term starts. Accepts ISO 8601 format. | 
**end_at** | **datetime** | The day/time the term ends. Accepts ISO 8601 format. | 
**sis_term_id** | **str** | The unique SIS identifier for the term. | [optional] 
**overrides** | [**Dict[str, EnrollmentTermOverridesValue]**](EnrollmentTermOverridesValue.md) | Term date overrides keyed by enrollment type (StudentEnrollment, TeacherEnrollment, TaEnrollment, DesignerEnrollment). | [optional] 

## Example

```python
from canvas_lms_sdk.models.enrollment_term_input import EnrollmentTermInput

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollmentTermInput from a JSON string
enrollment_term_input_instance = EnrollmentTermInput.from_json(json)
# print the JSON string representation of the object
print(EnrollmentTermInput.to_json())

# convert the object into a dict
enrollment_term_input_dict = enrollment_term_input_instance.to_dict()
# create an instance of EnrollmentTermInput from a dict
enrollment_term_input_from_dict = EnrollmentTermInput.from_dict(enrollment_term_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


