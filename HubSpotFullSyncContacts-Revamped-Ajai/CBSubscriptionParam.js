let cId = encodeURIComponent(steps.CBData.customer.id);
let data = {
  
  getHubspotSubscription:{
    url: "https://"+steps.ContactInputParams.input.siteName+".integrations." + steps.ContactInputParams.input.siteDomain+"/api/hubspot/subscription?customer_id="+cId,
   headers:{
    api_key:steps.ContactInputParams.input.apiKey
    }
  },
  
  
  
  getCustomerCBEM : {
    url : "https://" + steps.ContactInputParams.input.siteName + "." + steps.ContactInputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/retrieve",
    headers: {
    Authorization: "Basic " + CE.b64(steps.ContactInputParams.input.apiKey + ":" + "")
  },
  query: {
      'integration_name': steps.ContactInputParams.input.type,
      'entity_id': cId,
      'entity_type': 'customer'
  }
    
  },
  
  cbemUpdate :{
    url : "https://" + steps.ContactInputParams.input.siteName + "." + steps.ContactInputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/update_entity",
     headers: {
    Authorization: "Basic " + CE.b64(steps.ContactInputParams.input.apiKey + ":" + "")
  }
  },
 
  
  cbem:{
     url: {
    "get": "https://" + steps.ContactInputParams.input.siteName + "." + steps.ContactInputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/retrieve",
    update: "https://" + steps.ContactInputParams.input.siteName + "." + steps.ContactInputParams.input.siteDomain + "/api/v2/third_party_entity_mappings/update_entity",
  },
  auth: {
    Authorization: "Basic " + CE.b64(steps.ContactInputParams.input.apiKey + ":" + "")
  },
  query: {
    customer: {
      'integration_name': steps.ContactInputParams.input.type,
      'entity_id': cId,
      'entity_type': 'customer'
    }
  },
  }
};

done(data);