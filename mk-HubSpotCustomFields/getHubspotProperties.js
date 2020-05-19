let prefix = "cb_";
if (
  steps.ChargebeeConfigParams.data.config_json.noneedprefix !== undefined &&
  steps.ChargebeeConfigParams.data.config_json.noneedprefix === true
) {
  prefix = "";
}
let companyProperties = [
  {
    "name": prefix + "totalsubscriptionmrr",
    "label": "Total subscription MRR",
    "description": "Total subscription MRR",
    "groupName": "chargebeesubscriptionmetrics",
    "type": "number",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "totalnoofsubscription",
    "label": "Total # of subscriptions",
    "description": "Total # of subscriptions",
    "groupName": "chargebeesubscriptionmetrics",
    "type": "number",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "totaldues",
    "label": "Total dues",
    "description": "Total dues",
    "groupName": "chargebeesubscriptionmetrics",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "totalinvoiceamountpaid",
    "label": "Total invoice amount paid",
    "description": "Total invoice amount paid",
    "groupName": "chargebeesubscriptionmetrics",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }
  , {
    "name": prefix + "totaldueinvoicescount",
    "label": "Total due invoices count",
    "description": "Total due invoices count",
    "groupName": "chargebeesubscriptionmetrics",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }];

let contactProperties = [
  {
    "name": prefix +"chargebeecustomerid",
    "label": "Chargebee customer ID",
    "description": "Chargebee customer ID",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "billingaddress",
    "label": "BillingAddress",
    "description": "Billing Address",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "billingcity",
    "label": "BillingCity",
    "description": "Billing City",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }
  , {
    "name": prefix + "billingstate",
    "label": "BillingState",
    "description": "Billing State",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "billingcountry",
    "label": "BillingCountry",
    "description": "Billing Country",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "billingzip",
    "label": "BillingZip",
    "description": "Billing Zip",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "autocollection",
    "label": "Autocollection",
    "description": "Autocollection",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "preferredcurrencycode",
    "label": "PreferredCurrencyCode",
    "description": "Preferred Currency Code",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "paymentmethodstatus",
    "label": "PaymentMethod Status",
    "description": "PaymentMethod Status",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "paymentmethodtype",
    "label": "PaymentMethod Type",
    "description": "PaymentMethod Type",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "nettermdays",
    "label": "Net Term Days",
    "description": "Net Term Days",
    "groupName": "chargebeecustomerinfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "taxexemptstatus",
    "label": "Tax exempt status",
    "description": "Tax exempt status",
    "groupName": "chargebeecustomerinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "subscriptionid",
    "label": "Subscription ID",
    "description": "Subscription ID",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, 
  {
    "name": prefix + "currencycode",
    "label": "Currency Code",
    "description": "Chargebee Currency Code",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  },{
    "name": prefix + "subscriptiostatus",
    "label": "Subscription status",
    "description": "Subscription status",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "subscriptionmrr",
    "label": "Subscription MRR",
    "description": "Subscription MRR",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "customermrr",
    "label": "Total Customer MRR",
    "description": "Total Customer MRR",
    "groupName": "chargebeecustomerinfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "product",
    "label": "Product",
    "description": "Product",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "planquantity",
    "label": "Plan quantity",
    "description": "Plan quantity",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "setupfee",
    "label": "Setup Fee",
    "description": "Setup Fee",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "dueinvoicescount",
    "label": "Due invoices count",
    "description": "Due invoices count",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "invoiceamountpaid",
    "label": "Invoice amount paid",
    "description": "Invoices amount paid",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "remainingbillingcycles",
    "label": "Remaining billing cycles",
    "description": "Remaining billing cycles",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "ponumber",
    "label": "PO Number",
    "description": "PO Number",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "nextbillingat",
    "label": "Next Billing At",
    "description": "Next Billing At",
    "groupName": "chargebeesubscriptioninfo",
    "type": "datetime",
    "fieldType": "date",
    "formField": true
  }, {
    "name": prefix + "nextbillingamount",
    "label": "Next Billing Amount",
    "description": "Next Billing Amount",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "totaldues",
    "label": "TotalDues",
    "description": "Total Dues",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "duesince",
    "label": "Due Since",
    "description": "Due Since",
    "groupName": "chargebeesubscriptioninfo",
    "type": "datetime",
    "fieldType": "date",
    "formField": true
  }
];
let contactPropertiesOrderInfo = [{
    "name": prefix + "lastorderdate",
    "label": "Last Order Date",
    "description": "LastOrderDate",
    "groupName": "chargebeeorderinfo",
    "type": "datetime",
    "fieldType": "date",
    "formField": true
  }, {
    "name": prefix + "lastorder",
    "label": "Last Order",
    "description": "Last Order",
    "groupName": "chargebeeorderinfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "lastorderstatus",
    "label": "Last Order Status",
    "description": "Last Order Status",
    "groupName": "chargebeeorderinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "lastorderbasecomponentsku",
    "label": "Last order base component SKU",
    "description": "Last order base component SKU",
    "groupName": "chargebeeorderinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "nextorderdate",
    "label": "Next Order Date",
    "description": "Next Order Date",
    "groupName": "chargebeeorderinfo",
    "type": "datetime",
    "fieldType": "date",
    "formField": true
  }, {
    "name": prefix + "nextorder",
    "label": "Next Order",
    "description": "Next Order",
    "groupName": "chargebeeorderinfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "nextorderbasecomponentsku",
    "label": "Next order base component SKU",
    "description": "Next order base component SKU",
    "groupName": "chargebeeorderinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "nextorderstatus",
    "label": "Next Order Status",
    "description": "Next Order Status",
    "groupName": "chargebeeorderinfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }];
let dealProperties = [
  {
    "name": prefix +"hubspotcontact",
    "label": "Hubspot contact",
    "description": "Hubspot contact",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "currencycode",
    "label": "Currency Code",
    "description": "Chargebee Currency Code",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "subscriptionid",
    "label": "Subscription ID",
    "description": "Subscription ID",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "subscriptionstatus",
    "label": "Subscription status",
    "description": "Subscription status",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }
  , {
    "name": prefix + "subscriptionmrr",
    "label": "Subscription MRR",
    "description": "Subscription MRR",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "product",
    "label": "Product",
    "description": "Product",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "planquantity",
    "label": "Plan quantity",
    "description": "Plan quantity",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "setupfee",
    "label": "Setup fee",
    "description": "Setup fee",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }
  , {
    "name": prefix + "dueinvoicescount",
    "label": "Due invoices count",
    "description": "Due invoices count",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "remainingbillingcycles",
    "label": "Remaining billing cycles",
    "description": "Remaining billing cycles",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }
  , {
    "name": prefix + "ponumber",
    "label": "PO number",
    "description": "PO number",
    "groupName": "chargebeesubscriptioninfo",
    "type": "string",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "totaldues",
    "label": "Total dues",
    "description": "Total dues",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }
  , {
    "name": prefix + "nextbillingat",
    "label": "Next billing at",
    "description": "Next billing at",
    "groupName": "chargebeesubscriptioninfo",
    "type": "datetime",
    "fieldType": "date",
    "formField": true
  }, {
    "name": prefix + "nextbillingamount",
    "label": "Next Billing Amount",
    "description": "Next Billing Amount",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }, {
    "name": prefix + "duesince",
    "label": "Due Since",
    "description": "Due Since",
    "groupName": "chargebeesubscriptioninfo",
    "type": "datetime",
    "fieldType": "date",
    "formField": true
  }];
  
  done({
    companyProperties:companyProperties,
    contactProperties:contactProperties,
    dealProperties:dealProperties,
    contactPropertiesOrderInfo:contactPropertiesOrderInfo
  })