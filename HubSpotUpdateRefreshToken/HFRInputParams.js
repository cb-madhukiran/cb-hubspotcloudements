let data = {
  hubspot: trigger.args,
};
let curTime = Math.round((new Date().getTime()) / 1000);
curTime = curTime - 1800;

let expiresIn = Number(data.hubspot.expiresIn);
if (expiresIn < curTime) {
  data.refresh = {
    url: "https://api.hubapi.com/oauth/v1/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    query: {
      grant_type: "refresh_token",
      client_id: data.hubspot.clientId,
      client_secret: data.hubspot.clientSecret,
      refresh_token: data.hubspot.refreshToken,
    }
  };
}

let siteName = data.hubspot.cbSiteName;
let siteDomain = data.hubspot.cbDomain;
let apiKey = data.hubspot.cbApiKey;
let type = data.hubspot.type;
let headers = {
  Authorization: "Basic " + CE.b64(apiKey + ":"),
  api_key: apiKey
};
data.cbconfig = {
  url: "https://" + siteName + ".integrations." + siteDomain + "/api/third_party_configurations/tpmeta",
  query: {
    "integration_name": type,
  },
  headers: headers,
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: type,
};
data.updateconfig = {
  url: "https://" + siteName + ".integrations." + siteDomain + "/integrations/update_tp_integ_conf",
  headers: {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  },
  body: {
    integration_name: type,
    site_name: siteName,
    api_key: apiKey,
  },
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: type,
},

done(data);