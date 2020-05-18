let input = steps.InitialSyncParams.input;

let instance = null;
let syncData = steps.ChargebeeGetTpIntegConf.data.config_json.cloudElements.syncData;

if(syncData !== undefined)
  instance = syncData.instance;

let param = {
  apiKey : input.apiKey,
  siteName : input.siteName,
  type: input.type,
  domain: input.siteDomain,
  formulaInstance:instance,
  formulaId: steps.Props.formulaId,
  tpIntegConf : steps.ChargebeeGetTpIntegConf.data,
  initialSync : true
};

done(param);