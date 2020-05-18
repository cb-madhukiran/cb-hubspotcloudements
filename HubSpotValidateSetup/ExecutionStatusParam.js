let param = {
  url: "https://" + steps.InputParams.siteName + ".integrations." + steps.InputParams.siteDomain + "/api/hubspot/ipaasexecution?execution_id=" + steps.ConfigParams.config_json.cloudElements.formulas.formula_Validate.execution.id,
  apiKey: steps.InputParams.apiKey,
  siteName: steps.InputParams.siteName,
  siteDomain:steps.InputParams.siteDomain,
  type: "hubspot",
  query:{
    "formula_step_name" : "validation"
  },
   headers:{
        Authorization: "Basic " + CE.b64(steps.InputParams.apiKey + ":" + "")
      }
};

done(param);