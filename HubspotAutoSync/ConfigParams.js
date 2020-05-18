let input = steps.AutoSyncInputParams.params.input;

let instance = null;
let syncData = steps.ChargebeeGetIntegConf.data.third_party_configuration.config_json.cloudElements.syncData;

if(syncData !== undefined)
  instance = syncData.instance;

let param = {
  apiKey : input.apiKey,
  siteName : input.siteName,
  type: input.type,
  domain: input.siteDomain,
  formulaInstance:instance,
  formulaId: input.formulaId,
  autoSync:true,
  tpIntegConf : steps.ChargebeeGetIntegConf.data.third_party_configuration,
  initialSync : false
};

done(param);