if(steps.InputParams.body.cbprefix === undefined || steps.InputParams.body.siteDomain === undefined || steps.InputParams.body.siteName === undefined || steps.InputParams.body.apiKey === undefined ){
  done(false);
}else {
  done(true);
}