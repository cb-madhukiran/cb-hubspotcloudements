if(steps.DealsInputParams.invoiceData.list !== undefined && steps.DealsInputParams.invoiceData.list.length>0){
  

steps.CBInfo.invoice = {total : steps.DealsInputParams.invoiceData.list[0].invoice.total,paid:steps.DealsInputParams.invoiceData.list[0].invoice.amount_paid};
}

if(steps.getPlanById.data !== undefined && steps.getPlanById.data.plan !== undefined ) {
  steps.SubParam.plans[steps.getPlanById.data.plan.id] = steps.getPlanById.data.plan;
}
steps.DealInfo.name = "";
let customer = steps.CBInfo.customer;
if(customer.first_name !== undefined && customer.first_name !== ""){
  steps.DealInfo.name = customer.first_name;
}
if(customer.last_name !== undefined && customer.last_name !== ""){
  steps.DealInfo.name += " " +customer.last_name;
}

if( steps.DealInfo.name==="") {
   if (steps.DealInfo.contact !== undefined && steps.DealInfo.contact.properties !== undefined) {
      if (steps.DealInfo.contact.properties.firstname !== undefined && steps.DealInfo.contact.properties.firstname.value !== undefined &&  steps.DealInfo.contact.properties.firstname.value !== "") {
        steps.DealInfo.name = steps.DealInfo.contact.properties.firstname.value;
      }
      if (steps.DealInfo.contact.properties.lastname !== undefined && steps.DealInfo.contact.properties.lastname.value !== undefined && steps.DealInfo.contact.properties.lastname.value !== "") {
        steps.DealInfo.name += " " + steps.DealInfo.contact.properties.lastname.value;
      }
   }
}

if( steps.DealInfo.name==="") {
  steps.DealInfo.name = customer.id;
}
done({
  CBInfo :steps.CBInfo,
  DealInfo : steps.DealInfo
});