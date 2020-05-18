let configJson = steps.getConfigApi.data.third_party_configuration.config_json;
//lastConfig is used to get the old configJson and append it to new update
let lastConfig = {
    syncRulesFields : configJson.cloudElements.syncRulesFields
  };

let modifiedFieldsJson = steps.SaveConfigInputParams.syncRulesFields;
let existingFieldsJson = lastConfig.syncRulesFields;


if(existingFieldsJson === undefined){
  existingFieldsJson = {
    contact : "",
    company : "",
    deal : "",
    sync : false
  }
}

let contactOld = existingFieldsJson.contact;
let companyOld = existingFieldsJson.company;
let dealOld = existingFieldsJson.deal;
let syncOld = existingFieldsJson.sync;

let contactNew = modifiedFieldsJson.contact;
let companyNew = modifiedFieldsJson.company;
let dealNew = modifiedFieldsJson.deal;
let syncNew = modifiedFieldsJson.sync;

let contactSelected = {};
let companySelected = {};
let dealSelected = {};
let syncSelected = false;
if(contactNew !== undefined && contactOld !== undefined) {
  let contactNewKeys = Object.keys(contactNew);
  if(contactNewKeys.length >0) {
    for(var j=0;j<contactNewKeys.length;j++){
     if (contactNew[contactNewKeys[j]] === "on")
     {
       contactSelected[contactNewKeys[j]] = contactNew[contactNewKeys[j]];
     }
    }
  }
  else
  {
    if (JSON.stringify(contactNew) !== "{}")
    {
      contactSelected = contactOld;
    }
    console.log("contactNew:"+JSON.stringify(contactNew));
    
  }
}
if(dealNew !== undefined && dealOld !== undefined) {
  let dealNewKeys = Object.keys(dealNew);
  if(dealNewKeys.length >0) {
    for(var j=0;j<dealNewKeys.length;j++){
     if (dealNew[dealNewKeys[j]] === "on")
     {
       dealSelected[dealNewKeys[j]] = dealNew[dealNewKeys[j]];
     }
    }
  }
  else
  {
    if (JSON.stringify(dealNew) !== "{}")
    {
     dealSelected = dealOld;
    }
    console.log("dealNew:"+JSON.stringify(dealNew));
    
  }
}
if(companyNew !== undefined && companyOld !== undefined) {
  let companyNewKeys = Object.keys(companyNew);
  if(companyNewKeys.length >0) {
    for(var j=0;j<companyNewKeys.length;j++){
     if (companyNew[companyNewKeys[j]] === "on")
     {
       companySelected[companyNewKeys[j]] = companyNew[companyNewKeys[j]];
     }
    }
  }
  else
  {
    if ((JSON.stringify(companyNew)!== "{}"))
    {
       companySelected = companyOld;
    }
    console.log("companyNew:"+JSON.stringify(companyNew));
   
  }
  
}
syncSelected = syncNew;
let syncRuleForFields =
{
  sync: syncSelected,
  company: companySelected,
  deal: dealSelected,
  contact : contactSelected
}


done({syncRuleForFields:syncRuleForFields});