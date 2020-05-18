 let siteName= trigger.args.request.query['site_name'];
 let tagName= trigger.args.request.query['tag_name'];

done({
  tagName:tagName,
  siteName:siteName
});