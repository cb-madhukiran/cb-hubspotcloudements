if(steps.getInvoiceForDeal.data.list !== undefined && steps.getInvoiceForDeal.data.list.length>0){
  

steps.CBInfo.invoice = {total : steps.getInvoiceForDeal.data.list[0].invoice.total,paid:steps.getInvoiceForDeal.data.list[0].invoice.amount_paid};
}

if(steps.getPlanById.data !== undefined && steps.getPlanById.data.plan !== undefined ) {
  steps.SubParam.plans[steps.getPlanById.data.plan.id] = steps.getPlanById.data.plan;
}
done({
  CBInfo :steps.CBInfo,
  DealInfo : steps.DealInfo
});