let update_card_json;

let errorCSV = steps.InputParams.result.errorCSV;
let noEmailCount = steps.InputParams.result.noEmail;
let noSubscriptionCount = steps.InputParams.result.noSubscription;
let MappedFieldChargebee = steps.InputParams.MappedFieldChargebee;

if((noEmailCount > 0) || (noSubscriptionCount > 0)){
  
  update_card_json =  {
      "cardStatus" : "VALIDATION-FAILED",
      "cardResult": {
        "id": "check2",
        "card": {
          "type": "ACTION",
          "heading": "We found the following errors during data validation",
          "listContent": [],
          "icon": "WARNING"
        },
        "csv": errorCSV
      }
    }
    
  if(noEmailCount > 0){
    let errorMessage;
    if(MappedFieldChargebee === "email")
      errorMessage = "Email address is unavailable for ";
    else if(MappedFieldChargebee === "phone")
      errorMessage = "Phone Number is unavailable for ";
    else if(MappedFieldChargebee === "company")
      errorMessage = "Company is unavailable for ";
    else
      errorMessage = "Custom Field "+ MappedFieldChargebee + " is unavailable for ";
    update_card_json.cardResult.card.listContent.push(errorMessage + noEmailCount + " customers in Chargebee");
  }
  
  if(noSubscriptionCount > 0){
    update_card_json.cardResult.card.listContent.push("Subscription is unavailable for " + noSubscriptionCount + " customers in Chargebee");
  }
  
}else{
  update_card_json =  {
    "cardStatus" : "VALIDATION-SUCCEEDED",
    "cardResult" : {
      "cards": [
        {
         "id" : "check2",
         "card": {
            "type" : "ACTION",
            "heading" : "No errors found  during data validation",
            "icon" : "SUCCESS"
          },
         "isCardDone":"true"
        }
      ]
    }
  }
}


done({
  updateCardJson : update_card_json
})