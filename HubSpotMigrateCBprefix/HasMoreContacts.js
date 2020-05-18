if(steps.GetContacts.data !== undefined && steps.GetContacts.data["has-more"] !== undefined && steps.GetContacts.data["has-more"]) {
  steps.ContactParam.query.vidOffset = steps.GetContacts.data["vid-offset"];
  //done(true);
  done(false);
}else {
  done(false);
}