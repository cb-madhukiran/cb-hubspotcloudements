 let subscription =  steps.LoopOverSubscriptions.entry.subscription;

let params = {
  url: "https://"+steps.InputParams.siteName+"."+steps.InputParams.siteDomain+"/api/v2/invoices",
  headers: {
    Authorization: "Basic " + CE.b64(steps.InputParams.apiKey + ":" + "")
  },
  apiKey: steps.InputParams.apiKey,
  siteName: steps.InputParams.siteName,
  siteDomain: steps.InputParams.siteDomain,
  type: "hubspot",
  query:{
      subscription_id : encodeURIComponent(subscription.id),
      sort_by_desc : "date",
      limit :1
  }
};
done(params);