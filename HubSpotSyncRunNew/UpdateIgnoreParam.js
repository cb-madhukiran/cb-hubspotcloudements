let input = steps.SyncRunNewInputParams.input;

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
            config_json : steps.ChargebeeGetTpIntegConf.data.third_party_configuration.config_json
        },
   apiKey : input.apiKey,
  siteName : input.siteName,
  type: input.type,
  siteDomain: input.siteDomain,
};

param.body.config_json.cloudElements.syncLog.ignoreAll = true;




done(param);