let result = steps.GetDealExecutionStatus.response.body.stepExecutions;
let stepId;
for(var i=0;i<result.length;i++){
  if(result[i].stepName ==="SyncDone" ||
  result[i].stepName ==="UpdateSyncError" ||
  result[i].stepName ==="HardStop") {
    stepId = result[i].id;
  }
}
done({
  url:"/formulas/instances/executions/steps/"+stepId+"/values"
});