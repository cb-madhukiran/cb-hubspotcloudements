let apiKey = trigger.args.request.query['apiKey'];
let siteName = trigger.args.request.query['siteName'];
let siteDomain = trigger.args.request.query['domain'];
let type = trigger.args.request.query['type'];


let input = {
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: type,
  groups: [{
            url: "https://api.hubapi.com/properties/v1/deals/groups/named/chargebeecustomproperties?includeProperties=true",
            type: "deal",
            group:"chargebeecustomproperties",
            custom: true
        },
        {
            url: "https://api.hubapi.com/properties/v1/contacts/groups/named/chargebeecustomproperties?includeProperties=true",
            type: "contacts",
             group:"chargebeecustomproperties",
            custom: true
        },
        {
            url: "https://api.hubapi.com/properties/v1/companies/groups/named/chargebeecustomproperties?includeProperties=true",
            type: "company",
            group:"chargebeecustomproperties",
            custom: true
        },
        {
            url: "https://api.hubapi.com/properties/v1/deals/groups/named/chargebeesubscriptioninfo?includeProperties=true",
            type: "deal",
            group:"chargebeesubscriptioninfo",
            custom: false
        },
        {
            url: "https://api.hubapi.com/properties/v1/companies/groups/named/chargebeesubscriptionmetrics?includeProperties=true",
            type: "company",
              group:"chargebeesubscriptionmetrics",
            custom: false
        },
        {
            url: "https://api.hubapi.com/properties/v1/contacts/groups/named/chargebeecustomerinfo?includeProperties=true",
             group:"chargebeecustomerinfo",
            type: "contacts",
            custom: false
        },
        {
            url: "https://api.hubapi.com/properties/v1/contacts/groups/named/chargebeesubscriptioninfo?includeProperties=true",
            type: "contacts",
             group:"chargebeesubscriptioninfo",
            custom: false
        },
        {
            url: "https://api.hubapi.com/properties/v1/contacts/groups/named/chargebeeorderinfo?includeProperties=true",
            type: "contacts",
            group:"chargebeeorderinfo",
            custom: false
        } 
        ],
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
  },
  delay: {
        url: "https://" + siteName + ".integrations." + siteDomain + "/api/ipaasdelay?delay=5000",
        headers: {
            "api_key": apiKey
        }
    },
};
done(input);