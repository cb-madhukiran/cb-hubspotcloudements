let data = {
  map:{},
};

let customers=[];
if(steps.GetContacts.data !== undefined && steps.GetContacts.data.contacts !== undefined && steps.GetContacts.data.contacts.length >0){
  for(var i=0;i<steps.GetContacts.data.contacts.length;i++){
    let cp = steps.GetContacts.data.contacts[i];
    if(cp.properties !== undefined && cp.properties.chargebeecustomerid !== undefined && cp.properties.chargebeecustomerid.value !== undefined ) {
      data.map[cp.properties.chargebeecustomerid.value] = cp.vid;
      customers.push({"id":cp.properties.chargebeecustomerid.value});
    }
  }
}

if(customers.length > 0){
  data.input = {
     apiKey: steps.InputParams.apiKey,
        siteName: steps.InputParams.siteName,
        siteDomain: steps.InputParams.siteDomain,
        debugLoggingEnabled: true,
        type: steps.InputParams.type,
        customers:customers
  };
}
done(data);