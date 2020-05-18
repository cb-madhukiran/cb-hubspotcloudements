let apiKey=steps.DealsInputParams.apiKey;
let siteName=steps.DealsInputParams.siteName;
let siteDomain=steps.DealsInputParams.siteDomain;
let type = steps.DealsInputParams.type;
let subscription =  steps.LoopOverSubscriptions.entry.subscription;


let param = {
  url: "https://"+steps.DealsInputParams.siteName+"."+steps.DealsInputParams.siteDomain+"/api/v2/invoices",
  headers: {
    Authorization: "Basic " + CE.b64(steps.DealsInputParams.apiKey + ":" + "")
  },
  apiKey: steps.DealsInputParams.apiKey,
  siteName: steps.DealsInputParams.siteName,
  siteDomain: steps.DealsInputParams.siteDomain,
  type: "hubspot",
  query:{
      subscription_id : encodeURIComponent(subscription.id),
      sort_by_desc : "date",
      limit :1
  }
  
}

done(param);