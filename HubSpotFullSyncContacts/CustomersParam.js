let params = {
    syncRulesContacts: steps.ChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.syncRulesContacts,
    syncRulesOrders: steps.ChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.syncRuleForOrders,
    syncRulesDeals: steps.ChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.syncRulesDeals,
    portalId: steps.ChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.thirdParty.portalId,
     hubspotAuth: {
      "Authorization":"Bearer "+steps.ChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.thirdParty.accessToken,
       Accept: "application/json"
    },
};
done(params);

