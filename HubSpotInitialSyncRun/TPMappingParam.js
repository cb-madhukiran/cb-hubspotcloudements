let apiKey = steps.InitialSyncParams.input.apiKey;
let siteDomain = steps.InitialSyncParams.input.siteDomain;
let siteName = steps.InitialSyncParams.input.siteName;
let type = steps.InitialSyncParams.input.type;
let password = "";

let configuration = steps.ChargebeeGetTpIntegConf.data.config_json;  
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
        limit:10,
        "entity_type[is]":"customer"
      },
      apiKey : apiKey,
      siteDomain : siteDomain,
      siteName : siteName,
      type : type

   
    
  
};

if(configuration !==undefined ) {
 let after;
 let before;
 if(configuration.firstSync !== undefined) {
   after = Number(configuration.firstSync);
   if(isNaN(after)){
     after = undefined;
   }
 }
  if(configuration.firstSyncEnd !== undefined) {
   before = Number(configuration.firstSyncEnd);
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