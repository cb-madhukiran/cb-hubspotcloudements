let customefields = steps.HubUrl.config.customefields;
let list = steps.GetCBCustomFields.data;
if(list!==undefined && list.list!==undefined && list.list.length>0) {
  list = list.list;
}
let entityTypes = {
  customer : 1,
  subscription : 0
}

let fieldProps = {
}
if(list!==undefined){
  let listMap = {};
  for(var i=0;i<list.length;i++){
    //get the object
    let obj = list[i];
    if(obj.custom_field_config !== undefined) {
      if(obj.custom_field_config.entity_type === "customer") {
        //creating maps for with the apiname in the object with the whole obj
        listMap["custcst_"+obj.custom_field_config.api_name] = obj.custom_field_config;
      }else if(obj.custom_field_config.entity_type === "subscription") {
        listMap["subcst_"+obj.custom_field_config.api_name] = obj.custom_field_config;
      }
    }
    
  }
  //get sync rules fields
    let syncRulesFields = steps.ConfigData.configJson.config_json.cloudElements.syncRulesFields;
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
  //get all contact,subs keys for for syncrulesFields
  let contactKeys = Object.keys(syncRulesFields.contact);
  let subKeys = Object.keys(syncRulesFields.deal);
  let cKeys =[];
  let cMap = {};
  //generating a map for these keys
  for (var i = 0; i < contactKeys.length; i++) {
    if(contactKeys[i].startsWith("custcst_cf_") || contactKeys[i].startsWith("subcst_cf_") ) {
      if(cMap[contactKeys[i]] === undefined){
        //maybe getting unique keys here
        cKeys.push(contactKeys[i]);
        cMap[contactKeys[i]] =contactKeys[i];
      }
    }
  }

  //get unique keys for the fields
  for (var i = 0; i < subKeys.length; i++) {
    if(subKeys[i].startsWith("custcst_cf_") || subKeys[i].startsWith("subcst_cf_") ) {
      if(cMap[subKeys[i]] === undefined){
        cKeys.push(subKeys[i]);
        cMap[subKeys[i]] =subKeys[i];
      }
    }
  }
  
  for (var i = 0; i < cKeys.length; i++) {
      //if the customfields from syncrulesfields is selected for sync
      if(listMap[cKeys[i]] !== undefined) {
         let type = listMap[cKeys[i]].field_datatype;
         let props = JSON.parse(listMap[cKeys[i]].props);
         let keyname = listMap[cKeys[i]].api_name;
         fieldProps[keyname]=props;
         if(listMap[cKeys[i]].entity_type === "customer") {
          //update the steps.HubUrlconfig.customefields
            addCustomfields(type, keyname, props,entityTypes.customer);
         }else if(listMap[cKeys[i]].entity_type === "subscription") {
            addCustomfields(type, keyname, props,entityTypes.subscription);
         }
      }
    }
  
  
steps.HubUrl.customefields = customefields;
  
}

function addCustomfields(type, keyname, props, entityType) {
  if (type === "date" || type === "timestamp") {
    customefields[entityType].fields.push([keyname, 'datetime', 'date']);
  }
  else if (type === "long") {
    customefields[entityType].fields.push([keyname, 'number', 'number']);
  }
  else if (type === "string") {
    if (props.allowedValues !== undefined) {
      customefields[entityType].fields.push([keyname, 'enumeration', 'select']);
    }
    else {
      customefields[entityType].fields.push([keyname, 'string', 'text']);
    }
  }
}

done({fieldProps:fieldProps});


