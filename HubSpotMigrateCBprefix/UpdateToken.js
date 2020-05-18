if(steps.RefreshToken.accessToken!== undefined) {
steps.InputParams.configJson.config_json.cloudElements.thirdParty.accessToken = steps.RefreshToken.accessToken;
   steps.InputParams.configJson.config_json.cloudElements.thirdParty.refreshToken = steps.RefreshToken.refreshToken;
   steps.InputParams.configJson.config_json.cloudElements.thirdParty.expiresIn = steps.RefreshToken.expiresIn;

}

let headers =  {
      "Authorization":"Bearer "+steps.InputParams.configJson.config_json.cloudElements.thirdParty.accessToken,
       Accept: "application/json"
    };
    
let data = {
    headers:headers,
};
done(data);