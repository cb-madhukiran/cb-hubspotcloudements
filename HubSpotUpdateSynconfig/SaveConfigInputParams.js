let apiKey = steps.saveConfigParams.request.query['cb-api-key'];
let siteName = steps.saveConfigParams.request.query['cb-site-name'];
let type = "hubspot";
let integrationName = type;
let siteDomain = steps.saveConfigParams.request.query['cb-domain'];

let password = "";
let apiName1="third_party_configurations";
let apiName2 = "update_tp_integ_conf";
let apiType = "INTEG-INTEG";
let requestType = "POST";
let syncRuleForFields = {
  sync : steps.saveConfigParams.request.query.syncMoreFields,
};
let HubspotStageToggle = steps.saveConfigParams.request.query.HubspotStageToggle;

let NoSubscription;
let TrialSubscription;
let ActiveSubscription;
let CanceledSubscription;

if(HubspotStageToggle === "true"){
    NoSubscription= trigger.args.request.query.NoSubscription;
    TrialSubscription= trigger.args.request.query.TrialSubscription;
    ActiveSubscription= trigger.args.request.query.ActiveSubscription ;
    CanceledSubscription= trigger.args.request.query.CanceledSubscription;
}
else{
    NoSubscription = 'select';
    TrialSubscription = 'select';
    ActiveSubscription = 'select';
    CanceledSubscription = 'select';
}

let company= steps.saveConfigParams.request.query.company;
if(company !== undefined && company !== ""){
  company = JSON.parse(company);
    if(company !== undefined){
    company = JSON.parse(company.companyFields);
  }
}
syncRuleForFields.company = company;
let contact= steps.saveConfigParams.request.query.contact;
if(contact !== undefined && contact !== ""){
  contact = JSON.parse(contact);
  if(contact !== undefined){
    contact = JSON.parse(contact.contactFields);
  }
}
syncRuleForFields.contact = contact;
let deal= steps.saveConfigParams.request.query.deal;
if(deal !== undefined && deal !== ""){
  deal = JSON.parse(deal);
    if(deal !== undefined){
    deal = JSON.parse(deal.dealFields);
  }
}
syncRuleForFields.deal = deal;


let params = {
  input: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: type},
    config: {
      inputJson: {
      apiKey: apiKey,
      siteName: siteName,
      siteDomain: siteDomain,
      type: type},
    apiKey : apiKey,
    apiName : apiName1,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:type,
      
      // url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_configurations",
      // auth: {
      //   Authorization: "Basic " + CE.b64(apiKey + ":" + password)
     // },
      queryJson: {
        integration_name: type
      },
      // updateUrl: "https://" + siteName + ".integrations." + siteDomain + "/integrations/update_tp_integ_conf",
    

    },
    updateConf:{
        headersJson: {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
    apiKey : apiKey,
    apiType : apiType,
    apiName : apiName2,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:integrationName,
    requestType:requestType,
    },
    syncRulesContacts: {
      CustomersToSync: steps.saveConfigParams.request.query.CustomersToSync || "All_Customers",
      HubSpotContactNoMatch: steps.saveConfigParams.request.query.HubSpotContactNoMatch || "Create_contact",
      HubSpotContactMatch: steps.saveConfigParams.request.query.HubSpotContactMatch || "Update_empty_Hubspot_fields",
      HubspotStageToggle : HubspotStageToggle,
      LifecycleStage: {
        NoSubscription: NoSubscription,
        TrialSubscription: TrialSubscription,
        ActiveSubscription: ActiveSubscription,
        CanceledSubscription: CanceledSubscription
      },
      MappedFieldChargebee: (steps.saveConfigParams.request.query.MappedFieldChargebee !== undefined) ? steps.saveConfigParams.request.query.MappedFieldChargebee : undefined,
      MappedFieldHubspot: (steps.saveConfigParams.request.query.MappedFieldHubspot) ? steps.saveConfigParams.request.query.MappedFieldHubspot : undefined
    },
    syncRulesDeals : {
      SubCreatedOption:steps.saveConfigParams.request.query.SubCreatedOption,
      stage_subCreated:steps.saveConfigParams.request.query.stage_subCreated,
      allowCreateDealInTrial:steps.saveConfigParams.request.query.createDealInTrial,
      stage_subInTrial:steps.saveConfigParams.request.query.stage_subInTrial,
      allowNoOpenDeal:steps.saveConfigParams.request.query.allowNoOpenDeal,
      noOpenDeal:steps.saveConfigParams.request.query.noOpenDeal,
      pipeLine:steps.saveConfigParams.request.query.pipeLine
    },
    syncRulesFields :syncRuleForFields,
    syncRuleForOrders:{
      sync : steps.saveConfigParams.request.query.syncOrders
    }
};
done(params);