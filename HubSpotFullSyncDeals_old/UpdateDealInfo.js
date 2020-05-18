if(steps.GetDealsByCompany.response.body.results.length>0) {
  steps.DealInfo.dealId = steps.GetDealsByCompany.response.body.results[0];
   steps.DealInfo.getDealByID = "https://api.hubapi.com/deals/v1/deal/"+steps.GetDealsByCompany.response.body.results[0];
    steps.DealInfo.dealOp = "update";
    
}else {
  steps.DealInfo.dealId = undefined;
   steps.DealInfo.getDealByID = undefined;
   steps.DealInfo.oldSubscriptionStatus = undefined;
   steps.DealInfo.dealOp = "create";
}
done(true);