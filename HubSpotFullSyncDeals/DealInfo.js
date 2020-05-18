let data = {
  url: {
    createDeal :"https://api.hubapi.com/deals/v1/deal"
  },
  pipeline:"default"
};

let trailStage = steps.CustomersParam.syncRulesDeals.stage_subInTrial;
let activeStage = steps.CustomersParam.syncRulesDeals.stage_subCreated;

if(trailStage === undefined ) {
  trailStage = "";
}
if(activeStage === undefined ) {
  activeStage = "";
}

if(steps.SubParam.stageOptions[trailStage] !== undefined){
  data.trailStage = trailStage;
}

if(steps.SubParam.stageOptions[activeStage] !== undefined){
  data.activeStage = activeStage;
}

if(steps.CustomersParam.pipeline !== undefined) {
  data.pipeline = steps.CustomersParam.pipeline;
}

done(data);