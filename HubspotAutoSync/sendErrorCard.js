let message = "Auto Sync Trigger Failed. Invalid Parameters Specified.";

if((steps.GetExecutionStatus2 !== undefined) && (steps.GetExecutionStatus2.response.code !== 200)){
  message = "Error : Failed to fetch execution status.";
}

if((steps.retrieveSyncDetails !== undefined) && (steps.retrieveSyncDetails.response.code !== 200)){
  message = "Error : Failed to Retrieve Third Party Sync Details .";
}

if((steps.updateSyncStatus !== undefined) && (steps.updateSyncStatus.response.code !== 200)){
  message = "Error : Failed to Update Third Party Sync Details .";
}

if((steps.UpdateSyncStatus_Running !== undefined) && (steps.UpdateSyncStatus_Running.response.code !== 200)){
  message = "Error : Failed to Update Third Party Sync Details .";
}

if((steps.UpdateSyncStatus_Failed !== undefined) && (steps.UpdateSyncStatus_Failed.response.code !== 200)){
  message = "Error : Failed to Update Third Party Sync Details .";
}



done({
  statusCode: 400,
  message: message
});