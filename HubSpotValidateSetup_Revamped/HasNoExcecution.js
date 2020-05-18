let flag = false;
let excecution = steps.ConfigParams.config_json.cloudElements.formulas.formula_Validate.execution;

if(excecution === undefined || excecution.status === "DONE" || excecution.status === "FAILED"){
  flag = true;
}
else {
  flag = false;
  }

done(flag);