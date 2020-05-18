let errorLog = [];

if(steps.updateErrorLog_2 !== undefined){
  errorLog = steps.updateErrorLog_2.errorLog;
}

errorLog.push("\nFailed to Delete The Formula Instance\n Formula ID: "+ steps.deleteConfig.formula + "\nInstance ID: " + steps.deleteConfig.instance + "\n");

done({errorLog:errorLog});
