let updateProps = false;
let errorFlag = false;
if (steps.GetHubspotContactGroupOrder.data === undefined || steps.GetHubspotContactGroupOrder.data.name === undefined) {
  erroFlag = true;
  updateProps = false;
  steps.InputParams.errorCode = "nogroupfound";
} else {
  for (var i = 0; i < steps.GetHubspotContactGroupOrder.data.properties.length; i++) {
    if ((steps.GetHubspotContactGroupOrder.data.properties[i].name === steps.loopOverContactPropertiesOrder.entry.name) && (steps.GetHubspotContactGroupOrder.data.properties[i].type === steps.loopOverContactPropertiesOrder.entry.type)) {
      updateProps = false;
      break;
    } else {
      updateProps = true;
    }
  }
}

if (updateProps) {
  updatePayload = {
    url: "https://api.hubapi.com/properties/v1/contacts/properties/named/"+steps.loopOverContactPropertiesOrder.entry.name,
    headers: steps.UpdateToken.headers,
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
    body: steps.loopOverContactPropertiesOrder.entry,
  };
}

done({
  errorFlag: errorFlag,
  update: updateProps,
  updatePayload: updatePayload
});