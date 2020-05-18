let flag = false;
flag = steps.GetDealExecutionStatus.response.body.status === "success";

if(!flag){
  let result = steps.GetDealExecutionStatus.response.body.stepExecutions;
for(var i=0;i<result.length;i++){
  if(result[i].stepName ==="SyncDone" ||
  result[i].stepName ==="UpdateSyncError"
  || result[i].stepName ==="HardStop") {
    flag = true;
    break;
  }
}
}

if(flag){
  done(true);
}else {
  steps.Customer.exec = "Deal";
   steps.ConfigData.errorCode ==="cberror";
  done(false);
}