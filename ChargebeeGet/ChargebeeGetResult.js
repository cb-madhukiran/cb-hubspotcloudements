let code = 600;
if(steps.ChargebeeGetGetCBData !== undefined && steps.ChargebeeGetGetCBData.response !== undefined) {
  code = steps.ChargebeeGetGetCBData.response.code;
}
if(code < 300) {
  done({
    cb_status:"success",
    data:steps.ChargebeeGetGetCBData.response.body
  });
}else {
  let cb_error_code = "formula_default_error";

  let hardstop = steps.ChargebeeGetInputParams.hardStop[code] !== undefined;
  if(steps.ChargebeeGetGetCBData!== undefined && steps.ChargebeeGetGetCBData.response!== undefined && steps.ChargebeeGetGetCBData.response.body!== undefined && steps.ChargebeeGetGetCBData.response.body.error_code !== undefined) {
    cb_error_code = steps.ChargebeeGetGetCBData.response.body.error_code;
  }
  done({
    cb_status:"failure",
    cb_error_code:cb_error_code,
    cb_exit:hardstop,
    msg:steps.ChargebeeGetGetCBData.response,
    cb_status_code:code
  });
}

