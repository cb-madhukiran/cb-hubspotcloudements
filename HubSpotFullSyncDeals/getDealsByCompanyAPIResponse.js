if(steps.getDealsByCompany.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode =  steps.getDealsByCompany.cb_error_code;
  done(false);
}