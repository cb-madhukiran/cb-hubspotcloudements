let creates = [];
let deletes = [];

let prefix = "cb_";
if (
  steps.ChargebeeConfigParams.data.config_json.noneedprefix !== undefined &&
  steps.ChargebeeConfigParams.data.config_json.noneedprefix === true
) {
  prefix = "";
}
let companyProperties = steps.getHubspotProperties.companyProperties;

let contactProperties =  steps.getHubspotProperties.contactProperties;

let dealProperties = steps.getHubspotProperties.dealProperties;

let contactPropertiesOrderInfo = steps.getHubspotProperties.contactPropertiesOrderInfo;

let syncRulesforOrders = "true";
if (
  steps.ConfigData.configJson.config_json.cloudElements.syncRuleForOrders !==
  undefined
) {
  syncRulesforOrders =
    steps.ConfigData.configJson.config_json.cloudElements.syncRuleForOrders
      .sync;
}
console.log("orders"+syncRulesforOrders);


var entities = {
  company: "companies",
  contacts: "contacts",
  deal: "deals",
};

let hubspotPropertyRoute = "https://api.hubapi.com/crm/v3/properties/";

let retainHubspot = steps.InputParams.retainHubspot;

let getPropertiesListOfEntity = (entity) => {
  switch (entity) {
    case "companies":
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
    map[properties[property].name] = true;
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
          if (syncRulesforOrders === "true") {
            creates.push({
              url: "https://api.hubapi.com/properties/v1/contacts/groups",
              body: {
                name: "chargebeeorderinfo",
                displayName: "Chargebee order info",
              },
            });
            addContactProperties(contactPropertiesOrderInfo);
          }
        } else {
          addContactProperties(contactProperties);
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
} else if(steps.GetCustomHubSpotGroups.cb_code !== 404) {
  //delete
  let properties = steps.GetCustomHubSpotGroups.data.properties;
  let groupName = steps.GetCustomHubSpotGroups.data.name;
  let entity = entities[steps.LoopOverHubGroups.entry.type];
  let map;
  if (steps.LoopOverHubGroups.entry.group === "chargebeeorderinfo" && syncRulesforOrders === "true") {
    map = createPropertyMapOfEntity(contactPropertiesOrderInfo);
  }
  else {
    map= createPropertyMapOfEntity(getPropertiesListOfEntity(entity));
  }
  for (let i = 0; i < properties.length; i++) {
    // checking if this property is created by us
    if (map[properties[i].name] === true) {
      let url = hubspotPropertyRoute + entity + "/" + properties[i].name;
      deletes.push({ url: url });
    }
  }
  //try to delete the group
  let hubspotGroupurl = hubspotPropertyRoute + entity + "/groups/" + groupName;
  deletes.push({ url: hubspotGroupurl });
}


function addContactProperties(properties) {
  for (var k = 0; k < properties.length; k++) {
    if (
      steps.LoopOverHubGroups.entry.group === properties[k].groupName  
    ) {
      creates.push({
        url: "https://api.hubapi.com/properties/v1/contacts/properties",
        body: properties[k],
      });
    }
  }
}
done({
  creates: creates,
  deletes: deletes,
});
