let syncLog = steps.ChargebeeGetTpIntegConf.data.config_json.cloudElements.syncLog;
let data = {
  tpOffset:{},
  syncLog:syncLog,
  customCompanyFields: [
            {
                label: "Subscription",
                key: "subcst",
                fields: [
                    ['plan_quantity', 'number', 'text'],
                    ['plan_unit_price', 'number', 'text', 'currency'],
                    ['plan_amount', 'number', 'text', 'currency'],
                    ['plan_free_quantity', 'number', 'text']

                ]
            },
            {
                label: "Customer",
                key: "custcst",
                fields: [
                    ['promotional_credits', 'number', 'text', 'currency'],
                    ['unbilled_charges', 'number', 'text', 'currency'],
                    ['refundable_credits', 'number', 'text', 'currency'],
                    ['excess_payments', 'number', 'text', 'currency'],
                ]
            },
            {
                label: "Order",
                key: "ordercst",
                fields: [
                    ['invoice_round_off_amount', 'number', 'text', 'currency'],
                    ['tax', 'number', 'text', 'currency'],
                    ['amount_adjusted', 'number', 'text', 'currency'],
                    ['refundable_credits_issued', 'number', 'text', 'currency'],
                    ['refundable_credits', 'number', 'text', 'currency'],
                    ['rounding_adjustement', 'number', 'text', 'currency'],
                    ['discount', 'number', 'text', 'currency'],
                    ['sub_total', 'number', 'text', 'currency'],
                    ['total', 'number', 'text', 'currency']
                ]
            },
        ],
      cprops :{}
  
};
let prefix = "cb_";
if (steps.ChargebeeGetTpIntegConf.data.config_json.noneedprefix !== undefined && steps.ChargebeeGetTpIntegConf.data.config_json.noneedprefix === true) {
  prefix = "";
}


data.cprops[prefix+"totalsubscriptionmrr"]={type:"currency",value:0};
data.cprops[prefix+"totalnoofsubscription"]={type:"number",value:0};
data.cprops[prefix+"totaldues"]={type:"currency",value:0};
data.cprops[prefix+"totalinvoiceamountpaid"]={type:"currency",value:0};
data.cprops[prefix+"totaldueinvoicescount"]={type:"number",value:0};




let syncRulesFields = steps.ChargebeeGetTpIntegConf.data.config_json.cloudElements.syncRulesFields;
  if (syncRulesFields === undefined) {
    syncRulesFields = {
      "company": {

      },
      "sync": "false"
    };

  } else {
    if (syncRulesFields.company === undefined || syncRulesFields.company === "") {
      syncRulesFields.company = {};
    }
  }
  
  let companyKeys = Object.keys(syncRulesFields.company);
  

for (var i = 0; i < companyKeys.length; i++) {
  let obj = {};
  
  if(companyKeys[i] ==="subcst_plan_quantity") {
     data.cprops[prefix+companyKeys[i]] = {type:"number",value:0};
  }else {
     data.cprops[prefix+companyKeys[i]] = {type:"currency",value:0};
  }
  
 
}

done(data);