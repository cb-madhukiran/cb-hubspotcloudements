let flag = steps.GetCustomExecutionStatus.response.body.status === "success";
if(flag){
  done(true);
}else {
  steps.Customer.exec = "Custom";
  steps.ConfigData.errorCode ==="cberror";
  done(false);
}