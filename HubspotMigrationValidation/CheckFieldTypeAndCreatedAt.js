let prop = steps.LoopOverFieldTypes.entry;

if(prop.fieldType !== "text" && prop.fieldType !== "date"){
  done(false);
}
else if(new Date(prop.createdAt) > new Date('1567382400000')){
  done(false);
}
else
  done(true);
