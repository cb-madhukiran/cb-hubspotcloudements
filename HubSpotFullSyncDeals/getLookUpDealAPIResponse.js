if(steps.getLookUpDeal.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode =  steps.getLookUpDeal.cb_error_code;
  done(false);
}