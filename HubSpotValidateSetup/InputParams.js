
let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let type = trigger.args.request.query['type'];
let siteDomain = trigger.args.request.query['cb-domain'];
let retry = trigger.args.request.query['retry'];
let password = "";

if(retry === undefined || retry ==='false') {
  retry = false;
}else{
  retry = true;
}

let params = {
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
  
};

done(params);