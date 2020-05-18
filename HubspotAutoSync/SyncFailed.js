
let message = "Sync Formula Failed";

done({
  statusCode: 200,
    status : "Failed",
     execution_id : steps.AutoSyncInputParams.params.input.executionId.toString(),
    message : message
});