let error = "Sync Error";
if(steps.Customer.exec === "Contact") {
  error = "Sync Error Contact";
}else if(steps.Customer.exec === "Deal") {
  error = "Sync Error Deal";
}else if(steps.Customer.exec === "Custom") {
  error = "Sync Error Custom";
}else if(steps.Customer.exec === "Metrics") {
  error = "Sync Error Metrics";
}

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

let context = steps.ConfigData.lastSync.context;
context.sync_context_messages = [ error];
context.error_code=(steps.ConfigData.errorCode ===undefined) ?"cberror":steps.ConfigData.errorCode;
sync.query.context = JSON.stringify(context);
sync.query.status =  "failed";


done(sync);