 let apiKey = trigger.args['apiKey'];
 let siteName = trigger.args['siteName'];
 let siteDomain = trigger.args['siteDomain'];
 let type = trigger.args['type'];
 
 let MappedFieldChargebee = (trigger.args['MappedFieldChargebee'] !== undefined) ? trigger.args['MappedFieldChargebee'] : null;

let params = {
  input : {
    apiKey : apiKey,
    siteName : siteName,
    siteDomain : siteDomain,
    type : type
  },
   result :{
    noEmail: 0,
    noSubscription: 0,
    errorCSV: [],
    msg :""
  },
  MappedFieldChargebee: MappedFieldChargebee
};
done(params);