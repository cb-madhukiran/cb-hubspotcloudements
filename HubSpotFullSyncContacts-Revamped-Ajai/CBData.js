let cbMappedField = steps.ContactInputParams.input.cbMappedField;

let data = {
  customer : steps.LoopOverCustomer.entry,
  hubspot:{
    contactByEmail:"https://api.hubapi.com/contacts/v1/contact/email/"+  steps.LoopOverCustomer.entry.email+"/profile",
    contactByOtherFields: "https://api.hubapi.com/contacts/v1/search/query?q="+steps.LoopOverCustomer.entry[cbMappedField]
  },
  order:{
    "before":{},
    "after":{}
  }
};
done(data);