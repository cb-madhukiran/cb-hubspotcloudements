if(steps.getDealsByCompany.cb_status==="success") {
  done(true);
}else {
   steps.DealsInputParams.errorCode =  steps.getDealsByCompany.cb_error_code;
  done(false);
}