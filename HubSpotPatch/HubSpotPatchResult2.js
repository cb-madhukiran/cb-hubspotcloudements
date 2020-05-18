if(steps.HubSpotPatchHttpData.response.code <300) {
  done({
    cb_status:"success",
    data:steps.HubSpotPatchHttpData.response.body,
    cb_code:steps.HubSpotPatchHttpData.response.code,
  });
}else {
  let cb_error_code = "hubspot_default_error";

  let hardstop = steps.HubSpotPatchInputParams.hardStop[steps.HubSpotPatchHttpData.response.code] !== undefined;
  if(steps.HubSpotPatchHttpData.response.body!== undefined && steps.HubSpotPatchHttpData.response.body.category !== undefined) {
    cb_error_code = "hubspot_"+steps.HubSpotPatchHttpData.response.body.category;
  }
  done({
    cb_status:"failure",
    cb_error_code:cb_error_code,
    cb_exit:hardstop,
    cb_code:steps.HubSpotPatchHttpData.response.code,
    response_body : steps.HubSpotPatchHttpData.response
  });
}
