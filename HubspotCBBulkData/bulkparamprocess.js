let kk = steps.bulkparam.customers;
let bulkbodyparam=[];
for(var i=0;i<kk.length;i++)
{
  bulkbodyparam.push(kk[i].id);
}
let apiKey = steps.bulkparam.apiKey;
let bulkinputjson={
"url":"https://" + steps.bulkparam.siteName + ".integrations." + steps.bulkparam.siteDomain + "/api/hubspot/subscriptiondetails",
"apiKey":apiKey,
"headers":{"api_key":apiKey},
"siteDomain":steps.bulkparam.siteDomain,
"siteName":steps.bulkparam.siteName,
"type":"hubspot",
"bodydata":{"customerids":
bulkbodyparam}};
done(bulkinputjson);
