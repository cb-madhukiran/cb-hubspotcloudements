let resp = steps.GetHubSpotContactByEmail.response;
if(resp.code===200){
  let cbId = resp.body.properties.chargebeecustomerid;
   if(cbId !== undefined) {
      cbId =  cbId.value;
   }
   steps.CBData.hubspot.status= "update";
  if(resp.body.properties.chargebeecustomerid === undefined){
   steps.CBData.hubspot.contact = resp.body;
  }else if(steps.CBData.customerId === cbId){
    steps.CBData.hubspot.contact = resp.body;
  }else {
     steps.CBData.hubspot.status= "error";
  }
}else {
  steps.CBData.hubspot.status= "create";
}

if(steps.CBData.hubspot.status=== "error") {
  done(false);
}else if(steps.CBData.hubspot.status=== "update") {
  done(true);
}else {
  if(steps.CustomersParam.syncRulesContacts.HubSpotContactNoMatch==="Create_contact") {
    done(true);
  }else {
    done(false);
  }
}