if(steps.GetcustomerList.cb_status==="success") {
  done(true);
}else {
   steps.ConfigData.errorCode =  steps.GetcustomerList.cb_error_code;
  done(false);
}