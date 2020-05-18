let customefields = steps.HubUrl.config.customefields;
let list = steps.GetCBCustomFields.data;
if(list!==undefined && list.list!==undefined && list.list.length>0) {
  list = list.list;
}

if(list!==undefined){
  let listMap = {};
  for(var i=0;i<list.length;i++){
    let obj = list[i];
    if(obj.custom_field_config !== undefined) {
      if(obj.custom_field_config.entity_type === "customer") {
        listMap["custcst_"+obj.custom_field_config.api_name] = obj.custom_field_config;
      }else if(obj.custom_field_config.entity_type === "subscription") {
        listMap["subcst_"+obj.custom_field_config.api_name] = obj.custom_field_config;
      }
    }
    
  }
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
  
  let contactKeys = Object.keys(syncRulesFields.contact);
  let subKeys = Object.keys(syncRulesFields.deal);
  let cKeys =[];
  let cMap = {};
  for (var i = 0; i < contactKeys.length; i++) {
    if(contactKeys[i].startsWith("custcst_cf_") || contactKeys[i].startsWith("subcst_cf_") ) {
      if(cMap[contactKeys[i]] === undefined){
        cKeys.push(contactKeys[i]);
        cMap[contactKeys[i]] =contactKeys[i];
      }
    }
  }
  for (var i = 0; i < subKeys.length; i++) {
    if(subKeys[i].startsWith("custcst_cf_") || subKeys[i].startsWith("subcst_cf_") ) {
      if(cMap[subKeys[i]] === undefined){
        cKeys.push(subKeys[i]);
        cMap[subKeys[i]] =subKeys[i];
      }
    }
  }
  
    for (var i = 0; i < cKeys.length; i++) {
      if(listMap[cKeys[i]] !== undefined) {
         let type = listMap[cKeys[i]].field_datatype;
         let keyname = listMap[cKeys[i]].api_name;
         
         if(listMap[cKeys[i]].entity_type === "customer") {
           
          
           if(type ==="date" || type ==="timestamp") {
            
             customefields[1].fields.push([keyname, 'datetime', 'date']);
           }else if(type ==="long"){
             customefields[1].fields.push([keyname, 'number', 'text']);
           }else {
             customefields[1].fields.push([keyname, 'string', 'text']);
           }
           
         }else if(listMap[cKeys[i]].entity_type === "subscription") {
            if(type ==="date" || type ==="timestamp") {
             customefields[0].fields.push([keyname, 'datetime', 'date']);
           }else if(type ==="long"){
             customefields[0].fields.push([keyname, 'number', 'text']);
           }else {
             customefields[0].fields.push([keyname, 'string', 'text']);
           }
         }
      }
    }
  
  
steps.HubUrl.customefields= customefields;
  
}
done(steps.HubUrl.customefields);