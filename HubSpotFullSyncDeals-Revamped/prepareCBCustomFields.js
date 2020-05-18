
let apiKey = steps.DealsInputParams.apiKey;
let siteName = steps.DealsInputParams.siteName;
let type = steps.DealsInputParams.type;
let siteDomain = steps.DealsInputParams.siteDomain;
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