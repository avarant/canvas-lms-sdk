from dotenv import load_dotenv
load_dotenv()
import os
import canvas_lms_sdk
from canvas_lms_sdk.rest import ApiException
from pprint import pprint
from canvas_lms_sdk.api.courses_api import CoursesApi

CANVAS_TOKEN=os.getenv("CANVAS_TOKEN")
CANVAS_HOST=os.getenv("CANVAS_HOST")

# Configure API key authorization: api_key
configuration = canvas_lms_sdk.Configuration(
    host = CANVAS_HOST,  # e.g., "https://canvas.instructure.com"
    api_key = {
        'Authorization': 'Bearer ' + CANVAS_TOKEN
    }
)


# Enter a context with an instance of the API client
with canvas_lms_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    # Using CoursesApi to list courses
    api_instance = CoursesApi(api_client)

    try:
        # List active courses for the current user
        print("Attempting to list active courses...")
        api_response = api_instance.api_v1_courses_get()
        print("\nActive Courses:")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CoursesApi->api_v1_courses_get: %s\n" % e)
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

print("\nScript finished.") 