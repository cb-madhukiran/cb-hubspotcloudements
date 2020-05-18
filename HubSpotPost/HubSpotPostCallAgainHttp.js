
if(steps.HubSpotPostInputParams.intervel.length > 0 && steps.HubSpotPostInputParams.retryCode[steps.HubSpotPostPostHttpData.response.code] !== undefined) {
  steps.HubSpotPostInputParams.delay.query.delay = steps.HubSpotPostInputParams.intervel.pop();
  done(true);
}else {
  done(false);
}
