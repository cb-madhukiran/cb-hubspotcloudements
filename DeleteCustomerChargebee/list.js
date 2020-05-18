let list =[];

if (steps.list !== undefined){
  list = steps.list.list;
}

list = list.concat(steps.getcustomers.response.body.list);

done({list: list});