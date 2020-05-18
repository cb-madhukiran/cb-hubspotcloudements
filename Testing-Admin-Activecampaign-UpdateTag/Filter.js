let tags = steps.LoopOverInstances.entry.tags || null;

if(tags.indexOf(steps.InputParams.siteName) > -1){
  done(true);
}

done(false);