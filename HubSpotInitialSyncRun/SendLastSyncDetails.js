let configuration = steps.ChargebeeGetTpIntegConf.data.config_json;
let portalId = configuration.cloudElements.thirdParty.portalId;
let successLog = [];
let errorLog = [];



let list = steps.ChargebeeGetTpMapping.data.list;
if(list === undefined) {
  list = [];
}

for(var i=0;i<list.length;i++){
  let tp = list[i].third_party_entity_mapping;
  if(tp !== undefined) {
    if(tp.status === "synced"){
      let id = tp.entity_id;
      let cId = tp.third_party_entity_id;
      let pUrl = "https://app.hubspot.com/contacts/"+portalId+"/contact/"+cId;
  let hubSpotLink = "<a href='"+pUrl+"' target='blank'>"+cId+"</a>";
  let chargebee_data_url = "https://"+steps.InitialSyncParams.input.siteName+"."+steps.InitialSyncParams.input.siteDomain+"/admin-console/customers/"+id;
  let cb_link = "<a href='"+chargebee_data_url+"' target='blank'>"+id+"</a>";
 successLog.push("Customer id " + cb_link + " is synced as " + hubSpotLink + " in HubSpot\n");
    }else if (tp.status === "update_failed"){
       errorLog.push(tp.error_message);
    }
  }
 
  
}

let sLen =successLog.length;
let eLen = errorLog.length;

let total = Number(sLen) + Number(eLen);
let card = {
   cards:[
      {
         "card": {
            "type" : "ACTION",
            "heading" :" "+sLen+" of "+total +" records synced successfully",
            "listContent":successLog,
            "icon" : "SUCCESS"         
         },
         "id" : "check2",
         "isCardDone":"true"
      },
      
   ]
};
if(eLen > 0) {
  card.cards.push({
         "card": {
            "type" : "ACTION",
            "heading" : " "+eLen+" of "+total +" records could not be synced",
            "subHeading" : "You could fix these errors and retry sync. Or you could go ahead and sync all records. We recommend that you fix these errors and retry sync.",
            "listContent":errorLog,
            "icon" : "ERROR"         
         },
         "id" : "check3",
         "isCardDone":"true"
      });
}

let eTtitle = "Are you sure you want to sync all records?";
let eDesc = "All your customer and subscription data will be synced.";
if(eLen > 0) {
  eTtitle = "Are you sure you want to ignore the errors and sync all records?";
 eDesc = "All your customer and subscription data will be synced. You can fix the errors, if any, sync the data again, later.";
}
card.proceed = {
        "id": "proceed",
        "display": "Sync all Records",
        "icon": "ARROW",
        "type": "POP_UP",
        "popUp": {
            "type": "SIMPLE",
            "title": eTtitle,
            "usecase":"DANGER",
            "submitButton": "Yes, go ahead",
            "cancelButton": "Dismiss",
            "description": eDesc,
              "apiEndPoint": {
            "apiUrl": steps.Props.syncProcessingCard.url,
        "headers": {
          "Elements-Formula-Instance-Id":  steps.Props.syncProcessingCard.id
        },
        "input": {
          "action": "firstFullSync",
          "syncType" : "firstFullSync",
          "type": "hubspot"
        },
        "type": "GET"
      }
      
        }
    };

card.retry = {
        "id": "retry",
        "display": "Retry Initial Sync",
        "icon": "ARROW",
        "buttonLook":"FILLED",
        "type": "DIRECT_LINK",
        "request": {
            "type": "ON_CLICK_DEFAULT_ACTION",
            "apiEndPoint": {
                "apiUrl": steps.Props.initialsync.url,
                "type": "GET",
                "headers": {
                    "Elements-Formula-Instance-Id": steps.Props.initialsync.id
                },
                "input":{
                    "type": steps.InitialSyncParams.input.type,
                    "action": "retry"
                }
            }
        }
    };

done({
  statusCode: 200,
  result: card
})