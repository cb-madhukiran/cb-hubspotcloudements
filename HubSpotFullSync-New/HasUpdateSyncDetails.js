if(steps.LastSyncDetails.cb_status==="success") {
  steps.ConfigData.lastSync = steps.UpdateSyncDetails.data;
  done(true);
}else {
  steps.ConfigData.errorCode =  steps.UpdateSyncDetails.cb_error_code;
  done(false);
}