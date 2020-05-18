if(trigger.args.request.query["tag_name"]!==undefined){
  if(trigger.args.request.query["site_name"]!==undefined){
  done(true);
}
}
done(false);