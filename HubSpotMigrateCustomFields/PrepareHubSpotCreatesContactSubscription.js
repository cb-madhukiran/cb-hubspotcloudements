let updateProps = false;
let errorFlag = false;
if (steps.GetHubspotContactGroupSubscription.data === undefined || steps.GetHubspotContactGroupSubscription.data.name === undefined) {
  erroFlag = true;
  updateProps = false;
  steps.InputParams.errorCode = "nogroupfound";
} else {
  for (var i = 0; i < steps.GetHubspotContactGroupSubscription.data.properties.length; i++) {
    if ((steps.GetHubspotContactGroupSubscription.data.properties[i].name === steps.loopOverContactPropertiesSubscription.entry.name) && (steps.GetHubspotContactGroupSubscription.data.properties[i].type === steps.loopOverContactPropertiesSubscription.entry.type)) {
      updateProps = false;
      break;
    } else {
      updateProps = true;
    }
  }
}

if (updateProps) {
  updatePayload = {
    url: "https://api.hubapi.com/properties/v1/contacts/properties/named/"+steps.loopOverContactPropertiesSubscription.entry.name,
    headers: steps.UpdateToken.headers,
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
    body: steps.loopOverContactPropertiesSubscription.entry,
  };
}

done({
  errorFlag: errorFlag,
  update: updateProps,
  updatePayload: updatePayload
});