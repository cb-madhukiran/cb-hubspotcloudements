let code = "";
if(steps.ChargebeeGetGetCBData !== undefined && steps.ChargebeeGetGetCBData.response !== undefined) {
  code = steps.ChargebeeGetGetCBData.response.code;
}
if(steps.ChargebeeGetInputParams.intervel.length > 0 && steps.ChargebeeGetInputParams.retryCode[code] !== undefined) {
  steps.ChargebeeGetInputParams.delay.query.delay = steps.ChargebeeGetInputParams.intervel.pop();
  done(true);
}else {
  done(false);
}
