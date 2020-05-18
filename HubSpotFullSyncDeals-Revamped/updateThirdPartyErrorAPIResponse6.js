if(steps.updateThirdPartyError6.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode = steps.updateThirdPartyError6.cb_error_code;
  done(false);
}