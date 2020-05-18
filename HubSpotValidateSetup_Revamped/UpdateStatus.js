let resultcard = JSON.parse(steps.getResultAPI.response.body[0].value);
let input = steps.CheckStatus;
let configJson = steps.getUpdatedConfigs.data.third_party_configuration.config_json;
let api_key = steps.InputParams.apiKey;
let site_name = steps.InputParams.siteName;
let site_domain = steps.InputParams.siteDomain;


if (resultcard.cardStatus === "VALIDATION-FAILED") {
  configJson.cloudElements.formulas.formula_Validate.execution.result = {
    error:true,
    message: resultcard.cardResult.card.listContent
  };
  configJson.cloudElements.formulas.formula_Validate.execution.status = "DONE";

}else {
  
  configJson.cloudElements.formulas.formula_Validate.execution.result = {
    error:false,
    message: ['No Error found  during data validation']
  };
    configJson.cloudElements.formulas.formula_Validate.execution.status = "DONE";
}

let tpConfigUpdateParams = {
 url: "https://"+site_name+".integrations."+site_domain+"/integrations/update_tp_integ_conf",
 headers: {
   "Content-Type": "application/json",
   "cache-control": "no-cache"
 },
 body:{
     integration_name :steps.InputParams.type,
     site_name :site_name,
     api_key :api_key,
     config_json : configJson
  },
   apiKey:api_key,
   siteDomain:site_domain,
   siteName:site_name,
   type:steps.InputParams.type,
   query:{
      },
};

done(tpConfigUpdateParams);