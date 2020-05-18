let params = {
    syncRulesContacts: steps.NewChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.syncRulesContacts,
    syncRulesOrders: steps.NewChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.syncRuleForOrders,
    syncRulesDeals: steps.NewChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.syncRulesDeals,
    portalId: steps.NewChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.thirdParty.portalId,
     hubspotAuth: {
      "Authorization":"Bearer "+steps.NewChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.thirdParty.accessToken,
       Accept: "application/json"
    },
};
done(params);

