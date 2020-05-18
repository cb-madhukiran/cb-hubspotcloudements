if(steps.GetTpData.cb_status==="success") {
  done(true);
}else {
   steps.ConfigData.errorCode =  steps.GetTpData.cb_error_code;
  done(false);
}