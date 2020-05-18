let apiKey = steps.DealsInputParams.apiKey
let siteName = steps.DealsInputParams.siteName
let siteDomain = steps.DealsInputParams.siteDomain
let type = steps.DealsInputParams.type
let password=""


let params = {
  url: "https://" + steps.DealsInputParams.input.siteName + "." + steps.DealsInputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/update_entity",
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