const _ = require('lodash');
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

let syncRulesforOrders = "false";

if (
  steps.ConfigData.configJson.config_json.cloudElements.syncRuleForOrders !==
  undefined
) {
  syncRulesforOrders =
    steps.ConfigData.configJson.config_json.cloudElements.syncRuleForOrders
      .sync;
}

var entitiesForHubspot = {
  company: "companies",
  contacts: "contacts",
  deal: "deals",
};

var entitiesForCustomFields = {
  company: "company",
  contacts: "contact",
  deal: "deal",
}

let entityType = steps.LoopOverHubGroups.entry.type;
let entity = entitiesForHubspot[entityType];

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

let getCustomPropertiesFieldList = (entity) => {
  switch(entity){
    case "company":
      return steps.HubUrl.config.customCompanyFields;;
    default:
      return steps.HubUrl.config.customefields;;
  }
}
//This will help us understand if the property is created by us
let createPropertyMapOfEntity = (properties) => {
  let map = {};
  for (var property in properties) {
    map[properties[property].name] = true;
  }
  return map;
};
let fieldEnum = {
  KEYNAME : 0,
  TYPE: 1,
  FIELDTYPE : 2
}

let isCustom = steps.LoopOverHubGroups.entry.custom;
if (retainHubspot) {
  //First "if" is to check for custom is true or not
  if (isCustom) {
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
    let fieldProps = steps.UpdateCustomFieldInfo.fieldProps;
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
        creates.push({
          url: "https://api.hubapi.com/properties/v1/"+entity+"/groups",
          body: {
            name: "chargebeecustomproperties",
            displayName: "Chargebee Custom Properties",
          },
        });
    }

    let customFieldsList = getCustomPropertiesFieldList(entitiesForCustomFields.entityType)
     {
      //for each custom fields we have subscription and customer
      for (var i = 0; i < customFieldsList.length; i++) {
        let fld = customFieldsList[i];

        for (var j = 0; j < fld.fields.length; j++) {
          let field = fld.fields[j];
          let desc = fld.label + " " + field[fieldEnum.KEYNAME].replace(/_/g, " ");
          let id = fld.key + "_" + field[fieldEnum.KEYNAME];

          if (syncRulesFields[entitiesForCustomFields[entityType]][id] === "on") {
            let createInput = getCreateInput(entity, fieldProps,field[fieldEnum.KEYNAME],field[fieldEnum.TYPE], field[fieldEnum.FIELDTYPE],desc, id);
              creates.push(createInput);
          } else if (syncRulesFields[entitiesForCustomFields[entityType]][id] === "delete") {
              deletes.push(
                "https://api.hubapi.com/properties/v1/"+ entity +"/properties/named/" +
                  prefix +
                  id
              );
            }
        }
      }
    }
  } else {
    //if custom is not true
    //if that non custom group doesnt exist create it
    if (steps.GetCustomHubSpotGroups.cb_code === 404) {
      let groupName = steps.LoopOverHubGroups.entry.group; 
      let properties =  getPropertiesListOfEntity(entity);
      let displayName = steps.LoopOverHubGroups.entry.displayName; 
      //created the corresponding group
      creates.push({
        url: "https://api.hubapi.com/properties/v1/"+entity+"/groups",
        body: {
          name: groupName,
          displayName: displayName,
        },
      });
      addProperties(properties, entity, groupName);
    } else if (steps.GetCustomHubSpotGroups.cb_code === 200) {
      // if already exists get all the properties from hubspot
      let pMap = {};
      let existingProps = steps.GetCustomHubSpotGroups.data.properties;
      //create a map for that properties
      for (var ij = 0; ij < existingProps.length; ij++) {
        pMap[existingProps[ij].name] = existingProps[ij].name;
      }
      //add to creates array only if it doesn't exists
      let groupName = steps.LoopOverHubGroups.entry.group; 
      let properties = getPropertiesListOfEntity(entity);
      let propertiesInGroup = properties[groupName];
      for (var k = 0; k < propertiesInGroup.length; k++) {
        let name = propertiesInGroup[k].name;
        if (pMap[name] === undefined) {
          addToCreates(entity, propertiesInGroup[k], groupName);
        }
        // else{
        //   if (groupName === "chargebeeorderinfo") {
        //     if (syncRulesforOrders === "false") {
        //       let url = hubspotPropertyRoute + entity + "/" + propertiesInGroup[k].name;
        //       deletes.push({ url: url });
        //     }
        //   }
        // }
      }
    }
  }
} else if(steps.GetCustomHubSpotGroups.cb_code !== 404) {
  
  //delete
  let properties = steps.GetCustomHubSpotGroups.data.properties;
  let groupName = steps.GetCustomHubSpotGroups.data.name;
  let cbProperties;
  let map={};
  if(!isCustom){
    cbProperties = getPropertiesListOfEntity(entity);
    map = createPropertyMapOfEntity(cbProperties[groupName]);
  }
  else{
    let syncRulesFields =
      steps.ConfigData.configJson.config_json.cloudElements.syncRulesFields;
    _.forEach(syncRulesFields[entitiesForCustomFields[entityType]], function(value, key) {
      map[prefix + key] = value;
    });
  }
  for (let i = 0; i < properties.length; i++) {
    // checking if this property is created by us
    if (map[properties[i].name] !== undefined) {
      let url = hubspotPropertyRoute + entity + "/" + properties[i].name;
      deletes.push({ url: url });
    }
  }
  //try to delete the group
  let hubspotGroupurl = hubspotPropertyRoute + entity + "/groups/" + groupName;
  deletes.push({ url: hubspotGroupurl });
}


function addToCreates(entity, data, groupName) {
  let createInput = {
    url: "https://api.hubapi.com/properties/v1/" + entity + "/properties",
    body: data,
  };
  if (groupName === "chargebeeorderinfo") {
    if (syncRulesforOrders === "true") {
      creates.push(createInput);
    }
  }
  else {
    creates.push(createInput);
  }
}

function getCreateInput(entity, fieldProps, keyName, type, fieldType, desc, id) {
  let createInput = {
    url: "https://api.hubapi.com/properties/v1/" + entity + "/properties",
    body: {
      name: prefix + id,
      label: desc,
      description: desc,
      groupName: "chargebeecustomproperties",
      type: type,
      fieldType: fieldType,
      formField: true,
    },
  };
  if (type === "enumeration" && fieldType === "select") {
    if (fieldProps[keyName].allowedValues !== undefined) {
      createInput.body.options = generateOptions(fieldProps, keyName);
    }
  }
  return createInput;
}

function generateOptions(fieldProps, keyName) {
  let allowedValues = fieldProps[keyName].allowedValues;
  let options = [];
  for (var opt in allowedValues) {
    options.push({
      "label": allowedValues[opt],
      "value": allowedValues[opt],
    });
  }
  return options;
}

function addProperties(properties,entity, groupName) {
  for (var k = 0; k < properties[groupName].length; k++) {
    addToCreates(entity,properties[groupName][k],groupName);
  }
}
done({
  creates: creates,
  deletes: deletes,
});
