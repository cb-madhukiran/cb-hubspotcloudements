if(steps.AllDeals.data.length>0) {
  steps.AllDeals.input = {
    url: "https://api.hubapi.com/deals/v1/batch-async/update",
    body: steps.AllDeals.data,
    headers: steps.UpdateToken.headers,
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
  };
  done(true);
}else {
  done(false);
}