let p3 = {
    url: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/third_party_sync_details/" + steps.ConfigData.lastSync.third_party_sync_detail.id,
    query: {
        "third_party_configuration[integration_name]": "hubspot",
    },
    headers: steps.InputParams.input.cbheaders,
    apiKey: steps.InputParams.input.apiKey,
    siteName: steps.InputParams.input.siteName,
    siteDomain: steps.InputParams.input.siteDomain,
    type: steps.InputParams.input.type,
};

let context = steps.ConfigData.lastSync.third_party_sync_detail.context;
context.excecutionId = info.formulaExecutionId;
p3.query.context = JSON.stringify(context);
p3.query.status =  steps.ConfigData.lastSync.third_party_sync_detail.status;
done(p3);
