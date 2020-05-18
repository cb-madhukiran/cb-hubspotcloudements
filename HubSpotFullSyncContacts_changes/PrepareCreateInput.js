let customer = steps.HubData.customer;
let subscription = steps.HubData.subscription;
let syncRulesContacts = steps.CustomersParam.syncRulesContacts;
steps.HubSpotInput.url = "https://api.hubapi.com/contacts/v1/contact";
let properties = [];
function updateProperties(properties, hData, key, isCurrency) {
    let val = hData[key];
    if (val !== undefined) {
        if (isCurrency) {
            val = parseFloat(parseInt(val, 10) / 100).toFixed(2);
        }
        properties.push({
            "property": key,
            "value": val
        });
    }
    return properties;
}
function setHData(hData, key, value) {
    hData[key] = value;
}
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

let hData = {

};




let cbbillingaddress;
let cbState;
let cbCity;
let cbCountry;
let cbZip;
let cbpayment_method_status;
let cbpaymentmethodtype;

if (customer.billing_address !== undefined) {
    cbbillingaddress = "";
    if (customer.billing_address.line1 !== undefined) {
        cbbillingaddress = cbbillingaddress + customer.billing_address.line1;
    }
    if (customer.billing_address.line2 !== undefined) {
        cbbillingaddress = cbbillingaddress + " " + customer.billing_address.line2;
    }
    if (customer.billing_address.line3 !== undefined) {
        cbbillingaddress = cbbillingaddress + " " + customer.billing_address.line3;
    }
    if (cbbillingaddress === "") {
        cbbillingaddress = undefined;
    }
    cbState = customer.billing_address.state;
    cbCity = customer.billing_address.city;
    cbCountry = customer.billing_address.country;
    cbZip = customer.billing_address.zip;
}

if (customer.payment_method !== undefined ) {
    cbpayment_method_status = customer.payment_method.status;
    cbpaymentmethodtype = customer.payment_method.type;
}

setHData(hData, 'email', customer.email);
setHData(hData, 'chargebeecustomerid', customer.id);
setHData(hData, 'firstname', customer.first_name);
setHData(hData, 'lastname', customer.last_name);
setHData(hData, 'phone', customer.phone);
setHData(hData, 'company', customer.company);
setHData(hData, 'billingaddress', cbbillingaddress);
setHData(hData, 'billingstate', cbState);
setHData(hData, 'billingcity', cbCity);
setHData(hData, 'billingcountry', cbCountry);
setHData(hData, 'billingzip', cbZip);
setHData(hData, 'autocollection', customer.auto_collection);
setHData(hData, 'preferredcurrencycode', customer.preferred_currency_code);
setHData(hData, 'paymentmethodstatus', cbpayment_method_status);
setHData(hData, 'paymentmethodtype', cbpaymentmethodtype);
setHData(hData, 'nettermdays', customer.net_term_days);
setHData(hData, 'taxexemptstatus', customer.taxability);


let cbsubscriptionid;
let cbsubscriptiostatus;
let cbproduct;
let cbplanquantity;
let cbsetupfee;
let cbdueinvoicescount;
let cbremainingbillingcycles;
let cbponumber;
let cbnextbillingat;
let cbtotaldues;
let cbduesince;
let cbsubscriptionmrr;
if (subscription !== undefined) {
    cbsubscriptionid = subscription.id;
    cbsubscriptiostatus = subscription.status;
    cbproduct = subscription.plan_id;
    cbplanquantity = subscription.plan_quantity;
    cbsetupfee = getNumber(subscription.setup_fee);
    cbdueinvoicescount = getNumber(subscription.due_invoices_count);
    cbremainingbillingcycles = subscription.remaining_billing_cycles;
    cbponumber = subscription.po_number;
    if(subscription.next_billing_at !== undefined) {
      cbnextbillingat = getNumber(subscription.next_billing_at) * 1000;
    }
    
    cbtotaldues = getNumber(subscription.total_dues);
    if(subscription.due_since !== undefined) {
       cbduesince = getNumber(subscription.due_since) * 1000;
    }
   
    cbsubscriptionmrr = getNumber(subscription.mrr);
}


let nLifecyclestage;


if (cbsubscriptiostatus === "cancelled") {
    if (syncRulesContacts.LifecycleStage.CanceledSubscription !== undefined && syncRulesContacts.LifecycleStage.CanceledSubscription !== "select") {
        nLifecyclestage = syncRulesContacts.LifecycleStage.CanceledSubscription;
    }

} else if (cbsubscriptiostatus === "active") {
    if (syncRulesContacts.LifecycleStage.ActiveSubscription !== undefined && syncRulesContacts.LifecycleStage.ActiveSubscription !== "select") {
        nLifecyclestage = syncRulesContacts.LifecycleStage.ActiveSubscription;
    }

} else if (cbsubscriptiostatus === "in_trial") {
    if (syncRulesContacts.LifecycleStage.TrialSubscription !== undefined && syncRulesContacts.LifecycleStage.TrialSubscription !== "select") {
        nLifecyclestage = syncRulesContacts.LifecycleStage.TrialSubscription;
    }
} else if (cbsubscriptiostatus === undefined) {
    if (syncRulesContacts.LifecycleStage.NoSubscription !== undefined && syncRulesContacts.LifecycleStage.NoSubscription !== "select") {
        nLifecyclestage = syncRulesContacts.LifecycleStage.NoSubscription;
    }
}


