let curTime = Math.round((new Date().getTime()) / 1000) -1800;

steps.HFRInputParams.hubspot.accessToken = steps.HFRRefreshToken.response.body.access_token;
steps.HFRInputParams.hubspot.refreshToken = steps.HFRRefreshToken.response.body.refresh_token;
steps.HFRInputParams.hubspot.expiresIn = curTime + Number(steps.HFRRefreshToken.response.body.expires_in);

steps.HFRInputParams.updateconfig.body.config_json = steps.ChargebeeConfig.data.config_json;

steps.HFRInputParams.updateconfig.body.config_json.cloudElements.thirdParty.accessToken = steps.HFRInputParams.hubspot.accessToken;

steps.HFRInputParams.updateconfig.body.config_json.cloudElements.thirdParty.refreshToken = steps.HFRInputParams.hubspot.refreshToken;

steps.HFRInputParams.updateconfig.body.config_json.cloudElements.thirdParty.expiresIn = steps.HFRInputParams.hubspot.expiresIn;


done(steps.HFRInputParams.hubspot);