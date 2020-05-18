let input = {
  url : "https://"+steps.SyncRunNewInputParams.input.siteName+"."+steps.SyncRunNewInputParams.input.siteDomain+"/api/v2/third_party_sync_details/" +steps.ChargebeeGetTpIntegSync.data.third_party_sync_detail.id,
  headers: steps.SyncRunNewInputParams.input.config.auth,
  query: steps.ChargebeeGetTpIntegSync.data.third_party_sync_detail,
};
input.query.status = "failed";
input.query.context.sync_context_messages = "No excution found";
input.query.context.initialSync = false;
done(input);
  