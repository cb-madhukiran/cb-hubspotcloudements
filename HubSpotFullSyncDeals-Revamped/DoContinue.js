//done(steps.CustomersParam.syncData.lastSync !== undefined);

if(steps.getChargebeeConfiguration.data.config_json.cloudElements.syncRulesDeals !==undefined){
  if(steps.getChargebeeConfiguration.data.config_json.cloudElements.syncRulesDeals.SubCreatedOption !== undefined){

    if(steps.getChargebeeConfiguration.data.config_json.cloudElements.syncRulesDeals.SubCreatedOption !== "DoNothing"){
          done(true);
    }
    else{
          done(false);
    }
  }
  else{
    done(true);
  }
}
else{
  done(true);
}

