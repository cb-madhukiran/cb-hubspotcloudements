let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let siteDomain = trigger.args.request.query['cb-domain'];


let params = {
  input: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: "hubspot"
  },
  auth: {
    Authorization: "Basic " + CE.b64(apiKey + ":" + "")
  },
  url: "https://" + siteName + "." + siteDomain + "/api/v2/orders",
  query: {
    limit: 1,
  },
  order: {
    url: " https://" + siteName + ".integrations." + siteDomain + "/api/order_enabled/tpmeta",
    auth: {
      "api_key": apiKey
    },
    query: {
      "integration_name": "hubspot"
    }
  }
};
done(params);