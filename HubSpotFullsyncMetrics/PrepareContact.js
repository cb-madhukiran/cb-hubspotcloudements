let data = {
  list:[],
};

if(steps.ChargebeeGetTpData.data!==undefined && steps.ChargebeeGetTpData.data.list!==undefined &&   steps.ChargebeeGetTpData.data.list.length>0) {
  let list =  steps.ChargebeeGetTpData.data.list;
  for(var i=0;i<list.length;i++){
    if(list[i].third_party_entity_mapping.third_party_entity_id !== undefined) {
      data.list.push("https://api.hubapi.com/contacts/v1/contact/vid/"+list[i].third_party_entity_mapping.third_party_entity_id+"/profile");
      steps.ContactList.map[list[i].third_party_entity_mapping.third_party_entity_id] = list[i].third_party_entity_mapping.third_party_entity_id;
    }
  }
}
done(data);