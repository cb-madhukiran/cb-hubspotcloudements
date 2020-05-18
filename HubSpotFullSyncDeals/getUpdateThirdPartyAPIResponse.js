if(steps.updateThirdPartyError.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode =  steps.updateThirdPartyError.cb_error_code;
  done(false);
}