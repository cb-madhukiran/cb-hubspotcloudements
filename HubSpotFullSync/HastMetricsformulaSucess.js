let result = steps.GetMetricsResultValue.response.body;
let cbErrorCode;
for(var i=0;i<result.length;i++){
  if(result[i].key === "DoneMetrics.cbErrorCode") {
    cbErrorCode = result[i].value;
  }
}
if(cbErrorCode === undefined) {
  done(true);
}else {
   steps.ConfigData.errorCode = cbErrorCode;
   done(false);
}