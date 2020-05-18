let apiKey = trigger.args['cb-api-key'];
let siteName = trigger.args['cb-site-name'];
let type = trigger.args.type;
let siteDomain = trigger.args['cb-domain'];

let param = {
  
  url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_configurations",
        query: {
            "integration_name": type,
        },
        headers: {
            Authorization: "Basic " + CE.b64(apiKey + ":" + "")
        },
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        type: type
  
}
done(param);