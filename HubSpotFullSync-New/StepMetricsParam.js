let result = steps.GetMetricsExecutionStatus.response.body.stepExecutions;
let stepId;
for(var i=0;i<result.length;i++){
  if(result[i].stepName ==="DoneMetrics") {
    stepId = result[i].id;
  }
}
done({
  url:"/formulas/instances/executions/steps/"+stepId+"/values"
});