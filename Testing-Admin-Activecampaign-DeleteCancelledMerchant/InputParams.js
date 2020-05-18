let siteName = trigger.args.request.query['site_name'];
let searchParam = {
      'tags[]': siteName,
      pageSize: 200
}

if(steps.ElementsNextPageToken !== undefined) {
  searchParam.nextPage = steps.GetAllInstance.response.headers['Elements-Next-Page-Token'];
}
done(searchParam);