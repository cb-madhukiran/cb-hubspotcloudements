if(steps.ChargebeeConfig.cb_status==="success") {
  steps.InputParams.configJson = steps.ChargebeeConfig.data;
  done(true);
}else {
   steps.InputParams.errorCode =  steps.ChargebeeConfig.cb_error_code;
  done(false);
}