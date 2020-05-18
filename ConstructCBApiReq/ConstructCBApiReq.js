let siteName = steps.RequestParams['siteName'];
let domain = steps.RequestParams['domain'];
let apiType = steps.RequestParams['apiType'];
let apiName = steps.RequestParams['apiName'];
let integration = steps.RequestParams['integration'];
let type = steps.RequestParams['type'];
let apiKey = steps.RequestParams['apiKey'];
let password = steps.RequestParams['password'];
let queryVal = steps.RequestParams['queryJson'];
let inputVal = steps.RequestParams['inputJson'];
let bodyVal = steps.RequestParams['bodyJson'];
let headerVal = steps.RequestParams['headersJson'];
let requestType = steps.RequestParams['requestType'];
let apiUrl = "";
let hdrStr = "";
let headerAuth = {};
let apiData = {};
//apiType 1. APP 2.integrationV1, integrationV2 integrationV3
if(siteName === undefined || domain === undefined)
{
  done({"error":"Invalid siteName or domain"});
}

if (apiType=== undefined || apiType.toUpperCase()==="APP")
{
  apiUrl = "https://" + siteName + "." + domain + "/api/v2/" + apiName;
}
else
{
  //"https://"+siteName+".integrations."+siteDomain+"/integrations/update_tp_integ_conf",
  if (integration !== undefined && apiType!== undefined && apiType.toUpperCase() === "INTEG-INTEG-V2")
  {
    apiUrl = "https://" + siteName + ".integrations." + domain + "/"+integration+"/api/v2/"+apiName;
  }
  else if (integration !== undefined && apiType !== undefined && apiType.toUpperCase() === "INTEG-V2")
  {
     apiUrl = "https://" + siteName + ".integrations." + domain + "/api/v2/" + apiName;
  }
  else if (apiType !== undefined && apiType.toUpperCase() === "INTEG-INTEG")
  {
     apiUrl = "https://" + siteName + ".integrations." + domain + "/integrations/" + apiName;
  }
  else if (apiType !== undefined && apiType.toUpperCase() === "INTEG-INTEG-API")
  {
     apiUrl = "https://" + siteName + ".integrations." + domain + "/integrations/api/" + apiName;
  }
  else
  {
    done({"error":"apiType is Invalid"});
  }
}
//apiUrl is populated

if (apiKey !== undefined)
{
   headerAuth =  {
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
    };
}
else
{
  done({"error":"apiKey is Invalid"});
}

if(inputVal === undefined)
{
  inputVal = {};
}
if (queryVal === undefined)
{
  queryVal = {};
}
// function test(fer){
//   return fer +"test";
// }
if (Object.keys(headerAuth).length !== 0 && (requestType === undefined ) || (requestType.toUpperCase() === "GET"))
{
  apiData = {
  url : apiUrl,
  apiKey:apiKey,
  auth : headerAuth,
  query : queryVal,
  input : inputVal,
  siteDomain:domain,
  siteName:siteName,
  headers:headerVal,
  type : type
  // //testfunction :test
  // apiKey: steps.ConstructCBApiReq.input.apiKey,
  // headers: steps.ConstructCBApiReq.auth,
  // query: steps.ConstructCBApiReq.query,
  // siteDomain: steps.ConstructCBApiReq.input.siteDomain,
  // siteName: steps.ConstructCBApiReq.input.siteName,
  // type: steps.ConstructCBApiReq.type,
  // url: steps.ConstructCBApiReq.url
  
}
}

else if ((requestType !== undefined ) || (requestType.toUpperCase() === "POST"))
{
  apiData = {
    apiKey: apiKey,
    url: apiUrl,
    query: queryVal,
    body: bodyVal,
    headers: headerVal,
    siteName:siteName,
    siteDomain:domain,
    type:type
    
}
}
done(apiData);  