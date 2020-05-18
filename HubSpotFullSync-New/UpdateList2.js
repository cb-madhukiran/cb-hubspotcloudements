let cData = steps.GetCustomers.data;
if (cData !== undefined && cData.list !== undefined && cData.list.length > 0) {
  for(var i=0;i<cData.list.length ;i++){
    steps.Customer.customer.push(cData.list[i].customer);
      }
}
done(true);