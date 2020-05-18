if(steps.AllCompanies.data.length>0) {
  steps.AllCompanies.input = {
    url: "https://api.hubapi.com/companies/v1/batch-async/update",
    body: steps.AllCompanies.data,
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