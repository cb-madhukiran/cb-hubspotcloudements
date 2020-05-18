if(steps.UpdateHubspotContactPropertySubscription.cb_status === "success"){
  done(true);
}

steps.InputParams.errorCode = "updating_contact_property_on_subscription_group_failed";

done(false);