let thirdPartyElementId = steps.thirdPartyInstanceFound.id || null;
let config = steps.getThirdPartyInstanceDetails.response.body.configuration;

let accessToken  = steps.UpdateParams.input.accessToken;

//config.configuration['authentication.type'] = "apiKey";
config.access_token = "Bearer " + accessToken;

let updateParams={
  url: "/instances/"+thirdPartyElementId,
  body: config
};

done({
  updateParams: updateParams
});

