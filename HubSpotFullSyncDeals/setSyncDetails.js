let apiKey = steps.InputParams.apiKey;
let siteName = steps.InputParams.siteName;
let type = steps.InputParams.type;
let siteDomain = steps.InputParams.siteDomain;

let password = "";
let data = {
    url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_sync_details/retrieve_latest_sync",
    apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: type,
    headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query: {
            'third_party_configuration[integration_name]': type
        },
};

done(data);