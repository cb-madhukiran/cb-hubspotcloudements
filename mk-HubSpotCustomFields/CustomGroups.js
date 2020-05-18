let creates = [];
let deletes = [];

let prefix = "cb_";
if (
  steps.ChargebeeConfigParams.data.config_json.noneedprefix !== undefined &&
  steps.ChargebeeConfigParams.data.config_json.noneedprefix === true
) {
  prefix = "";
}
let companyProperties = [
  {
    name: prefix + "totalsubscriptionmrr",
    label: "Total subscription MRR",
    description: "Total subscription MRR",
    groupName: "chargebeesubscriptionmetrics",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "totalnoofsubscription",
    label: "Total # of subscriptions",
    description: "Number of active subscriptions.",
    groupName: "chargebeesubscriptionmetrics",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "totaldues",
    label: "Total dues",
    description: "Total dues across all subscriptions synced to Chargebee",
    groupName: "chargebeesubscriptionmetrics",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "totalinvoiceamountpaid",
    label: "Total invoice amount paid",
    description: "Total number of paid invoices synced to Chargebee.",
    groupName: "chargebeesubscriptionmetrics",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "totaldueinvoicescount",
    label: "Total due invoices count",
    description: "Total number of invoices in the 'due' state",
    groupName: "chargebeesubscriptionmetrics",
    type: "number",
    fieldType: "text",
    formField: true,
  },
];

