if(steps.GetHubSpotGroup.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode =  "HubSpotGroup "+ steps.GetHubSpotGroup.cb_error_code;
  done(false);
}