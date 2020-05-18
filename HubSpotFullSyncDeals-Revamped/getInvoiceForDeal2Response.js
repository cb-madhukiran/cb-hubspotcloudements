if(steps.getInvoiceForDeal2.cb_status==="success") {
  steps.DealsInputParams.invoiceData = steps.getInvoiceForDeal2.data;
  done(true);
}else {
   steps.DealsInputParams.errorCode = 
   steps.getInvoiceForDeal2.cb_error_code;
  done(false);
}