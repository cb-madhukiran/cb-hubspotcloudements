if(steps.getDealsByContact.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode = steps.getDealsByContact.cb_error_code;
  done(false);
}