let password = "";
let siteDomain = trigger.args.request.query["site_domain"];
let siteName =trigger.args.request.query['site_name'];
let integration_name=trigger.args.request.query['integration_name'];
let entity_id=trigger.args.request.query['entity_id'];

let params = {
  input: {
    entity_id: entity_id,
    siteName: siteName,
    siteDomain:siteDomain,
    type: integration_name,
    config :{
      url: "https://"+siteName+"."+siteDomain+"/api/v2/third_party_entity_mappings/retrieve",
      query:{
         integration_name:integration_name,
         entity_type:"customer",
         entity_id: entity_id
      },
      searchParams:{
    'tags[]': siteName
     }
    }
  }
};

done(params);