if(steps.ChargebeeConfig.cb_status==="success") {
  
  if(steps.ChargebeeConfig.data.config_json.cloudElements.syncType === undefined){
    steps.ChargebeeConfig.data.config_json.cloudElements.syncType = {};
    steps.ChargebeeConfig.data.config_json.cloudElements.syncType.lastSync = "";
    steps.ChargebeeConfig.data.config_json.cloudElements.syncType.syncType = "initialSync";
  }
  steps.ConfigData.configJson = steps.ChargebeeConfig.data;
  done(true);
}else {
   steps.ConfigData.errorCode =  steps.ChargebeeConfig.cb_error_code;
  done(false);
}