let data = {
  customer :steps.CBData.customer,
  subscription:steps.CBData.subscription,
  order:{"before" :steps.CBData.order.before,
  "after": steps.CBData.order.after},
  invoice:{
    
  },
  cmrr : steps.CusSubDetails.cmrr
  
};
/*if(steps.CBData.result !== undefined) {
  if(steps.CBData.result.estimate !== undefined && steps.CBData.result.estimate.invoice_estimate !== undefined) {
    data.invoice.total = steps.CBData.result.estimate.invoice_estimate.amount_paid;
   data.invoice.estimate = steps.CBData.result.estimate.invoice_estimate.amount_due;
  }
}*/


  if(steps.CusSubDetails.estimate !== undefined && steps.CusSubDetails.estimate.invoice_estimate !== undefined) {
    data.invoice.total = steps.CusSubDetails.estimate.invoice_estimate.amount_paid;
   data.invoice.estimate = steps.CusSubDetails.estimate.invoice_estimate.amount_due;
  }
  if(data.invoice.total === 0 && steps.CusSubDetails.invoice !== undefined ) {
    data.invoice.total = steps.CusSubDetails.invoice.amount_paid;
  }
  


done(data);
