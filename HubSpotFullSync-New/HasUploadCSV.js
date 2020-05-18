if(steps.UploadCSV.cb_status==="success") {
  done(true);
}else {
   steps.ConfigData.errorCode =  steps.UploadCSV.cb_error_code;
  done(false);
}