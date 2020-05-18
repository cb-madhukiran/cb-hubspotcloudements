let flag = false;
let syncStatus = steps.ChargebeeGetTpIntegSync.data.status;
if(syncStatus==="running") {
  flag = true;
}
done(flag);