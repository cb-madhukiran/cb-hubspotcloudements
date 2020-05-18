let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let siteDomain = trigger.args.request.query['cb-domain'];
let integrationName = trigger.args.request.query.type;
let password = "";

let syncRuleForOrders = {
  sync : trigger.args.request.query.syncOrders,
};

let params = {
  input :{
    apiKey:apiKey,
    siteName:siteName,
    siteDomain:siteDomain,
    integrationName:integrationName
  },
  syncRuleForOrders: syncRuleForOrders,
 url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
    auth:{
      Authorization: "Basic " + CE.b64(apiKey + ":" + password)
    },
    query:{
      integration_name: integrationName
    }
};


done(params);


