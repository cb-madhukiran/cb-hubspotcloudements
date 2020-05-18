if(steps.updateThirdPartyError.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode =  steps.updateThirdPartyError.cb_error_code;
  done(false);
}