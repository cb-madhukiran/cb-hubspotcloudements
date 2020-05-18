if(steps.UpdateDealConfigBody.cbErrorCode===undefined){
  done(true);
}else {
  steps.ConfigData.errorCode =steps.UpdateDealConfigBody.cbErrorCode;
  done(false);
}