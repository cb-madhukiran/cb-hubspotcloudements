let config = {};
let integration_name = trigger.args.request.query['integration_name'];

if(integration_name === "activecampaign"){
  config.syncFormulaID = 943;
}else{
  config = null;
}

if(config !== null){
  done(config);
}else{
  done(false);
}
