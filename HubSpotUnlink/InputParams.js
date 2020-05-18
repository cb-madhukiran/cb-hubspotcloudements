let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let type = trigger.args.request.query['type'];
let siteDomain = trigger.args.request.query['cb-domain'];
let password = "";
 let headers = {
            Authorization: "Basic " + CE.b64(apiKey + ":" + password),
            api_key : apiKey
        };
let params = {
  input: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain:siteDomain,
    type: type,
    config :{
      url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
      auth:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: type
      }
     
    }
  },
  lastsync:{
      
      
     
        url: "https://" + siteName + ".integrations." + siteDomain + "/api/third_party_sync_details/tpmeta?integration_name=hubspot",
        headers: headers,
        
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        type: type,
    }
};


done(params);