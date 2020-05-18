var flag = false;
if( steps.Customer.customer.length < steps.InputParams.batchSize) {
  flag  = true;
}


if( steps.SyncLog.syncLog.subscription && steps.SyncLog.syncLog.errorRecord && steps.SyncLog.syncLog.invoice &&  steps.SyncLog.syncLog.customer) {
  flag = false;
}

done(flag);
