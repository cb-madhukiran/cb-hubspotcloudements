let configJson = steps.getChargebeeConfiguration.data.third_party_configuration;
if(steps.setupUpdateThirdpartyParam !== undefined) {
  configJson = steps.setupUpdateThirdpartyParam.body;
}

 configJson.body = {};

  configJson.body.apiKey = steps.InputParams.apiKey;
  configJson.body.siteName = steps.InputParams.siteName;
  configJson.body.siteDomain = steps.InputParams.siteDomain;
  configJson.body.type = steps.InputParams.type;
  configJson.body.MappedFieldChargebee = null;
  if(steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.syncRulesContact !== undefined) {
      configJson.body.MappedFieldChargebee = steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.syncRulesContacts.MappedFieldChargebee;
  }
   configJson.body.debugLoggingEnabled =  true,
  
done(configJson);