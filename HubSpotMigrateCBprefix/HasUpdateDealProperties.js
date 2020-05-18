if(steps.UpdateDealProperties.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = "UpdateDealProperties " + steps.UpdateDealProperties.cb_error_code;
  done(false);
}