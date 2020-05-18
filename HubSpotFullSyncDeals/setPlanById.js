
let apiKey = steps.InputParams.apiKey;
let siteName = steps.InputParams.siteName;
let type = steps.InputParams.type;
let siteDomain = steps.InputParams.siteDomain;
let password = "";

let params = {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain:siteDomain,
    type: type,
      url: steps.CBInfo.planurl,
      headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: "hubspot"
      }
  
};

done(params);