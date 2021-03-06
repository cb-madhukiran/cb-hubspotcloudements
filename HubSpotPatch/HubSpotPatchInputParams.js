let url = trigger.args.url;
let query = trigger.args.query;
let body = trigger.args.body;
let apiKey = trigger.args.apiKey;
let headers = trigger.args.headers;
let siteDomain = trigger.args.siteDomain;
let siteName = trigger.args.siteName;
let type = trigger.args.type;


let intervel = [];
intervel.push(5000);
intervel.push(4000);
intervel.push(3000);
intervel.push(2000);
intervel.push(1000);

if (query === undefined) {
    query = {};
}
if (headers === undefined) {
    headers = {};
}
done({
    url: url,
    query: query,
    body:body,
    //intervel:[5000,10000,20000,40000,80000],
    intervel: intervel,
    retryCode: {
        429: true,
        502: true,
        504: true,
    },
    hardStop: {
        401: true,
        403: true,
        429: true,
        502: true,
        504: true,
    },
    headers: headers,
    delay: {
        url: "https://" + siteName + ".integrations." + siteDomain + "/api/ipaasdelay",
        query: {
            delay: 2000
        },
        headers: {
            "api_key": apiKey
        }
    }
});