let data = {
   url: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/list_all",
    headers: steps.InputParams.input.cbheaders,
    query: {
     integration_name: steps.InputParams.input.type,
    limit: steps.InputParams.batchSize,
    "status":"update_failed",
    "entity_type[is]": "customer",
    "modified_at[after]": steps.SyncLog.syncLog.start
    },
    
    apiKey: steps.InputParams.input.apiKey,
    siteName: steps.InputParams.input.siteName,
    siteDomain: steps.InputParams.input.siteDomain,
    type: steps.InputParams.input.type,
};
if (steps.CSVParam.tpOffset.next_offset !== undefined) {
  data.query.offset = steps.CSVParam.tpOffset.next_offset;
}
done(data);