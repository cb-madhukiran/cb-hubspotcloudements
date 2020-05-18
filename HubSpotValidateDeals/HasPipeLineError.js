if(steps.ValidatePipeLineAndStage.cb_error !== undefined) {
  steps.InputParams.cb_error = steps.ValidatePipeLineAndStage.cb_error,
  steps.InputParams.cb_message = steps.ValidatePipeLineAndStage.cb_message,
  done(true);
}else {
  done(false);
}