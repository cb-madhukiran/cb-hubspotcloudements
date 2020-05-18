if(steps.getDealsByContact.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = steps.getDealsByContact.cb_error_code;
  done(false);
}