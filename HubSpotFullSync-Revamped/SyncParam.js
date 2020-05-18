let config = {
   sync : "done",
};

if(steps.SyncLog.syncLog.errorRecord===false) {
  config = steps.SyncLog.errorRecord;
}else if (steps.SyncLog.syncLog.subscription===false) {
  config = steps.SyncLog.subscription;
}else if (steps.SyncLog.syncLog.invoice===false) {
  config = steps.SyncLog.invoice;
}else if (steps.SyncLog.syncLog.customer===false) {
  config = steps.SyncLog.customer;
}
if(steps.SyncLog.syncLog.next_offset !== undefined && config.input !== undefined
  && config.input.query !== undefined ) {
  
  config.input.query.offset = steps.SyncLog.syncLog.next_offset;
}
if(steps.InputParams.input.initialSync && steps.InputParams.input.callAgain) {
  config = {
   sync : "done",
};
steps.SyncLog.syncLog.customer = true;
}

done(config);