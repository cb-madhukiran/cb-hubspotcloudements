let configJson = steps.getTpIntegConfig.data.third_party_configuration.config_json.cloudElements;
let company;
let contact;
let deal;
let syncFields="false";

if(configJson.syncRulesFields !== undefined){
  company = configJson.syncRulesFields.company;
  contact= configJson.syncRulesFields.contact;
  deal= configJson.syncRulesFields.deal;
  syncFields = configJson.syncRulesFields.sync;
}

if(company === undefined) {
  company = {};
}
if(deal === undefined) {
  deal = {};
}
if(contact === undefined) {
  contact ={};
}

let customfields = [
    {
        label: "Subscription",
        key: "subcst",
        fields: [
            ['currency_code', 'string', 'text'],
            ['plan_unit_price', 'number', 'text','currency'],
            ['plan_amount', 'number', 'text','currency'],
            ['billing_period', 'number', 'text'],
            ['billing_period_unit', 'string', 'text'],
            ['plan_free_quantity', 'number', 'text'],
            ['start_date', 'datetime', 'date'],
            ['trial_start', 'datetime', 'date'],
            ['trial_end', 'datetime', 'date'],
            ['current_term_start', 'datetime', 'date'],
            ['current_term_end', 'datetime', 'date'],            
            ['created_at', 'datetime', 'date'],
            ['started_at', 'datetime', 'date'],
            ['activated_at', 'datetime', 'date'],
            ['gift_id', 'string', 'text'],
            ['override_relationship', 'string', 'text'],
            ['pause_date', 'datetime', 'date'],
            ['resume_date', 'datetime', 'date'],
            ['cancelled_at', 'datetime', 'date'],
            ['cancel_reason', 'string', 'text'],
            ['affiliate_token', 'string', 'text'],
            ['created_from_ip', 'string', 'text'],
            ['resource_version', 'number', 'text'],
            ['updated_at', 'datetime', 'date'],
            ['has_scheduled_changes', 'string', 'text'],
            ['payment_source_id', 'string', 'text'],           
            ['exchange_rate', 'number', 'text'],
            ['base_currency_code', 'string', 'text']
        ]
    },
    {
        label: "Customer",
        key: "custcst",
        fields: [
            ['vat_number', 'string', 'text'],
            ['vat_number_validated_time', 'datetime', 'date'],
            ['vat_number_status', 'string', 'text'],
            ['allow_direct_debit', 'string', 'text'],
            ['is_location_valid', 'string', 'text'],
            ['created_at', 'datetime', 'date'],
            ['created_from_ip', 'string', 'text'],
            ['taxability', 'string', 'text'],
            ['entity_code', 'string', 'text'],
            ['exempt_number', 'string', 'text'],
            ['resource_version', 'number', 'text'],
            ['updated_at', 'datetime', 'date'],
            ['locale', 'string', 'text'],
            ['consolidated_invoicing', 'string', 'text'],
            ['billing_date_mode', 'string', 'text'],
            ['billing_day_of_week', 'string', 'text'],
            ['billing_day_of_week_mode', 'string', 'text'],
            ['pii_cleared', 'string', 'text'],
            ['fraud_flag', 'string', 'text'],
            ['primary_payment_source_id', 'string', 'text'],
            ['backup_payment_source_id', 'string', 'text'],           
            ['promotional_credits', 'number', 'text','currency'],
            ['unbilled_charges', 'number', 'text','currency'],
            ['refundable_credits', 'number', 'text','currency'],
            ['excess_payments', 'number', 'text','currency'],
            ['deleted', 'string', 'text'],
            ['registered_for_gst', 'string', 'text'],
            ['business_customer_without_vat_number', 'string', 'text'],
            ['customer_type', 'string', 'text'],
            ['client_profile_id', 'string', 'text'],           
        ]
    },
    {
        label: "Order",
        key: "ordercst",
        fields: [
            ['document_number', 'string', 'text'],
            ['invoice_id', 'string', 'text'],
            ['cancellation_reason', 'string', 'text'],
            ['payment_status', 'string', 'text'],
            ['order_type', 'string', 'text'],
            ['price_type', 'string', 'text'],
            ['reference_id', 'string', 'text'],
            ['fulfillment_status', 'string', 'text'],
            ['shipping_date', 'datetime', 'date'],
            ['tracking_id', 'string', 'text'],
            ['batch_id', 'string', 'text'],
            ['created_by', 'string', 'text'],
            ['shipment_carrier', 'string', 'text'],
            ['invoice_round_off_amount', 'number', 'text','currency'],
            ['tax', 'number', 'text','currency'],
            ['amount_adjusted', 'number', 'text','currency'],
            ['refundable_credits_issued', 'number', 'text','currency'],
            ['refundable_credits', 'number', 'text','currency'],
            ['rounding_adjustement', 'number', 'text','currency'],
            ['paid_on', 'datetime', 'date'],
            ['shipping_cut_off_date', 'datetime', 'date'],
            ['created_at', 'datetime', 'date'],
            ['status_update_at', 'datetime', 'date'],
            ['delivered_at', 'datetime', 'date'],
            ['shipped_at', 'datetime', 'date'],
            ['resource_version', 'number', 'text'],
            ['updated_at', 'datetime', 'date'],
            ['cancelled_at', 'datetime', 'date'],
            ['discount', 'number', 'text','currency'],
            ['sub_total', 'number', 'text','currency'],
            ['total', 'number', 'text','currency'],
            ['deleted', 'string', 'text'],
            ['currency_code', 'string', 'text'],
            ['is_gifted', 'string', 'text'],
            ['gift_id', 'string', 'text']      
        ]
    },
];

