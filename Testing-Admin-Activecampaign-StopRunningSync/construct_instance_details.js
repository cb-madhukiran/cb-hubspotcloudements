let type = steps.InputParams.type ;
let siteName = steps.InputParams.siteName;
let tag = siteName +'-'+ type;

let re = {
  body :{
  "tags": [steps.InputParams.tagName]
},
searchParams:{
    'tags[]': tag
  }

};
done(re);