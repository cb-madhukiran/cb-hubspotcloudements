let apiKey = steps.ManageSyncProps.request.query['cb-api-key'];
let siteName = steps.ManageSyncProps.request.query['cb-site-name'];
let type =steps.ManageSyncProps.request.query.type;
let siteDomain = steps.ManageSyncProps.request.query['cb-domain'];
let password = "";
let apiName1="third_party_configurations";
let apiName2="get_custom_field_list";
let apiType2="INTEG-INTEG-API";

let params={
  
  config: {
    apiKey : apiKey,
    apiName : apiName1,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:type,
    inputJson: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: type
  },
    //url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
    //updateUrl: "https://"+siteName+".integrations."+siteDomain+"/integrations/update_tp_integ_conf",
    //auth: {
      //Authorization: "Basic "+CE.b64(apiKey+":"+password)//
    //},
    queryJson: {
      integration_name: type
    },
  },
  custom: {
    apiKey : apiKey,
    apiName : apiName2,
    apiType:apiType2,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:type,
    //url: "https://"+siteName+".integrations."+siteDomain+"/integrations/api/get_custom_field_list",
    //headers: {
      //Authorization: "Basic "+CE.b64(apiKey+":"+password)//
    //},
    queryJson: {
      site_name: siteName,
      api_key: apiKey
    }
  }
};

done(params);