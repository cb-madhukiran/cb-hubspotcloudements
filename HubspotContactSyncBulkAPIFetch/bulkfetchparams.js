let kk = steps.paramfetch.customers;
let bodyparam=[];
for(var i=0;i<kk.length;i++)
{
  bodyparam.push(kk[i].id);
}
let apiKey = steps.paramfetch.apiKey;
let inputjson={
"url":"https://" + steps.paramfetch.siteName + ".integrations." + steps.paramfetch.siteDomain + "/api/hubspot/subscriptiondetails",
"apiKey":apiKey,
"headers":{"api_key":apiKey},
"siteDomain":steps.paramfetch.siteDomain,
"siteName":steps.paramfetch.siteName,
"type":"hubspot",
"bodydata":{"customerids":
bodyparam}};
done(inputjson);
