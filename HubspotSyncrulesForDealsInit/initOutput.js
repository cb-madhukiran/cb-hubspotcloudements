let params = {
  ConstructCBApiReq: steps.ConstructCBApiReq,
  getFormulaDetails : steps.getFormulaDetails,
  getCBReq :{
  apiKey: steps.ConstructCBApiReq.input.apiKey,
  headers: steps.ConstructCBApiReq.auth,
  query: steps.ConstructCBApiReq.query,
  siteDomain: steps.ConstructCBApiReq.input.siteDomain,
  siteName: steps.ConstructCBApiReq.input.siteName,
  type: steps.ConstructCBApiReq.type,
  url: steps.ConstructCBApiReq.url
}
  
}

done(params);