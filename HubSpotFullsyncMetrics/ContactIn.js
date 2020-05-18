let data = {
  list:[],
};
if(steps.HubSpotGetCAS.data !==undefined && steps.HubSpotGetCAS.data!==undefined && steps.HubSpotGetCAS.data.results !==undefined && steps.HubSpotGetCAS.data.results.length>0){
  let result = steps.HubSpotGetCAS.data.results;
  for(var i=0;i<result.length;i++){
    if(steps.ContactList.map[result[i]] === undefined) {
      data.list.push("https://api.hubapi.com/contacts/v1/contact/vid/"+result[i]+"/profile");
    }
  }
}
done(data);
