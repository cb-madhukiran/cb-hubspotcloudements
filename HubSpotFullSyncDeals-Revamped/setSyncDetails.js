let apiKey = steps.DealsInputParams.apiKey;
let siteName = steps.DealsInputParams.siteName;
let type = steps.DealsInputParams.type;
let siteDomain = steps.DealsInputParams.siteDomain;

let password = "";
let data = {
    //url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_sync_details/retrieve_latest_sync",
     url: "https://" + siteName + ".integrations." + siteDomain + "/api/third_party_sync_details/tpmeta?integration_name=hubspot",
    apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: type,
    headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password),
        api_key : apiKey
      },
      
};

done(data);