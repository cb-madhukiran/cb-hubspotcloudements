let siteName = steps.ManageSyncProps.request.query["cb-site-name"];
let siteDomain = steps.ManageSyncProps.request.query["cb-domain"];
let apiKey = steps.ManageSyncProps.request.query["cb-api-key"];

let order = {
    url: " https://" + siteName + ".integrations." + siteDomain + "/api/order_enabled/tpmeta",
    auth: {
      "api_key": apiKey
    },
    query: {
      "integration_name": "hubspot"
    }
  };
  
  done(order);