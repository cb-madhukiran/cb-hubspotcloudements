if(steps.isGetHubspotContactByMail !== undefined && steps.isGetHubspotContactByMail.continue === false){
  if(steps.IsContactExist === undefined){
    steps.CBData.hubspot.status = "error";
    done(false);
  }
  
  if(steps.IsContactExist.flag === 'true'){
    steps.CBData.hubspot.status = "update";
    steps.CBData.hubspot.contact = steps.IsContactExist.contact;
  }else if(steps.IsContactExist.flag === 'false'){
    steps.CBData.hubspot.status = "create";
    steps.CBData.hubspot.contact = steps.IsContactExist.contact;
  }else{
    steps.CBData.hubspot.status = "error";
  }
}else{
  let resp = steps.GetHubspotContactByEMail;
  if(resp.cb_status== "success"){
    let cbId = resp.data.properties.chargebeecustomerid;
     if(cbId !== undefined) {
        cbId =  cbId.value;
     }
     steps.CBData.hubspot.status= "update";
    if(resp.data.properties.chargebeecustomerid === undefined){
     steps.CBData.hubspot.contact = resp.data;
    }else if(steps.CBData.customer.id === cbId){
      steps.CBData.hubspot.contact = resp.data;
    }else {
       steps.CBData.hubspot.status= "error";
    }
  }else {
    steps.CBData.hubspot.status= "create";
  }
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