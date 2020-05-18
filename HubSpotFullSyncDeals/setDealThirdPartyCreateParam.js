let apiKey = steps.InputParams.apiKey
let siteName = steps.InputParams.siteName
let siteDomain = steps.InputParams.siteDomain
let type = steps.InputParams.type
let password=""


let params = {
  url: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/update_entity",
  headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: "hubspot",
  body: {
            integration_name: type,
            site_name: siteName,
            api_key: apiKey,
        },
  query: steps.DealInfo.updateQuery
        
};
done(params);