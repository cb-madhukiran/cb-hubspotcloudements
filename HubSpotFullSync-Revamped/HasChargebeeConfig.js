if(steps.ChargebeeConfig.cb_status==="success") {
  steps.ConfigData.configJson = steps.ChargebeeConfig.data;
  done(true);
}else {
   steps.ConfigData.errorCode =  steps.ChargebeeConfig.cb_error_code;
  done(false);
}