 if(steps.getDealsByContact.data.results.length>0) {
    steps.DealInfo.dealId = steps.getDealsByContact.data.results[0];
    steps.DealInfo.getDealByID = "https://api.hubapi.com/deals/v1/deal/"+steps.getDealsByContact.data.results[0];
    steps.DealInfo.dealOp = "update";
 }else {
   steps.DealInfo.dealId = undefined;
   steps.DealInfo.getDealByID = undefined;
   steps.DealInfo.oldSubscriptionStatus = undefined;
   steps.DealInfo.dealOp = "create";
 }
 if(steps.DealInfo.dealOp === "create" && steps.DealInfo.url.getDealByCompany !==undefined) {
   done(true);
 }else {
   done(false);
 }
