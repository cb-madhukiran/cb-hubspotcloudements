let data = {
  data: [],
  props: []
};

if (steps.GetDeals.data !== undefined && steps.GetDeals.data.deals !== undefined && steps.GetDeals.data.deals.length > 0) {
  for (var i = 0; i < steps.GetDeals.data.deals.length; i++) {
    let cp = steps.GetDeals.data.deals[i];
    if (cp.properties !== undefined && cp.properties.cb_subscriptionid !== undefined && cp.properties.cb_subscriptionid.value !== undefined) {
      data.props.push({
        headers : steps.UpdateToken.headers,
  url : "https://api.hubapi.com/deals/v1/deal/" + cp.dealId,
  siteName : steps.InputParams.siteName,
  siteDomain : steps.InputParams.siteDomain,
  apiKey : steps.InputParams.apiKey,
  type : steps.InputParams.type

      });
    }
  }
}

done(data);