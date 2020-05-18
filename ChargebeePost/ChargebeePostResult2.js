if(steps.ChargebeePostPostHttpData.response.code <300) {
  done({
    cb_status:"success",
    data:steps.ChargebeePostPostHttpData.response.body
  });
}else {
  let cb_error_code = "formula_default_error";

  let hardstop = steps.ChargebeePostInputParams.hardStop[steps.ChargebeePostPostHttpData.response.code] !== undefined;
  if(steps.ChargebeePostPostHttpData.response.body!== undefined && steps.ChargebeePostPostHttpData.response.body.error_code !== undefined) {
    cb_error_code = steps.ChargebeePostPostHttpData.response.body.error_code;
  }
  done({
    cb_status:"failure",
    cb_error_code:cb_error_code,
    cb_exit:hardstop,
    rbody:steps.ChargebeePostPostHttpData.response.body
  });
}

