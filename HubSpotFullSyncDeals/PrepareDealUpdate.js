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
let deal = steps.DealInfo.deal;

let properties = [];

let prefix = "cb_";
if(steps.getChargebeeConfiguration.data.third_party_configuration.config_json.noneedprefix!==undefined && steps.getChargebeeConfiguration.data.third_party_configuration.config_json.noneedprefix===true)
{
   prefix="";
}
let cbkeys = ['billingaddress','billingstate','billingcity','billingcountry','billingzip','autocollection','preferredcurrencycode','paymentmethodstatus','paymentmethodtype','nettermdays','taxexemptstatus','subscriptionid','subscriptiostatus','product','planquantity','setupfee','dueinvoicescount','remainingbillingcycles','ponumber','nextbillingat','totaldues','duesince','subscriptionmrr', 'subscriptionstatus','lastorderdate','lastorderbasecomponentsku','lastorderstatus','lastorder','nextorderdate','nextorderbasecomponentsku','nextorderstatus','nextorder','invoiceamountpaid','nextbillingamount'];

let dealstage, closedate;
if (deal.properties.dealstage !== undefined && deal.properties.dealstage.value !== undefined) {
  dealstage = deal.properties.dealstage.value;
}
if (deal.properties.closedate !== undefined && deal.properties.closedate.value !== undefined) {
  closedate = deal.properties.closedate.value;
}

let oldstatus = steps.DealInfo.oldSubscriptionStatus;
if(oldstatus === undefined) {
  oldstatus = "";
}
if (dealstage === undefined) {
  if ( steps.DealInfo.trailStage!==undefined && subscription.status === "in_trial") {
    let dealstage = {
    "value": steps.DealInfo.trailStage,
    "name": "dealstage"
  };
  properties.push(dealstage);
   
  }
  if (steps.DealInfo.activeStage!==undefined && subscription.status === "active") {
    let dealstage = {
    "value": steps.DealInfo.activeStage,
    "name": "dealstage"
  };

  properties.push(dealstage);
    
  }
} else {
  if (steps.DealInfo.activeStage!==undefined && subscription.status === "active" &&  oldstatus !== "active") {
   let dealstage = {
    "value": steps.DealInfo.activeStage,
    "name": "dealstage"
  };
  if(cbkeys.indexOf(dealstage.name)>-1)
        dealstage.name = prefix+dealstage.name;
  properties.push(dealstage);
  }
}

if (closedate === undefined) {
  
  let closedateObj = {
  "value": Number(subscription.created_at) * 1000,
  "name": "closedate"
};
if(cbkeys.indexOf(closedateObj.name)>-1)
        closedateObj.name = prefix+closedateObj.name;

properties.push(closedate);
  
  
}

let cbMrr = 0;
if (subscription.mrr !== undefined) {
  cbMrr = parseFloat(parseInt(subscription.mrr, 10) / 100).toFixed(2);
}


let hubspotcontact = {
  "value": contact.vid,
  "name": "hubspotcontact"
};
properties.push(hubspotcontact);


let subscriptionid = {
  "value": subscription.id,
  "name": prefix+"subscriptionid"
};

properties.push(subscriptionid);

let subscriptionstatus = {
  "value": subscription.status,
  "name": prefix+"subscriptionstatus"
};

properties.push(subscriptionstatus);

let subscriptionmrr = {
  "value": cbMrr,
  "name": prefix+"subscriptionmrr"
};

properties.push(subscriptionmrr);

let product = {
  "value": subscription.plan_id,
  "name": prefix+"product"
};

properties.push(product);

if (subscription.plan_quantity) {
  let planquantity = {
    "value": subscription.plan_quantity,
    "name": prefix+"planquantity"
  };

  properties.push(planquantity);
}

let setupfee = 0;

if (subscription.setup_fee !== undefined) {
  setupfee = parseFloat(parseInt(subscription.setup_fee, 10) / 100).toFixed(2);
}
let setupfeeObj  = {
  "value": setupfee,
  "name": prefix+"setupfee"
};

properties.push(setupfeeObj);

let dueinvoicescount = 0;
if (subscription.due_invoices_count !== undefined) {
  dueinvoicescount = Number(subscription.due_invoices_count);
}

let dueinvoicescountObj = {
  "value": dueinvoicescount,
  "name": prefix+"dueinvoicescount"
};


properties.push(dueinvoicescountObj);
if (subscription.remaining_billing_cycles !== undefined) {
 let remainingbillingcycles = {
    "value": subscription.remaining_billing_cycles,
    "name": prefix+"remainingbillingcycles"
  };

  properties.push(remainingbillingcycles);
}

if (subscription.po_number !== undefined) {
 let ponumber = {
    "value": subscription.po_number,
    "name": prefix+"ponumber"
  };

  properties.push(ponumber);
}

let totaldues = 0;
if (subscription.total_dues !== undefined) {
  totaldues = parseFloat(parseInt(subscription.total_dues, 10) / 100).toFixed(2);
}
let totalduesObj = {
  "value": totaldues,
  "name": prefix+"totaldues"
};

properties.push(totalduesObj);
if (subscription.next_billing_at !== undefined) {
   let nextbillingat = {
    "value": Number(subscription.next_billing_at) * 1000,
    "name": prefix+"nextbillingat"
  };

  properties.push(nextbillingat);
}
if (subscription.due_since !== undefined) {
  let duesince = {
      "value": Number(subscription.due_since) * 1000,
      "name": prefix+"duesince"
  };

  properties.push(duesince);
}
let nextbillingamount = 0;
if (invoice !== undefined && invoice.total !== undefined) {
  nextbillingamount = parseFloat(parseInt(invoice.total, 10) / 100).toFixed(2);
}

let nextbillingamountObj = {
  "value": nextbillingamount,
  "name": prefix+"nextbillingamount"
};


properties.push(nextbillingamountObj);

//custom
let myOrder;
let syncRulesFields = steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.syncRulesFields;
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
            let ckeyObj = {
                "value": subVal,
                "name": cKey
              };
              if(cbkeys.indexOf(ckeyObj.name)>-1)
        ckeyObj.name = prefix+ckeyObj.name;
            properties.push(ckeyObj);
        } else {
            let ckeyObj = {
                "value": subVal,
                "name": cKey
              };
              if(cbkeys.indexOf(ckeyObj.name)>-1)
        ckeyObj.name = prefix+ckeyObj.name;
            properties.push(ckeyObj);
        }
    } else if (cVal[1] === "datetime") {
        subVal = getNumber(subVal) * 1000;       
        let ckeyObj = {
                "value": subVal,
                "name": cKey
              };
              if(cbkeys.indexOf(ckeyObj.name)>-1)
        ckeyObj.name = prefix+ckeyObj.name;
            properties.push(ckeyObj);

    }else if(subVal !== undefined && subVal!==""){
       let ckeyObj = {
                "value": subVal,
                "name": cKey
              };
              if(cbkeys.indexOf(ckeyObj.name)>-1)
        ckeyObj.name = prefix+ckeyObj.name;
            properties.push(ckeyObj);
    } 
}

let params = {
  url: steps.DealInfo.getDealByID,
  headers: {
    "Authorization":"Bearer "+ steps.getChargebeeConfiguration.data.third_party_configuration.config_json.cloudElements.thirdParty.accessToken
  },
  apiKey: steps.InputParams.apiKey,
  siteName: steps.InputParams.siteName,
  siteDomain: steps.InputParams.siteDomain,
  type: "hubspot",
  body:{ properties: properties }
};
//custom
done(params);