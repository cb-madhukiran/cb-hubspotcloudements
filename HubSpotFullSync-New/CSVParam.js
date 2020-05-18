let apiKey = steps.InputParams.input.apiKey;
let siteDomain = steps.InputParams.input.siteDomain;
let siteName = steps.InputParams.input.siteName;
let type = steps.InputParams.input.type;
let body={
    tpOffset:{
      
    },
    input: {
    url:  "https://" + siteName + ".integrations." + siteDomain + "/integrations/api/file_upload",
    headers: steps.InputParams.input.cbheaders,
    query: {
     "api_key":apiKey,
        "site_name":siteName,
        "integ_name":type,
        "file_type":"csv",
        "log_type" : "Validation"
    },
    body:{
            file_content: "Id"+","+"Error Description\n"
      },
    apiKey: steps.InputParams.input.apiKey,
    siteName: steps.InputParams.input.siteName,
    siteDomain: steps.InputParams.input.siteDomain,
    type: steps.InputParams.input.type,
  }

      
  
};
done(body);