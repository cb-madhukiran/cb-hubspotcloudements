let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let siteDomain = trigger.args.request.query['cb-domain'];
let integrationName = trigger.args.request.query.type;
let password = "";

let syncRuleForFields = {
  sync : trigger.args.request.query.syncMoreFields,
};
let company= trigger.args.request.query.company;
if(company !== undefined && company !==""){
  company = JSON.parse(company);
    if(company !== undefined){
    company = JSON.parse(company.companyFields);
  }
}
syncRuleForFields.company = company;
let contact= trigger.args.request.query.contact;
if(contact !== undefined && contact!==""){
  contact = JSON.parse(contact);
  if(contact !== undefined){
    contact = JSON.parse(contact.contactFields);
  }
}
syncRuleForFields.contact = contact;
let deal= trigger.args.request.query.deal;
if(deal !== undefined && deal !==""){
  deal = JSON.parse(deal);
    if(deal !== undefined){
    deal = JSON.parse(deal.dealFields);
  }
}
syncRuleForFields.deal = deal;
let apiName= "third_party_configurations";
let params = {
    apiKey : apiKey,
    apiName : apiName,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:integrationName,
  inputJson :{
    apiKey:apiKey,
    siteName:siteName,
    siteDomain:siteDomain,
    integrationName:integrationName
  },
  syncRuleForFields: syncRuleForFields,
// url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
//     auth:{
//       Authorization: "Basic " + CE.b64(apiKey + ":" + password)
//     },
    queryJson:{
      integration_name: integrationName
    }
};


done(params);


