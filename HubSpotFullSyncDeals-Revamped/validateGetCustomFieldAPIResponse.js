if(steps.getCBCustomFields.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode =  steps.getCBCustomFields.cb_error_code;
  done(false);
}