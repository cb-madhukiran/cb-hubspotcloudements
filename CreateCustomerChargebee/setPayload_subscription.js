let data_payload = {
  "plan_id": "cbdemo_hustle",
  "auto_collection": "off",
  "start_date": (Math.round((new Date().getTime()) / 1000)),
  "trial_end": 0,
  "invoice_immediately": true
};

let number = Math.floor(Math.random() * 4); //Returns a random number upto 4 (4 excluded)

switch(number){
  case 0:{ //Future
    data_payload.start_date = (Math.round((new Date().getTime()) / 1000) + 10000000),
    data_payload.trial_end = 0;
  }break;
  case 1:{ //Active
    data_payload.start_date = (Math.round((new Date().getTime()) / 1000));
    data_payload.trial_end = 0;
  }break;
  case 2:{ //In Trial
    data_payload.start_date = (Math.round((new Date().getTime()) / 1000));
    data_payload.trial_end = undefined;
  }break;
  case 3:{ //Non Renewing
    data_payload.start_date = (Math.round((new Date().getTime()) / 1000) - 1000000);
    data_payload.billing_cycles = 1;
    data_payload.trial_end = 0;
  }break;
  default:{ //Active
    data_payload.start_date = (Math.round((new Date().getTime()) / 1000));
    data_payload.trial_end = 0;
  }break;
}

let subPayload = {
  url: "/customers/"+steps.createCustomer.response.body.id+"/subscriptions",
  body: data_payload
}

done({
  payload: subPayload
});

