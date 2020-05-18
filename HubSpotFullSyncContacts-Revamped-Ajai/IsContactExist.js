if(steps.SearchHubspotContact.cb_status !== "success"){
  done({
    flag: 'error'
  });
}

let dataPayload = steps.SearchHubspotContact.data;
let cbMappedField = steps.ContactInputParams.input.cbMappedField;
let hubSpotMappedField = steps.ContactInputParams.input.hubSpotMappedField;
let hubspotMappedFieldValue;
let chargebeeMappedFieldValue = steps.LoopOverCustomer.entry[cbMappedField];

for(var i=0; i < dataPayload.contacts.length; i++){
  hubspotMappedFieldValue = (dataPayload.contacts[i]['properties'][hubSpotMappedField] !== undefined) ? dataPayload.contacts[i]['properties'][hubSpotMappedField]['value'] : undefined;
  
  if(hubspotMappedFieldValue === undefined){
    done({
       flag: 'false'
    });
  }
  
  if(dataPayload.contacts[i]['properties'][hubSpotMappedField]['value'] == steps.LoopOverCustomer.entry[cbMappedField]){
      if(dataPayload.contacts[i].properties.chargebeecustomerid == steps.LoopOverCustomer.entry.id){
        done({
          flag: 'true',
          contact: dataPayload.contacts[i]
        });
      }else{
        done({
          flag: 'error',
          contact: dataPayload.contacts[i]
        });
      }
  }
}

done({
  flag: 'false'
});
