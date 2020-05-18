let data = {};
let props = [];
if(steps.GetCBCustomers.data !== undefined) {
  let keys = Object.keys(steps.GetCBCustomers.data);
  for(var i=0;i<keys.length;i++){
    if(steps.GetCBCustomers.data[keys[i]].cmrr !== undefined) {
      props.push({
        vid:steps.BulKInput.map[keys[i]],
        properties:[{
        "property": steps.InputParams.hubspotProperty,
        "value": steps.GetCBCustomers.data[keys[i]].cmrr
      }]
      });
    }
  }
}
if(props.length > 0) {
  data = {
    url: "https://api.hubapi.com/contacts/v1/contact/batch",
    body: props,
    headers: steps.UpdateToken.headers,
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
  };
}
done(data);