let query = {
  limit : 100
};

if(steps.query !== undefined){
  query.offset = steps.getcustomers.response.body.next_offset;
}

done({query: query});