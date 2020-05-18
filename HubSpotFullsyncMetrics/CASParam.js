let data = {
  limit:50,
};
if(steps.CompanyMetrics.offset.offset !== undefined) {
  data.offset = steps.CompanyMetrics.offset.offset;
}

let params = {
  query : data,
  headers : steps.HubSpotParam.hubspotAuth,
  url: steps.CompanyMetrics.url,
  apiKey : steps.MetricsInputParams.input.apiKey
};
done(params);