let apiKey=steps.ContactInputParams.input.apiKey;
let siteName=steps.ContactInputParams.input.siteName;
let siteDomain=steps.ContactInputParams.input.siteDomain;
let type = steps.ContactInputParams.input.type;
let password = "";

steps.SyncLog.syncCount.eCount = steps.SyncLog.syncCount.eCount +1;

let message = "A contact with the value of mapped field already exist";

let cbMappedField = steps.ContactInputParams.input.cbMappedField;

if(cbMappedField === "email"){
  message = "Duplicate email";
}
if(cbMappedField === "phone"){
  message = "Duplicate phone number";
}

let customerId = steps.CBData.customer.id;
 let chargebee_data_url = "https://"+siteName+"."+siteDomain+"/admin-console/customers/"+customerId;
 let cb_link = "<a href='"+chargebee_data_url+"' target='blank'>"+customerId+"</a> "+message+"\n";

let data = {
   url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_entity_mappings/update_entity",
  headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: type,
        entity_id: customerId,
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