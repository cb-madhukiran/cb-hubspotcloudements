let cloud = "https://staging.cloud-elements.com";
let props  = {
  formulaId:31469,
  validate:{
     url :cloud + "/elements/api-v2/hubspot/validate",
    id:"412082"
  },
  proceed:{
     url :cloud + "/elements/api-v2/validate/proceed",
    id:"412148"
  },
   final:{
     url :cloud + "/elements/api-v2/validate/final",
    id:"412149"
  }
  
  
  
};
done(props);