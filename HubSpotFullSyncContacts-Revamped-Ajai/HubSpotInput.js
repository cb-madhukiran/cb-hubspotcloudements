let customer = steps.CBData.customer;

let data = {
  op : steps.CBData.hubspot,
    inputs :{},
    tp :{
      integration_name: steps.ContactInputParams.input.type,
      entity_id: customer.id,
      entity_type: "customer",
      status: "synced"
      }
};
done(data);