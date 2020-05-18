if(steps.CreateCustomProperties.cb_status==="success") {
   done(true);
}
else if(steps.CreateCustomProperties.cb_status==="failure" && steps.CreateCustomProperties.response_body.body.message.includes("already exists") ){
  done(true);
}
else {
   steps.ConfigData.errorCode =  steps.CreateCustomProperties.cb_error_code;
  done(false);
}