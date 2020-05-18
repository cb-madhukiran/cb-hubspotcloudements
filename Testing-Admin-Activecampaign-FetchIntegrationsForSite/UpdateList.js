let list = {
  integration_list:[]
};
if(steps.UpdateList !== undefined) {
  list = steps.UpdateList;
}
if(steps.loopOverInstances.entry.element.key !== "chargebeev2") {
  list.integration_list.push({
  id:steps.loopOverInstances.entry.id,
  name:steps.loopOverInstances.entry.name
});
}

done(list);