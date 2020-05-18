let data = {
  url:"https://api.hubapi.com/companies/v2/companies/"+steps.LoopOverCompany.entry,
  body:{
     properties: [],
  },
  headers : steps.HubSpotParam.hubspotAuth
};

let metrics = steps.CompanyMetrics.metrics;
let objKeys = Object.keys(metrics);
for (var i = 0; i < objKeys.length; i++) {
  let val = Number(metrics[objKeys[i]].value);
 // if(val>0 || objKeys[i]==="cb_totalinvoiceamountpaid") {
    data.body.properties.push({
        "name": objKeys[i],
        "value": metrics[objKeys[i]].value
    });
  //}
 
}
done(data);