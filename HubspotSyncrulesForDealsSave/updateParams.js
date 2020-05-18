let configJson = steps.GetCBConfigApi.data.third_party_configuration.config_json;

configJson.cloudElements.syncRulesDeals = steps.SaveDealInputParams.params.input.dealOptions;

let updateTpConfig = steps.SaveDealInputParams.updateTpConfigParams;
updateTpConfig.bodyJson.config_json = configJson;
done({
  updateTpConfig: updateTpConfig
});