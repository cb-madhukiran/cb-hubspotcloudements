let card = {
    "icon": "/third_party/cn-xero.png",
   
    "syncErrors": [
    {
      "card": {
            "type" : "ACTION",
            "heading" : "No errors found",
            "icon" : "WARNING"
         },
      "id": "sync_errors",
      "isCardDone": "false"
    }
  ],
    "overview": [{
        "card": {
            "type" : "PROCESSING",
            "processingText": "...",
            "request" : {
               "type":"DOC_READY_GET_CARD",
               "apiEndPoint":{
                  "apiUrl": steps.Props.syncRun.url,
                        "type": "GET",
                        "headers": {
                            "Elements-Formula-Instance-Id": steps.Props.syncRun.id
                        },
                        "input":{
                            "type": steps.SyncRunNewInputParams.input.type,
                            "action": "run",
                        }
                        
               }
            }
         },
          "id":"overview",
    "isCardDone":"false"
         
    }],
    
     "unlink": {
    "buttonLook": "MUTTED",
    "display": "Unlink Integration",
    "id": "unlink",
    "popUp": {
      "apiEndPoint": {
        "apiUrl": steps.Props.unlink.url,
        "headers": {
          "Elements-Formula-Instance-Id":  steps.Props.unlink.id
        },
        "input": {
          "type": "hubspot"
        },
        "type": "GET"
      },
      "cancelButton": "Dismiss",
      "description": "This will remove all the configuration details such as login authentication, configurations mapping etc. If you want to sync again, you will have to start the sync process from the beginning.",
      "submitButton": "Unlink",
      "title": "Do you really want to unlink the integration?",
      "type": "SIMPLE"
    },
    "type": "POP_UP"
  }
};

done({
 statusCode: 200,
 result: card
});