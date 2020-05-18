let params = steps.UpdateParams;
let accessToken  = params.input.accessToken;
 let configJson = steps.ChargebeeConfig.response.body.third_party_configuration.config_json;
 let portalId = steps.GetHubSpotOwner.response.body[0].portalId;
    configJson.cloudElements.thirdParty= {
      element: params.input.thirdPartyElement,
      instance: steps.formulaInformation.thirdParty,
      accessToken:accessToken,
      refreshToken: params.input.refreshToken,
      expiresIn: params.input.expiresIn,
      clientId:configJson.cloudElements.setup.clientId,
      clientSecret:configJson.cloudElements.setup.clientSecret,
      portalId:portalId
    };



params.body.config_json = configJson;
//params.body.config_json.new_sub_step="step_1";
done(params);

