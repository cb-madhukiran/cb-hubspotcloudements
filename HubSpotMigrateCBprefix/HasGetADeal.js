if(steps.GetADeal.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = "GetADeal " + steps.GetADeal.cb_error_code;
  done(false);
}