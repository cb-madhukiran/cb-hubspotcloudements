let apiKey = steps.SyncRunNewInputParams.input.apiKey;
let siteDomain = steps.SyncRunNewInputParams.input.siteDomain;
let siteName = steps.SyncRunNewInputParams.input.siteName;
let type = steps.SyncRunNewInputParams.input.type;
let password = "";

let configuration = steps.ChargebeeGetTpIntegConf.data.third_party_configuration.config_json;  
configuration = configuration.cloudElements;
if(configuration !==undefined ) {
  configuration = configuration.syncData;
}

let params = {
   
  
      url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_entity_mappings/list_all",
      headers:{
        Authorization: "Basic " + CE.b64(apiKey + ":" + password)
      },
      query:{
        integration_name: type,
        limit:20,
        "status":"update_failed",
        "entity_type[is]":"customer"
      }

   
    
  
};

if(configuration !==undefined ) {
 let after;
 let before;
 if(configuration.SyncRun !== undefined) {
   after = Number(configuration.SyncRun);
   if(isNaN(after)){
     after = undefined;
   }
 }
  if(configuration.lastSync !== undefined) {
   before = Number(configuration.lastSync);
   if(isNaN(before)){
     before = undefined;
   }
 }
 if(after !== undefined) {
   params.query["modified_at[after]"] = after;
    
 }
 if(before !== undefined) {
   params.query["modified_at[before]"] = before;
 }
}
done(params);