# ApiV1ServicesKalturaGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enabled state of the Kaltura plugin | 
**domain** | **str** | Main domain of the Kaltura instance (This is the URL where the Kaltura API resides) | [optional] 
**resources_domain** | **str** | Kaltura URL for grabbing thumbnails and other resources | [optional] 
**rtmp_domain** | **str** | Hostname to be used for RTMP recording | [optional] 
**partner_id** | **str** | Partner ID used for communicating with the Kaltura instance | [optional] 

## Example

```python
from canvas_lms_sdk.models.api_v1_services_kaltura_get200_response import ApiV1ServicesKalturaGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1ServicesKalturaGet200Response from a JSON string
api_v1_services_kaltura_get200_response_instance = ApiV1ServicesKalturaGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiV1ServicesKalturaGet200Response.to_json())

# convert the object into a dict
api_v1_services_kaltura_get200_response_dict = api_v1_services_kaltura_get200_response_instance.to_dict()
# create an instance of ApiV1ServicesKalturaGet200Response from a dict
api_v1_services_kaltura_get200_response_from_dict = ApiV1ServicesKalturaGet200Response.from_dict(api_v1_services_kaltura_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


