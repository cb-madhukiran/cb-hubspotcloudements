let customer = steps.LoopOverCustomer.entry;
// done(customer.email !== undefined);

if(steps.ContactInputParams.input.cbMappedField === null){
  done(false);
}else{
done(customer[steps.ContactInputParams.input.cbMappedField] !== undefined);
}