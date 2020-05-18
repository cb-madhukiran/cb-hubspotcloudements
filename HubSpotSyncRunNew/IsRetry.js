//done(steps.SyncRunNewInputParams.input.action==="retry");
if(steps.SyncRunNewInputParams.input.action==="retry")
{
  //steps.ConfigParams.deltaSync=true;
  done(true);
}

else{
  done(false)
}