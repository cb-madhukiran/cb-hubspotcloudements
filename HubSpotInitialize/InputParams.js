var moment = require('moment');
let cbApiInfo = JSON.parse(trigger.args.request.query.cb_api_info);
let apiKey = cbApiInfo['cb-api-key'];
let siteName = cbApiInfo['cb-site-name'];
let integrationName = cbApiInfo.integrationName;
let siteDomain =cbApiInfo.siteDomain;

let refreshToken = trigger.args.request.query.refresh_token;
let expiresIn = moment().unix() + Number(trigger.args.request.query.expires_in) - 1800;

let accessToken = trigger.args.request.query.access_token;

let params = {
  input: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain:siteDomain,
    integrationName: integrationName,
    refreshToken: refreshToken,
    expiresIn: expiresIn,
    accessToken:accessToken
  },
   gUrl: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
     
      gAuth:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + "")
      },
      gQuery:{
        integration_name: integrationName
      },
       updateUrl: "https://"+siteName+".integrations."+siteDomain+"/integrations/update_tp_integ_conf",
  headers: {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  },
  body:  {
     site_name: siteName,
     api_key: apiKey,
     integration_name: integrationName
  }
      
};



done(
  params
);