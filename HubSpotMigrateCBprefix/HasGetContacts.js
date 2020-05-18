if(steps.GetContacts.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = "GetContacts " + steps.GetContacts.cb_error_code;
  done(false);
}
