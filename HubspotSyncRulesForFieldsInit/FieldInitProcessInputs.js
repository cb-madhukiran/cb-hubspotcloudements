let apiKey = steps.FieldInitProps.request.query['cb-api-key'];
let siteName = steps.FieldInitProps.request.query['cb-site-name'];
let siteDomain = steps.FieldInitProps.request.query['cb-domain'];
let integrationName = steps.FieldInitProps.request.query['type'];
let apiName1 = "third_party_configurations";
let apiName2 ="get_custom_field_list";
let password = "";
let apiType2 = "INTEG-INTEG-API";

let tpIntegConfParams = {
    apiKey : apiKey,
    apiName : apiName1,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:integrationName,
  inputJson :{
    apiKey:apiKey,
    siteName:siteName,
    siteDomain:siteDomain,
    integrationName:integrationName
  },
  // url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
  //   auth:{
  //     Authorization: "Basic " + CE.b64(apiKey + ":" + password)
  //   },
    queryJson:{
      integration_name: integrationName
    }
};
let customParams ={
   apiKey : apiKey,
    apiName : apiName2,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:integrationName,
    apiType: apiType2,
  // url: "https://"+siteName+".integrations."+siteDomain+"/integrations/api/get_custom_field_list",
  // headers:{
  //   Authorization: "Basic " + CE.b64(apiKey + ":" + password)
  // },
  queryJson:{
    site_name: siteName,
    api_key: apiKey
  }
};
 

done({tpIntegConfParams:tpIntegConfParams,
      customParams:customParams
});