let initialSync = steps.ChargebeeGetTpIntegSync.data.third_party_sync_detail.context.initialSync;
//done(true);
if(initialSync !== undefined){
 done(initialSync);
}else{
  done(false);
}