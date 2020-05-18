let getCustomReq ={
  apiKey: steps.ConstructCustomApiReq.input.apiKey,
  headers: steps.ConstructCustomApiReq.auth,
  query: steps.ConstructCustomApiReq.query,
  siteDomain: steps.ConstructCustomApiReq.input.siteDomain,
  siteName: steps.ConstructCustomApiReq.input.siteName,
  type: steps.ConstructCustomApiReq.type,
  url: steps.ConstructCustomApiReq.url
};
done(getCustomReq);