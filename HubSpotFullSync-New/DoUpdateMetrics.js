let count = steps.SyncLog.syncLog.count;
if(count === undefined) {
  count = 0;
}else {
  count = Number(count);
  if(isNaN(count)){
    count = 0;
  }
}
done(count>0);