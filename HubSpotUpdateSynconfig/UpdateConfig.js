let configJson = steps.getConfigApi.data.third_party_configuration.config_json;
//need kt from shamim on the lastConfig usage
let lastConfig = configJson.cloudElements.lastConfig;
if(lastConfig === undefined) {
  lastConfig = {
    syncRulesContacts : configJson.cloudElements.syncRulesContacts,
    syncRulesDeals : configJson.cloudElements.syncRulesDeals,
    syncRulesFields : configJson.cloudElements.syncRulesFields,
    restartContacts : true,
    restartDeals : false,
  };
}else {
  if(!lastConfig.restartContacts) {
    if(lastConfig.syncRulesContacts.CustomersToSync !==  steps.SaveConfigInputParams.syncRulesContacts.CustomersToSync) {
      lastConfig.restartContacts = true;
      lastConfig.syncRulesContacts = steps.SaveConfigInputParams.syncRulesContacts;
    }
  }
  lastConfig.syncRulesFields = configJson.cloudElements.syncRulesFields;
  
}
configJson.cloudElements.lastConfig  = lastConfig;

configJson.cloudElements.syncRulesContacts = steps.SaveConfigInputParams.syncRulesContacts;
configJson.cloudElements.syncRulesDeals = steps.SaveConfigInputParams.syncRulesDeals;
configJson.cloudElements.syncRulesFields = steps.ParseFieldsInput.syncRuleForFields;
configJson.cloudElements.syncRuleForOrders = steps.SaveConfigInputParams.syncRuleForOrders;



let input = {
     site_name: steps.SaveConfigInputParams.updateConf.siteName,
     api_key: steps.SaveConfigInputParams.updateConf.apiKey,
     integration_name:steps.SaveConfigInputParams.updateConf.type,
     config_json : configJson
};
let updateConf = steps.SaveConfigInputParams.updateConf;
updateConf.bodyJson = input;

done(updateConf);