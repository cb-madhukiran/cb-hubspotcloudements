if(steps.createDealInHubspot.cb_status === "success") {
    steps.ValidatePipeLineAndStage.deleteDeal = {
      url :"https://api.hubapi.com/deals/v1/deal/" + steps.createDealInHubspot.data.dealId,
       headers: {
    "Authorization": "Bearer "+ steps.CBParam.thirdParty.accessToken
  },
  
    };
   done(true);
}else {
  steps.InputParams.cb_error = "create_deal_failed";
  steps.InputParams.cb_message = "create_deal_failed";
  done(false);
}