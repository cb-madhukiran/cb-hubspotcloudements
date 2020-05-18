if(steps.GetDeals.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = "GetDeals " + steps.GetDeals.cb_error_code;
  done(false);
}