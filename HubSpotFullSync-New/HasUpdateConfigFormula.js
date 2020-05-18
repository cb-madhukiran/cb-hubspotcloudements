if(steps.UpdateConfigFormula.cb_status==="success") {
  done(true);
}else {
   steps.ConfigData.errorCode =  steps.UpdateConfigFormula.cb_error_code;
  done(false);
}