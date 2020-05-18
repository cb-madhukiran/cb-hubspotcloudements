let siteName = steps.setupCBConfig.siteName;
let siteDomain = steps.setupCBConfig.siteDomain;
let type = steps.setupCBConfig.type;
let apiKey = steps.setupCBConfig.apiKey;
let password = steps.setupCBConfig.password;

let getCustomFieldApi = {
  url: "https://"+siteName+".integrations."+siteDomain+"/integrations/api/get_custom_field_list",
  headers:{
    Authorization: "Basic " + CE.b64(apiKey + ":" + password)
  },
  query:{
    site_name: siteName,
    api_key: apiKey
  },
  apiKey: apiKey,
  siteDomain: siteDomain,
  siteName: siteName,
  type: type
};

done({
  getCustomFieldApi: getCustomFieldApi
});