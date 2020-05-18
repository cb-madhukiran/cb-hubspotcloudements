let idList = steps.executionParams ? steps.executionParams.executionIds : '';
let output = {};

if(idList.length > 0){
  output = {
    "running_sync_list": idList
  };
}else{
  output = {
    "status" : "Failure",
	  "errmsg" : "No executions found"
  };
}

done(output);