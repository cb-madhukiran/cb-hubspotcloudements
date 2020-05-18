let payload = steps.InputParams.customer_payload;

payload.first_name = steps.loopOverData.entry.fname;
payload.last_name = steps.loopOverData.entry.lname;
payload.email = steps.loopOverData.entry.email;
payload.phone = steps.loopOverData.entry.phone;

let requestConfig = {
  url: "/customers",
  body: payload
};


done({
  requestConfig: requestConfig
});