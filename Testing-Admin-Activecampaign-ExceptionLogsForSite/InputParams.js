let site_name=trigger.args.request.query["site_name"];
let integration_name=trigger.args.request.query["integration_name"];
let siteDomain=trigger.args.request.query["site_domain"];

done({"site_name":site_name,
  "integration_name":integration_name,
  "siteDomain": siteDomain
});