steps.InputParams.result.msg = "getCustomerAPIFailed";
done({
  errorMessage : "Error occurred in fetching Customers "+steps.getCustomers.cb_error_code
})