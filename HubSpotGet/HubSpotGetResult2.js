let response  = steps.HubSpotGetGetHttpData.response;
if(response.code <300) {
  done({
    cb_status:"success",
    data:response.body,
    cb_code:response.code,
  });
}else {
  let cb_error_code = "hubspot_default_error";

  let hardstop = steps.HubSpotGetInputParams.hardStop[response.code] !== undefined;
  if(response.body!== undefined && response.body.category !== undefined) {
    cb_error_code = "hubspot_" +response.body.category;
  }
  done({
    cb_status:"failure",
    cb_error_code:cb_error_code,
    cb_exit:hardstop,
    cb_code:response.code,
  });
}
