let resultJS = {};

resultJS.message = "Integration Unlinked Successfully."

let errorLog1 = steps.updateErrorLog_1 ? steps.updateErrorLog_1.errorLog : [];
let errorLog2 = steps.updateErrorLog_2 ? steps.updateErrorLog_2.errorLog : [];

let successLog1 = steps.updateSuccessLog_1 ? steps.updateSuccessLog_1.successLog : [];
let successLog2 = steps.updateSuccessLog_2 ? steps.updateSuccessLog_2.successLog : [];

let errorLog = errorLog1.concat(errorLog2);
let successLog = successLog1.concat(successLog2);

resultJS.successLog = (successLog.length > 0) ? successLog : [];

// if(steps.updateConfigJSON.response !== undefined){
//   if(steps.updateConfigJSON.response.code !== 200){
//     errorLog.push("Unlinking Integration Failed : Failed to update Config JSON in Chargebee Third Party Configurations");
//   }
// }

// if(errorLog.length > 0){
//   resultJS.message = "Unlinking Integration Failed : Failed to Delete The Following Instances";
//   resultJS.errorLog = errorLog;
// }

done({statusCode : 200});