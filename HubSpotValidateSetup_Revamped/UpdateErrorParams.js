let configJson = steps.ConfigParams.config_json;
configJson.cloudElements.formulas.formula_Validate.execution.status ="FAILED";
  
let input = {
  body: {
    integration_name: steps.InputParams.type,
    site_name: steps.InputParams.siteName,
    api_key: steps.InputParams.apiKey,
    "config_json": configJson
  },
  query:{
    
  },
  apiKey:steps.InputParams.apiKey,
   siteDomain:steps.InputParams.siteDomain,
   siteName:steps.InputParams.siteName,
   type:steps.InputParams.type,
   url: "https://"+steps.InputParams.siteName+".integrations."+steps.InputParams.siteDomain+"/integrations/update_tp_integ_conf",
 headers: {
   "Content-Type": "application/json",
   "cache-control": "no-cache"
 },
};

done(input);
