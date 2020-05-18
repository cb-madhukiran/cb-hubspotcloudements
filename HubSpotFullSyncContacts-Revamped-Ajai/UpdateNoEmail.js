let customer = steps.LoopOverCustomer.entry;
let apiKey=steps.ContactInputParams.input.apiKey;
let siteName=steps.ContactInputParams.input.siteName;
let siteDomain=steps.ContactInputParams.input.siteDomain;
let type = steps.ContactInputParams.input.type;
let message = "Mapped Field Not Available";
let password = "";

steps.SyncLog.syncCount.eCount = steps.SyncLog.syncCount.eCount +1;
 let chargebee_data_url = "https://"+siteName+"."+siteDomain+"/admin-console/customers/"+customer.id;
 
 if(steps.ContactInputParams.input.cbMappedField === "phone"){
   message = "Phone Number Not Available";
 }
 if(steps.ContactInputParams.input.cbMappedField === "email"){
   message = "Email Address Not Available";
 }
 
 let cb_link = "<a href='"+chargebee_data_url+"' target='blank'>"+customer.id+"</a> "+message+"\n";


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