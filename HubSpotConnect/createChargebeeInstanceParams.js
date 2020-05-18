let chargebeeElementId = steps.InputParams.chargebee.elementId;

let createChargebeeInstanceConfig = {
  url: "/elements/"+chargebeeElementId+"/instances",
  body: steps.InputParams.chargebee.body
};


done({
  createChargebeeInstanceConfig: createChargebeeInstanceConfig
});