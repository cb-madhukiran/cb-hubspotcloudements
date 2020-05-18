let getCBReq ={
  apiKey: steps.ConstructCBConfigReq.apiKey,
  headers: steps.ConstructCBConfigReq.auth,
  query: steps.ConstructCBConfigReq.query,
  siteDomain: steps.ConstructCBConfigReq.siteDomain,
  siteName: steps.ConstructCBConfigReq.siteName,
  type: steps.ConstructCBConfigReq.type,
  url: steps.ConstructCBConfigReq.url
}
done(getCBReq);