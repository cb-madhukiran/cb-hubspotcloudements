let list = {
  integration_list : []
}

if(steps.UpdateList !== undefined) {
  list = steps.UpdateList;
}
done(list);