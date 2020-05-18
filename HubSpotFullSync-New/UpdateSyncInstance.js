let instance = steps.CreateSyncInstance.response.body.id;
let fullSync = steps.ConfigData.configJson.third_party_configuration.config_json.cloudElements.formulas.fullSync;
if(fullSync === undefined) {
  fullSync = {};
}
if(steps.LoopOverFormulas.entry.type === "contact") {
 fullSync.contact = instance;
}else if(steps.LoopOverFormulas.entry.type === "custom") {
   fullSync.custom = instance;
}else if(steps.LoopOverFormulas.entry.type === "deal") {
   fullSync.deal = instance;
}else if(steps.LoopOverFormulas.entry.type === "metrics") {
   fullSync.metrics = instance;
}
steps.ConfigData.configJson.third_party_configuration.config_json.cloudElements.formulas.fullSync = fullSync;
steps.InputParams.updateconfig.body.config_json = steps.ConfigData.configJson.third_party_configuration.config_json;
done(steps.InputParams);