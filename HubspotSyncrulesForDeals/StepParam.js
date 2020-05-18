let stepExcutions = steps.GetExcutionStatus.response.body.stepExecutions;
let url = "";
if(stepExcutions !== undefined ) {
  for(var i=0;i<stepExcutions.length;i++){
    if(stepExcutions[i].stepName === "HFRUpdateTokenInfo") {
      url = "/formulas/instances/executions/steps/"+stepExcutions[i].id+"/values";
      break;
    }
  }
}
done({url:url});