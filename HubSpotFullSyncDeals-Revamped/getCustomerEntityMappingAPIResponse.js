if(steps.getCustomerEntityMapping.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode =  steps.getCustomerEntityMapping.cb_error_code;
  done(false);
}