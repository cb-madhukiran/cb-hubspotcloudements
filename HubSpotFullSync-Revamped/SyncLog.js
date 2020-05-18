let syncLog = steps.ConfigData.configJson.third_party_configuration.config_json.cloudElements.syncLog;
let syncData = steps.ConfigData.configJson.third_party_configuration.config_json.cloudElements.syncData;

//syncData = {};
//syncLog = {};
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
if (syncData.lastSync === undefined || steps.InputParams.input.initialSync === true) {
  syncLog.errorRecord = true;
  syncLog.subscription = true;
  syncLog.invoice = true;
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
      "created_at[after]": syncData.lastSync,
      "updated_at[after]": syncData.lastSync
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

if (syncData.lastSync !== undefined && steps.InputParams.input.initialSync === false) {
  eRecord.input.query["modified_at[after]"] = syncData.SyncRun;
  subRecord.input.query["created_at[after]"] = syncData.lastSync;
  invoiceRecord.input.query["updated_at[after]"] = syncData.lastSync;
  subRecord.input.query["updated_at[after]"] = syncData.lastSync;
  cstRecord.input.query["updated_at[after]"] = syncData.lastSync;
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