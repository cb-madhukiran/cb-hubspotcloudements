let apiKey = trigger.args['apiKey'];
let siteName = trigger.args['siteName'];
let siteDomain = trigger.args['siteDomain'];
let password = trigger.args['password'];
let type = trigger.args['type'];

let customerData = (trigger.args['customerData'] !== undefined) ? trigger.args['customerData'] : null;

let chargebeeCurrencies = ["USD","EUR"];

let params = {
  apiKey: apiKey,
  siteName: siteName,
  siteDomain: siteDomain,
  type: type,
  customerData: customerData
};

let getTpConfigRequest = {
  url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_configurations",
  headers:{
    Authorization: "Basic " + CE.b64(apiKey + ":" + password)
  },
  query:{
    integration_name: "hubspot"
  }
};


done({
  params: params,
  getTpConfigRequest: getTpConfigRequest,
  chargebeeCurrencies: chargebeeCurrencies
});