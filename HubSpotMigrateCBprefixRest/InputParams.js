let apiKey = trigger.args.request.query['apiKey'];
let siteName = trigger.args.request.query['siteName'];
let siteDomain = trigger.args.request.query['siteDomain'];
//let cbprefix = trigger.args.request.query.cbprefix;
let cbprefix ="cb_";
let password = "";
let type = "hubspot";
let formulaId = "417160";
let param = {
  url: "/formulas/instances/" + formulaId + "/executions",
  body: {
    apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: type,
    debugLoggingEnabled: true,
    cbprefix:cbprefix
  }
};
done(param);

