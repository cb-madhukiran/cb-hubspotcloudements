 let type= trigger.args.request.query['integration_name'];
 let tagName = "stop"; 

done({
  tagName:tagName,
  type:type
});