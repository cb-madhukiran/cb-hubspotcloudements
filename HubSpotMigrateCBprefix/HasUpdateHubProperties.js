if(steps.UpdateHubProperties.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = "UpdateHubProperties " + steps.UpdateHubProperties.cb_error_code;
  done(false);
}