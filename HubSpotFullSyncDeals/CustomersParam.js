let params = {
    syncRulesContacts: steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.syncRulesContacts,
    syncRulesOrders: steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.syncRuleForOrders,
    syncRulesDeals: steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.syncRulesDeals,
    portalId: steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.thirdParty.portalId,
     headers: {
      "Authorization":"Bearer "+steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.thirdParty.accessToken,
       Accept: "application/json"
    },
    syncData:steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.syncData,
    subOffset:{
      
    },
    tpOffset:{
      
    },
    url: "https://api.hubapi.com/crm-pipelines/v1/pipelines/deals",
    
    customerList:[],
     customerMap:{},
  apiKey: steps.InputParams.apiKey,
  siteName: steps.InputParams.siteName,
  siteDomain: steps.InputParams.siteDomain,
  type: "hubspot",
    
};
let pipeline = steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.pipeline;
if(pipeline !==undefined) {
  pipeline = pipeline.id;
}

params.pipeline = pipeline;

done(params);