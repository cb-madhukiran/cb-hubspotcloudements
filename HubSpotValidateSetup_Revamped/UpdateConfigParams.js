let configJson = steps.ConfigParams.config_json;
configJson.cloudElements.formulas.formula_Validate.execution = {
  status:"STARTED",
  id:steps.startExecution.response.body[0].id
};

let input = {
  body: {
    integration_name: steps.InputParams.type,
    site_name: steps.InputParams.siteName,
    api_key: steps.InputParams.apiKey,
    "config_json": configJson
  },
  query:{
        integration_name: "hubspot"
      },
  apiKey: steps.InputParams.apiKey,
  siteName: steps.InputParams.siteName,
  siteDomain:steps.InputParams.siteName,
  type: "hubspot",
  url: "https://"+steps.InputParams.siteName+".integrations."+steps.InputParams.siteDomain+"/integrations/update_tp_integ_conf",
};

done(input);
