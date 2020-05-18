let data = {
  data: [],
  props: []
};

if (steps.GetContacts.data !== undefined && steps.GetContacts.data.contacts !== undefined && steps.GetContacts.data.contacts.length > 0) {
  for (var i = 0; i < steps.GetContacts.data.contacts.length; i++) {
    let cp = steps.GetContacts.data.contacts[i];
    if (cp.properties !== undefined && cp.properties.chargebeecustomerid !== undefined && cp.properties.chargebeecustomerid.value !== undefined) {
      data.props.push({
        headers : steps.UpdateToken.headers,
  url : "https://api.hubapi.com/contacts/v1/contact/vid/" + cp.vid + "/profile",
  siteName : steps.InputParams.siteName,
  siteDomain : steps.InputParams.siteDomain,
  apiKey : steps.InputParams.apiKey,
  type : steps.InputParams.type

      });
    }
  }
}

done(data);