if(steps.GetAContact.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = "GetAContact " + steps.GetAContact.cb_error_code;
  done(false);
}