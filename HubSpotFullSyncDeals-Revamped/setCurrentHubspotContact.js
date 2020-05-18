let params = {
  url: steps.DealInfo.getContactId,
  headers: {
    "Authorization":"Bearer "+ steps.getChargebeeConfiguration.data.config_json.cloudElements.thirdParty.accessToken
  },
  apiKey: steps.DealsInputParams.apiKey,
  siteName: steps.DealsInputParams.siteName,
  siteDomain: steps.DealsInputParams.siteDomain,
  type: "hubspot",
};
done(params);