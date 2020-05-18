if(steps.GetCompanies.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = "GetCompanies " + steps.GetCompanies.cb_error_code;
  done(false);
}