let list = {
  elements:[]
};
if(steps.ElementList !== undefined) {
  list = steps.ElementList;
}
  list.elements.push({
  id:steps.loopOverInstances.entry.id
});


done(list);