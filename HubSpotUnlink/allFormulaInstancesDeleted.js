done(false);
if(steps.updateErrorLog_2 !== undefined){
  if(steps.updateErrorLog_2.errorLog.length === 0){
    done(true);
  }else{
    done(false);  
  }
}

done(true);