let result = steps.GetCustomExecutionStatus.response.body.stepExecutions;
let stepId;
for(var i=0;i<result.length;i++){
  if(result[i].stepName ==="DoneCustom") {
    stepId = result[i].id;
  }
}
done({
  url:"/formulas/instances/executions/steps/"+stepId+"/values"
});