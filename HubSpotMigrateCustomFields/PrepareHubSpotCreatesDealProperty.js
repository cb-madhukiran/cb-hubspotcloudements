let updateProps = false;
let errorFlag = false;
if (steps.GetHubspotDealGroup.data === undefined || steps.GetHubspotDealGroup.data.name === undefined) {
  erroFlag = true;
  updateProps = false;
  steps.InputParams.errorCode = "nogroupfound";
} else {
  for (var i = 0; i < steps.GetHubspotDealGroup.data.properties.length; i++) {
    if ((steps.GetHubspotDealGroup.data.properties[i].name === steps.loopOverDealProperties.entry.name) && (steps.GetHubspotDealGroup.data.properties[i].type === steps.loopOverDealProperties.entry.type)) {
      updateProps = false;
      break;
    } else {
      updateProps = true;
    }
  }
}

if (updateProps) {
  updatePayload = {
    url: "https://api.hubapi.com/properties/v1/deals/properties/named/"+steps.loopOverDealProperties.entry.name,
    headers: steps.UpdateToken.headers,
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
    body: steps.loopOverDealProperties.entry
  };
}

done({
  errorFlag: errorFlag,
  update: updateProps,
  updatePayload: updatePayload
});