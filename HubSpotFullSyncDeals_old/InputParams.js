let apiKey = trigger.args['cb-api-key'];
let siteName = trigger.args['cb-site-name'];
let type = trigger.args.type;
let siteDomain = trigger.args['cb-domain'];

let password = "";
let data = {
   input: {
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        type: type,
    },
    config: {
        url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_configurations",
        syncUrl: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_sync_details/retrieve_latest_sync",
        customFieldUrl: "https://" + siteName + "." + siteDomain + "/api/v2/custom_field_configs",
        auth: {
            Authorization: "Basic " + CE.b64(apiKey + ":" + password)
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
};

done(data);