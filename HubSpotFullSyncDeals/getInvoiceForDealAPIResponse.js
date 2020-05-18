if(steps.getInvoiceForDeal.cb_status==="success") {
  done(true);
}else {
   steps.InputParams.errorCode = steps.getInvoiceForDeal.cb_error_code;
  done(false);
}