if(steps.UpdateCompanyProperties.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = "UpdateCompanyProperties " + steps.UpdateCompanyProperties.cb_error_code;
  done(false);
}