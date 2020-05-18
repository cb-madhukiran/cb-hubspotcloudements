let link="";

if(InputParams.integration_name === "activecampaign"){
 if(steps.getS3Link.response.body.third_party_configuration.config_json.cloudElements.chargebee.s3linkforFullsyncError !== undefined){
   
 link=steps.getS3Link.response.body.third_party_configuration.config_json.cloudElements.chargebee.s3linkforFullsyncError;
 }
}
else if(InputParams.integration_name === "hubspot"){
  link = steps.getS3Link.response.body.third_party_configuration.config_json.cloudElements.logs.fullSync.s3_FileId || "file_id is not generated";
}
 else{
     done({
     "status":"Failure",
     "errmsg":"Logs are not generated"
   });
 }

 done({
     "status":"success",
     "exception_log_s3_fileId":link
   });