let customCompanyFields = [
    {
        label: "Subscription",
        key: "subcst",
        fields: [            
            ['plan_quantity', 'number', 'text'],
            ['plan_unit_price', 'number', 'text','currency'],
            ['plan_amount', 'number', 'text','currency'],         
            ['plan_free_quantity', 'number', 'text']         
          
        ]
    },
    {
        label: "Customer",
        key: "custcst",
        fields: [                 
            ['promotional_credits', 'number', 'text','currency'],
            ['unbilled_charges', 'number', 'text','currency'],
            ['refundable_credits', 'number', 'text','currency'],
            ['excess_payments', 'number', 'text','currency'],               
        ]
    },
    {
        label: "Order",
        key: "ordercst",
        fields: [
            ['invoice_round_off_amount', 'number', 'text','currency'],
            ['tax', 'number', 'text','currency'],
            ['amount_adjusted', 'number', 'text','currency'],
            ['refundable_credits_issued', 'number', 'text','currency'],
            ['refundable_credits', 'number', 'text','currency'],
            ['rounding_adjustement', 'number', 'text','currency'],
            ['discount', 'number', 'text','currency'],
            ['sub_total', 'number', 'text','currency'],
            ['total', 'number', 'text','currency']            
        ]
    },
];

let cbcustomFields=steps.getCustomFieldApi.data;
if(cbcustomFields!==undefined && cbcustomFields.response !== undefined) {
  cbcustomFields = JSON.parse(cbcustomFields.response);
}

if(cbcustomFields !== undefined) {
  let cbsubKeys = Object.keys(cbcustomFields.customer_custom_fields);
  if(cbsubKeys.length >0) {
    for(var j=0;j<cbsubKeys.length;j++){
      customfields[1]["fields"].push([cbsubKeys[j],'string','text']);
    }
  }
  let cbsubKeys2 = Object.keys(cbcustomFields.subscription_custom_fields);
  if(cbsubKeys2.length >0) {
    for(var j=0;j<cbsubKeys2.length;j++){
      customfields[0]["fields"].push([cbsubKeys2[j],'string','text']);
    }
  }
}

