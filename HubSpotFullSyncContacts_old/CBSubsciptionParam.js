let cId = encodeURIComponent(steps.CBData.customer.id);
let data = {
  url: "https://"+steps.InputParams.input.siteName+".integrations." + steps.InputParams.input.siteDomain+"/api/hubspot/subscription?customer_id="+cId,
   headers:{
    api_key:steps.InputParams.input.apiKey
  },
  cbem:{
     url: {
    "get": "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/retrieve",
    update: "https://" + steps.InputParams.input.siteName + "." + steps.InputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/update_entity",
  },
  auth: {
    Authorization: "Basic " + CE.b64(steps.InputParams.input.apiKey + ":" + "")
  },
  query: {
    customer: {
      'integration_name': steps.InputParams.input.type,
      'entity_id': cId,
      'entity_type': 'customer'
    }
  },
  }
};

done(data);