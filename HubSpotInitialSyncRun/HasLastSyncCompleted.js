let flag = false;
let syncStatus = steps.ChargebeeGetTpIntegSync.data.status;
if(syncStatus==="succeeded" || syncStatus==="failed") {
  flag = true;
}
done(flag);