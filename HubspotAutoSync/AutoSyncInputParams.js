let apiKey = trigger.args.request.query['cb-api-key'] || null;
let siteName = trigger.args.request.query['cb-site-name'] || null;
let type = trigger.args.request.query['integrationName'] || null;
let siteDomain = trigger.args.request.query['cb-domain'] || null;
let executionId =  trigger.args.request.query['execution_id'];

if((apiKey === null) || (siteName === null) || (type === null) || (siteDomain === null)){
  done(false);
}

let password = "";
let formulaId=31443;

let params = {
  input:{
    apiKey: apiKey,
    siteName: siteName,
    siteDomain:siteDomain,
    type: type,
    formulaId:formulaId,
    executionId: executionId
  }
};

let GetTpConfigParams = {
    url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
    headers:{
      Authorization: "Basic " + CE.b64(apiKey + ":" + password)
    },
    query:{
      integration_name: type
    },
    siteName:siteName
};

let updateTpConfigParams = {
  url: "https://"+siteName+".integrations."+siteDomain+"/integrations/update_tp_integ_conf",
  headers: {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  },
  body: {
     site_name: siteName,
     api_key: apiKey,
     integration_name: type
     //append config_json with this during request
  }
};



let SendErrorMailParams = {
  url: 'https://' + siteName + '.integrations.' + siteDomain + '/api/'+type+"/sendmail",
  headers:{
    api_key: apiKey
  },
  query :{
    message : "Integration Error, Formula-Instance-ID : " + trigger.args.request.headers['elements-formula-instance-id'] + " executionId "+executionId,
    subject : "Auto Sync Error " + siteName+" "+siteDomain 
  }
};

let retrieveLatestSyncConfig = {
  url:"https://"+siteName+"."+siteDomain+"/api/v2/third_party_sync_details/retrieve_latest_sync",
  headers:{
    Authorization: "Basic " + CE.b64(apiKey + ":" + password)
  },
  query:{
    'third_party_configuration[integration_name]': type
  },
};


done({
  params: params,
  retrieveLatestSyncConfig: retrieveLatestSyncConfig,
  GetTpConfigParams: GetTpConfigParams,
  updateTpConfigParams: updateTpConfigParams,
  SendErrorMailParams: SendErrorMailParams
});