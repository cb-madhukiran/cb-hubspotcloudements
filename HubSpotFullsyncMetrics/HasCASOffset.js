if(steps.HubSpotGetCAS.data.hasMore) {
  if(steps.CompanyMetrics.offset.offset !== steps.HubSpotGetCAS.data.offset) {
    steps.CompanyMetrics.offset.offset = steps.HubSpotGetCAS.data.offset;
  }else {
    steps.CompanyMetrics.offset = {};
  }
}else {
  steps.CompanyMetrics.offset = {};
}

done( steps.CompanyMetrics.offset.offset !== undefined);