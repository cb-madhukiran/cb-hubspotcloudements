if(steps.HubSpotPostPostHttpData.response.code <300) {
  done({
    cb_status:"success",
    data:steps.HubSpotPostPostHttpData.response.body,
    cb_code:steps.HubSpotPostPostHttpData.response.code,
  });
}else {
  let cb_error_code = "hubspot_default_error";

  let hardstop = steps.HubSpotPostInputParams.hardStop[steps.HubSpotPostPostHttpData.response.code] !== undefined;
  if(steps.HubSpotPostPostHttpData.response.body!== undefined && steps.HubSpotPostPostHttpData.response.body.category !== undefined) {
    cb_error_code = "hubspot_"+steps.HubSpotPostPostHttpData.response.body.category;
  }
  done({
    cb_status:"failure",
    cb_error_code:cb_error_code,
    cb_exit:hardstop,
    cb_code:steps.HubSpotPostPostHttpData.response.code,
    response_body : steps.HubSpotPostPostHttpData.response
  });
}
