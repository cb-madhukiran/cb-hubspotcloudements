
let card = {
   "cards":[
      {
         "id" : "check2",
         "card": {
            "type" : "ACTION",
            "heading" : "You've ignored errors found during data validation.",
            "icon" : "WARNING",
         },
         "isCardDone":"true"
      }
   ],
   "proceed" : {
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
                    "Elements-Formula-Instance-Id":steps.Props.proceed.id
                }
            }
        }
    },
   "retry": {
    "buttonLook": "FILLED",
    "display": "Retry Data Validation",
    "icon": "ARROW",
    "id": "retry",
    "request": {
      "apiEndPoint": {
        "apiUrl": steps.Props.validate.url,
        "headers": {
          "Elements-Formula-Instance-Id": steps.Props.validate.id
        },
        "input": {
          "retry": "true",
          "siteDomain": "chargebee-labs.com",
          "type": "hubspot"
        },
        "type": "GET"
      },
      "type": "ON_CLICK_DEFAULT_ACTION"
    },
    "type": "DIRECT_LINK"
  }
}
done({
 statusCode: 200,
 result: card
})
