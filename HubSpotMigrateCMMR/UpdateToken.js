if(steps.RefreshToken.accessToken!== undefined) {
 steps.InputParams.configJson.third_party_configuration.config_json.cloudElements.thirdParty.accessToken = steps.RefreshToken.accessToken;
   steps.InputParams.configJson.third_party_configuration.config_json.cloudElements.thirdParty.refreshToken = steps.RefreshToken.refreshToken;
    steps.InputParams.configJson.third_party_configuration.config_json.cloudElements.thirdParty.expiresIn = steps.RefreshToken.expiresIn;

}

let headers =  {
      "Authorization":"Bearer "+steps.InputParams.configJson.third_party_configuration.config_json.cloudElements.thirdParty.accessToken,
       Accept: "application/json"
    };
    
let data = {
  group :{
        url: steps.InputParams.hGroup,
        headers:headers,
        apiKey: steps.InputParams.apiKey,
        siteName: steps.InputParams.siteName,
        siteDomain: steps.InputParams.siteDomain,
        type: steps.InputParams.type,
    },
    headers:headers,
    create:{
}
};
done(data);


