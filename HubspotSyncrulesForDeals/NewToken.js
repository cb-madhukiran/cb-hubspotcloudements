let data = {
  url:"/formulas/instances/426545/executions",
  bdy:steps.GetCBConfigApi.data.third_party_configuration.config_json.cloudElements.thirdParty
};
data.bdy.debugLoggingEnabled = true;
data.bdy.cbDomain =  steps.DealInputParam["cb-domain"];
data.bdy.cbSiteName =  steps.DealInputParam["cb-site-name"];
data.bdy.type =  steps.DealInputParam.type;
data.bdy.cbApiKey =  steps.DealInputParam["cb-api-key"];

done(data);