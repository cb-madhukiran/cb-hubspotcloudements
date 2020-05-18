if(steps.getDealById.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode =  steps.getDealById.cb_error_code;
  done(false);
}