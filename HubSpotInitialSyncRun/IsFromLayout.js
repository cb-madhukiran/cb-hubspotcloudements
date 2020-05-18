let syncData = steps.ChargebeeGetTpIntegConf.data.config_json.cloudElements.syncData;
let flag = true;
if(syncData !== undefined && syncData.firstSync !== undefined) {
  flag = false;
}
done(flag && steps.InitialSyncParams.input.action === "layout");