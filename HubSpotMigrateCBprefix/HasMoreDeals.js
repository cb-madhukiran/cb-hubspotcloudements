if(steps.GetDeals.data !== undefined && steps.GetDeals.data["has-more"] !== undefined && steps.GetDeals.data["has-more"]) {
  steps.DealParam.query.offset = steps.GetDeals.data["offset"];
  //done(true);
  done(false);
}else {
  done(false);
}
