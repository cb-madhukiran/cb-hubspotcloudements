let error = "Sync Error Deal";

let sync = {
    url: "https://" + steps.InputParams.siteName + "." + steps.InputParams.siteDomain + "/api/v2/third_party_sync_details/" + steps.getSyncDetails.data.third_party_sync_detail.id,
    query: {
        "third_party_configuration[integration_name]": "hubspot",
    },
    headers: steps.InputParams.headers,
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
};

let context = steps.getSyncDetails.data.third_party_sync_detail.context;
context.sync_context_messages = [ error];
context.error_code=(steps.InputParams.errorCode ===undefined) ?"cberror":steps.InputParams.errorCode;
sync.query.context = JSON.stringify(context);
sync.query.status =  "failed";


done(sync);