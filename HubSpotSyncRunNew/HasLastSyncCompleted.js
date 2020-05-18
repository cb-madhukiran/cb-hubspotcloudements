let flag = false;
let syncStatus = steps.ChargebeeGetTpIntegSync.data.third_party_sync_detail.status;
if(syncStatus==="succeeded" || syncStatus==="failed") {
  flag = true;
}
done(flag);