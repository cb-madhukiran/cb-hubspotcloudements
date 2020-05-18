let chargebeeInstanceId = 0;
let thirdPartyInstanceId = 0;


if (steps.thirdPartyInstanceFound !== undefined) {
  thirdPartyInstanceId = steps.thirdPartyInstanceFound.id;
}

if (steps.thirdPartyInstanceCreated !== undefined) {
  thirdPartyInstanceId = steps.thirdPartyInstanceCreated.id;
}

done({
  thirdParty: thirdPartyInstanceId,
  hUrl: "https://api.hubapi.com/owners/v2/owners",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer " + steps.InputParams.input.accessToken
  }  
});

