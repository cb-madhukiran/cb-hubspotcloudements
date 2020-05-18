let apiKey = steps.InputParams.input.apiKey;
let siteName = steps.InputParams.input.siteName;
let siteDomain = steps.InputParams.input.siteDomain;
let type = steps.InputParams.input.type;

let configuration = steps.getConfigs.data.third_party_configuration.config_json;
configuration.cloudElements.formulas.formula_Validate.validataion_log_id = steps.uploadCsv.data.s3_link;

let tpConfigUpdateParams = {
 url: "https://"+siteName+".integrations."+siteDomain+"/integrations/update_tp_integ_conf",
 headers: {
   "Content-Type": "application/json",
   "cache-control": "no-cache",
    "Authorization": "Basic " + CE.b64(apiKey + ":")
 },
 body:{
     integration_name :type,
     site_name :siteName,
     api_key :apiKey,
     config_json : configuration
  },
   apiKey:apiKey,
   siteDomain:siteDomain,
   siteName:siteName,
   type:"hubspot",
   query:{

      } 
};

done(tpConfigUpdateParams);
