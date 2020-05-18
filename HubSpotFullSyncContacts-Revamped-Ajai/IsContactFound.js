if(steps.GetHubspotContactById.cb_status=="success"){
 steps.CBData.hubspot.contact = steps.GetHubspotContactById.data;
  steps.CBData.hubspot.status= "update";
  done(true);
}else {
 steps.CBData.hubspot.status= "create";
  done(false);
}