let password ="";
let site_name=steps.InputParams.input.siteName
let siteDomain=steps.InputParams.input.siteDomain
let api_key=steps.InputParams.input.apiKey

let input = {
  
  url : "https://"+site_name+"."+siteDomain+"/api/v2/third_party_configurations",
  query:{
    integration_name:"hubspot"
  },
  apiKey:api_key,
  siteDomain:siteDomain,
  siteName:site_name,
  type:"hubspot",
  headers:{
        Authorization: "Basic " + CE.b64(api_key + ":" + password)
      },
};
 
done(input);