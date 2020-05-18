if(steps.CreateCustomProperties.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode =  "CreateCustomProperties "+steps.CreateCustomProperties.cb_error_code;
  done(false);
}