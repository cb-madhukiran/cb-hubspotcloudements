

let query  = {
  'third_party_configuration[integration_name]': steps.InitParams.input.type,
  "context": {
      "excecutionId":steps.StartExcecution.response.body[0].id,
      "instance":steps.InitParams.input.formulaInstance,
      "formula":steps.InitParams.input.formulaId,
      "initialSync":steps.InitParams.input.formulaInstanceBody.initialSync
    }
};

let url = "https://"+steps.InitParams.input.siteName+"."+steps.InitParams.input.siteDomain+"/api/v2/third_party_sync_details";


let apiKey=steps.InitParams.input.apiKey; 
let siteName=steps.InitParams.input.siteName; 
let siteDomain=steps.InitParams.input.siteDomain; 
let type=steps.InitParams.input.type; 

let tpConfig = steps.InitParams.input.tpIntegConf.config_json;

tpConfig.cloudElements.syncData = {
  firstSync:Math.round((new Date().getTime())/1000),
  instance:steps.InitParams.input.formulaInstance
};
tpConfig.cloudElements.syncLog = {
};
let tp = {
   url: "https://"+siteName+".integrations."+siteDomain+"/integrations/update_tp_integ_conf",
   headers: {
   "Content-Type": "application/json",
   "cache-control": "no-cache"
 },
 body:{
     integration_name :type,
     site_name :siteName,
     api_key :apiKey,
     config_json : tpConfig
  },
  apiKey : apiKey
};

let updateTpIntegConf = {
  url: tp.url,
  body:tp.body,
  headers : tp.headers,
  apiKey : apiKey,
  siteName : siteName,
  siteDomain : siteDomain,
  type : type
};

let createTpIntegSync = {
  headers:steps.InitParams.input.config.auth,
  url : url,
  query : query,
  apiKey : apiKey,
  siteName : siteName,
  siteDomain : siteDomain,
  type : type
}

done({
  updateTpIntegConf : updateTpIntegConf,
  createTpIntegSync : createTpIntegSync
});