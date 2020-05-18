let code = steps.fetch_details.response.code;
if(code === 502 || code === 504){
  done({
  "status":"Failure",
  "errmsg":InputParams.input.siteDomain + "gateway error"
});
}else{
done({
  "status":"Failure",
  "errmsg":"Invalid enity_id"
});
}