let siteName=steps.InputParams.site_name;
let integrationName=steps.InputParams.integration_name;
let siteDomain=steps.InputParams.siteDomain;
let password = "";
let apiKey=steps.LoopOverConfig.entry.propertyValue;

let body = {

  
   config :{
      url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
      auth:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: integrationName
      }}
  
};
done(body);