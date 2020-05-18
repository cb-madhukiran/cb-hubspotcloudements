 let list = steps.GetTpData.response.body.list;
 for(var i=0;i<list.length;i++){
   let id = list[i].third_party_entity_mapping.entity_id;
   if(steps.CustomersParam.customerMap[id] === undefined) {
     steps.CustomersParam.customerMap[id] = id;
      steps.CustomersParam.customerList.push(id);
   }
 }
 
 if (steps.GetTpData.response.body.next_offset !== undefined && steps.CustomersParam.tpOffset.next_offset !== steps.GetTpData.response.body.next_offset) {
       steps.CustomersParam.tpOffset.next_offset = steps.GetTpData.response.body.next_offset;
   
}else {
  steps.CustomersParam.tpOffset = {};
}
done(true);