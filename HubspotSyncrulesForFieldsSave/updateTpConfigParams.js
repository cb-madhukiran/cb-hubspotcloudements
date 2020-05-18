let configJson = steps.getTpIntegConfig.data.third_party_configuration.config_json || {};

if(configJson.cloudElements === undefined){
  configJson.cloudElements = {};
}
configJson.cloudElements.syncRulesFields  = steps.ParseFieldsInput.syncRuleForFields;

let apiName ="update_tp_integ_conf";
let apiType = "INTEG-INTEG";
let requestType = "POST";
let inputJson = {
     site_name: steps.SaveFieldsInputParams.inputJson.siteName,
     api_key: steps.SaveFieldsInputParams.inputJson.apiKey,
     integration_name:steps.SaveFieldsInputParams.inputJson.integrationName,
     config_json : configJson
};


let tpConfigUpdateParams = {
  // url:   "https://"+steps.SaveFieldsInputParams.input.siteName+".integrations."+steps.SaveFieldsInputParams.input.siteDomain+"/integrations/update_tp_integ_conf",
  headersJson: {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  },
    apiKey : steps.SaveFieldsInputParams.apiKey,
    apiType : apiType,
    apiName : apiName,
    domain  : steps.SaveFieldsInputParams.domain,
    siteName: steps.SaveFieldsInputParams.siteName,
    password: steps.SaveFieldsInputParams.password,
    type:steps.SaveFieldsInputParams.type,
    requestType:requestType,
    bodyJson:  inputJson
};

done({
  tpConfigUpdateParams: tpConfigUpdateParams
});

