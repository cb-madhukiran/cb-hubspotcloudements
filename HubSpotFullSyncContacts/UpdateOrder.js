steps.CBData.order = {};
if(steps.GetOrderBefore.response.body!== undefined && steps.GetOrderBefore.response.body.list !== undefined && steps.GetOrderBefore.response.body.list.length > 0 ) {
  let order = steps.GetOrderBefore.response.body.list[0].order;
  
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

if(steps.GetOrderAfter.response.body !== undefined && steps.GetOrderAfter.response.body.list !== undefined && steps.GetOrderAfter.response.body.list.length > 0 ) {
  let order = steps.GetOrderAfter.response.body.list[0].order;
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
  
  
}