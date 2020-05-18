let result = steps.GetDealResultValue.response.body;
let edCount = 0;
let sdCount = 0;
let cbErrorCode;
for(var i=0;i<result.length;i++){
  if(result[i].key === "SyncDone.eCount") {
    edCount = Number(result[i].value);
  }
  if(result[i].key === "SyncDone.sCount") {
    sdCount = Number(result[i].value);
  }
  if(result[i].key === "SyncDone.cbErrorCode") {
    cbErrorCode = result[i].value;
  }
}

edCount = edCount+ steps.SyncLog.syncLog.edCount;
sdCount = sdCount+ steps.SyncLog.syncLog.sdCount;
steps.SyncLog.syncLog.edCount = edCount;
steps.SyncLog.syncLog.sdCount = sdCount;

done({
  edCount:edCount,
  sdCount:sdCount,
  cbErrorCode:cbErrorCode
});
