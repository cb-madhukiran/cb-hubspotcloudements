let hubspotToken = steps.HVCChargebeeGetTpIntegConf.data.third_party_configuration.config_json.cloudElements.thirdParty.accessToken;

let getHubspotUserDataRequest = {
  url: "https://api.hubapi.com/integrations/v1/me",
  headers: {
    "Authorization": "Bearer "+hubspotToken
  }
};
  
done({
  getHubspotUserDataRequest: getHubspotUserDataRequest
});