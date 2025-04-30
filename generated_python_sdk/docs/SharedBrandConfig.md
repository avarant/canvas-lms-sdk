# SharedBrandConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The shared_brand_config identifier. | 
**account_id** | **str** | The id of the account in which this theme is shared. | 
**brand_config_md5** | **str** | MD5 of the BrandConfig being shared. | 
**name** | **str** | The name under which this theme is shared. | 
**created_at** | **datetime** | When this resource was created. | 
**updated_at** | **datetime** | When this resource was last updated. | 

## Example

```python
from canvas_lms_sdk.models.shared_brand_config import SharedBrandConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SharedBrandConfig from a JSON string
shared_brand_config_instance = SharedBrandConfig.from_json(json)
# print the JSON string representation of the object
print(SharedBrandConfig.to_json())

# convert the object into a dict
shared_brand_config_dict = shared_brand_config_instance.to_dict()
# create an instance of SharedBrandConfig from a dict
shared_brand_config_from_dict = SharedBrandConfig.from_dict(shared_brand_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


