let syncLog = steps.ConfigData.configJson.config_json.cloudElements.syncLog;
let syncData = steps.ConfigData.configJson.config_json.cloudElements.syncData;

let syncType = steps.ConfigData.configJson.config_json.cloudElements.syncType || {"syncType" : "initialSync"};

if ((syncType.syncType === "firstFullSync" && syncType.status === "failed" ) && syncType.syncType === "initialSync" || steps.InputParams.input.initialSync === true) {
  syncLog.errorRecord = true;
  syncLog.subscription = true;
  syncLog.invoice = true;
  steps.InputParams.input.syncDeal = false;
} else if((syncType.syncType === "firstFullSync" && syncType.status === "success") || syncType.syncType == "fullSync" ) {
  steps.InputParams.input.syncDeal = true;
}


done(steps.InputParams.input.syncDeal);