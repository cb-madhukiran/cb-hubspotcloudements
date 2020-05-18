let formula = steps.ConfigParams.config_json.cloudElements.formulas;
let resultcard = JSON.parse(steps.getResultAPI.response.body[0].value);
let s3loglink = steps.getUpdatedConfigs.data.third_party_configuration.config_json.cloudElements.formulas.formula_Validate.validataion_log_id;

if(s3loglink === undefined){
s3loglink = "";
}

let cardJson = {
    cards: [{
        id: "check2"
    }]
};

if (resultcard.cardStatus === "VALIDATION-FAILED") {
    let card = resultcard.cardResult.card;
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
            description: "Some of your customer and  subscription data may not be synced with HubSpot.",
            apiEndPoint: {
                apiUrl: steps.Props.final.url,
                type: "GET",
                "headers": {
                    "Elements-Formula-Instance-Id":steps.Props.final.id
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
   cardJson = resultcard.cardResult;
   
   cardJson.cards[0].showRetry = "false";
}

done({
  statusCode: 200,
  result: cardJson
})
