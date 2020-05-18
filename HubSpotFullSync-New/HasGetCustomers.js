if(steps.GetCustomers.cb_status==="success") {
  done(true);
}else {
   steps.ConfigData.errorCode =  steps.GetCustomers.cb_error_code;
  done(false);
}