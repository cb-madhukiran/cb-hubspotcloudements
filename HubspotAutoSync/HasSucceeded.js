let syncStatus = steps.ChargebeeGetIntegSync.data.third_party_sync_detail.status;

if( syncStatus === "succeeded" ){
  done(true);
}else {
  done(false);
}