let contactProperties = [
  {
    name: "chargebeecustomerid",
    label: "Customer ID",
    description: "A unique identifier for this Chargebee customer",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "billingaddress",
    label: "Billing Address",
    description: "Billing Address",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "billingcity",
    label: "Billing City",
    description: "Billing City",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "billingstate",
    label: "Billing State",
    description: "Billing State",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "billingcountry",
    label: "Billing Country",
    description: "Billing Country",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "billingzip",
    label: "Billing Zip ",
    description: "Billing Zip",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "autocollection",
    label: "Auto Collection",
    description:
      "Attempts to charge the customer's payment method when an invoice is created.",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "preferredcurrencycode",
    label: "Preferred Currency Code",
    description:
      "Chargebee determines which gateway to use based on this code.",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "paymentmethodstatus",
    label: "Payment Method Status",
    description: "PaymentMethod Status",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "paymentmethodtype",
    label: "Payment Method Type",
    description: "PaymentMethod Type",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "nettermdays",
    label: "Net Term Days",
    description:
      "The time within which a customer has to pay an outstanding invoice.",
    groupName: "chargebeecustomerinfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "taxexemptstatus",
    label: "Tax Exempt Status",
    description: "Tax exempt status",
    groupName: "chargebeecustomerinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "subscriptionid",
    label: "Subscription ID",
    description: "A unique identifier for this Chargebee subscription",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "currencycode",
    label: "Currency Code",
    description: "Chargebee Currency Code",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "subscriptiostatus",
    label: "Subscription Status",
    description: "Subscription status",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "subscriptionmrr",
    label: "Subscription MRR",
    description: "The monthly recurring revenue from this subscription.",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "customermrr",
    label: "Total Customer MRR",
    description: "Total Customer MRR",
    groupName: "chargebeecustomerinfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "product",
    label: "Product",
    description: "The plan connected to this subscription.",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "planquantity",
    label: "Plan quantity",
    description: "Plan quantity",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "setupfee",
    label: "Setup Fee",
    description: "Setup Fee",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "dueinvoicescount",
    label: "Due invoices count",
    description: "Due invoices count",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "invoiceamountpaid",
    label: "Invoice amount paid",
    description: "Invoices amount paid",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "remainingbillingcycles",
    label: "Remaining billing cycles",
    description: "Remaining billing cycles",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "ponumber",
    label: "PO Number",
    description: "PO Number",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "nextbillingat",
    label: "Next Billing At",
    description: "The date the next invoice will be raised",
    groupName: "chargebeesubscriptioninfo",
    type: "datetime",
    fieldType: "date",
    formField: true,
  },
  {
    name: prefix + "nextbillingamount",
    label: "Next Billing Amount",
    description: "The amount that will be invoiced next.",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "totaldues",
    label: "Total Dues",
    description: "Total Dues",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "duesince",
    label: "Due Since",
    description: "Due Since",
    groupName: "chargebeesubscriptioninfo",
    type: "datetime",
    fieldType: "date",
    formField: true,
  },
  {
    name: prefix + "lastorderdate",
    label: "Last Order Date",
    description:
      "The date closest to, but before today.\n or \n The date closest to, but before the present date.",
    groupName: "chargebeeorderinfo",
    type: "datetime",
    fieldType: "date",
    formField: true,
  },
  {
    name: prefix + "lastorder",
    label: "Last Order",
    description: "Last Order",
    groupName: "chargebeeorderinfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "lastorderstatus",
    label: "Last Order Status",
    description: "Last Order Status",
    groupName: "chargebeeorderinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "lastorderbasecomponentsku",
    label: "Last Order Base Component",
    description: "The SKU line item of the last order.",
    groupName: "chargebeeorderinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "nextorderdate",
    label: "Next Order Date",
    description:
      "The date closest to, but after today.\n or \n The date closest to, but after the present date.",
    groupName: "chargebeeorderinfo",
    type: "datetime",
    fieldType: "date",
    formField: true,
  },
  {
    name: prefix + "nextorder",
    label: "Next Order",
    description: "Next Order",
    groupName: "chargebeeorderinfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "nextorderbasecomponentsku",
    label: "Next Order Base Component",
    description: "The SKU line item of the next order.",
    groupName: "chargebeeorderinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "nextorderstatus",
    label: "Next Order Status",
    description: "Next Order Status",
    groupName: "chargebeeorderinfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
];
let dealProperties = [
  {
    name: "hubspotcontact",
    label: "Hubspot contact",
    description: "Hubspot contact",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "currencycode",
    label: "Currency Code",
    description: "Chargebee Currency Code",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "subscriptionid",
    label: "Subscription ID",
    description: "Subscription ID",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "subscriptionstatus",
    label: "Subscription status",
    description: "Subscription status",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "subscriptionmrr",
    label: "Subscription MRR",
    description: "The monthly recurring revenue from this subscription.",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "product",
    label: "Product",
    description: "Product",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "planquantity",
    label: "Plan Quantity",
    description: "Plan Quantity",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "setupfee",
    label: "Setup Fee",
    description: "Setup Fee",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "dueinvoicescount",
    label: "Due Invoices Count",
    description: "Due Invoices Count",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "remainingbillingcycles",
    label: "Remaining Billing Cycles",
    description: "Remaining billing cycles",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "ponumber",
    label: "PO Number",
    description: "PO Number",
    groupName: "chargebeesubscriptioninfo",
    type: "string",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "totaldues",
    label: "Total dues",
    description: "Total dues",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "nextbillingat",
    label: "Next billing at",
    description: "Next billing at",
    groupName: "chargebeesubscriptioninfo",
    type: "datetime",
    fieldType: "date",
    formField: true,
  },
  {
    name: prefix + "nextbillingamount",
    label: "Next Billing Amount",
    description: "Next Billing Amount",
    groupName: "chargebeesubscriptioninfo",
    type: "number",
    fieldType: "text",
    formField: true,
  },
  {
    name: prefix + "duesince",
    label: "Due Since",
    description: "Due Since",
    groupName: "chargebeesubscriptioninfo",
    type: "datetime",
    fieldType: "date",
    formField: true,
  },
];



var entities = {
  company: "companies",
  contacts: "contacts",
  deal: "deals",
};

let hubspotPropertyRoute = "https://api.hubapi.com/crm/v3/properties/";

let retainHubspot = steps.InputParams.retainHubspot;

let getPropertiesListOfEntity = (entity) => {
  switch (entity) {
    case "company":
      return companyProperties;
    case "deals":
      return dealProperties;
    case "contacts":
      return contactProperties;
    default:
      return [];
  }
};
//This will help us understand if the property is created by us
let createPropertyMapOfEntity = (properties) => {
  let map = {};
  for (var property in properties) {
    map[property.name] = true;
  }
  return map;
};

if (retainHubspot) {
  //First "if" is to check for custom is true or not
  if (steps.LoopOverHubGroups.entry.custom) {
    let syncRulesFields =
      steps.ConfigData.configJson.config_json.cloudElements.syncRulesFields;
    //Setting the syncRulesFields
    if (syncRulesFields === undefined) {
      syncRulesFields = {
        company: {},
        contact: {},
        deal: {},
        sync: "false",
      };
    } else {
      if (
        syncRulesFields.company === undefined ||
        syncRulesFields.company === ""
      ) {
        syncRulesFields.company = {};
      }
      if (
        syncRulesFields.contact === undefined ||
        syncRulesFields.contact === ""
      ) {
        syncRulesFields.contact = {};
      }
      if (syncRulesFields.deal === undefined || syncRulesFields.deal === "") {
        syncRulesFields.deal = {};
      }
    }
    syncRulesFields = JSON.parse(JSON.stringify(syncRulesFields));
    //get Custom fields from HubUrl step
    let customefields = steps.HubUrl.config.customefields;
    //get custom company fields from HubUrl step
    let customCompanyFields = steps.HubUrl.config.customCompanyFields;
    let companyKeys = Object.keys(syncRulesFields.company);
    //looping companykeys and is set in syncrulesfileds
    for (var i = 0; i < companyKeys.length; i++) {
      syncRulesFields.contact[companyKeys[i]] =
        syncRulesFields.company[companyKeys[i]];
    }

    //if the group exists and returned 200
    if (steps.GetCustomHubSpotGroups.cb_code === 200) {
      let body = steps.GetCustomHubSpotGroups.data.properties;
      //get all properties from the json response
      if (body.length > 0) {
        for (var i = 0; i < body.length; i++) {
          let pName = body[i].name;
          if (pName.startsWith("cb_")) {
            pName = pName.substring(3);
          }
          if (steps.LoopOverHubGroups.entry.type === "company") {
            //if syncRulesFields doesnt have a entry for that property mark delete for that property else mark it as off so that we need not create it again
            if (syncRulesFields.company[pName] === undefined) {
              syncRulesFields.company[pName] = "delete";
            } else {
              syncRulesFields.company[pName] = "off";
            }
          }
          if (steps.LoopOverHubGroups.entry.type === "contacts") {
            if (syncRulesFields.contact[pName] === undefined) {
              syncRulesFields.contact[pName] = "delete";
            } else {
              syncRulesFields.contact[pName] = "off";
            }
          }
          if (steps.LoopOverHubGroups.entry.type === "deal") {
            if (syncRulesFields.deal[pName] === undefined) {
              syncRulesFields.deal[pName] = "delete";
            } else {
              syncRulesFields.deal[pName] = "off";
            }
          }
        }
      }
    } else {
      // that custom group does not exist add a entry to creates first by creating the group
      if (steps.LoopOverHubGroups.entry.type === "company") {
        creates.push({
          url: "https://api.hubapi.com/properties/v1/companies/groups",
          body: {
            name: "chargebeecustomproperties",
            displayName: "Chargebee Custom Properties",
          },
        });
      }
      if (steps.LoopOverHubGroups.entry.type === "contacts") {
        creates.push({
          url: "https://api.hubapi.com/properties/v1/contacts/groups",
          body: {
            name: "chargebeecustomproperties",
            displayName: "Chargebee Custom Properties",
          },
        });
      }
      if (steps.LoopOverHubGroups.entry.type === "deal") {
        creates.push({
          url: "https://api.hubapi.com/properties/v1/deals/groups",
          body: {
            name: "chargebeecustomproperties",
            displayName: "Chargebee Custom Properties",
          },
        });
      }
    }

    if (steps.LoopOverHubGroups.entry.type === "company") {
      //loop over customcompanyfields and if the field has a value as 'on' create it
      for (var i = 0; i < customCompanyFields.length; i++) {
        let fld = customCompanyFields[i];

        for (var j = 0; j < fld.fields.length; j++) {
          var es = fld.fields[j];
          var desc = fld.label + " " + es[0].replace(/_/g, " ");
          var id = fld.key + "_" + es[0];

          if (syncRulesFields.company[id] === "on") {
            creates.push({
              url: "https://api.hubapi.com/properties/v1/companies/properties",
              body: {
                name: prefix + id,
                label: desc,
                description: desc,
                groupName: "chargebeecustomproperties",
                type: es[1],
                fieldType: es[2],
                formField: true,
              },
            });
          } else if (syncRulesFields.company[id] === "delete") {
            //delete if marked as delete
            deletes.push(
              "https://api.hubapi.com/properties/v1/companies/properties/named/" +
                prefix +
                id
            );
          }
        }
      }
    } else {
      //for each custom fields we have subscription and customer
      for (var i = 0; i < customefields.length; i++) {
        let fld = customefields[i];

        for (var j = 0; j < fld.fields.length; j++) {
          var es = fld.fields[j];
          var desc = fld.label + " " + es[0].replace(/_/g, " ");
          var id = fld.key + "_" + es[0];
          if (steps.LoopOverHubGroups.entry.type === "contacts") {
            if (syncRulesFields.contact[id] === "on") {
              creates.push({
                url: "https://api.hubapi.com/properties/v1/contacts/properties",
                body: {
                  name: prefix + id,
                  label: desc,
                  description: desc,
                  groupName: "chargebeecustomproperties",
                  type: es[1],
                  fieldType: es[2],
                  formField: true,
                },
              });
            } else if (syncRulesFields.contact[id] === "delete") {
              deletes.push(
                "https://api.hubapi.com/properties/v1/contacts/properties/named/" +
                  prefix +
                  id
              );
            }
          } else {
            if (syncRulesFields.deal[id] === "on") {
              creates.push({
                url: "https://api.hubapi.com/properties/v1/deals/properties",
                body: {
                  name: prefix + id,
                  label: desc,
                  description: desc,
                  groupName: "chargebeecustomproperties",
                  type: es[1],
                  fieldType: es[2],
                  formField: true,
                },
              });
            } else if (syncRulesFields.deal[id] === "delete") {
              deletes.push(
                "https://api.hubapi.com/properties/v1/deals/properties/named/" +
                  prefix +
                  id
              );
            }
          }
        }
      }
    }
  } else {
    //if custom is not true
    //if that non custom group doesnt exist create it
    if (steps.GetCustomHubSpotGroups.cb_code === 404) {
      if (steps.LoopOverHubGroups.entry.type === "company") {
        creates.push({
          url: "https://api.hubapi.com/properties/v1/companies/groups",
          body: {
            name: "chargebeesubscriptionmetrics",
            displayName: "Chargebee subscription metrics",
          },
        });

        for (var k = 0; k < companyProperties.length; k++) {
          creates.push({
            url: "https://api.hubapi.com/properties/v1/companies/properties",
            body: companyProperties[k],
          });
        }
      }
      if (steps.LoopOverHubGroups.entry.type === "contacts") {
        if (steps.LoopOverHubGroups.entry.group === "chargebeecustomerinfo") {
          creates.push({
            url: "https://api.hubapi.com/properties/v1/contacts/groups",
            body: {
              name: "chargebeecustomerinfo",
              displayName: "Chargebee customer info",
            },
          });
        }
        if (
          steps.LoopOverHubGroups.entry.group === "chargebeesubscriptioninfo"
        ) {
          creates.push({
            url: "https://api.hubapi.com/properties/v1/contacts/groups",
            body: {
              name: "chargebeesubscriptioninfo",
              displayName: "Chargebee subscription info",
            },
          });
        }
        if (steps.LoopOverHubGroups.entry.group === "chargebeeorderinfo") {
          creates.push({
            url: "https://api.hubapi.com/properties/v1/contacts/groups",
            body: {
              name: "chargebeeorderinfo",
              displayName: "Chargebee order info",
            },
          });
        }

        for (var k = 0; k < contactProperties.length; k++) {
          if (
            steps.LoopOverHubGroups.entry.group ===
            contactProperties[k].groupName
          ) {
            creates.push({
              url: "https://api.hubapi.com/properties/v1/contacts/properties",
              body: contactProperties[k],
            });
          }
        }
      }
      if (steps.LoopOverHubGroups.entry.type === "deal") {
        creates.push({
          url: "https://api.hubapi.com/properties/v1/deals/groups",
          body: {
            name: "chargebeesubscriptioninfo",
            displayName: "Chargebee subscription info",
          },
        });

        for (var k = 0; k < dealProperties.length; k++) {
          creates.push({
            url: "https://api.hubapi.com/properties/v1/deals/properties",
            body: dealProperties[k],
          });
        }
      }
    } else if (steps.GetCustomHubSpotGroups.cb_code === 200) {
      // if already exists get all the properties from hubspot
      let pMap = {};
      let existingProps = steps.GetCustomHubSpotGroups.data.properties;
      //create a map for that properties
      for (var ij = 0; ij < existingProps.length; ij++) {
        pMap[existingProps[ij].name] = existingProps[ij].name;
      }

      //add to creates array only if it doesn't exists
      let entity = entities[steps.LoopOverHubGroups.entry.type];
      let properties = getPropertiesListOfEntity(entity);
      for (var k = 0; k < properties.length; k++) {
        let name = properties[k].name;
        if (pMap[name] === undefined) {
          let url =
            "https://api.hubapi.com/properties/v1/" + entity + "/properties";
          creates.push({
            url: url,
            body: properties[k],
          });
        }
      }
    }
  }
} else if(steps.GetCustomHubSpotGroups.cb_code !== 404 ){
  //delete
  let properties = steps.GetCustomHubSpotGroups.data.properties;
  let groupName = steps.GetCustomHubSpotGroups.data.name;
  let entity = entities[steps.LoopOverHubGroups.entry.type];
  let map = createPropertyMapOfEntity(getPropertiesListOfEntity(entity));

  for (let i = 0; i < properties.length; i++) {
    // checking if this property is created by us
    if (map[properties[i].name]) {
      let url = hubspotPropertyRoute + entity + "/" + properties[i].name;
      deletes.push({ url: url });
    }
  }
  //try to delete the group
  let hubspotGroupurl = hubspotPropertyRoute + entity + "/groups/" + groupName;
  deletes.push({ url: hubspotGroupurl });
}

done({
  creates: creates,
  deletes: deletes
});
