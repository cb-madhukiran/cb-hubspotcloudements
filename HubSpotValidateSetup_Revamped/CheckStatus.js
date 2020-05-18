let configJson = steps.ConfigParams.config_json;
let input = {
  error : false,
  done: false
};

if(steps.GetExecutionStatus.data.status === undefined) {
  input.error = true;
  input.done = true;
}else if(steps.ExecutionStatus.data.status === "error"){
  input.error = true;
  input.done = true;
}else if(steps.ExecutionStatus.data.status === "success"){
  input.error = false;
  input.done = true;
  
  input.result = steps.ExecutionStatus.data.finalStepJson;
      if(input.result.id===null)
      {
        input.error = true;
        input.done = true;
      }
  
  /*for(var i=0;i<steps.ExecutionStatus.response.body.stepExecutions.length;i++){
    if(steps.ExecutionStatus.response.body.stepExecutions[i]["stepName"] ==="validation") {
      input.result = steps.ExecutionStatus.response.body.stepExecutions[i];
      if(input.result.id===null)
      {
        input.error = true;
        input.done = true;
      }
      break;
    }
  }*/
  
}else if(steps.ExecutionStatus.data.status === "pending"){
  input.error = false;
  input.done = false;
}

if(input.error) {
  configJson.cloudElements.formulas.formula_Validate.execution.status = "FAILED";
  configJson.cloudElements.formulas.formula_Validate.execution.result = { 
    error:true,
    message:['Integration ERROR-- during data validation']
  };
  
}else {
  if( input.done){
    configJson.cloudElements.formulas.formula_Validate.execution.status = "DONE";
  }
}

done(input);