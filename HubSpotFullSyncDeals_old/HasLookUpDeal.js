 if(steps.GetLookUPDeal.response.code == 200) {
   steps.DealInfo.deal = steps.GetLookUPDeal.response.body;
   steps.DealInfo.dealOp = "update";
   done(true);
 }else {
  steps.DealInfo.dealId = undefined;
  steps.DealInfo.oldSubscriptionStatus = undefined;
  steps.DealInfo.getDealByID = undefined;
  steps.DealInfo.dealOp = "create";
  done(false);
 }
 