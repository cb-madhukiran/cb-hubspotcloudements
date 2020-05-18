let successLog = [];


if(steps.updateSuccessLog_1 !== undefined){
  successLog = steps.updateSuccessLog_1.successLog;
}

successLog.push("Successfully deleted the Third Party Instance with ID: "+ steps.ConfigParams.configJSON.cloudElements.thirdParty.instance + "\n")


done({successLog: successLog});