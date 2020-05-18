let data = {
  valid:false,
  
   url: "https://"+steps.DealsInputParams.siteName+"."+steps.DealsInputParams.siteDomain+"/api/v2/subscriptions",
    headers:{
        Authorization: "Basic " + CE.b64(steps.DealsInputParams.apiKey + ":" )
      },
   query: {
 	   limit: 20,
 	   "sort_by[desc]" : "updated_at",
  },
  apiKey: steps.DealsInputParams.apiKey,
  siteName: steps.DealsInputParams.siteName,
  siteDomain:steps.DealsInputParams.siteDomain,
  type: "hubspot", 
  plans:{},
  customerList:steps.CustomersParam.customerList
};

if(steps.CustomersParam.subOffset.next_offset !== undefined) {
  data.query.offset = steps.CustomersParam.subOffset.next_offset;
}

if(steps.CustomersParam.syncData.firstSync!==undefined && steps.CustomersParam.syncData.lastSync !== undefined) {
  data.query["created_at[after]"] = steps.CustomersParam.syncData.lastSync;
  data.query["updated_at[after]"] = steps.CustomersParam.syncData.lastSync;
  
  data.valid = true;
  
  
}else {
  data.error="Invalid data SyncData (firstSync,lastSync)";
}


if(steps.CustomersParam.customerList.length >0) {
  let cList=[];
  for(var i=0;i<20;i++){
    if(steps.CustomersParam.customerList.length >0) {
      cList.push(encodeURIComponent(steps.CustomersParam.customerList.pop()));
    }else {
      break;
    }
  }
  
  data.query["customer_id[in]"]=JSON.stringify(cList);
  
}else {
  data.valid = false;
}
if(steps.CustomersParam.syncRulesDeals.allowCreateDealInTrial==="true" && steps.CustomersParam.syncRulesContacts.CustomersToSync!=="Customers_with_Active_subscriptions") {
   data.query["status[in]"] = "[active,in_trial,non_renewing]";
}else {
  data.query["status[in]"] = "[active,non_renewing]";
}

let result = steps.getHubspotPipeline.data;
if(result !== undefined) {
  result = result.results;
}
let stageOptions = {};
let selPipeLine = steps.CustomersParam.pipeline;
if(selPipeLine === undefined) {
  selPipeLine = "default";
}
if(result !== undefined && result.length>0){
for (var i = 0; i < result.length; i++) {
    if (result[i].pipelineId === selPipeLine) {
        for (var j = 0; j < result[i].stages.length; j++) {
            stageOptions[result[i].stages[j].stageId] = result[i].stages[j].label;
        }
    }
}
}
data.stageOptions = stageOptions;


done(data);