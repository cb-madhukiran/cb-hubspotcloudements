let params = {
  url: "https://api.hubapi.com/crm-pipelines/v1/pipelines/deals",
  headers: {
    "Authorization":"Bearer "+ steps.getChargebeeConfigs.data.third_party_configuration.config_json.cloudElements.thirdParty.accessToken
  },
  apiKey: steps.setupCBConfig.apiKey,
  siteName: steps.setupCBConfig.siteName,
  siteDomain: steps.setupCBConfig.siteDomain,
  type: "hubspot",
};
done(params);