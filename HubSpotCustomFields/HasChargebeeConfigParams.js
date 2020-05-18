if(steps.ChargebeeConfigParams.cb_status==="success") {
  steps.ConfigData.configJson = steps.ChargebeeConfigParams.data;
  done(true);
}else {
   steps.ConfigData.errorCode =  steps.ChargebeeConfigParams.cb_error_code;
  done(false);
}