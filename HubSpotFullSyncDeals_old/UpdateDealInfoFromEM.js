 if(steps.GetDealByID.response.code == 200) {
   steps.DealInfo.deal = steps.GetDealByID.response.body;
   steps.DealInfo.dealOp = "update";
 }else {
  steps.DealInfo.dealId = undefined;
  steps.DealInfo.oldSubscriptionStatus = undefined;
  steps.DealInfo.getDealByID = undefined;
  steps.DealInfo.dealOp = "create";
 }
 done(true);