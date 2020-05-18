
let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let type = trigger.args.request.query['type'];
let siteDomain = trigger.args.request.query['cb-domain'];
let action = trigger.args.request.query['action'];
let password = "";

let params = {
  input: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain:siteDomain,
    type: type,
    action:action,
    
    auth : {
        Authorization: "Basic " + CE.b64(apiKey + ":" + password),
        api_key : apiKey
      },
     config :{
      url: "https://" + siteName + ".integrations." + siteDomain + "/integrations/update_tp_integ_conf",
      syncUrl:"https://" + siteName + ".integrations." + siteDomain + "/api/third_party_sync_details/tpmeta",
      auth:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: type
      },
      syncQuery:{
        'third_party_configuration[integration_name]': type
      },
     
    },
    
    getTpIntegConf :{
        apiKey: apiKey,
        siteName: siteName,
        siteDomain:siteDomain,
        type: type,
        headers : {
            Authorization: "Basic " + CE.b64(apiKey + ":" + password),
            api_key : apiKey
          },
      url : "https://" + siteName + ".integrations." + siteDomain + "/api/third_party_configurations/tpmeta",
       query:{
        integration_name: type
      }
    },
    
    getTpIntegSync :{
      apiKey: apiKey,
      siteName: siteName,
      siteDomain:siteDomain,
      type: type,
      headers : {
          Authorization: "Basic " + CE.b64(apiKey + ":" + password),
          api_key : apiKey
        },
      url: "https://" + siteName + ".integrations." + siteDomain + "/api/third_party_sync_details/tpmeta?integration_name=hubspot"
      
    
    }
  }
};
done(params);