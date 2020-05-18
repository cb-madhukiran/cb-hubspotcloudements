if(steps.GetACompany.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = "GetACompany " + steps.GetACompany.cb_error_code;
  done(false);
}