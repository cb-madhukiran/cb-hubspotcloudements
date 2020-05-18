
let apiKey = trigger.args['cb-api-key'];
let siteName = trigger.args['cb-site-name'];
let type = trigger.args.type;
let siteDomain = trigger.args['cb-domain'];

let password = "";
let params = {
    input: {
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        type: type
    },
    config: {
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        type: type,
        //url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_configurations",
        url: "https://" + siteName + ".integrations." + siteDomain + "/api/third_party_configurations/tpmeta",
        headers: {
            Authorization: "Basic " + CE.b64(apiKey + ":" + password),
            api_key : apiKey
        },
        query: {
            integration_name: type
        }
    },
    update: {
        url: "https://" + siteName + ".integrations." + siteDomain + "/integrations/update_tp_integ_conf",
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        body: {
            integration_name: type,
            site_name: siteName,
            api_key: apiKey
        }
    },
    delay :{
      url : "https://" + siteName + ".integrations." + siteDomain + "/api/ipaasdelay?delay=5000",
      headers: {
        "api_key":apiKey
      }
    }
};
done(params);