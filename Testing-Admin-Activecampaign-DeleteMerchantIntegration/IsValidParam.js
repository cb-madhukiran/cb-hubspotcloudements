
let siteName = trigger.args['site_name'];
let integrationName = trigger.args['integration_name'];

if((siteName !== undefined) && (integrationName !== undefined)){
  done(true);
}

done(false);