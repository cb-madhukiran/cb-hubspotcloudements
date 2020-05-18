if(steps.getPlanById.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode = steps.getPlanById.cb_error_code;
  done(false);
}