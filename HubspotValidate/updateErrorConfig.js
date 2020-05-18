let configJson = steps.getConfigErrorCall.data.third_party_configuration.config_json;

configJson.cloudElements.formulas.formula_Validate.execution.status ="FAILED";
configJson.cloudElements.formulas.formula_Validate.resultMsg= steps.InputParams.result.msg;
  
let input = {
  body: {
    integration_name: steps.InputParams.input.type,
    site_name: steps.InputParams.input.siteName,
    api_key: steps.InputParams.input.apiKey,
    "config_json": configJson
  },
  query:{
    
  },
  apiKey:steps.InputParams.input.apiKey,
   siteDomain:steps.InputParams.input.siteDomain,
   siteName:steps.InputParams.input.siteName,
   type:steps.InputParams.input.type,
   url: "https://"+steps.InputParams.input.siteName+".integrations."+steps.InputParams.input.siteDomain+"/integrations/update_tp_integ_conf",
 headers: {
   "Content-Type": "application/json",
   "cache-control": "no-cache"
 },
};

done(input);
