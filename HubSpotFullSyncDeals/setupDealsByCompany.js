let params = {
  url: steps.DealInfo.url.getDealByCompany,
  headers: {
    "Authorization":"Bearer "+ steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.thirdParty.accessToken
  },
  apiKey: steps.InputParams.apiKey,
  siteName: steps.InputParams.siteName,
  siteDomain: steps.InputParams.siteDomain,
  type: "hubspot",
};
done(params);