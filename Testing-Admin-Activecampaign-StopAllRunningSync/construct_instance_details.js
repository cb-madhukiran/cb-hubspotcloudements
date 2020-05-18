let re = {
  body :{
  "tags": [steps.InputParams.tagName]
},
searchParams:{
    'tags[]': steps.InputParams.type
  }

};
done(re);