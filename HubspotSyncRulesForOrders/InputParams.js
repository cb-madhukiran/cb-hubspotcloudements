let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let siteDomain = trigger.args.request.query['cb-domain'];
let integrationName = "hubspot";
let password = "";

let headers = {
            Authorization: "Basic " + CE.b64(apiKey + ":" + password),
            api_key : apiKey
        };
let params = {
  input :{
    apiKey:apiKey,
    siteName:siteName,
    siteDomain:siteDomain,
    integrationName:integrationName
  },
    cbconfig: {
     
        apiKey: apiKey,
      siteName: siteName,
      siteDomain:siteDomain,
      type: integrationName,
      url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
      headers:{
          Authorization: "Basic " + CE.b64(apiKey + ":" + password)
        },
        query:{
          integration_name: integrationName
        }
    }
 
};



done(params)