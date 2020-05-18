let startIndex = 1;
let count = 14;

let customer_payload = {
  "account_credits": 0,
  "allow_direct_debit": true,
  "auto_collection": "off",
  "card_status": "no_card",
  "created_at": 0,
  "email": "qwerty@fake.co",
  "excess_payments": 0,
  "first_name": "QWERTY",
  "last_name": "ABCD",
  "object": "customer",
  "refundable_credits": 0,
  "taxability": "taxable"
};

let first_name = "KVal_Customer_FN_";
let last_name = "KVal_Customer_LN_";

let email = "kval_customer_";

let fname_array =[];
let lname_array=[];
let email_array=[];

let data_array=[];
let data;


for(var i=startIndex; i <= count; i++){
  data = {
    fname: first_name+i,
    lname: last_name+i,
    email: email+i+"@example.com",
    phone: Math.floor(100000000 + Math.random() * 900000000)
  };
  data_array.push(data);
}

done({
  data_array: data_array,
  customer_payload: customer_payload
});


