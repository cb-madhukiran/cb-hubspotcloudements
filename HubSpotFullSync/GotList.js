let configJson = steps.ConfigData.configJson.config_json;


let count = steps.SyncLog.syncLog.count;
if(count===undefined){
  count = 0;
}else {
  count = Number(count);
  if(isNaN(count)){
    count = 0;
  }
}
count = count + steps.Customer.customer.length;
steps.SyncLog.syncLog.count = count;
configJson.cloudElements.syncLog = steps.SyncLog.syncLog;

steps.ConfigData.configJson.config_json = configJson;

steps.InputParams.batch.body.customers=steps.Customer.customer;

steps.InputParams.updateconfig.body.config_json = configJson;
done(steps.Customer);