if(steps.UpdateHubspotCompanyProperty.cb_status === "success"){
  done(true);
}

steps.InputParams.errorCode = "updating_company_property_failed";
done(false);