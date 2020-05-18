let tp =steps.getCustomerEntityMapping.data.third_party_entity_mapping;
if(tp.third_party_entity_id !== undefined) {
  steps.DealInfo.contactId = tp.third_party_entity_id;
  steps.DealInfo.getContactId = "https://api.hubapi.com/contacts/v1/contact/vid/"+tp.third_party_entity_id+"/profile";
  done(true);
}else {
  done(false);
}