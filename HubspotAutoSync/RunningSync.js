let execution_id = steps.ChargebeeGetIntegSync.data.third_party_sync_detail.context.excecutionId;

let result =  {
  message: "Can not create new sync as a sync is already running." ,
  status: "pending",
  executionId: execution_id.toString()
};

done({
  statusCode: 200,
  execution_id: result.executionId ,
  status:result.status,
  message:result.message
});