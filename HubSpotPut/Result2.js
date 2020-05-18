if(steps.PutHttpData.response.code <300) {
  done({
    cb_status:"success",
    data:steps.PutHttpData.response.body
  });
}else {
  done({
    cb_status:"failure",
    msg:" Some thing went wrong"
  });
}