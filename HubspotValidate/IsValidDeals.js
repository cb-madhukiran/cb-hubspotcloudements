if(steps.ValidateDeals.cb_status==="sucess"){
  done(true);
}else {
  if(steps.ValidateDeals.cb_error === "no_tp_integ_config") {
    steps.InputParams.result.msg = "Error occurred in fetching Config ";
  }else if(steps.ValidateDeals.cb_error === "no_pipe_line") {
    steps.InputParams.result.msg = "Missing  PipeLine " + steps.ValidateDeals.cb_message;
  }else if(steps.ValidateDeals.cb_error === "no_stage") {
     steps.InputParams.result.msg = "Missing  Stage " + steps.ValidateDeals.cb_message;
  }else if(steps.ValidateDeals.cb_error === "create_deal_failed") {
    steps.InputParams.result.msg = "Deal Creation failed ";
  }else {
     steps.InputParams.result.msg = "Error occurred in fetching Config ";
  }
  
  done(false);
}