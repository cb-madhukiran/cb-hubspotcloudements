let flag = steps.GetExecutionStatus.response.body.status === "success";
if(flag){
  done(true);
}else {
  steps.Customer.exec = "Contact";
  steps.ConfigData.errorCode ==="cberror";
  done(false);
}