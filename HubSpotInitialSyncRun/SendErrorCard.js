let card = {
    "cards": [{
        "card": {
            "type": "ACTION",
            "heading": "Error",
            "subHeading": "An issue was encountered due to which the sync did not succeed. Please retry sync and if the issue still persists, contact support",
            "icon" : "ERROR",
            "buttons": [{
                "id": "direct",
                "display": "Resolve",
                "icon": "ARROW",
                "type": "DIRECT_LINK",
                "buttonLook":"FILLED",
                "request": {
                    "type": "ON_CLICK_GET_CARD",
                    "apiEndPoint": {
                        "apiUrl": steps.Props.initialsync.url,
                        "type": "GET",
                        "headers": {
                            "Elements-Formula-Instance-Id": steps.Props.initialsync.id,
                        },
                        "input":{
                            "type": steps.InitialSyncParams.input.type,
                            "action": "retry"
                        }
                    }
                }
            }]
        },
        "id": "check2",
        "showRetry": "false"
    }],
        "proceed": {
        "id": "proceed",
        "display": "Sync all Records",
        "icon": "ARROW",
        "type": "POP_UP",
        "popUp": {
            "type": "SIMPLE",
            "title": "Are you sure you want to ignore the errors and sync all records?",
            "usecase":"DANGER",
            "submitButton": "Yes, go ahead",
            "cancelButton": "Dismiss",
            "description": "All your customer and subscription data will be synced. You can fix the errors, if any, sync the data again, later.",
            "apiEndPoint": {
                "apiUrl": steps.Props.syncProcessingCard.url,
                "type": "GET",
                "headers": {
                    "Elements-Formula-Instance-Id": steps.Props.syncProcessingCard.id
                },
               "input": {
                      "type": steps.InitialSyncParams.input.type,
                      "syncNow": "syncNow"
                      
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
          "apiUrl": steps.Props.initialsync.url,
          "headers": {
            "Elements-Formula-Instance-Id": steps.Props.initialsync.id,
          },
          "input": {
            "action": "retry",
            "type":  steps.InitialSyncParams.input.type
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
})