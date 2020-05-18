if(steps.LastSyncDetails.cb_status==="success") {
  steps.ConfigData.lastSync = steps.LastSyncDetails.data;
  done(true);
}else {
  steps.ConfigData.errorCode =  steps.LastSyncDetails.cb_error_code;
  done(false);
}