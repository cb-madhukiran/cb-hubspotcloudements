 let list = steps.GetTpData.data.list;
 for(var i=0;i<list.length;i++){
   let id = list[i].third_party_entity_mapping.entity_id;
   let message = list[i].third_party_entity_mapping.error_message;
   if(message !== undefined) {
     let dm = message.split("</a>");
     if(dm.length>1){
       message = dm[1];
     }
   }
   
   steps.CSVParam.input.body.file_content  = steps.CSVParam.input.body.file_content+ id + "," + message+"\n";
 }
 
 if (steps.GetTpData.data.next_offset !== undefined && steps.CSVParam.tpOffset.next_offset !== steps.GetTpData.data.next_offset) {
       steps.CSVParam.tpOffset.next_offset = steps.GetTpData.data.next_offset;
   
}else {
  steps.CSVParam.tpOffset = {};
}
done(true);