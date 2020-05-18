let syncLog = steps.SyncLog.syncLog;
let syncData = steps.SyncLog.syncData;

syncLog.end =  Math.round((new Date().getTime())/1000);
if(steps.InputParams.input.initialSync) {
   syncData.firstSyncEnd = syncLog.end;
}else {
  syncData.SyncRun = syncLog.start;
  syncData.lastSync = syncLog.end;
}


let configJson = steps.ConfigData.configJson.config_json;
configJson.cloudElements.syncLog = syncLog;
configJson.cloudElements.syncData = syncData;
if(configJson.cloudElements.logs === undefined) {
  configJson.cloudElements.logs = {};
}
if(configJson.cloudElements.logs.fullSync === undefined) {
  configJson.cloudElements.logs.fullSync = {};
}
configJson.cloudElements.logs.fullSync.s3_FileId = steps.UploadCSV.data.s3_link;


steps.InputParams.updateconfig.body.config_json = configJson;


let sync = {
    url: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/third_party_sync_details/" + steps.ConfigData.lastSync.id,
    query: {
        "third_party_configuration[integration_name]": "hubspot",
    },
    headers: steps.InputParams.input.cbheaders,
    apiKey: steps.InputParams.input.apiKey,
    siteName: steps.InputParams.input.siteName,
    siteDomain: steps.InputParams.input.siteDomain,
    type: steps.InputParams.input.type,
};
let total = syncLog.sCount + syncLog.eCount;
let context = steps.ConfigData.lastSync.context;
  
context.sync_context_messages = [ total +" Customers processed ("+syncLog.sCount+" created, 0 updated, "+syncLog.eCount+" not synced)"];
sync.query.context = JSON.stringify(context);
sync.query.status =  "succeeded";

done({sync:sync});