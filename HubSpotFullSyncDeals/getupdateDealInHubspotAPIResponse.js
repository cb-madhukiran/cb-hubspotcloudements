if(steps.updateDealInHubspot.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = steps.updateDealInHubspot.cb_error_code;
  done(false);
}