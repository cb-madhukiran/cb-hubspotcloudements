/*let params = {
  url:"/customers",
  query: {
 	   pageSize: 30
  },
  apiKey: "test_yMCJ1cd56cdam27iPBfXcdrhcdtIiAElwfF9",
  siteName: "predev3.in",
  siteDomain: "actkey-test",
  type: "hubspot",
  "debugLoggingEnabled": true,
};

done(params);*/

let dd=["kk","mm","nn"];
let val="mmm";

function getNumber(data) {
if(dd.indexOf(data)>-1)
done("found");
else
done("notfound");
}

getNumber(val);
