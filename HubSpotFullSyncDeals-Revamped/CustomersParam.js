let params = {
    syncRulesContacts: steps.getChargebeeConfiguration.data.config_json.cloudElements.syncRulesContacts,
    syncRulesOrders: steps.getChargebeeConfiguration.data.config_json.cloudElements.syncRuleForOrders,
    syncRulesDeals: steps.getChargebeeConfiguration.data.config_json.cloudElements.syncRulesDeals,
    portalId: steps.getChargebeeConfiguration.data.config_json.cloudElements.thirdParty.portalId,
     headers: {
      "Authorization":"Bearer "+steps.getChargebeeConfiguration.data.config_json.cloudElements.thirdParty.accessToken,
       Accept: "application/json"
    },
    syncData:steps.getChargebeeConfiguration.data.config_json.cloudElements.syncData,
    subOffset:{
      
    },
    tpOffset:{
      
    },
    url: "https://api.hubapi.com/crm-pipelines/v1/pipelines/deals",
    
    customerList:[],
     customerMap:{},
  apiKey: steps.DealsInputParams.apiKey,
  siteName: steps.DealsInputParams.siteName,
  siteDomain: steps.DealsInputParams.siteDomain,
  type: "hubspot",
    
};
/*let pipeline = steps.getChargebeeConfiguration.data.config_json.cloudElements.pipeline;
if(pipeline !==undefined) {
  pipeline = pipeline.id;
}*/

params.pipeline = steps.getChargebeeConfiguration.data.config_json.cloudElements.syncRulesDeals.pipeLine;


done(params);