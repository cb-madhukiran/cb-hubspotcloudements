let configJson = steps.getTpConfig.data.third_party_configuration.config_json || {};

if(configJson.cloudElements === undefined){
  configJson.cloudElements = {};
}
configJson.cloudElements.syncRulesContacts  = steps.InputParams.params.options;
//configJson["new_sub_step"] = "step_2";

let input = {
     site_name: steps.InputParams.params.input.siteName,
     api_key: steps.InputParams.params.input.apiKey,
     integration_name:steps.InputParams.params.input.integrationName,
     config_json : configJson
};



let tpConfigUpdateParams = {
  url:   "https://"+steps.InputParams.params.input.siteName+".integrations."+steps.InputParams.params.input.siteDomain+"/integrations/update_tp_integ_conf",
  headers: {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  },
  body:  input,
  apiKey: steps.InputParams.params.input.apiKey,
  siteName: steps.InputParams.params.input.siteName,
  siteDomain: steps.InputParams.params.input.siteDomain,
  type: steps.InputParams.params.input.integrationName,
};

done({
  tpConfigUpdateParams: tpConfigUpdateParams
});

