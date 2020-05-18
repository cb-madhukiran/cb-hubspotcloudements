function getNumber(val) {
    if (val === undefined) {
        return 0;
    }
    let num = Number(val);
    if (isNaN(num)) {
        return 0;
    }
    return num;
}
let subscription = steps.CBInfo.subscription;
let customer = steps.CBInfo.customer;
let invoice = steps.CBInfo.invoice;
let contact = steps.DealInfo.contact;
let properties = [];

if (steps.DealInfo.trailStage!==undefined && subscription.status === "in_trial") {
  properties.push({
    "value": steps.DealInfo.trailStage,
    "name": "dealstage"
  });
}
if (steps.DealInfo.activeStage!== undefined && subscription.status === "active") {
  properties.push({
    "value": steps.DealInfo.activeStage,
    "name": "dealstage"
  });
}

properties.push({
  "value": Number(subscription.created_at) * 1000,
  "name": "closedate"
});

let cbMrr = 0;
if (subscription.mrr !== undefined) {
  cbMrr = parseFloat(parseInt(subscription.mrr, 10) / 100).toFixed(2);
}
let dealAmount = 0;
if(cbMrr >0) {
   let plan = steps.SubParam.plans[subscription.plan_id];
   let period_unit = plan.period_unit;
   let period = plan.period;
   if(period !== undefined && period_unit !== undefined) {
     period = Number(period);
     if(isNaN(period) || period ===0){
       period = 1;
     }
     if(period_unit ==="year") {
       dealAmount = cbMrr *12 * period;
     }else if (period_unit ==="month") {
       dealAmount = cbMrr * period;
     }else if (period_unit === "week") {
       dealAmount = (cbMrr/4) * period;
     }else if(period_unit === "day"){
        dealAmount = (cbMrr/30) * period;
     }
     
   }
 // let plan = cbMrr
  
}
properties.push({
  "value": dealAmount,
  "name": "amount"
});

properties.push({
  "value": Number(subscription.created_at) * 1000,
  "name": "createdate"
});
properties.push({
  "value": "New sale for " + steps.DealInfo.name,
  "name": "dealname"
});
properties.push({
  "value": "newbusiness",
  "name": "dealtype"
});
properties.push({
  "value":  steps.DealInfo.pipeline,
  "name": "pipeline"
});

properties.push({
  "value": contact.vid,
  "name": "hubspotcontact"
});
properties.push({
  "value": subscription.id,
  "name": "subscriptionid"
});
properties.push({
  "value": subscription.status,
  "name": "subscriptionstatus"
});


properties.push({
  "value": cbMrr,
  "name": "subscriptionmrr"
});


properties.push({
  "value": subscription.plan_id,
  "name": "product"
});
if (subscription.plan_quantity) {
  properties.push({
    "value": subscription.plan_quantity,
    "name": "planquantity"
  });
}

let setupfee = 0;

if (subscription.setup_fee !== undefined) {
  setupfee = parseFloat(parseInt(subscription.setup_fee, 10) / 100).toFixed(2);
}
properties.push({
  "value": setupfee,
  "name": "setupfee"
});

let dueinvoicescount = 0;
if (subscription.due_invoices_count !== undefined) {
  dueinvoicescount = Number(subscription.due_invoices_count);
}

properties.push({
  "value": dueinvoicescount,
  "name": "dueinvoicescount"
});
if (subscription.remaining_billing_cycles !== undefined) {
  properties.push({
    "value": subscription.remaining_billing_cycles,
    "name": "remainingbillingcycles"
  });
}

if (subscription.po_number !== undefined) {
  properties.push({
    "value": subscription.po_number,
    "name": "ponumber"
  });
}

let totaldues = 0;
if (subscription.total_dues !== undefined) {
  totaldues = parseFloat(parseInt(subscription.total_dues, 10) / 100).toFixed(2);
}
properties.push({
  "value": totaldues,
  "name": "totaldues"
});
if (subscription.next_billing_at !== undefined) {
  properties.push({
    "value": Number(subscription.next_billing_at) * 1000,
    "name": "nextbillingat"
  });
}
if (subscription.due_since !==undefined) {
  properties.push({
      "value": Number(subscription.due_since) * 1000,
      "name": "duesince"
  });
}
let nextbillingamount = 0;
if(invoice !==undefined && invoice.total !== undefined) {
  nextbillingamount = parseFloat(parseInt(invoice.total, 10) / 100).toFixed(2);
}

properties.push({
  "value": nextbillingamount,
  "name": "nextbillingamount"
});

//custom
let myOrder;
let syncRulesFields = steps.ChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.syncRulesFields;
if (syncRulesFields === undefined) {
    syncRulesFields = {
        "deal": {
        },
        "sync": "false"
    };

} else {
    if (syncRulesFields.deal === undefined || syncRulesFields.deal === "") {
        syncRulesFields.deal = {};
    }
}
syncRulesFields = JSON.parse(JSON.stringify(syncRulesFields));
let customefields = steps.SyncLog.customefields;
for (var i = 0; i < customefields.length; i++) {
    let fld = customefields[i];

    for (var j = 0; j < fld.fields.length; j++) {
        var es = fld.fields[j];
        var desc = fld.label + " " + es[0].replace(/_/g, " ");
        var id = fld.key + "_" + es[0];
        if (syncRulesFields.deal[id] !== undefined) {
            syncRulesFields.deal[id] = es;
        }
    }
}
let customKeys = Object.keys(syncRulesFields.deal);
for (var i = 0; i < customKeys.length; i++) {
    var cKey = customKeys[i];
    var cVal = syncRulesFields.deal[cKey];
    let subVal;
    if (cKey.startsWith("subcst")) {
        if (subscription !== undefined) {
            subVal = subscription[cVal[0]];
        }
    } else if (cKey.startsWith("ordercst")) {
        if (myOrder !== undefined) {
            subVal = myOrder[cVal[0]];
        }

    } else if (cKey.startsWith("custcst")) {
        if (customer !== undefined) {
            subVal = customer[cVal[0]];
        }
    }
    if (cVal[1] === "number") {
        subVal = getNumber(subVal);
        if (cVal.length == 4) {
            subVal = parseFloat(parseInt(subVal, 10) / 100).toFixed(2);
            properties.push({
                "value": subVal,
                "name": cKey
              });
        } else {
            properties.push({
                "value": subVal,
                "name": cKey
              });
        }
    } else if (cVal[1] === "datetime") {
        subVal = getNumber(subVal) * 1000;       
        properties.push({
            "value": subVal,
            "name": cKey
          });

    } else if(subVal !== undefined && subVal!==""){
       properties.push({
            "value": subVal,
            "name": cKey
          });
    } 
}
//custom

let associations = {
  associatedVids:[contact.vid],
};

  if(contact["associated-company"] !== undefined && contact["associated-company"]["company-id"] !== undefined) {
    associations.associatedCompanyIds = [contact["associated-company"]["company-id"]];
  }

let input ={
  associations:associations,
  properties : properties
};

done({input:input
  
});

