let execution = steps.ConfigParams.config_json.cloudElements.formulas.formula_Validate.execution;
if(execution.status === "FAILED"){
done(false);
}
else{
  done(true);
}