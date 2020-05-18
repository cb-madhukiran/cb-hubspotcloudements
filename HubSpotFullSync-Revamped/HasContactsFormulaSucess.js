if(steps.UpdateConfigBody.cbErrorCode===undefined){
  done(true);
}else {
  steps.ConfigData.errorCode =steps.UpdateConfigBody.cbErrorCode;
  done(false);
}