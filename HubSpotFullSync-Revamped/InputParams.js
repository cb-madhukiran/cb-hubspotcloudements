let apiKey = trigger.args['cb-api-key'];
let siteName = trigger.args['cb-site-name'];
let type = trigger.args.type;
let siteDomain = trigger.args['cb-domain'];
let autoSync = trigger.args.autoSync;
let callAgain = trigger.args.callAgain;
let initialSync = trigger.args.initialSync;
let deltaSync = trigger.args.deltaSync;
if (callAgain === undefined) {
    callAgain = false;
}

if (initialSync === undefined) {
    initialSync = false;
}
if (autoSync === undefined) {
    autoSync = false;
}

let password = "";
let headers = {
            Authorization: "Basic " + CE.b64(apiKey + ":" + password)
        };
let params = {
    input: {
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        autoSync: autoSync,
        type: type,
        callAgain: callAgain,
        initialSync: initialSync,
        deltaSync:deltaSync,
        syncDeal: false,
        cbheaders:headers
    },
    batchLimit: 25,
    batchSize: 60,
    cbconfig: {
        url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_configurations",
        query: {
            "integration_name": type,
        },
        headers:headers,
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        type: type,
    },
    updateconfig : {
    url: "https://" + siteName + ".integrations." + siteDomain + "/integrations/update_tp_integ_conf",
     headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
     body: {
            integration_name: type,
            site_name: siteName,
            api_key: apiKey,
        },
    apiKey: apiKey,
    siteName: siteName,
    siteDomain: siteDomain,
    type: type,
  },
    lastsync:{
        url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_sync_details/retrieve_latest_sync",
        headers: headers,
        query: {
            'third_party_configuration[integration_name]': type
        },
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        type: type,
    },
    next: {
        url: "/formulas/instances/" + info.formulaInstanceId + "/executions",
        body: {
            "cb-api-key": apiKey,
            "cb-site-name": siteName,
            "type": type,
            "cb-domain": siteDomain,
            "autoSync": autoSync,
            "debugLoggingEnabled": true,
            "callAgain": true,
            "initialSync": initialSync
        }
    },   
    delay: {
        url: "https://" + siteName + ".integrations." + siteDomain + "/api/ipaasdelay?delay=5000",
        headers: {
            "api_key": apiKey
        }
    },
    delay2: {
        url: "https://" + siteName + ".integrations." + siteDomain + "/api/ipaasdelay?delay=2000",
        headers: {
            "api_key": apiKey
        }
    }
};
if (initialSync) {
    params.batchSize = 9;
    params.batchLimit = 10;
}
done(params);