 let  customer =  steps.LoopOverSubscriptions.entry.customer;
  let subscription =  steps.LoopOverSubscriptions.entry.subscription;
  
if(customer.first_name){
  steps.DealInfo.name = customer.first_name;
}
if(customer.last_name){
  steps.DealInfo.name += " " +customer.last_name;
}
if( steps.DealInfo.name==="") {
  steps.DealInfo.name = customer.id;
}

let data = {
  customer : customer,
  subscription : subscription,
  url: "https://" + steps.InputParams.siteName + "." + steps.InputParams.siteDomain + "/api/v2/third_party_entity_mappings/retrieve",
  headers: {
    Authorization: "Basic " + CE.b64(steps.InputParams.apiKey + ":" + "")
  },
  query: {
      'integration_name': steps.InputParams.type,
      'entity_id': encodeURIComponent(customer.id),
      'entity_type': 'customer'
  },
  apiKey: steps.InputParams.apiKey,
  siteName: steps.InputParams.siteName,
  siteDomain:steps.InputParams.siteDomain,
  type: "hubspot", 
};

if(steps.SubParam.plans[subscription.plan_id] === undefined){
  data.planurl = "https://"+steps.InputParams.siteName+"."+steps.InputParams.siteDomain+"/api/v2/plans/" +encodeURIComponent(subscription.plan_id);
}

done(data);