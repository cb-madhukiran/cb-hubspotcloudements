if(steps.ChargebeeGetGetHttpData.response.code <300) {
  done({
    cb_status:"success",
    data:steps.ChargebeeGetGetHttpData.response.body
  });
}else {
  let cb_error_code = "formula_default_error";

  let hardstop = steps.ChargebeeGetInputParams.hardStop[steps.ChargebeeGetGetHttpData.response.code] !== undefined;
  if(steps.ChargebeeGetGetHttpData.response.body!== undefined && steps.ChargebeeGetGetHttpData.response.body.error_code !== undefined) {
    cb_error_code = steps.ChargebeeGetGetHttpData.response.body.error_code;
  }
  done({
    cb_status:"failure",
    cb_error_code:cb_error_code,
    cb_exit:hardstop,
    cb_status_code:steps.ChargebeeGetGetHttpData.response.code
  });
}

