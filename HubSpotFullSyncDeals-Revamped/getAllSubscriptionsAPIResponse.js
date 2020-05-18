if(steps.getAllSubscriptions.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode =  steps.getAllSubscriptions.cb_error_code;
  done(false);
}