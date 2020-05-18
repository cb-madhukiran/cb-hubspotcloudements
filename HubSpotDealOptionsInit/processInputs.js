let apiKey = steps.Props.request.query['cb-api-key'];
let siteName = steps.Props.request.query['cb-site-name'];
let siteDomain = steps.Props.request.query['cb-domain'];
let integrationName = steps.Props.request.query.type;
let SubCreatedOption = steps.Props.request.query.SubCreatedOption;
let pipeLine = steps.Props.request.query.pipeLine;
let stage_subCreated = steps.Props.request.query.stage_subCreated;
if(stage_subCreated === undefined){
  //stage_subCreated = "closedwon";
}
let allowCreateDealInTrial = steps.Props.request.query.createDealInTrial;


let stage_subInTrial= steps.Props.request.query.stage_subInTrial;

let allowNoOpenDeal = steps.Props.request.query.allowNoOpenDeal ;
let noOpenDeal = steps.Props.request.query.noOpenDeal;
let password = "";
let apiName = "third_party_configurations";

let params = {
    apiKey : apiKey,
    apiName : apiName,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:integrationName,
  inputJson :{
    apiKey:apiKey,
    siteName:siteName,
    siteDomain:siteDomain,
    integrationName:integrationName,
    SubCreatedOption:SubCreatedOption,
    stage_subCreated: stage_subCreated,
    allowCreateDealInTrial: allowCreateDealInTrial,
    stage_subInTrial: stage_subInTrial,
    allowNoOpenDeal :allowNoOpenDeal,
    noOpenDeal:noOpenDeal,
    pipeLine:pipeLine
  },
    queryJson:{
      integration_name: integrationName
    }
};

done(params);