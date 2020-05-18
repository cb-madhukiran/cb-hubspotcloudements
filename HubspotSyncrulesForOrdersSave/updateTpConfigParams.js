let configJson = steps.getTpConfig.response.body.third_party_configuration.config_json || {};

if(configJson.cloudElements === undefined){
  configJson.cloudElements = {};
}
configJson.cloudElements.syncRuleForOrders  = steps.InputParams.syncRuleForOrders;

let input = {
     site_name: steps.InputParams.input.siteName,
     api_key: steps.InputParams.input.apiKey,
     integration_name:steps.InputParams.input.integrationName,
     config_json : configJson
};



let tpConfigUpdateParams = {
  url:   "https://"+steps.InputParams.input.siteName+".integrations."+steps.InputParams.input.siteDomain+"/integrations/update_tp_integ_conf",
  headers: {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  },
  body:  input
}

done({
  tpConfigUpdateParams: tpConfigUpdateParams
});

