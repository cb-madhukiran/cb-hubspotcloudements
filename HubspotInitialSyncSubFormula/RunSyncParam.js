let input = {
  error : false,
  done: false,
  url : "https://"+steps.InitParams.input.siteName+"."+steps.InitParams.input.siteDomain+"/api/v2/third_party_sync_details/" +steps.ChargebeePostCreateTpIntegSync.data.third_party_sync_detail.id,
  headers: steps.InitParams.input.config.auth,
  query: steps.ChargebeePostCreateTpIntegSync.data.third_party_sync_detail,
};

input.query.status = "running";
done(input);