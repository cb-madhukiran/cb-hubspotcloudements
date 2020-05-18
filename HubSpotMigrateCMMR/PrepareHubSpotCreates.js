let createGroup = false;
let createProps = false;
if (steps.GetHubSpotGroup.data === undefined || steps.GetHubSpotGroup.data.name === undefined) {
  createGroup = true;
  createProps = true;
   steps.InputParams.errorCode = "nogroupfound";
} else {
  for (var i = 0; i < steps.GetHubSpotGroup.data.properties.length; i++) {
    if (steps.GetHubSpotGroup.data.properties[i].name === steps.InputParams.hubspotProperty) {
      createProps = false;
      break;
    } else {
      createProps = true;
    }
  }
}

if (createGroup) {
  steps.UpdateToken.create.group = {
    url: "https://api.hubapi.com/properties/v1/contacts/groups",
    body: {
      "name": steps.InputParams.hubspotGroup,
      "displayName": "Chargebee customer info"
    },
    headers: steps.UpdateToken.headers,
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
  };
}
if (createProps) {
  steps.UpdateToken.create.prop = {
    url: steps.InputParams.hcreate.url,
    headers: steps.UpdateToken.headers,
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
    body: steps.InputParams.hcreate.body,
  };
}
done(steps.UpdateToken.create);
