let apiKey = steps.LoopOverConfig.entry.propertyValue;
let password = "";
  
let input = {
     auth:{
        Authorization: "Basic " + CE.b64(apiKey + ":"+password)
      }
};
done(input);

