if(steps.GetInvoiceForDeal.response.body.list !== undefined && steps.GetInvoiceForDeal.response.body.list.length>0){
  

steps.CBInfo.invoice = {total : steps.GetInvoiceForDeal.response.body.list[0].invoice.total,paid:steps.GetInvoiceForDeal.response.body.list[0].invoice.amount_paid};
}

if(steps.GetPlanByID.response.body !== undefined && steps.GetPlanByID.response.body.plan !== undefined ) {
  steps.SubParam.plans[steps.GetPlanByID.response.body.plan.id] = steps.GetPlanByID.response.body.plan;
}
done({
  CBInfo :steps.CBInfo,
  DealInfo : steps.DealInfo
});