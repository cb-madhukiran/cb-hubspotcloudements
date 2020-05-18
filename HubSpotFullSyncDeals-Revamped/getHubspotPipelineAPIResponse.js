if(steps.getHubspotPipeline.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode =  steps.getHubspotPipeline.cb_error_code;
  done(false);
}