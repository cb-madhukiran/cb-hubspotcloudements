let input = {
  url : "https://"+steps.InitialSyncParams.input.siteName+"."+steps.InitialSyncParams.input.siteDomain+"/api/v2/third_party_sync_details/" +steps.ChargebeeGetTpIntegSync.data.id,
  headers: steps.InitialSyncParams.input.config.auth,
  query: steps.ChargebeeGetTpIntegSync.data,
  apiKey : steps.InitialSyncParams.input.apiKey ,
  siteName : steps.InitialSyncParams.input.siteName,
  siteDomain : steps.InitialSyncParams.input.siteDomain
};
input.query.status = "failed";
input.query.context.sync_context_messages = "No excution found";
done(input);
  