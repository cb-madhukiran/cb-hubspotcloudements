let apiKey=steps.InputParams.input.apiKey;
let siteName=steps.InputParams.input.siteName;
let siteDomain=steps.InputParams.input.siteDomain;
let type = steps.InputParams.input.type;
let password = "";

steps.SyncLog.syncCount.eCount = steps.SyncLog.syncCount.eCount +1;

let customerId = steps.CBData.customer.id;
 let chargebee_data_url = "https://"+siteName+"."+siteDomain+"/admin-console/customers/"+customerId;
 let cb_link = "<a href='"+chargebee_data_url+"' target='blank'>"+customerId+"</a> Duplicate email\n";

let data = {
   url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_entity_mappings/update_entity",
  auth:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: type,
        entity_id: customerId,
        entity_type: "customer",
        status: "update_failed",
        error_message: cb_link
      }
  
};
done(data);