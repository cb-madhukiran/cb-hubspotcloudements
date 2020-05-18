let updateProps = false;
let errorFlag = false;
let groupDetails = null;

if (steps.GetHubspotCompanyGroup.data === undefined) {
  erroFlag = true;
  updateProps = false;
  steps.InputParams.errorCode = "nogroupfound";
} 

for(var j=0; j < steps.GetHubspotCompanyGroup.data.length; j++){
  if(steps.GetHubspotCompanyGroup.data[j].name === "chargebeesubscriptionmetrics"){
    groupDetails = steps.GetHubspotCompanyGroup.data[j];
    break;
  }
}

if(groupDetails === null){
  erroFlag = true;
  updateProps = false;
  steps.InputParams.errorCode = "nogroupfound";
}
else {
  for (var i = 0; i < steps.groupDetails.properties.length; i++) {
    if ((steps.groupDetails.properties[i].name === steps.loopOverCompanyProperties.entry.name) && (steps.groupDetails.properties[i].type === steps.loopOverCompanyProperties.entry.type)) {
      updateProps = false;
      break;
    } else {
      updateProps = true;
    }
  }
}

if (updateProps) {
  updatePayload = {
    url: "https://api.hubapi.com/properties/v1/companies/properties/named/"+steps.loopOverCompanyProperties.entry.name,
    headers: steps.UpdateToken.headers,
    apiKey: steps.InputParams.apiKey,
    siteName: steps.InputParams.siteName,
    siteDomain: steps.InputParams.siteDomain,
    type: steps.InputParams.type,
    body: steps.loopOverCompanyProperties.entry
  };
}

done({
  errorFlag: errorFlag,
  update: updateProps,
  updatePayload: updatePayload
});