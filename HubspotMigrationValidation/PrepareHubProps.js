let data = {};

if (steps.GetHubSpotGroup.data !== undefined && steps.GetHubSpotGroup.data.properties !== undefined && steps.GetHubSpotGroup.data.properties.length > 0) {
  for (var i = 0; i < steps.GetHubSpotGroup.data.properties.length; i++) {
    
    let prop = {};
    
   prop.name = steps.GetHubSpotGroup.data.properties[i].name;
   
   prop.fieldType = steps.GetHubSpotGroup.data.properties[i].fieldType;
   
   prop.createdAt = steps.GetHubSpotGroup.data.properties[i].createdAt;
    
    steps.HubInputs.allProps.push(prop);
    
    if(steps.LoopOverGroups.entry.type === "deal"){
      steps.HubInputs.dealProps.push(prop);
    }
    else if(steps.LoopOverGroups.entry.type === "contacts"){
      steps.HubInputs.contactProps.push(prop);
    }
    else if(steps.LoopOverGroups.entry.type === "company"){
      steps.HubInputs.companyProps.push(prop);
    }
    
  }
}


