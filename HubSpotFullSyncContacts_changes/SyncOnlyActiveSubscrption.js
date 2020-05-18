let tp = steps.GetCustomerCBEM.response.body.third_party_entity_mapping;
if (tp.third_party_entity_id !== undefined) {
    steps.CBData.hubspot.contactId = tp.third_party_entity_id;
    steps.CBData.hubspot.contactById = "https://api.hubapi.com/contacts/v1/contact/vid/" + tp.third_party_entity_id + "/profile";

    if (tp.old_resource !== undefined) {
        if (tp.old_resource.customer !== undefined) {
            steps.CBData.hubspot.customer = tp.old_resource.customer;
        }
    }
}

let subResp = steps.CusSubDetails.subscription;
let subscription;
if(subResp !== undefined) {
    subscription = subResp.subResp;
}

let flag = false;
 steps.CBData.subscription = subscription;
if(steps.CustomersParam.syncRulesContacts.CustomersToSyn !== undefined && steps.CustomersParam.syncRulesContacts.CustomersToSync==="Customers_with_Active_subscriptions") {
  if(subscription !==undefined && subscription.status === 'active') {
    flag = true;
  }else {
    flag = false;
  }
}else {
  flag = true;
}
done(flag);
