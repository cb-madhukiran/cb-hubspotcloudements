let apiKey= "test_yMCJ1cd56cdam27iPBfXcdrhcdtIiAElwfF9";
let siteName="actkey-test";
let siteDomain="predev3.in";
let password="";

let payload = {
  url: "https://"+siteName+"."+siteDomain+"/api/v2/customers/"+steps.loop.entry.customer.id+"/delete",
  headers:{
      Authorization: "Basic " + CE.b64(apiKey + ":" + password)
  }
};

done({
  payload: payload
});