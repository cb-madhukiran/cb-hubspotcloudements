let params = {
    syncRulesContacts: steps.GetTpIntegConf.data.config_json.cloudElements.syncRulesContacts,
    syncRulesOrders: steps.GetTpIntegConf.data.config_json.cloudElements.syncRuleForOrders,
    syncRulesDeals: steps.GetTpIntegConf.data.config_json.cloudElements.syncRulesDeals,
    portalId: steps.GetTpIntegConf.data.config_json.cloudElements.thirdParty.portalId,
     hubspotAuth: {
      "Authorization":"Bearer "+steps.GetTpIntegConf.data.config_json.cloudElements.thirdParty.accessToken,
       Accept: "application/json"
    },
};
done(params);

