if(steps.getTPData.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode =  steps.getTPData.cb_error_code;
  done(false);
}