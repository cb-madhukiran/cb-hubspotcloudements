let getConfReq ={
  apiKey: steps.ConstructConfigApiReq.apiKey,
  headers: steps.ConstructConfigApiReq.auth,
  query: steps.ConstructConfigApiReq.query,
  siteDomain: steps.ConstructConfigApiReq.siteDomain,
  siteName: steps.ConstructConfigApiReq.siteName,
  type: steps.ConstructConfigApiReq.type,
  url: steps.ConstructConfigApiReq.url
};
done(getConfReq);