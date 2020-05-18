if(steps.getInvoiceForDeal.cb_status==="success") {
  steps.DealsInputParams.invoiceData = steps.getInvoiceForDeal.data;
  done(true);
}else {
   steps.DealsInputParams.errorCode = steps.getInvoiceForDeal.cb_error_code;
  done(false);
}