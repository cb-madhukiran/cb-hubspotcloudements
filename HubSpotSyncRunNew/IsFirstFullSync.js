let flag = false;

if(steps.ChargebeeGetTpIntegConf.data.third_party_configuration.config_json.cloudElements.syncType.syncType === "initialSync" && steps.ChargebeeGetTpIntegConf.data.third_party_configuration.config_json.cloudElements.syncType.status == "success" )
 flag = true;
 else if(steps.ChargebeeGetTpIntegConf.data.third_party_configuration.config_json.cloudElements.syncType.syncType === "firstFullSync" && steps.ChargebeeGetTpIntegConf.data.third_party_configuration.config_json.cloudElements.syncType.status == "failed")
 flag = true;

done(flag);