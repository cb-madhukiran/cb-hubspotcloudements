if(steps.ChargebeeGetTpData.data.next_offset !== undefined) {
  if(steps.SyncLog.tpOffset.next_offset !== steps.ChargebeeGetTpData.data.next_offset) {
    steps.SyncLog.tpOffset.next_offset = steps.ChargebeeGetTpData.data.next_offset;
  }else {
     steps.SyncLog.tpOffset = {};
  }
}else {
  steps.SyncLog.tpOffset = {};
}
done(steps.SyncLog.tpOffset.next_offset!==undefined);