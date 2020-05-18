let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let type = trigger.args.request.query.type;
let siteDomain = trigger.args.request.query['cb-domain'];
let action = trigger.args.request.query.action;
let password = "";

let params = {
  input: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain:siteDomain,
    type: type,
    action:action,
    
    getTpIntegConf : {
      apiKey: apiKey,
      siteName: siteName,
      siteDomain:siteDomain,
      type: type,
      url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
      headers:{
          Authorization: "Basic " + CE.b64(apiKey + ":" + password)
        },
        query:{
          integration_name: type
        }
    },
    getTpIntegSync : {
      apiKey: apiKey,
      siteName: siteName,
      siteDomain:siteDomain,
      type: type,
      url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_sync_details/retrieve_latest_sync",
      headers:{
          Authorization: "Basic " + CE.b64(apiKey + ":" + password)
        },
        query:{
        'third_party_configuration[integration_name]': type
      }
    },
    
    config :{
      url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
      syncUrl:"https://"+siteName+"."+siteDomain+"/api/v2/third_party_sync_details/retrieve_latest_sync",
      auth:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: type
      },
      syncQuery:{
        'third_party_configuration[integration_name]': type
      },
     
    }
  }
};
done(params);