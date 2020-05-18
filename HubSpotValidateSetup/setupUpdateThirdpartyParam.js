let instanceId = steps.CreateFormulaInstance.response.body.id;
let configJson = steps.getChargebeeConfiguration.data.third_party_configuration.config_json;
let integrationName = steps.InputParams.type;
let site_name = steps.InputParams.siteName;
let api_key = steps.InputParams.apiKey;
let siteDomain = steps.InputParams.siteDomain;

configJson.cloudElements.formulas = {};
configJson.cloudElements.formulas.formula_Validate = {id:steps.Props.formulaId,
  instance:instanceId
};

let config = {
  body : {
     integration_name:integrationName ,
    site_name: site_name,
    api_key: api_key,
    "config_json": configJson
  },
  url: "https://"+site_name+".integrations."+siteDomain+"/integrations/update_tp_integ_conf",
  apiKey:api_key,
   siteDomain:siteDomain,
   siteName:site_name,
   type:integrationName,
 headers: {
   "Content-Type": "application/json",
   "cache-control": "no-cache"
 },
 query:{
    
  },
};
done(config);

