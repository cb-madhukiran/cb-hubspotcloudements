let data = {};
let allProps ={};
if (steps.GetHubSpotGroup.data !== undefined && steps.GetHubSpotGroup.data.properties !== undefined && steps.GetHubSpotGroup.data.properties.length > 0) {
  for (var i = 0; i < steps.GetHubSpotGroup.data.properties.length; i++) {
    allProps[steps.GetHubSpotGroup.data.properties[i].name] = steps.GetHubSpotGroup.data.properties[i].name;
    if(!steps.GetHubSpotGroup.data.properties[i].name.startsWith(steps.InputParams.cbprefix)) {
      data[steps.GetHubSpotGroup.data.properties[i].name] = {
      "name": steps.GetHubSpotGroup.data.properties[i].name,
      "label": steps.GetHubSpotGroup.data.properties[i].label,
      "description": steps.GetHubSpotGroup.data.properties[i].description,
      "groupName": steps.GetHubSpotGroup.data.properties[i].groupName,
      "type": steps.GetHubSpotGroup.data.properties[i].type,
      "fieldType": steps.GetHubSpotGroup.data.properties[i].fieldType,
      "formField": steps.GetHubSpotGroup.data.properties[i].formField
    };
    }
    
  }
}

let dKeys = Object.keys(data);
if (dKeys.length > 0) {
    for (var i = 0; i < dKeys.length; i++) {
      let del;
      let cre;
      data[dKeys[i]].name = steps.InputParams.cbprefix + data[dKeys[i]].name;
     
         if (steps.LoopOverGroups.entry.type === "contacts") {
        steps.HubInputs.fields.contacts[dKeys[i]] = data[dKeys[i]].name ;
        del = "https://api.hubapi.com/properties/v1/contacts/properties/named/" + dKeys[i];
        cre = {
          url: "https://api.hubapi.com/properties/v1/contacts/properties",
          headers: steps.UpdateToken.headers,
          apiKey: steps.InputParams.apiKey,
          siteName: steps.InputParams.siteName,
          siteDomain: steps.InputParams.siteDomain,
          type: steps.InputParams.type,
          body: data[dKeys[i]],
        };
      }else if (steps.LoopOverGroups.entry.type === "deal") {
        steps.HubInputs.fields.deals[dKeys[i]] = data[dKeys[i]].name ;
        del = "https://api.hubapi.com/properties/v1/deals/properties/named/" + dKeys[i];
        cre = {
          url: "https://api.hubapi.com/properties/v1/deals/properties",
          headers: steps.UpdateToken.headers,
          apiKey: steps.InputParams.apiKey,
          siteName: steps.InputParams.siteName,
          siteDomain: steps.InputParams.siteDomain,
          type: steps.InputParams.type,
          body: data[dKeys[i]],
        };
      }else if (steps.LoopOverGroups.entry.type === "company") {
        steps.HubInputs.fields.company[dKeys[i]] = data[dKeys[i]].name ;
        del = "https://api.hubapi.com/properties/v1/companies/properties/named/" + dKeys[i];
        cre = {
          url: "https://api.hubapi.com/properties/v1/companies/properties",
          headers: steps.UpdateToken.headers,
          apiKey: steps.InputParams.apiKey,
          siteName: steps.InputParams.siteName,
          siteDomain: steps.InputParams.siteDomain,
          type: steps.InputParams.type,
          body: data[dKeys[i]],
        };
      }
      
       if(allProps[data[dKeys[i]].name] === undefined && cre !== undefined) {
         steps.HubInputs.creates.push(cre);
      }
     
      if(del!== undefined ) {
        steps.HubInputs.deletes.push(del);
        
      }
    }
}