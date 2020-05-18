let customer = steps.HubData.customer;
let apiKey=steps.ContactInputParams.input.apiKey;
let siteName=steps.ContactInputParams.input.siteName;
let siteDomain=steps.ContactInputParams.input.siteDomain;
let type = steps.ContactInputParams.input.type;
let password = "";
steps.SyncLog.syncCount.eCount = steps.SyncLog.syncCount.eCount +1;

 let chargebee_data_url = "https://"+siteName+"."+siteDomain+"/admin-console/customers/"+customer.id;
 let cb_link = "<a href='"+chargebee_data_url+"' target='blank'>"+customer.id+"</a> Failed to update contact in HubSpot\n";
 
 let data = {
   url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_entity_mappings/update_entity",
  headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: type,
        entity_id: customer.id,
        entity_type: "customer",
        status: "update_failed",
        error_message: cb_link
      },
      siteName : steps.ContactInputParams.input.siteName,
  siteDomain : steps.ContactInputParams.input.siteDomain,
  apiKey : steps.ContactInputParams.input.apiKey,
  type : steps.ContactInputParams.input.type
  
};

done(data);