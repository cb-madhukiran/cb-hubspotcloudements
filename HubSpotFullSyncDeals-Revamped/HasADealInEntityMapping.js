let tp =steps.getSubscriptionEntity.data.third_party_entity_mapping;
if(tp.third_party_entity_id !==undefined){
  steps.DealInfo.dealId = tp.third_party_entity_id;
  steps.DealInfo.oldSubscriptionStatus = tp.old_resource.status;
  steps.DealInfo.getDealByID = "https://api.hubapi.com/deals/v1/deal/"+tp.third_party_entity_id;
  steps.DealInfo.dealOp = "update";
  done(true);
}else {
  steps.DealInfo.dealOp = "create";
  done(false);
}
