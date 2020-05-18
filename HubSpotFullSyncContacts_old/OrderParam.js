let t = Math.round((new Date().getTime())/1000);
let data = {
  url:"https://"+steps.InputParams.input.siteName+"."+steps.InputParams.input.siteDomain+"/api/v2/orders",
  auth:{
        Authorization: "Basic " + CE.b64(steps.InputParams.input.apiKey + ":" )
      },
      
  before : {
    limit:1,
    "subscription_id[is] ":encodeURIComponent(steps.CBData.subscription.id),
    "status[is_not]":"delivered",
    "sort_by[desc]":"updated_at",
    "order_date[before]":t
  },
  after : {
    limit:1,
    "subscription_id[is] ":encodeURIComponent(steps.CBData.subscription.id),
    "status[is_not]":"delivered",
    "sort_by[asc]":"created_at",
    "order_date[after]":t
  },
  
};

done(data);