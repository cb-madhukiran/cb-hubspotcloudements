let data = {
    list: [],
};
let custList = steps.GetcustomerList.data.list;
if (custList !== undefined && custList.length > 0) {
    data.flag = true;
    for (var i = 0; i < custList.length; i++) {
        let id = "";
        let cust = "";
        if (steps.SyncParam.sync === "subscription") {
            cust = custList[i].customer;
            id = cust.id;

        } else if (steps.SyncParam.sync === "errorRecord") {
            id = custList[i].third_party_entity_mapping.entity_id;
        } else if (steps.SyncParam.sync === "invoice") {
            id = custList[i].invoice.customer_id;
        } else if (steps.SyncParam.sync === "customer") {
            cust = custList[i].customer;
            id = cust.id;

        }
        if(steps.Customer.customer.map[id] === undefined) {
          if(steps.SyncParam.sync === "errorRecord" || steps.SyncParam.sync === "invoice") {
            data.list.push(encodeURIComponent(id));
          }else {
             steps.Customer.customer.push(cust);
          }
          steps.Customer.customer.map[id] = id;
        }
        
    }
}
if(data.list.length >0) {
  let cstRecord = {
url: "https://"+steps.InputParams.input.siteName+"."+steps.InputParams.input.siteDomain+"/api/v2/customers",
    headers: steps.InputParams.input.cbheaders,
    query:{
        limit:steps.InputParams.batchLimit,
        "id[in]":JSON.stringify(data.list)
      },
    apiKey: steps.InputParams.input.apiKey,
    siteName: steps.InputParams.input.siteName,
    siteDomain: steps.InputParams.input.siteDomain,
    type: steps.InputParams.input.type,
  };
  data.cstRecord = cstRecord;
}
var clear = true;
if (steps.GetcustomerList.data.next_offset !== undefined) {
    if (steps.SyncParam.input.query.offset !== steps.GetcustomerList.data.next_offset) {
        steps.SyncLog.syncLog.next_offset = steps.GetcustomerList.data.next_offset;
        clear = false;
    }
}

if (clear) {

    steps.SyncLog.syncLog.next_offset = undefined;
    if (steps.SyncParam.sync === "subscription") {
        steps.SyncLog.syncLog.subscription = true;
    } else if (steps.SyncParam.sync === "errorRecord") {
        steps.SyncLog.syncLog.errorRecord = true;
    }  else if (steps.SyncParam.sync === "invoice") {
        steps.SyncLog.syncLog.invoice = true;
    }else if (steps.SyncParam.sync === "customer") {
        steps.SyncLog.syncLog.customer = true;
    }
}

done(data);