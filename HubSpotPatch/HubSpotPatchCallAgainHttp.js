
if(steps.HubSpotPatchInputParams.intervel.length > 0 && steps.HubSpotPatchInputParams.retryCode[steps.HubSpotPatchHttpData.response.code] !== undefined) {
  steps.HubSpotPatchInputParams.delay.query.delay = steps.HubSpotPatchInputParams.intervel.pop();
  done(true);
}else {
  done(false);
}
