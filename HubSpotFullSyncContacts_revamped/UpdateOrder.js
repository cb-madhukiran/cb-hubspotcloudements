
steps.CBData.order = { before:{}, after:{}};
if(steps.GetOrderBeforeCBGet!== undefined ) {
  let order = steps.GetOrderBeforeCBGet;
  
 steps.CBData.order.before = {
    order_date : order.order_date,
    document_number : order.document_number,
    total : order.total,
    status: order.status,
    amount_paid:order.amount_paid,
    paid_on : order.paid_on,
    created_at : order.created_at,
    refundable_credits_issued : order.refundable_credits_issued,
    currency_code : order.currency_code,
    sub_total : order.sub_total,
    shipping_date : order.shipping_date,
    subscription_id : order.subscription_id,
    base_currency_code : order.base_currency_code,
    payment_status : order.payment_status,
    tax : order.tax,
    created_by : order.created_by,
    deleted : order.deleted,
    resource_version : order.resource_version,
    billing_address : order.billing_address,
    invoice_id : order.invoice_id,
    exchange_rate : order.exchange_rate,
    price_type : order.price_type,
    order_type : order.order_type,
    is_gifted : order.is_gifted,
    refundable_credits : order.refundable_credits,
    rounding_adjustement : order.rounding_adjustement,
    updated_at : order.updated_at,
    linked_credit_notes : order.linked_credit_notes,
    object : order.object,
amount_adjusted : order.amount_adjusted,
customer_id : order.customer_id,
gift_id : order.gift_id,

status_update_at:order.status_update_at,
shipping_cut_off_date:order.shipping_cut_off_date,
cancelled_at:order.cancelled_at,
shipment_carrier:order.shipment_carrier,
cancellation_reason:order.cancellation_reason,
tracking_id:order.tracking_id,
batch_id:order.batch_id,
discount:order.discount,
shipped_at:order.shipped_at,
delivered_at:order.delivered_at,
Invoice_round_off_amount:order.invoice_round_off_amount,
fulfillment_status:order.fulfillment_status,
reference_id:order.reference_id

  };
  let order_line_items = order.order_line_items;
  if(order_line_items !== undefined && order_line_items.length > 0) {
    for(var i=0;i<order_line_items.length;i++){
      if(order_line_items[i].entity_type !==undefined && order_line_items[i].entity_type === "plan") {
        steps.CBData.order.before.sku = order_line_items[i].sku;
        
      }
    }
  }
  
  
}

if(steps.GetOrderAfterCBGet !== undefined ) {
  let order = steps.GetOrderAfterCBGet;
   steps.CBData.order.after = {
    order_date : order.order_date,
    document_number : order.document_number,
    total : order.total,
    status: order.status,
    amount_paid:order.amount_paid,
    paid_on : order.paid_on,
    created_at : order.created_at,
    refundable_credits_issued : order.refundable_credits_issued,
    currency_code : order.currency_code,
    sub_total : order.sub_total,
    shipping_date : order.shipping_date,
    subscription_id : order.subscription_id,
    base_currency_code : order.base_currency_code,
    payment_status : order.payment_status,
    tax : order.tax,
    created_by : order.created_by,
    deleted : order.deleted,
    resource_version : order.resource_version,
    billing_address : order.billing_address,
    invoice_id : order.invoice_id,
    exchange_rate : order.exchange_rate,
    price_type : order.price_type,
    order_type : order.order_type,
    is_gifted : order.is_gifted,
    refundable_credits : order.refundable_credits,
    rounding_adjustement : order.rounding_adjustement,
    updated_at : order.updated_at,
    linked_credit_notes : order.linked_credit_notes,
    object : order.object,
amount_adjusted : order.amount_adjusted,
customer_id : order.customer_id,
gift_id : order.gift_id,

status_update_at:order.status_update_at,
shipping_cut_off_date:order.shipping_cut_off_date,
cancelled_at:order.cancelled_at,
shipment_carrier:order.shipment_carrier,
cancellation_reason:order.cancellation_reason,
tracking_id:order.tracking_id,
batch_id:order.batch_id,
discount:order.discount,
shipped_at:order.shipped_at,
delivered_at:order.delivered_at,
Invoice_round_off_amount:order.invoice_round_off_amount,
fulfillment_status:order.fulfillment_status,
reference_id:order.reference_id

  };
  let order_line_items = order.order_line_items;
  if(order_line_items !== undefined && order_line_items.length > 0) {
    for(var i=0;i<order_line_items.length;i++){
      if(order_line_items[i].entity_type !==undefined && order_line_items[i].entity_type === "plan") {
         steps.CBData.order.after.sku = order_line_items[i].sku;
        
      }
    }
  }
  
  
}
/*steps.CBData.order = {};
if(steps.old_GetOrderBeforeCBGet.data!== undefined && steps.old_GetOrderBeforeCBGet.data.list !== undefined && steps.old_GetOrderBeforeCBGet.data.list.length > 0 ) {
  let order = steps.old_GetOrderBeforeCBGet.data.list[0].order;
  
 steps.CBData.order.before = {
    order_date : order.order_date,
    total : order.total,
    status: order.status,
  };
  let order_line_items = order.order_line_items;
  if(order_line_items !== undefined && order_line_items.length > 0) {
    for(var i=0;i<order_line_items.length;i++){
      if(order_line_items[i].entity_type !==undefined && order_line_items[i].entity_type === "plan") {
        steps.CBData.order.before.sku = order_line_items[i].sku;
        
      }
    }
  }
  
  
}

if(steps.old_GetOrderAfterCBGet.data !== undefined && steps.old_GetOrderAfterCBGet.data.list !== undefined && steps.old_GetOrderAfterCBGet.data.list.length > 0 ) {
  let order = steps.old_GetOrderAfterCBGet.data.list[0].order;
   steps.CBData.order.after = {
    order_date : order.order_date,
    total : order.total,
    status: order.status,
  };
  let order_line_items = order.order_line_items;
  if(order_line_items !== undefined && order_line_items.length > 0) {
    for(var i=0;i<order_line_items.length;i++){
      if(order_line_items[i].entity_type !==undefined && order_line_items[i].entity_type === "plan") {
         steps.CBData.order.after.sku = order_line_items[i].sku;
        
      }
    }
  }
  
  
}*/

