let curTime = Math.round((new Date().getTime()) / 1000);
curTime = curTime - 1800;
let thirdParty = steps.ChargebeeConfig.data.config_json.cloudElements.thirdParty;
let data = {
  thirdParty:thirdParty,
  syncRulesDeals:steps.ChargebeeConfig.data.config_json.cloudElements.syncRulesDeals
};
let expiresIn = Number(thirdParty.expiresIn);
if (expiresIn < curTime) {
  data.refresh = {
    url: "https://api.hubapi.com/oauth/v1/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    query: {
      grant_type: "refresh_token",
      client_id:thirdParty.clientId,
      client_secret: thirdParty.clientSecret,
      refresh_token: thirdParty.refreshToken,
    }
  };
}

done(data);