let data = {
  url: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/list_all",
  auth: {
    Authorization: "Basic " + CE.b64(steps.InputParams.input.apiKey + ":")
  },
  query: {
    integration_name: steps.InputParams.input.type,
    limit: 30,
    "status": "synced",
    "entity_type[is]": "customer",
    "modified_at[after]": steps.CustomersParam.syncData.lastSync
  }
};
if (steps.CustomersParam.tpOffset.next_offset !== undefined) {
  data.query.offset = steps.CustomersParam.tpOffset.next_offset;
}
done(data);