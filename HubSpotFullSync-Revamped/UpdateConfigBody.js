let result = steps.GetResultValue.response.body;
let eCount = 0;
let sCount = 0;
let cbErrorCode;
for(var i=0;i<result.length;i++){
  if(result[i].key === "SyncDone.eCount") {
    eCount = Number(result[i].value);
  }
  if(result[i].key === "SyncDone.sCount") {
    sCount = Number(result[i].value);
  }
  if(result[i].key === "SyncDone.cbErrorCode") {
    cbErrorCode = result[i].value;
  }
}

eCount = eCount+ steps.SyncLog.syncLog.eCount;
sCount = sCount+ steps.SyncLog.syncLog.sCount;
steps.SyncLog.syncLog.eCount = eCount;
steps.SyncLog.syncLog.sCount = sCount;

steps.InputParams.updateconfig.body.config_json.cloudElements.syncLog = steps.SyncLog.syncLog;

let data = {
  eCount:eCount,
  sCount:sCount,
  cbErrorCode:cbErrorCode
  
};
done(data);