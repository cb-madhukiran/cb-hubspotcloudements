
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
      url: "https://" + siteName + "." + siteDomain + "/api/v2/custom_field_configs",
      headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: "hubspot"
      }
  
};

done(params);