setHData(hData, 'lifecyclestage', nLifecyclestage);
setHData(hData, 'subscriptionid', cbsubscriptionid);
setHData(hData, 'subscriptiostatus', cbsubscriptiostatus);
setHData(hData, 'product', cbproduct);
setHData(hData, 'planquantity', cbplanquantity);
setHData(hData, 'remainingbillingcycles', cbremainingbillingcycles);
setHData(hData, 'ponumber', cbponumber);
setHData(hData, 'nextbillingat', cbnextbillingat);
setHData(hData, 'duesince', cbduesince);

steps.HubData.cMetrics = {
    subscriptionmrr: cbsubscriptionmrr,
    totaldues: cbtotaldues,
    dueinvoicescount: cbdueinvoicescount,
    subscriptionid: cbsubscriptionid,
    op: "create"
    //invoiceamountpaid: cMetricsInvoiceamountpaid,
};
setHData(hData, 'dueinvoicescount', cbdueinvoicescount);
setHData(hData, 'totaldues', cbtotaldues);
setHData(hData, 'setupfee', cbsetupfee);
setHData(hData, 'subscriptionmrr', cbsubscriptionmrr);



let cblastorderdate;
let cblastorderbasecomponentsku;
let cblastorderstatus;
let cblastorder;
let cbnextorderdate;
let cbnextorderbasecomponentsku;
let cbnextorderstatus;
let cbnextorder;
let myOrder;
if (steps.HubData.order !== undefined) {
    let orderBefore = steps.HubData.order.before;
     myOrder = orderBefore;
    if (orderBefore !== undefined) {
        if (orderBefore.order_date !== undefined) {
            cblastorderdate = getNumber(orderBefore.order_date) * 1000;
        }
        cblastorderbasecomponentsku = orderBefore.sku;
        cblastorderstatus = orderBefore.status;
        cblastorder = getNumber(orderBefore.total);
    }


    let orderAfter = steps.HubData.order.after;
    if (orderAfter !== undefined) {
        if (orderAfter.order_date !== undefined) {
            cbnextorderdate = getNumber(orderAfter.order_date) * 1000;
        }
        cbnextorderbasecomponentsku = orderAfter.sku;
        cbnextorderstatus = orderAfter.status;
        cbnextorder = getNumber(orderAfter.total);
    }

}

setHData(hData, 'lastorderdate', cblastorderdate);
setHData(hData, 'lastorderbasecomponentsku', cblastorderbasecomponentsku);
setHData(hData, 'lastorderstatus', cblastorderstatus);
setHData(hData, 'lastorder', cblastorder);
setHData(hData, 'nextorderdate', cbnextorderdate);
setHData(hData, 'nextorderbasecomponentsku', cbnextorderbasecomponentsku);
setHData(hData, 'nextorderstatus', cbnextorderstatus);
setHData(hData, 'nextorder', cbnextorder);


let cbinvoiceamountpaid;
let cbinvoiceestimate;
if (steps.HubData.invoice !== undefined) {
    cbinvoiceamountpaid = getNumber(steps.HubData.invoice.total);
    cbinvoiceestimate = getNumber(steps.HubData.invoice.estimate);
}

steps.HubData.cMetrics.invoiceamountpaid = cbinvoiceamountpaid;

setHData(hData, 'invoiceamountpaid', cbinvoiceamountpaid);
setHData(hData, 'nextbillingamount', cbinvoiceestimate);

//custom
let syncRulesFields = steps.ChargebeeConfigParams.response.body.third_party_configuration.config_json.cloudElements.syncRulesFields;
    if (syncRulesFields === undefined) {
        syncRulesFields = {
            "company": {

            },
            "contact": {

            },
            "deal": {
            },
            "sync": "false"
        };

    } else {
        if (syncRulesFields.company === undefined || syncRulesFields.company === "") {
            syncRulesFields.company = {};
        }
        if (syncRulesFields.contact === undefined || syncRulesFields.contact === "") {
            syncRulesFields.contact = {};
        }
        if (syncRulesFields.deal === undefined || syncRulesFields.deal === "") {
            syncRulesFields.deal = {};
        }
    }
    syncRulesFields = JSON.parse(JSON.stringify(syncRulesFields));
    let companyKeys = Object.keys(syncRulesFields.company);

