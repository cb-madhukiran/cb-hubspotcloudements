let apiKey = trigger.args.apiKey;
let siteName = trigger.args.siteName;
let type = trigger.args.type;
let siteDomain = trigger.args.siteDomain;

/*apiKey = "test_yMCJ1cd56cdam27iPBfXcdrhcdtIiAElwfF9";
siteName = "actkey-test";
type = "hubspot";
siteDomain = "predev3.in";*/

let password = "";
let headers = {
            Authorization: "Basic " + CE.b64(apiKey + ":" + password),
            api_key : apiKey
        };
        
let data = {
      apiKey:apiKey,
      siteName:siteName,
      type:type,
      siteDomain:siteDomain,
      cbconfig: {
     
        url: "https://" + siteName + ".integrations." + siteDomain + "/api/third_party_configurations/tpmeta",
        //url: "https://" + siteName + "." + siteDomain + "/api/v2/third_party_configurations",
        query: {
            "integration_name": type,
        },
        headers:headers,
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        type: type,
    },
};
done(data);