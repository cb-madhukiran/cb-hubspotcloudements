let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let type = trigger.args.request.query["integrationName"];
let siteDomain = trigger.args.request.query['cb-domain'];
let password = "";
let params = {
  url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
  headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
  },
  query:{
        integration_name: type
      },
  apiKey: apiKey,
  password: password,
  siteName: siteName,
  siteDomain:siteDomain,
  type: type,    
};

done(params);