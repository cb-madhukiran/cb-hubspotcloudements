 let  customer =  steps.LoopOverSubscriptions.entry.customer;
  let subscription =  steps.LoopOverSubscriptions.entry.subscription;
  

let data = {
  customer : customer,
  subscription : subscription,
  url: "https://" + steps.DealsInputParams.siteName + "." + steps.DealsInputParams.siteDomain + "/api/v2/third_party_entity_mappings/retrieve",
  headers: {
    Authorization: "Basic " + CE.b64(steps.DealsInputParams.apiKey + ":" + "")
  },
  query: {
      'integration_name': steps.DealsInputParams.type,
      'entity_id': encodeURIComponent(customer.id),
      'entity_type': 'customer'
  },
  apiKey: steps.DealsInputParams.apiKey,
  siteName: steps.DealsInputParams.siteName,
  siteDomain:steps.DealsInputParams.siteDomain,
  type: "hubspot", 
};

if(steps.SubParam.plans[subscription.plan_id] === undefined){
  data.planurl = "https://"+steps.DealsInputParams.siteName+"."+steps.DealsInputParams.siteDomain+"/api/v2/plans/" +encodeURIComponent(subscription.plan_id);
}

done(data);