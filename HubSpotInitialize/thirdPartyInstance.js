
let thirPartyInstanceName = steps.UpdateParams.input.siteName + '-hubspot';

let body = {
  name: thirPartyInstanceName,
  configuration: {
    "access_token":"Bearer " +steps.UpdateParams.input.accessToken
  },
  tags: [thirPartyInstanceName,steps.UpdateParams.input.siteName]
};


done({
  thirdPartyElementBody: body
});

