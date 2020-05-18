if(steps.getTPData.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode =  steps.getTPData.cb_error_code;
  done(false);
}