for (var i = 0; i < companyKeys.length; i++) {
    syncRulesFields.contact[companyKeys[i]] = syncRulesFields.company[companyKeys[i]];
}


let customefields = steps.SyncLog.customefields;
for (var i = 0; i < customefields.length; i++) {
    let fld = customefields[i];

    for (var j = 0; j < fld.fields.length; j++) {
        var es = fld.fields[j];
        var desc = fld.label + " " + es[0].replace(/_/g, " ");
        var id = fld.key + "_" + es[0];
        if(syncRulesFields.contact[id] !==undefined) {
            syncRulesFields.contact[id] = es;
        }
    }
}
let customKeys = Object.keys(syncRulesFields.contact);
for(var i=0;i<customKeys.length;i++){
  var cKey = customKeys[i];
  var cVal = syncRulesFields.contact[cKey];
   let subVal;
  if(cKey.startsWith("subcst")){
    if(subscription !== undefined){
    subVal = subscription[cVal[0]];
    }
  }else if(cKey.startsWith("ordercst")){
    if(myOrder !== undefined) {
      subVal = myOrder[cVal[0]];
    }
    
  } else if(cKey.startsWith("custcst")){
     if(customer !== undefined){
       subVal = customer[cVal[0]];
    }
  }
if (cVal[1] === "number") {
    subVal = getNumber(subVal);
    setHData(hData, cKey, subVal);
    if (cVal.length == 4) {
        properties = updateProperties(properties, hData, cKey, true);
    } else {
        properties = updateProperties(properties, hData, cKey);
    }
    steps.HubData.cMetrics[cKey] = subVal;
} else if (cVal[1] === "datetime") {
  if(subVal !== undefined) {
     subVal = getNumber(subVal) * 1000;
    setHData(hData, cKey, subVal);
    properties = updateProperties(properties, hData, cKey);
  }
   

} else {
    if (subVal === undefined) {
        subVal = "";

    }
    setHData(hData, cKey, subVal);
    properties = updateProperties(properties, hData, cKey);
}
  
  
}
//custom



properties = updateProperties(properties, hData, 'firstname');
properties = updateProperties(properties, hData, 'email');
properties = updateProperties(properties, hData, 'lastname');
properties = updateProperties(properties, hData, 'phone');
properties = updateProperties(properties, hData, 'company');
properties = updateProperties(properties, hData, 'billingaddress');
properties = updateProperties(properties, hData, 'billingstate');
properties = updateProperties(properties, hData, 'billingcity');
properties = updateProperties(properties, hData, 'billingcountry');
properties = updateProperties(properties, hData, 'billingzip');
properties = updateProperties(properties, hData, 'autocollection');
properties = updateProperties(properties, hData, 'preferredcurrencycode');
properties = updateProperties(properties, hData, 'paymentmethodstatus');
properties = updateProperties(properties, hData, 'paymentmethodtype');
properties = updateProperties(properties, hData, 'nettermdays');
properties = updateProperties(properties, hData, 'taxexemptstatus');
properties = updateProperties(properties, hData, 'chargebeecustomerid');
properties = updateProperties(properties, hData, 'subscriptionid');
properties = updateProperties(properties, hData, 'subscriptiostatus');
properties = updateProperties(properties, hData, 'product');
properties = updateProperties(properties, hData, 'planquantity');
properties = updateProperties(properties, hData, 'setupfee', true);
properties = updateProperties(properties, hData, 'dueinvoicescount');
properties = updateProperties(properties, hData, 'remainingbillingcycles');
properties = updateProperties(properties, hData, 'ponumber');
properties = updateProperties(properties, hData, 'nextbillingat');
properties = updateProperties(properties, hData, 'totaldues', true);
properties = updateProperties(properties, hData, 'duesince');
properties = updateProperties(properties, hData, 'subscriptionmrr', true);
properties = updateProperties(properties, hData, 'lifecyclestage');
properties = updateProperties(properties, hData, 'lastorderdate');
properties = updateProperties(properties, hData, 'lastorderbasecomponentsku');
properties = updateProperties(properties, hData, 'lastorderstatus');
properties = updateProperties(properties, hData, 'lastorder', true);
properties = updateProperties(properties, hData, 'nextorderdate');
properties = updateProperties(properties, hData, 'nextorderbasecomponentsku');
properties = updateProperties(properties, hData, 'nextorderstatus');
properties = updateProperties(properties, hData, 'nextorder', true);
properties = updateProperties(properties, hData, 'invoiceamountpaid', true);
properties = updateProperties(properties, hData, 'nextbillingamount', true);

steps.HubSpotInput.inputs.properties = properties;

let gfg = {
    properties: properties,
    metrics: steps.HubData.cMetrics,
    hData: hData
}

done(gfg);