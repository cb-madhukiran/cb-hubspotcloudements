let ignoreAll = steps.ChargebeeGetTpIntegConf.data.third_party_configuration.config_json.cloudElements.syncLog.ignoreAll;
if(ignoreAll === undefined) {
  ignoreAll = false;
}

done(ignoreAll);