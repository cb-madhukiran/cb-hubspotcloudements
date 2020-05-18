let apiKey = trigger.args.apiKey;
let siteName = trigger.args.siteName;
let type = trigger.args.type;
let siteDomain = trigger.args.siteDomain;
let hubspotGroup = trigger.args.hubspotGroup;
let hubspotProperty = trigger.args.hubspotProperty;

let input = {
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: type,
  hubspotGroup: hubspotGroup,
  hubspotProperty: hubspotProperty,
  hGroup: "https://api.hubapi.com/properties/v1/contacts/groups/named/" + hubspotGroup + "?includeProperties=true",
  hcreate: {
    url: "https://api.hubapi.com/properties/v1/contacts/properties",
    body: {
      "name": hubspotProperty,
      "label": "CMMR",
      "description": "CMMR",
      "groupName": hubspotGroup,
      "type": "number",
      "fieldType": "text",
      "formField": true
    }
  },
  tpConfig: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: type,
    headers: {
      Authorization: "Basic " + CE.b64(apiKey + ":")
    },
    url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_configurations",
    query: {
      integration_name: type
    }
  }
};
done(input);