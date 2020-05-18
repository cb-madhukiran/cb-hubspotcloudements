let params = {
  url:"/customers",
  query: {
 	   pageSize: 30
  },
  apiKey: steps.InputParams.apiKey,
  siteName: steps.InputParams.siteName,
  siteDomain: steps.InputParams.siteDomain,
  type: "hubspot",
  "debugLoggingEnabled": true,
};

if(steps.setOffset !== undefined) {
  params.query.offset = steps.getCustomers.data.next_offset;
}

done(params);