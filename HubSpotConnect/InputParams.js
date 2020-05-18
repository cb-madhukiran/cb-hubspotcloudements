let apiKey = trigger.args.request.query['cb-api-key'];
let siteName = trigger.args.request.query['cb-site-name'];
let integrationName = trigger.args.request.query.type;
let siteDomain = trigger.args.request.query['cb-domain'];
let chargebeeElement = trigger.args.request.query.chargebeeElement;
let thirdPartyElement = trigger.args.request.query.thirdPartyElement;

let clientInfo = JSON.parse(trigger.args.request.query.client_info);

let clientId = clientInfo.client_id;
let clientSecret = clientInfo.client_secret;
let redirectUrl = clientInfo.redirect_url;
let scope = clientInfo.scope+"%20content";

let instanceName = siteName+ siteDomain + "-chargebee";

let params = {
    input: {
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        type: integrationName,
        chargebeeElement: chargebeeElement,
        thirdPartyElement: thirdPartyElement,
        clientId: clientId,
        clientSecret: clientSecret,
        redirectUrl: redirectUrl,
        scope: scope
    },
    url: "https://" + siteName + ".integrations." + siteDomain + "/integrations/update_tp_integ_conf",
    headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
    },
    body: {
        site_name: siteName,
        api_key: apiKey,
        integration_name: integrationName,
        config_json: {
            cloudElements: {
                setup: {
                    chargebeeElement: chargebeeElement,
                    thirdPartyElement: thirdPartyElement,
                    clientId: clientId,
                    clientSecret: clientSecret,
                    redirectUrl: redirectUrl,
                    scope: scope
                }
            },
            new_sub_step : "connect"
        }
    },
    chargebee: {
        elementId: chargebeeElement,
        searchParam: {
            searchText: instanceName,
            'tags[]': instanceName,
            hydrate: false,
            pageSize: 1
        },
        body: {
            name: instanceName,
            configuration: {
                username: apiKey,
                site: siteName+"."+siteDomain,
                password: ""
            },
            tags: [instanceName, siteName]
        }
    }
};
done(params);