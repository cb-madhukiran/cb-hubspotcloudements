let sValue = steps.GetStepValues.response.body;
let token = "";
for(var i=0;i<sValue.length;i++){
  if(sValue[i].key==="HFRUpdateTokenInfo.accessToken") {
    token = sValue[i].value;
  }
}
let data = {
  url:"https://api.hubapi.com/crm-pipelines/v1/pipelines/deals",
  hubspotAuth: {
      "Authorization":"Bearer "+token,
       Accept: "application/json"
    },
};
done(data);