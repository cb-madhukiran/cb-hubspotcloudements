let params = steps.UpdateParams.input;
let thirdParty = steps.thirdPartyInstance.thirdPartyElementBody;
let instanceName = params.siteName+"-chargebee";
params.thirdParty  =  {
  elementId: params.thirdPartyElement,
  elementKey:params.integrationName,
  searchParam: {
    searchText: thirdParty.name,
    'tags[]': thirdParty.name,
    hydrate: false,
    pageSize: 1
  },
  body: thirdParty
};
  
done({
  params: params
});

