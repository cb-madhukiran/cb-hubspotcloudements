if(steps.GetCompanies.data !== undefined && steps.GetCompanies.data["has-more"] !== undefined && steps.GetCompanies.data["has-more"]) {
  steps.CompanyParam.query.offset = steps.GetCompanies.data["offset"];
  //done(true);
  done(false);
}else {
  done(false);
}