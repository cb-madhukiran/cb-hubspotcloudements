let data = {
  customer : steps.LoopOverCustomer.entry,
  hubspot:{
    contactByEmail:"https://api.hubapi.com/contacts/v1/contact/email/"+  steps.LoopOverCustomer.entry.email+"/profile"
  }
};
done(data);