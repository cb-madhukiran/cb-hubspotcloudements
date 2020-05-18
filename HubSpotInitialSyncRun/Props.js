let cloud = "https://staging.cloud-elements.com";
let props  = {
  formulaId:31443,
  initialsync:{
     url :cloud + "/elements/api-v2/initialsync/setup",
    id:"411939"
  },
   syncProcessingCard:{
     url :cloud + "/elements/api-v2/sync/run",
    id:"437147"
  },
  validate:{
     url :cloud + "/elements/api-v2/validate/proceed",
    id:"412082"
  }
 
  
  
  
};
done(props);