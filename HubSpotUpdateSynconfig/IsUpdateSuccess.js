if (steps.updateConfigApi.cb_status === "success")
{
  if (steps.updateConfigApi.data['status']!== undefined)
  {
    if (steps.updateConfigApi.data.status === 'Error')
    {
      done(false);
    }
    
  }
  done(true);
}
else
{
  done(false);
}