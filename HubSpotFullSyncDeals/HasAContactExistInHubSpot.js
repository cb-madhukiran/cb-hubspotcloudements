let cResponse = steps.getCurrentHubspotcontact.data;
if(steps.getCurrentHubspotcontact.cb_status==="success") {
  steps.DealInfo.contact =cResponse; 
  steps.DealInfo.url.getDealByContact =  "https://api.hubapi.com/crm-associations/v1/associations/" + cResponse.vid + "/HUBSPOT_DEFINED/4";
  if(cResponse["associated-company"] !== undefined && cResponse["associated-company"]["company-id"] !== undefined) {
    steps.DealInfo.url.getDealByCompany =  "https://api.hubapi.com/crm-associations/v1/associations/" + cResponse ["associated-company"]["company-id"]+ "/HUBSPOT_DEFINED/4"; 
  }
  done(true);
}else {
  done(false);
}