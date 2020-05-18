let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let siteDomain = trigger.args.request.query['cb-domain'];
let integrationName = trigger.args.request.query['type'];
let password = "";

let params = {
  input :{
    apiKey:apiKey,
    siteName:siteName,
    siteDomain:siteDomain,
    integrationName:integrationName
  },
  url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
    auth:{
      Authorization: "Basic " + CE.b64(apiKey + ":" + password)
    },
    query:{
      integration_name: integrationName
    },
    custom: {
  url: "https://"+siteName+".integrations."+siteDomain+"/integrations/api/get_custom_field_list",
  headers:{
    Authorization: "Basic " + CE.b64(apiKey + ":" + password)
  },
  query:{
    site_name: siteName,
    api_key: apiKey
  }
}
 
};



done(params);