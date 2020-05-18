if(steps.createDealInHubspot.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode = steps.createDealInHubspot.cb_error_code;
  done(false);
}