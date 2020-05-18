if(trigger.args.request.query['site_name'] ===undefined){
  done(false);
}
if(trigger.args.request.query['site_name']===""){
  done(false);
}
else{
  done(true);
}