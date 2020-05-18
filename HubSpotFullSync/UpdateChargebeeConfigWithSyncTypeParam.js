let input = steps.InputParams.input;


let param = {
  url: "https://" + input.siteName + ".integrations." + input.siteDomain + "/integrations/update_tp_integ_conf",
     headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
     body: {
            integration_name: input.type,
            site_name: input.siteName,
            api_key: input.apiKey,
            config_json : steps.ChargebeeConfig.data.config_json
        },
   apiKey : input.apiKey,
  siteName : input.siteName,
  type: input.type,
  siteDomain: input.siteDomain,
};

if(steps.ChargebeeConfig.data.config_json.cloudElements.hasOwnProperty("syncType")){

if(steps.ChargebeeConfig.data.config_json.cloudElements.syncType.syncType === "initialSync"  && steps.ChargebeeConfig.data.config_json.cloudElements.syncType.status === "success" ){
param.body.config_json.cloudElements.syncType.syncType = "firstFullSync";
}
else if(steps.ChargebeeConfig.data.config_json.cloudElements.syncType.syncType === "firstFullSync" && steps.ChargebeeConfig.data.config_json.cloudElements.syncType.status === "success"){
  param.body.config_json.cloudElements.syncType.syncType = "fullSync";
}
param.body.config_json.cloudElements.syncType.status = "success";
}
else{
  param.body.config_json.cloudElements.syncType = {
    syncType : "initialSync",
    status : "success"
  }
}

param.body.config_json.cloudElements.syncType.lastSync =  Math.round((new Date().getTime())/1000);

done(param);