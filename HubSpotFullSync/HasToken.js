if(steps.RefreshToken.accessToken!== undefined) {
 steps.ConfigData.configJson.config_json.cloudElements.thirdParty.accessToken = steps.RefreshToken.accessToken;
   steps.ConfigData.configJson.config_json.cloudElements.thirdParty.refreshToken = steps.RefreshToken.refreshToken;
    steps.ConfigData.configJson.config_json.cloudElements.thirdParty.expiresIn = steps.RefreshToken.expiresIn;
    
    steps.InputParams.updateconfig.body.config_json = steps.ConfigData.configJson.config_json;
    done(false);
}else {
  done(true);
}