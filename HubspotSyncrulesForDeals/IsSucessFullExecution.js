let stepExcutions = steps.GetExcutionStatus.response.body.stepExecutions;
let flag = false;
if(stepExcutions !== undefined ) {
  for(var i=0;i<stepExcutions.length;i++){
    if(stepExcutions[i].stepName === "HFRUpdateTokenInfo") {
      flag = true;
      break;
    }
  }
}
done(flag);