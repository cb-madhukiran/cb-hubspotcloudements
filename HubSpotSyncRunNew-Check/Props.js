let cloud = "https://staging.cloud-elements.com";
let props  = {
  syncRun:{
     url :cloud + "/elements/api-v2/sync/run",
    id:info.formulaInstanceId
  },
   unlink:{
     url :cloud + "/elements/api-v2/unlink",
    id:"399321"
  },
  syncProcessingCard:{
     url :cloud + "/elements/api-v2/hubspot/syncProcessingCard",
    id:"399319"
  },
};
done(props);