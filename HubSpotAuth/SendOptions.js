let res;

if(trigger.args.request.query.error !== undefined){
  res = {
      "cards": [{
          "id": "check2",
          "card": {
              "type": "ACTION",
              "heading": "Error:  Authentication Failed",
              "listContent": [
                  trigger.args.request.query.error
              ],
              "icon": "WARNING"
          }
      }]
  };
  done({
    statusCode: 401,
    res: res
  });
}


let code = trigger.args.request.query.code;
let siteName = trigger.args.request.query.state;
let redirect_uri = trigger.args.request.query.redirect_uri;
let client_info = JSON.parse(trigger.args.request.query.client_info);

let client_id = client_info.client_id;
let client_secret = client_info.client_secret;


res = {
    url: 'https://api.hubapi.com/oauth/v1/token',
    method:"POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    form: {
      'grant_type' : 'authorization_code',
      'code' : code,
      'client_id': client_id,
      'client_secret':client_secret,
      'redirect_uri' : redirect_uri
    },
    "redirect_uri": redirect_uri,
    "site_name": siteName,
    urlParams:{}
  };

done({
  statusCode: 200,
  result: res
});

  