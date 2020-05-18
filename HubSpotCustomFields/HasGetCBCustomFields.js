if(steps.GetCBCustomFields.cb_status==="success") {
  done(true);
}else {
   steps.ConfigData.errorCode =  steps.GetCBCustomFields.cb_error_code;
  done(false);
}