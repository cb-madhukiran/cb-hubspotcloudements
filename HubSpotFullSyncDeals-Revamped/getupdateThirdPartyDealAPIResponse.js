if(steps.updateThirdPartyDeal.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode = steps.updateThirdPartyDeal.cb_error_code;
  done(false);
}