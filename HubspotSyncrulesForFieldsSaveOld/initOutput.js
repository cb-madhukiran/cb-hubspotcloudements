let getCBReq ={
  apiKey: steps.ConstructCBCApiReq.input.apiKey,
  headers: steps.ConstructCBCApiReq.auth,
  query: steps.ConstructCBCApiReq.query,
  siteDomain: steps.ConstructCBCApiReq.input.siteDomain,
  siteName: steps.ConstructCBCApiReq.input.siteName,
  type: steps.ConstructCBCApiReq.type,
  url: steps.ConstructCBCApiReq.url
}
done(getCBReq);