if(steps.UpdateHubspotDealProperty.cb_status === "success"){
  done(true);
}

steps.InputParams.errorCode = "updating_deal_property_failed";
done(false);