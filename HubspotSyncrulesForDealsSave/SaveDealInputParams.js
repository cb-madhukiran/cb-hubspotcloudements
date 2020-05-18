let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let siteDomain = trigger.args.request.query['cb-domain'];
let integrationName = trigger.args.request.query.type;
let SubCreatedOption = trigger.args.request.query.SubCreatedOption;
let pipeLine = trigger.args.request.query.pipeLine;

let stage_subCreated = trigger.args.request.query['stage_subCreated'];
if(stage_subCreated === undefined){
  //stage_subCreated = "closedwon";
}
let allowCreateDealInTrial = trigger.args.request.query['createDealInTrial'];

let stage_subInTrial= trigger.args.request.query['stage_subInTrial'];
if(stage_subInTrial === undefined) {
  stage_subInTrial = stage_subCreated;
}

let allowNoOpenDeal = trigger.args.request.query['allowNoOpenDeal'] ;
let noOpenDeal = trigger.args.request.query['noOpenDeal'];

let password = "";

let params = {
  input :{
    apiKey:apiKey,
    siteName:siteName,
    siteDomain:siteDomain,
    integrationName:integrationName,
    dealOptions:{
    SubCreatedOption:SubCreatedOption,
    stage_subCreated: stage_subCreated,
    allowCreateDealInTrial: allowCreateDealInTrial,
    stage_subInTrial: stage_subInTrial,
    allowNoOpenDeal :allowNoOpenDeal,
    noOpenDeal:noOpenDeal,
    pipeLine:pipeLine
    }
    }
};
let apiName1 = "third_party_configurations";
let getTpConfigParams = {
    apiKey : apiKey,
    apiName : apiName1,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:integrationName,
    queryJson:{
      integration_name: integrationName
    }
};
let apiName2 = "update_tp_integ_conf";
let apiType = "INTEG-INTEG";
let requestType = "POST";
let updateTpConfigParams = {
    apiKey : apiKey,
    apiType : apiType,
    apiName : apiName2,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:integrationName,
    requestType:requestType,
  headersJson: {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  },
  bodyJson: {
     site_name: siteName,
     api_key: apiKey,
     integration_name: integrationName
  }
};

done({
  params: params,
  getTpConfigParams: getTpConfigParams,
  updateTpConfigParams: updateTpConfigParams
});