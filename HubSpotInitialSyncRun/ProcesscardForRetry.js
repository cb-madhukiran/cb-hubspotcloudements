let eTtitle = "Are you sure you want to sync all records?";
let eDesc = "All your customer and subscription data will be synced.";
let card = {
    "cards": [
      {
         "card": {
            "type" : "PROCESSING",
            "processingText": " Syncing first 10 customers and their subscriptions",
            "request" : {
               "type":"DOC_READY_GET_CARD",
               "apiEndPoint":{
                  "apiUrl": steps.Props.initialsync.url,
                        "type": "GET",
                        "headers": {
                            "Elements-Formula-Instance-Id": steps.Props.initialsync.id
                        },
                        "input":{
                            "type": steps.InitialSyncParams.input.type,
                            "action": "default",
                            
                        }
               }
            }
         },
         "id" : "check2",
          "showRetry":"false"
      } 
   ],
    "proceed": {
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
                "type": "GET",
                "headers": {
                    "Elements-Formula-Instance-Id": steps.Props.syncProcessingCard.id
                },
               "input": {
                      "type": steps.InitialSyncParams.input.type,
                      "action" : "run"
                      
                }
            }
        }
    },
    "retry": {
      "buttonLook": "FILLED",
      "display": "Retry Initial Sync",
      "icon": "ARROW",
      "id": "retry",
     
      "request": {
        "apiEndPoint": {
          "apiUrl":steps.Props.initialsync.url,
          "headers": {
            "Elements-Formula-Instance-Id": steps.Props.initialsync.id
            },
          "input": {
            "action": "retry",
            "type": steps.InitialSyncParams.input.type,
            
          },
          "type": "GET"
        },
        "type": "ON_CLICK_DEFAULT_ACTION"
      },
      "type": "DIRECT_LINK"
    }
};


done({
    statusCode: 200,
    result: card
});