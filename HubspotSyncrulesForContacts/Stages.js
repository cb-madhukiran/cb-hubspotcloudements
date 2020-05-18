let result = steps.getHubspotPipeline.data.results;
let configJson = steps.getChargebeeConfigs.data.third_party_configuration.config_json;

let stageOptions = {};

for (var i = 0; i < result.length; i++) {
    if (result[i].pipelineId === 'default') {
        for (var j = 0; j < result[i].stages.length; j++) {
            stageOptions[result[i].stages[j].stageId] = result[i].stages[j].label;
        }
    }
}
configJson.cloudElements.hubSpotStages = {
    stageOptions: stageOptions
};

let data = {
    url: "https://" + steps.setupCBConfig.siteName + ".integrations." + steps.setupCBConfig.siteDomain + "/integrations/update_tp_integ_conf",
    headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
    },
    body: {
        site_name: steps.setupCBConfig.siteName,
        api_key: steps.setupCBConfig.apiKey,
        integration_name: steps.setupCBConfig.type,
        config_json: configJson
    },
     apiKey: steps.setupCBConfig.apiKey,
     siteName: steps.setupCBConfig.siteName,
     siteDomain: steps.setupCBConfig.siteDomain,
     type: "hubspot",
     query:{}
};

done(data);