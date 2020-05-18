let errorLog = [];


if(steps.updateErrorLog_1 !== undefined){
  errorLog = steps.updateErrorLog_1.errorLog;
}

errorLog.push("Failed to Delete The Third Party Instance with ID: "+ steps.ConfigParams.configJSON.cloudElements.thirdParty.instance + "\n")


done({errorLog: errorLog});