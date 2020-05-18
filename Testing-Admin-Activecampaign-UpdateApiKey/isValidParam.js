if(trigger.args.request.query['site_name']!== undefined){
  if(trigger.args.request.query['api_key'] !== undefined){
  done(true);
}
} 



done(false);