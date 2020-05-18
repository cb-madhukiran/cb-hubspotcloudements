let siteName = trigger.args['site_name'];
let integrationName = trigger.args['integration_name'];


let searchTag = siteName + '-' + integrationName;


let searchParam = {
      'tags[]': searchTag,
      pageSize: 200
};

if(steps.ElementsNextPageToken !== undefined) {
  searchParam.nextPage = steps.GetAllInstance.response.headers['Elements-Next-Page-Token'];
}
done(searchParam);