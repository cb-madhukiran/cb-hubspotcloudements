let apiKey = steps.MetricsInputParams.input.apiKey;
let siteDomain = steps.MetricsInputParams.input.siteDomain;
let siteName = steps.MetricsInputParams.input.siteName;
let type = steps.MetricsInputParams.input.type;
let password = "";

let params = {
      apiKey: apiKey,
      siteName: siteName,
      siteDomain:siteDomain,
      type: type,
      url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_entity_mappings/list_all",
      headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: type,
        limit:30,
        "status":"synced",
        "modified_at[after]":steps.SyncLog.syncLog.start,
        "entity_type[is]":"customer"
      }
};

if(steps.SyncLog.tpOffset.next_offset !== undefined) {
  params.query.offset = steps.SyncLog.tpOffset.next_offset; 
}
done(params);