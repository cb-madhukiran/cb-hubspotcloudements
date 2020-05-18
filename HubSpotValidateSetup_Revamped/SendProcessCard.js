let formula=steps.ConfigParams.config_json.cloudElements.formulas;

let MappedFieldChargebee = (steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.syncRulesContacts.MappedFieldChargebee !== undefined) ? steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.syncRulesContacts.MappedFieldChargebee : null;

let fieldName;

if(MappedFieldChargebee === "email")
  fieldName = "Email address";
else if(MappedFieldChargebee === "phone")
  fieldName = "Phone number";
else if(MappedFieldChargebee === "company")
  fieldName = "Company";
else
  fieldName = "Custom Field " + MappedFieldChargebee;

let card = {
    "cards": [{
        "id": "check2",
        "showRetry":"false",
        "card": {
            "type": "PROCESSING",
            "processingText": "Validating your Chargebee data",
            "listHeading": "We'll verify if:",
            "listContent": [
                fieldName + " exists for all customers in Chargebee"
            ],
            "request": {
                "type": "DOC_READY_GET_CARD",
                "apiEndPoint": {
                    "apiUrl": steps.Props.validate.url,
                    "type": "GET",
                    "headers": {
                        "Elements-Formula-Instance-Id": steps.Props.validate.id
                    },
                    "input": {
                        "type": "hubspot",
                    }
                }
            }
        }
    }],
    "proceed": {
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
    },
    "retry": {
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
                    "Elements-Formula-Instance-Id":steps.Props.validate.id
                },
                "input": {
                    "type": "hubspot",
                    "retry": "true"
                }
            }
        }
    }
};

done({
 statusCode: 200,
 result: card
})