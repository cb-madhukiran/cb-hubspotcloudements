if(steps.getDealById.cb_status==="success" || steps.getDealById.cb_code === 404) {
  done(true);
}else {
   steps.DealsInputParams.errorCode =  steps.getDealById.cb_error_code;
  done(false);
}