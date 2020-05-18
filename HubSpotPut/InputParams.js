let url = trigger.args.url;
let body = trigger.args.body;
let apiKey = trigger.args.apiKey;
let headers = trigger.args.headers;

if(body === undefined) {
  body = {};
}
if(headers === undefined) {
  headers = {};
}
done({
  url:url,
  body:body,
  intervel:[5000,10000,20000,40000,80000],
  headers:headers,
     delay :{
      url : "https://apps.integrations.chargebee.com/api/ipaasdelay",
      query:{
        delay:2000
      },
      headers: {
        "api_key":apiKey
      }
    }
});