let cResponse = steps.GetCurrentHubSpotContact.response;
if(cResponse.code === 200) {
  steps.DealInfo.contact =cResponse.body; 
  steps.DealInfo.url.getDealByContact =  "https://api.hubapi.com/crm-associations/v1/associations/" + cResponse.body.vid + "/HUBSPOT_DEFINED/4";
  if(cResponse.body["associated-company"] !== undefined && cResponse.body ["associated-company"]["company-id"] !== undefined) {
    steps.DealInfo.url.getDealByCompany =  "https://api.hubapi.com/crm-associations/v1/associations/" + cResponse.body ["associated-company"]["company-id"]+ "/HUBSPOT_DEFINED/4"; 
  }
  done(true);
}else {
  done(false);
}