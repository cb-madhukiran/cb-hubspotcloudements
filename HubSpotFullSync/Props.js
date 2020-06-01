let data = {
  formula:{
     HubSpotCustomFields:"35164",
  HubSpotFullSyncContacts:"31720",
  //HubSpotFullSyncDeals:"31708",
  HubSpotFullSyncDeals : "31839",
  HubSpotFullsyncMetrics :"31672",
  }
};

// if(trigger.args['cb-site-name'] === "lakshmipriya-test"){
//   data.formula.HubSpotFullSyncContacts = "32670";
// }

done(data);