let data = {
  customer :steps.CBData.customer,
  subscription:steps.CBData.subscription,
  order:steps.CBData.order,
  invoice:{
    
  }
  
};
if(steps.CBData.result !== undefined) {
  if(steps.CBData.result.estimate !== undefined && steps.CBData.result.estimate.invoice_estimate !== undefined) {
    data.invoice.total = steps.CBData.result.estimate.invoice_estimate.amount_paid;
   data.invoice.estimate = steps.CBData.result.estimate.invoice_estimate.amount_due;
  }
  
}

done(data);
