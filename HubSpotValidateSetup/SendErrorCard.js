let errCode="";
if (steps.updateConfigFailed.cb_error_code !==undefined)
{
  errCode = steps.updateConfigFailed.cb_error_code;
}

let msg = steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.formulas.formula_Validate.resultMsg || "";

let card = {
    "cards": [{
        "id": "check2",
        "card": {
            "type": "ACTION",
            "heading": "ERROR -- during data validation " ,
            "listContent": [
                msg 
            ],
            "icon": "WARNING"
          
        }
    }],
    "proceed": {
    "buttonLook": "FILLED",
    "display": "Proceed",
    "icon": "ARROW",
    "id": "proceed",
    "request": {
      "apiEndPoint": {
        "apiUrl": steps.Props.proceed.url,
        "headers": {
          "Elements-Formula-Instance-Id":steps.Props.proceed.id
        },
        "type": "GET"
      },
      "type": "ON_CLICK_SEND_INPUT"
    },
    "type": "DIRECT_LINK"
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
          "type": "hubspot"
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