let formula=steps.ConfigParams.config_json.cloudElements.formula;
let excecution = steps.ConfigParams.config_json.cloudElements.formulas.formula_Validate.execution;
let s3loglink=steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.formulas.formula_Validate.validataion_log_id;

let cardJson = {
    cards: [{
        id: "check2"
    }]
}

if (excecution.result.error === true) {
  
    let card = {
          "type": "ACTION",
          "heading": "We found the following errors during data validation",
          "listContent": excecution.result.message,
          "icon": "WARNING",
        };
        
    let csvButton =  {      
        "display": "Download CSV",       
        "icon": "CLOUD_DOWNLOAD",         
        "id": "download",       
        "fileId": s3loglink,           
        "type": "DOWNLOAD_FILE"         
             };
    
    let confirmationButton = {
        id: "confirmation",
        display: "Ignore errors",
        icon: "CLOSE",
        type: "POP_UP",
        popUp: {
            type: "SIMPLE",
            title: "Are you sure you want to ignore the errors?",
            submitButton: "Yes, go ahead",
            cancelButton: "Dismiss",
            usecase: "DANGER",
            description: "Some of your customer and subscription data may not be synced with HubSpot.",
            apiEndPoint: {
                apiUrl: steps.Props.final.url,
                type: "GET",
                "headers": {
                    "Elements-Formula-Instance-Id": steps.Props.final.id
                },
                
                input:{
                 apiKey: steps.InputParams.apiKey,
                 siteName: steps.InputParams.siteName,
                 siteDomain: steps.InputParams.siteDomain,
                 type: steps.InputParams.type
                 
                }
            }
        }
    };
    card.buttons = [csvButton,confirmationButton];
    cardJson.cards[0].card = card;

} else {
   cardJson= {
      "cards": [
        {
         "id" : "check2",
         "card": {
            "type" : "ACTION",
            "heading" : "No errors found  during data validation",
            "icon" : "SUCCESS"
          },
         "isCardDone":"true",
         "showRetry" : "false"
        }
      ]
    };
}
cardJson.proceed =  {
        "id": "proceed",
        "display": "Proceed",
        "icon": "ARROW",
        "buttonLook": "FILLED",
        "type": "DIRECT_LINK",
        "request": {
            "type": "ON_CLICK_SEND_INPUT",
            "apiEndPoint": {
                "apiUrl": steps.Props.proceed.url,
                "type": "GET",
                "headers": {
                    "Elements-Formula-Instance-Id":  steps.Props.proceed.id
                }
            }
        }
    };
    cardJson.retry =  {
        "id": "retry",
        "display": "Retry Data Validation",
        "icon": "ARROW",
        "buttonLook": "FILLED",
        "type": "DIRECT_LINK",
        "request": {
            "type": "ON_CLICK_DEFAULT_ACTION",
            "apiEndPoint": {
                "apiUrl": steps.Props.validate.url,
                "type": "GET",
                "headers": {
                    "Elements-Formula-Instance-Id": steps.Props.validate.id
                },
                "input": {
                    "type": "hubspot",
                    "retry": "true"
                }
            }
        }
    };

done({
  statusCode: 200,
  result: cardJson
})