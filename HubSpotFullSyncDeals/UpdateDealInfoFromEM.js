 if(steps.getDealById.data.code == 200) {
   steps.DealInfo.deal = steps.getDealById.data;
   steps.DealInfo.dealOp = "update";
 }else {
  steps.DealInfo.dealId = undefined;
  steps.DealInfo.oldSubscriptionStatus = undefined;
  steps.DealInfo.getDealByID = undefined;
  steps.DealInfo.dealOp = "create";
 }
 done(true);