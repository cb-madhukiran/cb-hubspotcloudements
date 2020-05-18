if(steps.getSubscriptionEntity.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode =  steps.getSubscriptionEntity.cb_error_code;
  done(false);
}