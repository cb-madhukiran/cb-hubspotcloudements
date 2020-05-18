if(steps.ChargebeeGetUpdatedTpIntegConf.cb_status==="success") {
  steps.ConfigData.configJson = steps.ChargebeeGetUpdatedTpIntegConf.data;
  done(true);
}else {
   steps.ConfigData.errorCode =  steps.ChargebeeGetUpdatedTpIntegConf.cb_error_code;
  done(false);
}