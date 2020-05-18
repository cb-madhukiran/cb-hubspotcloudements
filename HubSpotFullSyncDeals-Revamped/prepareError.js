let error = "Sync Error Deal";

let sync = {
    url: "https://" + steps.DealsInputParams.siteName + "." + steps.DealsInputParams.siteDomain + "/api/v2/third_party_sync_details/" + steps.getSyncDetails.data.id,
    query: {
        "third_party_configuration[integration_name]": "hubspot",
    },
    headers: steps.DealsInputParams.headers,
    apiKey: steps.DealsInputParams.apiKey,
    siteName: steps.DealsInputParams.siteName,
    siteDomain: steps.DealsInputParams.siteDomain,
    type: steps.DealsInputParams.type,
};

let context = steps.getSyncDetails.data.context;
context.sync_context_messages = [ error];
context.error_code=(steps.DealsInputParams.errorCode ===undefined) ?"cberror":steps.DealsInputParams.errorCode;
sync.query.context = JSON.stringify(context);
sync.query.status =  "failed";


done(sync);