let tpElementId = steps.queryParams.params.thirdParty.elementId || null;

let createTpInstanceConfig = {
  url: "/elements/"+tpElementId+"/instances",
  body: steps.queryParams.params.thirdParty.body
};


done({
  createTpInstanceConfig: createTpInstanceConfig
});

