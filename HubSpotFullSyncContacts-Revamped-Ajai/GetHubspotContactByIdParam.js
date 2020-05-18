let param = {
  headers : steps.CustomersParam.hubspotAuth,
  url : steps.CBData.hubspot.contactById,
  siteName : steps.ContactInputParams.input.siteName,
  siteDomain : steps.ContactInputParams.input.siteDomain,
  apiKey : steps.ContactInputParams.input.apiKey,
  type : steps.ContactInputParams.input.type
};

done(param);