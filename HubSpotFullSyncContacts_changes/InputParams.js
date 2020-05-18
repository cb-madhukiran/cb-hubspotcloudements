let apiKey = trigger.args['cb-api-key'];
let siteName = trigger.args['cb-site-name'];
let type = trigger.args.type;
let siteDomain = trigger.args['cb-domain'];
let autoSync = trigger.args.autoSync;
let customers = trigger.args.customers;
if(autoSync===undefined) {
  autoSync = false;
}

if(autoSync==="true" || autoSync === true){
  autoSync = true;
}else {
  autoSync = false;
}

let password = "";
let data = {
   input: {
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        autoSync: autoSync,
        type: type,
        customers:customers
    },
    tpconfigfetch:{
    apiKey: apiKey,
    siteName: siteName,
    siteDomain:siteDomain,
    retry : retry,
    type: type,
    url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
      headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: "hubspot"
      }
    },
    
    cbcustomfieldfetch:{
    apiKey: apiKey,
    siteName: siteName,
    siteDomain:siteDomain,
    retry : retry,
    type: type,
    url: "https://"+siteName+"."+siteDomain+"/api/v2/custom_field_configs",
      headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: "hubspot"
      }
    },
    
    config: {
        url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_configurations",
        syncUrl: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_sync_details/retrieve_latest_sync",
        customFieldUrl: "https://" + siteName + "." + siteDomain + "/api/v2/custom_field_configs",
        auth: {
            Authorization: "Basic " + CE.b64(apiKey + ":" + password)
        },
        query: {
            integration_name: type
        }
    },
    update: {
        url: "https://" + siteName + ".integrations." + siteDomain + "/integrations/update_tp_integ_conf",
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        body: {
            integration_name: type,
            site_name: siteName,
            api_key: apiKey
        }
    },
};

done(data);