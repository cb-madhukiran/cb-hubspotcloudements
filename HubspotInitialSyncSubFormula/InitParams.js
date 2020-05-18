let apiKey = trigger.args.apiKey;
let siteName = trigger.args.siteName;
let type = trigger.args.type;
let siteDomain = trigger.args.domain;
let formulaInstance = trigger.args.formulaInstance;
let formulaId = trigger.args.formulaId;
let tpIntegConf = trigger.args.tpIntegConf;
let password = "";
let initialSync = trigger.args.initialSync;
let cloud = "https://staging.cloud-elements.com";

console.log(formulaInstance);

let params = {
  input: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain:siteDomain,
    type: type,
    formulaInstance : formulaInstance,
    formulaId : formulaId,
    tpIntegConf : tpIntegConf,
    formulaInstanceBody : {
       "cb-api-key": apiKey,
      "cb-domain": siteDomain,
      "cb-site-name": siteName,
      "type": type,
      "initialSync":initialSync,
      "debugLoggingEnabled": true
    },
    props:{
      initialsync:{
         url :cloud + "/elements/api-v2/initialsync/setup",
        id:"411939"
      },
       syncProcessingCard:{
         url :cloud + "/elements/api-v2/sync/run",
        id:"411944"
      }
      
    },
    config :{
      url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
      syncUrl:"https://"+siteName+"."+siteDomain+"/api/v2/third_party_sync_details/retrieve_latest_sync",
      auth:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: type
      },
      syncQuery:{
        'third_party_configuration[integration_name]': type
      }
    }
  }
};
done(params);