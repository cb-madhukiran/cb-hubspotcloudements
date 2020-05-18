 let type= trigger.args.request.query['integration_name'];
 let siteName = trigger.args.request.query['site_name'];
 let tagName = "stop";

done({
  siteName: siteName,
  type: type,
  tagName: tagName
});