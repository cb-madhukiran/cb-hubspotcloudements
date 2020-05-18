let apiKey = steps.DealsInputParams.apiKey;
let siteName = steps.DealsInputParams.siteName;
let type = steps.DealsInputParams.type;
let siteDomain = steps.DealsInputParams.siteDomain;
let password = "";
let data = {
  url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_entity_mappings/list_all",
  headers: {
    Authorization: "Basic " + CE.b64(apiKey + ":")
  },
  query: {
    integration_name: type,
    limit: 30,
    "status": "synced",
    "entity_type[is]": "customer",
    "modified_at[after]": steps.CustomersParam.syncData.lastSync
  },
   apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: type,
};
if (steps.CustomersParam.tpOffset.next_offset !== undefined) {
  data.query.offset = steps.CustomersParam.tpOffset.next_offset;
}
done(data);