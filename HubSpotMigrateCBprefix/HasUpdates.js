//done(steps.HubContactInput.url !== undefined);
if(steps.AllContacts.data.length>0) {
  steps.AllContacts.input = {
    url: "https://api.hubapi.com/contacts/v1/contact/batch",
    body: steps.AllContacts.data,
    headers: steps.UpdateToken.headers,
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
  };
  done(true);
}else {
  done(false);
}
