let cloud = "https://staging.cloud-elements.com";
let props  = {
  syncRun:{
     url :cloud + "/elements/api-v2/sync/run",
    id:"411944"
  },
   unlink:{
     url :cloud + "/elements/api-v2/unlink",
    id:"412296"
  },
  syncProcessingCard:{
     url :cloud + "/elements/api-v2/hubspot/syncProcessingCard",
    id:"399319"
  },
};
done(props);