let subscription = steps.CBInfo.subscription;

let apiKey=steps.DealsInputParams.apiKey;
let siteName=steps.DealsInputParams.siteName;
let siteDomain=steps.DealsInputParams.siteDomain;
let type = steps.DealsInputParams.type;
let password = "";

steps.DealSyncLog.syncCount.eCount = steps.DealSyncLog.syncCount.eCount +1;
 let chargebee_data_url = "https://"+siteName+"."+siteDomain+"/admin-console/subscriptions/"+subscription.id;
 let cb_link = "<a href='"+chargebee_data_url+"' target='blank'>"+subscription.id+"</a> HubSpot deal create/update operation failed\n";
 let data = {
   url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_entity_mappings/update_entity",
  headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: type,
        entity_id: subscription.id,
        entity_type: "subscription",
        status: "update_failed",
        error_message: cb_link
      },
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: "hubspot",
  
};
done(data);