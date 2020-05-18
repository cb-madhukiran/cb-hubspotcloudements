let syncLog = steps.ConfigData.configJson.config_json.cloudElements.syncLog;
let syncData = steps.ConfigData.configJson.config_json.cloudElements.syncData;
let syncType = steps.ConfigData.configJson.config_json.cloudElements.syncType;

//syncData = {};
//syncLog = {};
if(syncData !== undefined && syncData.lastSync === undefined ){
  syncData.lastSync = syncType.lastSync;
}
if (syncLog === undefined || syncLog.start === undefined) {
  syncLog = {
    start: Math.round((new Date().getTime()) / 1000),
    errorRecord: false,
    subscription: false,
    invoice: false,
    customer: false,
    count: 0,
    eCount: 0,
    sCount: 0,
    edCount: 0,
    sdCount: 0
  };
}
if (syncLog.invoice === undefined) {
  syncLog.invoice = false;
}
if (syncType === undefined || syncType.lastSync === undefined || steps.InputParams.input.initialSync === true) {
  syncLog.errorRecord = true;
  syncLog.subscription = true;
  syncLog.invoice = true;
  syncType = {};
  steps.InputParams.input.syncDeal = false;
} else {
  steps.InputParams.input.syncDeal = true;
}


let eRecord = {
  sync: "errorRecord",
  input: {
    url: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/list_all",
    headers: steps.InputParams.input.cbheaders,
    query: {
      integration_name: steps.InputParams.input.type,
      limit: steps.InputParams.batchLimit,
      "status": "update_failed",
      "entity_type[is]": "customer"
    },
    apiKey: steps.InputParams.input.apiKey,
    siteName: steps.InputParams.input.siteName,
    siteDomain: steps.InputParams.input.siteDomain,
    type: steps.InputParams.input.type,
  }
};

let subRecord = {
  sync: "subscription",
  input: {
    url: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/subscriptions",
    headers: steps.InputParams.input.cbheaders,
    query: {
      limit: steps.InputParams.batchLimit,
      "created_at[after]": syncType.lastSync,
      "updated_at[after]": syncType.lastSync
    },
    apiKey: steps.InputParams.input.apiKey,
    siteName: steps.InputParams.input.siteName,
    siteDomain: steps.InputParams.input.siteDomain,
    type: steps.InputParams.input.type,
  }
};
let invoiceRecord = {
  sync: "invoice",
  input: {
    url: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/invoices",
    headers: steps.InputParams.input.cbheaders,
    query: {
      limit: steps.InputParams.batchLimit
    },
    apiKey: steps.InputParams.input.apiKey,
    siteName: steps.InputParams.input.siteName,
    siteDomain: steps.InputParams.input.siteDomain,
    type: steps.InputParams.input.type,
  }
};
let cstRecord = {
  sync: "customer",
  input: {
    url: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/customers",
    headers: steps.InputParams.input.cbheaders,
    query: {
      limit: steps.InputParams.batchLimit
    },
    apiKey: steps.InputParams.input.apiKey,
    siteName: steps.InputParams.input.siteName,
    siteDomain: steps.InputParams.input.siteDomain,
    type: steps.InputParams.input.type,
  }
};

if (syncType.lastSync !== undefined && steps.InputParams.input.initialSync === false) {
  eRecord.input.query["modified_at[after]"] = syncData.SyncRun;
  subRecord.input.query["created_at[after]"] = syncType.lastSync;
  invoiceRecord.input.query["updated_at[after]"] = syncType.lastSync;
  subRecord.input.query["updated_at[after]"] = syncType.lastSync;
  cstRecord.input.query["updated_at[after]"] = syncType.lastSync;
}

let config = {
  errorRecord: eRecord,
  subscription: subRecord,
  invoice: invoiceRecord,
  customer: cstRecord,
  syncLog: syncLog,
  syncData: syncData
};

done(config);