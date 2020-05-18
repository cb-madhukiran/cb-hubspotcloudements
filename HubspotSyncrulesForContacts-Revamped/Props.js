let cloud = "https://staging.cloud-elements.com";
let props  = {
  saveconfig: {
   url: cloud+"/elements/api-v2/hubspot/saveconfig",
   id:"411947"
  },
    dynamicToggle: {
   url: cloud+"/elements/api-v2/hubspot/stagestoggle",
   id:"435337"
  }
};
done(props);