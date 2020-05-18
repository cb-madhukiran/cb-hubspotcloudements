if(steps.updateThirdPartyDeal.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = steps.updateThirdPartyDeal.cb_error_code;
  done(false);
}