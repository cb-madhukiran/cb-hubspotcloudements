if(steps.getCustomers.data.list!==undefined && steps.getCustomers.data.list.length >0){
  done(true);
}
else{
  steps.InputParams.result.msg = "Please add a customer and try again ";
  done(false);
}