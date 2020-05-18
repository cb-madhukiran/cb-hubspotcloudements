let apiKey = steps.RequestParams.query['cb-api-key'];
let siteName = steps.RequestParams.query['cb-site-name'];
let siteDomain = steps.RequestParams.query['cb-domain'];
let integrationName = steps.RequestParams.query.type;
let refresh = steps.getFormulaDetails.refresh;
let executionid = steps.RequestParams.query.executionid;
let password = "";
let apiName = "third_party_configurations";
let params = {
    apiKey : apiKey,
    apiName : apiName,
    domain: siteDomain,
    siteName: siteName,
    password: password,
    type:integrationName,
    inputJson: {
        apiKey: apiKey,
        siteName: siteName,
        siteDomain: siteDomain,
        integrationName: integrationName,
        refresh:refresh,
        executionid:executionid
    },
    queryJson: {
        integration_name: integrationName
    },
    // gettoken is not used
    // headers: {
    //     "Elements-Formula-Instance-Id":steps.getFormulaDetails.gettoken.id
    //}
};

done(params);