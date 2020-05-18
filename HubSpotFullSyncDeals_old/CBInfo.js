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
  url: {
    "get": "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/retrieve",
    update: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/update_entity",
    invoice: "https://"+steps.InputParams.input.siteName+"."+steps.InputParams.input.siteDomain+"/api/v2/invoices",
  },
  auth: {
    Authorization: "Basic " + CE.b64(steps.InputParams.input.apiKey + ":" + "")
  },
  query: {
    customer: {
      'integration_name': steps.InputParams.input.type,
      'entity_id': encodeURIComponent(customer.id),
      'entity_type': 'customer'
    },
    subscription : {
      'integration_name': steps.InputParams.input.type,
      'entity_id': encodeURIComponent(subscription.id),
      'entity_type': 'subscription'
    },
    invoice : {
      subscription_id : encodeURIComponent(subscription.id),
      sort_by_desc : "date",
      limit :1
    }
  },
};

if(steps.SubParam.plans[subscription.plan_id] === undefined){
  data.planurl = "https://"+steps.InputParams.input.siteName+"."+steps.InputParams.input.siteDomain+"/api/v2/plans/" +encodeURIComponent(subscription.plan_id);
}
done(data);