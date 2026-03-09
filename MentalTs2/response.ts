// Create two separate types: `SuccessResponse` and `ErrorResponse`. Combine them into a union type called `ApiResponse`. 
// Apply it to the function so TypeScript knows exactly which properties are available based on the `status` check.

const data: SuccessResponse = {
    status: "success",
    data: "Yves Tabor Walupakah"
}

type SuccessResponse = {
    status: "success";
    data: string;
}
type ErrorResponse = {
    status: "error";
    errorMessage: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
  if (response.status === "success") {
    console.log("Here is your data:", response.data);
  } else {
      console.error("An error occurred:", response.errorMessage);
  }
}

handleResponse(data);