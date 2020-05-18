let input = steps.SyncRunNewInputParams.input;

let instance = null;
let syncData = steps.ChargebeeGetTpIntegConf.data.third_party_configuration.config_json.cloudElements.syncData;

if(syncData != undefined)
  instance = syncData.instance;

let param = {
  apiKey : input.apiKey,
  siteName : input.siteName,
  type: input.type,
  domain: input.siteDomain,
  formulaInstance:instance,
  formulaId: steps.Props.formulaId,
  tpIntegConf : steps.ChargebeeGetTpIntegConf.data.third_party_configuration,
  initialSync : true
};

done(param);