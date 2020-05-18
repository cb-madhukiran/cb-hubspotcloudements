if(steps.getLookUpDeal.cb_status==="success") {
  done(true);
  steps.DealInfo.deal = steps.getLookUpDeal.data;
  
  
}else {
   steps.DealsInputParams.errorCode =  steps.getLookUpDeal.cb_error_code;
  done(false);
}