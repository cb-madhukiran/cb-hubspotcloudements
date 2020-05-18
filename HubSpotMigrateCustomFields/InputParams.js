let apiKey = trigger.args.apiKey;
let siteName = trigger.args.siteName;
let type = trigger.args.type;
let siteDomain = trigger.args.siteDomain;

let prefix = "cb_";

let contactProperties_chargebeesubscriptioninfo = [
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
    "name": prefix + "invoiceamountpaid",
    "label": "Invoice amount paid",
    "description": "Invoices amount paid",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "subscriptionmrr",
    "label": "Subscription MRR",
    "description": "Subscription MRR",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "setupfee",
    "label": "Setup Fee",
    "description": "Setup Fee",
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
  },
  {
    "name": prefix + "nextbillingamount",
    "label": "Next Billing Amount",
    "description": "Next Billing Amount",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "totaldues",
    "label": "TotalDues",
    "description": "Total Dues",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }
];

let contactProperties_chargebeeorderinfo = [{
    "name": prefix + "lastorder",
    "label": "Last Order",
    "description": "Last Order",
    "groupName": "chargebeeorderinfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "nextorder",
    "label": "Next Order",
    "description": "Next Order",
    "groupName": "chargebeeorderinfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }];

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
  },
  {
    "name": prefix + "totalinvoiceamountpaid",
    "label": "Total invoice amount paid",
    "description": "Total invoice amount paid",
    "groupName": "chargebeesubscriptionmetrics",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }
];

let dealProperties = [
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
    "name": prefix + "subscriptionmrr",
    "label": "Subscription MRR",
    "description": "Subscription MRR",
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
  },
  {
    "name": prefix + "totaldues",
    "label": "Total dues",
    "description": "Total dues",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  },
  {
    "name": prefix + "nextbillingamount",
    "label": "Next Billing Amount",
    "description": "Next Billing Amount",
    "groupName": "chargebeesubscriptioninfo",
    "type": "number",
    "fieldType": "text",
    "formField": true
  }
];


let input = {
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: type,
  contactProperties_chargebeesubscriptioninfo: contactProperties_chargebeesubscriptioninfo,
  contactProperties_chargebeeorderinfo: contactProperties_chargebeeorderinfo,
  companyProperties: companyProperties,
  dealProperties: dealProperties,
  tpConfig: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: type,
    headers: {
      Authorization: "Basic " + CE.b64(apiKey + ":")
    },
    url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_configurations",
    query: {
      integration_name: type
    }
  }
};
done(input);