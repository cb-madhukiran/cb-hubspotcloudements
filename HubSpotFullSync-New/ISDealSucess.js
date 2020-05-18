let flag = steps.GetDealExecutionStatus.response.body.status === "success";
if(flag){
  done(true);
}else {
  steps.Customer.exec = "Deal";
   steps.ConfigData.errorCode ==="cberror";
  done(false);
}