let body=steps.setupUploadCSV;
let password ="";
let siteName=body.query.site_name
let siteDomain=steps.InputParams.input.siteDomain
let api_key=body.query.api_key

let input = {
  
  url : "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
  query:{
    integration_name:body.query.integ_name
  },
  apiKey:api_key,
  siteDomain:siteDomain,
  siteName:siteName,
  type:"hubspot",
  headers:{
        Authorization: "Basic " + CE.b64(api_key + ":" + password)
      },
};
 
done(input);