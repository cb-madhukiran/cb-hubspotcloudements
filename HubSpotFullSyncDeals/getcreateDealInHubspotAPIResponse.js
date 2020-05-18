if(steps.createDealInHubspot.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = steps.createDealInHubspot.cb_error_code;
  done(false);
}