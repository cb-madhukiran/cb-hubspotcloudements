let apiKey= steps.InputParams.apiKey;
let siteName= steps.InputParams.siteName;
let siteDomain= steps.InputParams.siteDomain;
let type= steps.InputParams.type;

let hubSpotHeaders = steps.UpdateToken.headers;


let contactGroupSubPayload = {
  url: "https://api.hubapi.com/properties/v1/contacts/groups/named/chargebeesubscriptioninfo?includeProperties=true",
  headers: hubSpotHeaders,
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: type
};

let contactGroupOrderPayload = {
  url: "https://api.hubapi.com/properties/v1/contacts/groups/named/chargebeeorderinfo?includeProperties=true",
  headers: hubSpotHeaders,
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: type
};

let companyGroupPayload = {
  hCompanyGroup: "https://api.hubapi.com/properties/v1/companies/groups?includeProperties=true",
  headers: hubSpotHeaders,
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: type
};

let dealGroupPayload = {
  hDealGroup: "https://api.hubapi.com/properties/v1/deals/groups/named/chargebeesubscriptioninfo?includeProperties=true",
  headers: hubSpotHeaders,
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: type
};


done({
  contactGroupSubPayload: contactGroupSubPayload,
  contactGroupOrderPayload: contactGroupOrderPayload,
  companyGroupPayload: companyGroupPayload,
  dealGroupPayload: dealGroupPayload
});