let data = {
  data: [],
  props: []
};

if (steps.GetCompanies.data !== undefined && steps.GetCompanies.data.companies !== undefined && steps.GetCompanies.data.companies.length > 0) {
  for (var i = 0; i < steps.GetCompanies.data.companies.length; i++) {
    let cp = steps.GetCompanies.data.companies[i];
    if (cp.properties !== undefined && cp.properties.cb_totalnoofsubscription !== undefined && cp.properties.cb_totalnoofsubscription.value !== undefined) {
      data.props.push({
        headers : steps.UpdateToken.headers,
  url : "https://api.hubapi.com/companies/v2/companies/" + cp.companyId,
  siteName : steps.InputParams.siteName,
  siteDomain : steps.InputParams.siteDomain,
  apiKey : steps.InputParams.apiKey,
  type : steps.InputParams.type

      });
    }
  }
}

done(data);