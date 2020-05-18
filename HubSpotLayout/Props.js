let cloud = "https://staging.cloud-elements.com";
let props  = {
  chargebeeElement:"21281",
  thirdPartyElement:"21282",
   connect:{
     url :cloud + "/elements/api-v2/hubspot/connect",
    id:"411912"
  },
   syncRulesContactsSetup:{
    url :cloud + "/elements/api-v2/hubspot/syncRulesContactsSetup",
    id:"435974"

  },
   goback:{
     url :cloud + "/elements/api-v2/hubspot/goback",
    id:"411948"
  },
  syncRulesDealsSetup:{
     url :cloud + "/elements/api-v2/hubspot/syncRulesDealsSetup",
    id:"411949"
  },
   fields:{
     url :cloud + "/elements/api-v2/hubspot/fields",
    id:"412152"
  },
  //old
   orders:{
     url :cloud + "/elements/api-v2/hubspot/orders",
    id:"412151"
  },
  //old
  validate:{
     url :cloud + "/elements/api-v2/hubspot/validate",
    id:"412082"
  },
  //old
  initialsync:{
     url :cloud + "/elements/api-v2/initialsync/setup",
    id:"411939"
  },
  //old
  syncProcessingCard:{
     url :cloud + "/elements/api-v2/sync/run",
     id:"437147",
    //id:"411944"
  },
  //changed
  autoSync:{
    url :cloud + "/elements/api-v2/autoSync",
    id:"419662"
  },
  // autoSync:{
  //   url :cloud + "/elements/api-v2/autoSync1",
  //   id:"419662"
  // },
 manageSyncRules:{
     url :cloud + "/elements/api-v2/hubspot/manageSyncRules",
    id:"435985"
  }
  
};
done(props);