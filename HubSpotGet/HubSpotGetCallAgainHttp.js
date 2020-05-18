if(steps.HubSpotGetInputParams.intervel.length > 0 && steps.HubSpotGetInputParams.retryCode[steps.HubSpotGetGetHttpData.response.code] !== undefined) {
  steps.HubSpotGetInputParams.delay.query.delay = steps.HubSpotGetInputParams.intervel.pop();
  done(true);
}else {
  done(false);
}
