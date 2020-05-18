if(steps.ChargebeeGetTpIntegSync.cb_status == "success")
  done(true);
else {
  if(steps.ChargebeeGetTpIntegSync.cb_status_code === 409) {
    done(true);
  }else {
     done(false);
  }
}
 