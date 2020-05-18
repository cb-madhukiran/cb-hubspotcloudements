let param = {
  url : steps.HubSpotInput.url,
  headers : steps.CustomersParam.hubspotAuth,
  body : steps.HubSpotInput.inputs,
  siteName : steps.ContactInputParams.input.siteName,
  siteDomain : steps.ContactInputParams.input.siteDomain,
   apiKey : steps.ContactInputParams.input.apiKey,
  type : steps.ContactInputParams.input.type
};

done(param);