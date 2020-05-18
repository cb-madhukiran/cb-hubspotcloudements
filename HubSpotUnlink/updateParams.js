let errorLog1 = steps.updateErrorLog_1 ? steps.updateErrorLog_1.errorLog : [];
let errorLog2 = steps.updateErrorLog_2 ? steps.updateErrorLog_2.errorLog : [];

let successLog1 = steps.updateSuccessLog_1 ? steps.updateSuccessLog_1.successLog : [];
let successLog2 = steps.updateSuccessLog_2 ? steps.updateSuccessLog_2.successLog : [];

let errorLog = errorLog1.concat(errorLog2);
let successLog = successLog1.concat(successLog2);


let configJson = {
  cloudElements: {
    success : successLog,
    failed : errorLog,
    chargebee : steps.ConfigParams.configJSON.cloudElements.chargebee
  }
}

let configParam = {"new_sub_step": ""};


let input = {
  update: {
    integration_name: trigger.args.request.query.type,
    "config_json": "{}"
  }
};


done(input);