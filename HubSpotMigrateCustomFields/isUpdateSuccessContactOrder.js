if(steps.UpdateHubspotContactPropertyOrder.cb_status === "success"){
  done(true);
}

 steps.InputParams.errorCode = "updating_contact_property_on_order_group_failed";

done(false);