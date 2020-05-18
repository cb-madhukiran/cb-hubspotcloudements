let getConfReq ={
  apiKey: steps.ConstructConfApiReq.apiKey,
  headers: steps.ConstructConfApiReq.auth,
  query: steps.ConstructConfApiReq.query,
  siteDomain: steps.ConstructConfApiReq.siteDomain,
  siteName: steps.ConstructConfApiReq.siteName,
  type: steps.ConstructConfApiReq.type,
  url: steps.ConstructConfApiReq.url
};
done(getConfReq);