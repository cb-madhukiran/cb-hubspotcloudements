let successLog = [];

if(steps.updateSuccessLog_2 !== undefined){
  successLog = steps.updateSuccessLog_2.successLog;
}

successLog.push("\nSuccessfully deleted the Formula Instance\n Formula ID: "+ steps.deleteConfig.formula + "\nInstance ID: " + steps.deleteConfig.instance + "\n");

done({successLog:successLog});
