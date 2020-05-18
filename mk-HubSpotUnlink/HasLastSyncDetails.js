if(steps.LastSyncDetails.cb_status==="success") {
  if(steps.LastSyncDetails.data!== undefined && (steps.LastSyncDetails.data.status ==="running" || steps.LastSyncDetails.data.status ==="started")) {
     done(false);
  }else{
    done(true);
  }
}else {
  done(false);
}