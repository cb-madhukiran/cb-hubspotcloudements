let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let siteDomain = trigger.args.request.query['cb-domain'];
let hubspotGroup = trigger.args.request.query.hubspotGroup;
let hubspotProperty = trigger.args.request.query.hubspotProperty;
let password = "";
let type = "hubspot";
let formulaId = "427688";
let param = {
  url: "/formulas/instances/" + formulaId + "/executions",
  body: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: type,
    debugLoggingEnabled: true
  }
};
done(param);

