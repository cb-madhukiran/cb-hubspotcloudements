if(steps.LastSyncDetails.cb_status==="success") {
  steps.ConfigData.lastSync = steps.UpdateSyncDetails.data.third_party_sync_detail;
  done(true);
}else {
  steps.ConfigData.errorCode =  steps.UpdateSyncDetails.cb_error_code;
  done(false);
}