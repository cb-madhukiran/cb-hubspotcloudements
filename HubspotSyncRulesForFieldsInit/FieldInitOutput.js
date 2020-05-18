let params = {
  ConfApiReq: steps.ConstructConfApiReq,
  CustomApiReq:steps.ConstructCustomApiReq,
  getFormulaDetails : steps.getFormulaDetails,
  getConfReq :{
  apiKey: steps.ConstructConfApiReq.input.apiKey,
  headers: steps.ConstructConfApiReq.auth,
  query: steps.ConstructConfApiReq.query,
  siteDomain: steps.ConstructConfApiReq.input.siteDomain,
  siteName: steps.ConstructConfApiReq.input.siteName,
  type: steps.ConstructConfApiReq.type,
  url: steps.ConstructConfApiReq.url
},
getCustomReq :{
  apiKey: steps.ConstructCustomApiReq.input.apiKey,
  headers: steps.ConstructCustomApiReq.auth,
  query: steps.ConstructCustomApiReq.query,
  siteDomain: steps.ConstructCustomApiReq.input.siteDomain,
  siteName: steps.ConstructCustomApiReq.input.siteName,
  type: steps.ConstructCustomApiReq.type,
  url: steps.ConstructCustomApiReq.url
}
  
}

done(params);