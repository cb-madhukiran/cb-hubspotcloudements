if(steps.getHubspotPipeline.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode =  steps.getHubspotPipeline.cb_error_code;
  done(false);
}