if(steps.GetCustomHubSpotGroups.cb_status==="success" || steps.GetCustomHubSpotGroups.cb_code===404) {
   done(true);
}else {
   steps.ConfigData.errorCode =  steps.GetCustomHubSpotGroups.cb_error_code;
  done(false);
}