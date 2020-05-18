let getCBReq ={
  apiKey: steps.ConstructFieldsApiReq.apiKey,
  headers: steps.ConstructFieldsApiReq.auth,
  query: steps.ConstructFieldsApiReq.query,
  siteDomain: steps.ConstructFieldsApiReq.siteDomain,
  siteName: steps.ConstructFieldsApiReq.siteName,
  type: steps.ConstructFieldsApiReq.type,
  url: steps.ConstructFieldsApiReq.url
}
done(getCBReq);