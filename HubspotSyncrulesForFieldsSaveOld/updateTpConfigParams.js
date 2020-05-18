let configJson = steps.getTpIntegConfig.data.third_party_configuration.config_json || {};

if(configJson.cloudElements === undefined){
  configJson.cloudElements = {};
}
configJson.cloudElements.syncRulesFields  = steps.InputParams.syncRuleForFields;

let apiName ="update_tp_integ_conf";
let apiType = "INTEG-INTEG";
let requestType = "POST";
let inputJson = {
     site_name: steps.InputParams.inputJson.siteName,
     api_key: steps.InputParams.inputJson.apiKey,
     integration_name:steps.InputParams.inputJson.integrationName,
     config_json : configJson
};


let tpConfigUpdateParams = {
  // url:   "https://"+steps.InputParams.input.siteName+".integrations."+steps.InputParams.input.siteDomain+"/integrations/update_tp_integ_conf",
  headersJson: {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  },
    apiKey : steps.InputParams.apiKey,
    apiType : apiType,
    apiName : apiName,
    domain  : steps.InputParams.domain,
    siteName: steps.InputParams.siteName,
    password: steps.InputParams.password,
    type:steps.InputParams.type,
    requestType:requestType,
    bodyJson:  inputJson
};

done({
  tpConfigUpdateParams: tpConfigUpdateParams
});

