done(steps.GetCBOrder.response.code === 200 && steps.GetCBOrder.response.body.order_used === true &&  steps.CustomersParam.syncRulesOrders!== undefined && steps.CustomersParam.syncRulesOrders.sync==="true" &&  steps.CBData.subscription  !== undefined);