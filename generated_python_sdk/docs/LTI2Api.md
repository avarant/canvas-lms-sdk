# canvas_lms_sdk.LTI2Api

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_lti_accounts_account_id_authorize_post**](LTI2Api.md#api_lti_accounts_account_id_authorize_post) | **POST** /api/lti/accounts/{account_id}/authorize | Retrieve a JWT access token


# **api_lti_accounts_account_id_authorize_post**
> ApiLtiAccountsAccountIdAuthorizePost200Response api_lti_accounts_account_id_authorize_post(account_id, grant_type, assertion, code=code)

Retrieve a JWT access token

Obtain a JWT access token for fetching custom Tool Consumer Profiles, registering Tool Proxies, or accessing LTI2 API endpoints (e.g., originality reports).


### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.api_lti_accounts_account_id_authorize_post200_response import ApiLtiAccountsAccountIdAuthorizePost200Response
from canvas_lms_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canvas.instructure.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = canvas_lms_sdk.Configuration(
    host = "https://canvas.instructure.com/api/v1"
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = canvas_lms_sdk.LTI2Api(api_client)
    account_id = 56 # int | Canvas account ID
    grant_type = 'grant_type_example' # str | Grant type of the request. Use \\\"authorization_code\\\" to retrieve a token for custom TCPs and tool proxy registration. Use \\\"urn:ietf:params:oauth:grant-type:jwt-bearer\\\" to retrieve a token for LTI2 API use. 
    assertion = 'assertion_example' # str | Signed JWT assertion
    code = 'code_example' # str | Registration key (reg_key) from the initial registration message; required when grant_type=authorization_code (optional)

    try:
        # Retrieve a JWT access token
        api_response = api_instance.api_lti_accounts_account_id_authorize_post(account_id, grant_type, assertion, code=code)
        print("The response of LTI2Api->api_lti_accounts_account_id_authorize_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LTI2Api->api_lti_accounts_account_id_authorize_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| Canvas account ID | 
 **grant_type** | **str**| Grant type of the request. Use \\\&quot;authorization_code\\\&quot; to retrieve a token for custom TCPs and tool proxy registration. Use \\\&quot;urn:ietf:params:oauth:grant-type:jwt-bearer\\\&quot; to retrieve a token for LTI2 API use.  | 
 **assertion** | **str**| Signed JWT assertion | 
 **code** | **str**| Registration key (reg_key) from the initial registration message; required when grant_type&#x3D;authorization_code | [optional] 

### Return type

[**ApiLtiAccountsAccountIdAuthorizePost200Response**](ApiLtiAccountsAccountIdAuthorizePost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful token retrieval |  -  |
**400** | Bad Request – malformed parameters |  -  |
**401** | Unauthorized – invalid assertion or grant_type |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

