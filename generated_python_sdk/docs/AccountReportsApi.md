# canvas_lms_sdk.AccountReportsApi

All URIs are relative to *https://canvas.instructure.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_accounts_account_id_reports_get**](AccountReportsApi.md#api_v1_accounts_account_id_reports_get) | **GET** /api/v1/accounts/{account_id}/reports | List Available Reports
[**api_v1_accounts_account_id_reports_report_get**](AccountReportsApi.md#api_v1_accounts_account_id_reports_report_get) | **GET** /api/v1/accounts/{account_id}/reports/{report} | Index of Reports
[**api_v1_accounts_account_id_reports_report_id_abort_put**](AccountReportsApi.md#api_v1_accounts_account_id_reports_report_id_abort_put) | **PUT** /api/v1/accounts/{account_id}/reports/{report}/{id}/abort | Abort a Report
[**api_v1_accounts_account_id_reports_report_id_delete**](AccountReportsApi.md#api_v1_accounts_account_id_reports_report_id_delete) | **DELETE** /api/v1/accounts/{account_id}/reports/{report}/{id} | Delete a Report
[**api_v1_accounts_account_id_reports_report_id_get**](AccountReportsApi.md#api_v1_accounts_account_id_reports_report_id_get) | **GET** /api/v1/accounts/{account_id}/reports/{report}/{id} | Status of a Report
[**api_v1_accounts_account_id_reports_report_post**](AccountReportsApi.md#api_v1_accounts_account_id_reports_report_post) | **POST** /api/v1/accounts/{account_id}/reports/{report} | Start a Report


# **api_v1_accounts_account_id_reports_get**
> List[AvailableReport] api_v1_accounts_account_id_reports_get(account_id)

List Available Reports

Returns a paginated list of reports for the current context.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.available_report import AvailableReport
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
    api_instance = canvas_lms_sdk.AccountReportsApi(api_client)
    account_id = 56 # int | Canvas account ID

    try:
        # List Available Reports
        api_response = api_instance.api_v1_accounts_account_id_reports_get(account_id)
        print("The response of AccountReportsApi->api_v1_accounts_account_id_reports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountReportsApi->api_v1_accounts_account_id_reports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| Canvas account ID | 

### Return type

[**List[AvailableReport]**](AvailableReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of available reports |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_reports_report_get**
> List[Report] api_v1_accounts_account_id_reports_report_get(account_id, report)

Index of Reports

Shows all reports that have been run for the account of a specific type.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.report import Report
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
    api_instance = canvas_lms_sdk.AccountReportsApi(api_client)
    account_id = 56 # int | Canvas account ID
    report = 'report_example' # str | The type of report

    try:
        # Index of Reports
        api_response = api_instance.api_v1_accounts_account_id_reports_report_get(account_id, report)
        print("The response of AccountReportsApi->api_v1_accounts_account_id_reports_report_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountReportsApi->api_v1_accounts_account_id_reports_report_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| Canvas account ID | 
 **report** | **str**| The type of report | 

### Return type

[**List[Report]**](Report.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of report instances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_reports_report_id_abort_put**
> Report api_v1_accounts_account_id_reports_report_id_abort_put(account_id, report, id)

Abort a Report

Abort a report in progress.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.report import Report
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
    api_instance = canvas_lms_sdk.AccountReportsApi(api_client)
    account_id = 56 # int | Canvas account ID
    report = 'report_example' # str | The type of report
    id = 56 # int | The unique identifier for the report instance

    try:
        # Abort a Report
        api_response = api_instance.api_v1_accounts_account_id_reports_report_id_abort_put(account_id, report, id)
        print("The response of AccountReportsApi->api_v1_accounts_account_id_reports_report_id_abort_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountReportsApi->api_v1_accounts_account_id_reports_report_id_abort_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| Canvas account ID | 
 **report** | **str**| The type of report | 
 **id** | **int**| The unique identifier for the report instance | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Aborted report instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_reports_report_id_delete**
> Report api_v1_accounts_account_id_reports_report_id_delete(account_id, report, id)

Delete a Report

Deletes a generated report instance.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.report import Report
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
    api_instance = canvas_lms_sdk.AccountReportsApi(api_client)
    account_id = 56 # int | Canvas account ID
    report = 'report_example' # str | The type of report
    id = 56 # int | The unique identifier for the report instance

    try:
        # Delete a Report
        api_response = api_instance.api_v1_accounts_account_id_reports_report_id_delete(account_id, report, id)
        print("The response of AccountReportsApi->api_v1_accounts_account_id_reports_report_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountReportsApi->api_v1_accounts_account_id_reports_report_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| Canvas account ID | 
 **report** | **str**| The type of report | 
 **id** | **int**| The unique identifier for the report instance | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deleted report instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_reports_report_id_get**
> Report api_v1_accounts_account_id_reports_report_id_get(account_id, report, id)

Status of a Report

Returns the status of a report.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.report import Report
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
    api_instance = canvas_lms_sdk.AccountReportsApi(api_client)
    account_id = 56 # int | Canvas account ID
    report = 'report_example' # str | The type of report
    id = 56 # int | The unique identifier for the report instance

    try:
        # Status of a Report
        api_response = api_instance.api_v1_accounts_account_id_reports_report_id_get(account_id, report, id)
        print("The response of AccountReportsApi->api_v1_accounts_account_id_reports_report_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountReportsApi->api_v1_accounts_account_id_reports_report_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| Canvas account ID | 
 **report** | **str**| The type of report | 
 **id** | **int**| The unique identifier for the report instance | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Report status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_accounts_account_id_reports_report_post**
> Report api_v1_accounts_account_id_reports_report_post(account_id, report)

Start a Report

Generates a report instance for the account. Report name must match one of the available report names.

### Example


```python
import canvas_lms_sdk
from canvas_lms_sdk.models.report import Report
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
    api_instance = canvas_lms_sdk.AccountReportsApi(api_client)
    account_id = 56 # int | Canvas account ID
    report = 'report_example' # str | The type of report

    try:
        # Start a Report
        api_response = api_instance.api_v1_accounts_account_id_reports_report_post(account_id, report)
        print("The response of AccountReportsApi->api_v1_accounts_account_id_reports_report_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountReportsApi->api_v1_accounts_account_id_reports_report_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **int**| Canvas account ID | 
 **report** | **str**| The type of report | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Report created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