let card = {
    "cards": [
        {
            "card": {
                "type": "EMPTY_BACKGROUND",
                "heading": "Sync Rules for Fields",
                "contents": [
                    "Set rules to sync fields from Chargebee to HubSpot. <a href='https://www.chargebee.com/docs/hubspot.html' target='blank'>Learn more</a>"
                ]
            },
            "isCardDone": true,
            "id": "check26",
        },
        
    ],
    "proceed": {
        "id": "proceed",
        "display": "Proceed",
        "icon": "ARROW",
        "buttonLook": "FILLED",
        "type": "DIRECT_LINK",
        "request": {
            "type": "ON_CLICK_SEND_INPUT",
            "apiEndPoint": {
                "apiUrl": steps.InitParams.getFormulaDetails.save.url,
                "type": "GET",
                "headers": {
                    "Elements-Formula-Instance-Id": steps.InitParams.getFormulaDetails.save.id
                },
                "input": {
                    "id": "chargebee",
                    "type": "hubspot"
                }
            }
        }
    }
}
let fCard = {
    "card": {
        "message": {
            "message": "If you need to sync additional fields from Chargebee to HubSpot, you may enable this option",
            "icon": "INFO",
            "messageLook": "INFO",
            "button": {
                "display": "View Fields",
                "icon": "ARROW",
                "url": "https://www.chargebee.com/docs/hubspot.html#field-mapping",
                "id": "viewFields",
                "type": "DIRECT_LINK",
                "newTab": "true"
            }
        },
        "type": "TOGGLE_HIDE_INPUT",
        "params": [
            {
                "dispName": "Sync additional fields from Chargebee to HubSpot",
                "type": "TOGGLE",
                "id": "syncMoreFields",
                "defaultVal":syncFields

            },
            {
                "dispName": "Choose the Chargebee fields you'd like to sync with each HubSpot object",
                "req": "false",
                "type": "TEXTLABEL",
                "id": "HubSpotContactMatch-id"
            }            
        ]
    },
    "id": "check4",
    "isCardDone": true,
};




let dealFields = {
    "dispName": "Deal",
    "type": "MODELBOX_INPUT_FIELDS",
    "helptext": "Choose the fields you'd like to sync",
    "id": "deal",
    "inputFields": [
        {
            "type": "SEARCH_CHECK_BOX",
            "id": "dealFields",
            "checkboxes": [      
            ]
        }
    ]
};

let contactFields = {
    "dispName": "Contact",
    "type": "MODELBOX_INPUT_FIELDS",
    "id": "contact",
    "inputFields": [
        {
            "type": "SEARCH_CHECK_BOX",
            "id": "contactFields",
            "checkboxes": [      
            ]
        }
    ]
};
let companyFields = {
    "dispName": "Company",
    "type": "MODELBOX_INPUT_FIELDS",
    "id": "company",
    "inputFields": [
        {
            "type": "SEARCH_CHECK_BOX",
            "id": "companyFields",
            "checkboxes": [      
            ]
        }
    ]
};





for(var i=0;i<customfields.length;i++){
    let fld = customfields[i];

    for(var j=0;j<fld.fields.length;j++){
        var es = fld.fields[j];
        var desc =  fld.label + " " + es[0].replace(/_/g, " ");
        var id = fld.key+"_"+es[0];   
        if(fld.key === "subcst"){
           let dealObj = {
            "type": "CHECKBOX",
            "id": id,
            "desc": desc,
        };
        if(deal[id] !== undefined) {
          dealObj.defaultVal = "on";
        }
        
        dealFields.inputFields[0].checkboxes.push(dealObj);
        }
       
        
        let contactObj = {
            "type": "CHECKBOX",
            "id": id,
            "desc": desc,
        };
        if(contact[id] !== undefined) {
          contactObj.defaultVal = "on";
        }
        contactFields.inputFields[0].checkboxes.push(contactObj);

    }
}
for(var i=0;i<customCompanyFields.length;i++){
    let fld = customCompanyFields[i];

    for(var j=0;j<fld.fields.length;j++){
        var es = fld.fields[j];
        var desc =  fld.label + " " + es[0].replace(/_/g, " ");
        var id = fld.key+"_"+es[0];    
        let companyObj = {
            "type": "CHECKBOX",
            "id": id,
            "desc": desc
        };
        if(company[id] !== undefined) {
          companyObj.defaultVal = "on";
        }
        companyFields.inputFields[0].checkboxes.push(companyObj);     

    }
}
fCard.card.params.push(dealFields);
fCard.card.params.push(contactFields);
fCard.card.params.push(companyFields);
card.cards.push(fCard);

done(card);