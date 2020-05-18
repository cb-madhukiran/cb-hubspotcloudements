let list = {
  executionIds : []
};

if(steps.executionParams === undefined){
  list.executionIds.push({"execution_id" : steps.LoopOverExecutions.entry.id,
    "site_name":steps.LoopOverConfigurations.entry.propertyValue,
    "Instance_id":steps.LoopOverInstance.entry.id
  }); 
}else{
  list = steps.executionParams;
  list.executionIds.push({"execution_id" : steps.LoopOverExecutions.entry.id,
  "site_name":steps.LoopOverConfigurations.entry.propertyValue,
  "Instance_id":steps.LoopOverInstance.entry.id
  });
}

done(list);