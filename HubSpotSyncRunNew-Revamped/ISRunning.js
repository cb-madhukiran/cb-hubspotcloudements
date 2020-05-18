let flag = false;
let syncStatus = steps.ChargebeeGetTpIntegSync.data.third_party_sync_detail.status;
if(syncStatus==="running") {
  flag = true;
}
done(flag);